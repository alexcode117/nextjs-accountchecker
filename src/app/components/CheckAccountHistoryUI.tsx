"use client";

import { useState } from "react";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleString();
}

function OperationCard({ item }: { item: any }) {
  if (item.error) {
    return <div className="bg-red-100 text-red-700 rounded p-3">{item.error}</div>;
  }
  const [type, data] = item.op;
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg shadow p-4 flex flex-col gap-2 border-l-4 border-blue-500 w-full" style={{ minWidth: 0 }}>
      <div className="flex items-center gap-2">
        <span className="font-bold text-blue-700 dark:text-blue-300 uppercase text-xs tracking-wider">{type}</span>
        <span className="text-xs text-zinc-400">Bloque #{item.block}</span>
        <span className="text-xs text-zinc-400 ml-auto">{formatDate(item.timestamp)}</span>
      </div>
      <div className="text-sm">
        {type === "transfer" && (
          <>
            <div><span className="font-semibold">De:</span> {data.from}</div>
            <div><span className="font-semibold">Para:</span> {data.to}</div>
            <div><span className="font-semibold">Monto:</span> <span className="text-green-600 dark:text-green-400">{data.amount}</span></div>
            {data.memo && <div><span className="font-semibold">Memo:</span> {data.memo}</div>}
          </>
        )}
        {type === "vote" && (
          <>
            <div><span className="font-semibold">Votante:</span> {data.voter}</div>
            <div><span className="font-semibold">Autor:</span> {data.author}</div>
            <div><span className="font-semibold">Post:</span> {data.permlink}</div>
            <div><span className="font-semibold">Peso:</span> {data.weight / 100}%</div>
          </>
        )}
        {type === "comment" && (
          <>
            <div><span className="font-semibold">Título:</span> {data.title || "--sin título--"}</div>
            <div><span className="font-semibold">En respuesta a:</span> {data.parent_author}/{data.parent_permlink}</div>
          </>
        )}
        {type !== "transfer" && type !== "vote" && type !== "comment" && (
          <pre className="text-xs bg-zinc-100 dark:bg-zinc-900 rounded p-2 mt-2 overflow-x-auto w-full" style={{ minWidth: 0 }}>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default function CheckAccountHistoryUI() {

  const [account, setAccount] = useState("");
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult([]);
    try {
      const res = await fetch(`/api/check-account-history?account=${account}`);
      const data = await res.json();
      setResult(data.history || []);
    } catch (err) {
      setResult([{ error: "Error al consultar el historial." }]);
    }
    setLoading(false);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow p-6 mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border border-zinc-300 dark:border-zinc-700 rounded px-4 py-3 text-lg text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 placeholder-zinc-400 dark:placeholder-zinc-500 transition"
          placeholder="Ej: hiveuser123"
          value={account}
          onChange={e => setAccount(e.target.value)}
          required
          autoFocus
        />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">
          Consultar
        </button>
      </form>
      {loading && <div className="mt-4 text-center">Consultando...</div>}
      <div className="mt-4 flex flex-col gap-4">
        {result.length === 0 && !loading && (
          <div className="text-zinc-400 text-center text-sm">No hay resultados para mostrar.</div>
        )}
        {result.map((item, idx) => (
          <OperationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
} 