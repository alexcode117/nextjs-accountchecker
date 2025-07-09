"use client";

type Service = { key: string; label: string; description: string; };

export default function ServiceMenu({
  services, selected, onSelect
}: {
  services: Service[];
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      {services.map(s => (
        <button
          key={s.key}
          className={`px-6 py-3 rounded-lg shadow transition font-semibold border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selected === s.key ? 'bg-blue-600 text-white' : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'}`}
          onClick={() => onSelect(s.key)}
        >
          <div className="text-lg">{s.label}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">{s.description}</div>
        </button>
      ))}
    </nav>
  );
} 