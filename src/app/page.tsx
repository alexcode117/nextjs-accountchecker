"use client";

import { useState } from "react";
import ServiceMenu from "./components/ServiceMenu";
import ServiceRunner from "./components/ServiceRunner";

const SERVICES = [
  {
    key: "check-account-history",
    label: "Historial de Cuenta",
    description: "Consulta el historial de operaciones de una cuenta Hive."
  },
  {
    key: "check-account",
    label: "Información de Cuenta",
    description: "Consulta la información básica de una cuenta Hive."
  }
];

export default function Home() {

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 bg-[url('/HIVE-BG.webp')] bg-no-repeat bg-center bg-cover bg-fixed">
      {/* Overlay semitransparente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/70 dark:bg-zinc-900/70 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center w-full mt-16">
        <div className="text-center mb-64">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Bienvenido a Hive CheckBlock</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 drop-shadow">Selecciona un servicio para comenzar:</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="mb-8" />
          <ServiceMenu services={SERVICES} selected={selected} onSelect={setSelected} />
        </div>
        <div className="w-full flex justify-center">
          {selected && <ServiceRunner serviceKey={selected} />}
        </div>
      </div>
    </main>
  );
}
