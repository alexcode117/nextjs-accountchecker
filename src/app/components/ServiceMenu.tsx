"use client";

interface Service {
  key: string;
  label: string;
  description: string;
}

interface ServiceMenuProps {
  services: Service[];
  selected: string | null;
  onSelect: (key: string) => void;
}

export default function ServiceMenu({ services, selected, onSelect }: ServiceMenuProps) {
  return (
    <nav className="flex flex-wrap gap-4 justify-center">
      {services.map((service) => (
        <button
          key={service.key}
          className={`px-6 py-3 rounded-lg shadow transition font-semibold border-2 border-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            selected === service.key 
              ? 'bg-blue-600 text-white' 
              : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100'
          }`}
          onClick={() => onSelect(service.key)}
        >
          <div className="text-lg">{service.label}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {service.description}
          </div>
        </button>
      ))}
    </nav>
  );
}