import { DataSource } from "@/lib/types";

const SOURCE_STYLE: Record<DataSource, { bg: string; fg: string }> = {
  HubSpot: { bg: "rgba(0,58,227,0.08)", fg: "var(--brand)" },
  Kantata: { bg: "rgba(0,16,77,0.08)", fg: "var(--navy)" },
  Beacon: { bg: "var(--surface-sunken)", fg: "var(--ink-secondary)" },
};

export function SourceChip({ source }: { source: DataSource }) {
  const s = SOURCE_STYLE[source];
  return (
    <span
      className="inline-flex items-center rounded-[var(--r-pill)] px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.08em]"
      style={{ background: s.bg, color: s.fg }}
    >
      {source}
    </span>
  );
}

export function SourceRow({ sources }: { sources: DataSource[] }) {
  if (!sources.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {sources.map((source) => (
        <SourceChip key={source} source={source} />
      ))}
    </div>
  );
}
