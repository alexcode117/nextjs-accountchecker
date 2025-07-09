"use client";

import { useState } from "react";
import type { HiveAccount, HiveError } from "@/types/hive";

type ResultType = HiveAccount | HiveError | null;

export default function CheckAccountUI() {

  const [account, setAccount] = useState("");
  const [result, setResult] = useState<ResultType>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/check-account?account=${account}`);
      const data = await res.json();
      setResult(data.account || data);
    } catch (err) {
      setResult({ error: "Error al consultar la cuenta." });
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
      {result && (
        <pre className="mt-4 bg-zinc-100 dark:bg-zinc-800 rounded p-2 text-xs overflow-x-auto w-full" style={{ minWidth: 0 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
} 