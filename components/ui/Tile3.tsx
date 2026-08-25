import { SectionTiles } from "@/lib/types";
import { LayersIcon, TrendingUpIcon, AlertIcon } from "../icons";

const TILE_TONE = {
  total: { bg: "var(--surface-sunken)", fg: "var(--ink-secondary)", icon: LayersIcon },
  ongoing: { bg: "rgba(0,58,227,0.08)", fg: "var(--brand)", icon: TrendingUpIcon },
  attention: { bg: "#101010", fg: "#ffffff", icon: AlertIcon },
} as const;

function Tile({
  tone,
  label,
  count,
  unit,
  value,
  sub,
}: {
  tone: keyof typeof TILE_TONE;
  label: string;
  count: number;
  unit: string;
  value: string;
  sub: string;
}) {
  const t = TILE_TONE[tone];
  const Icon = t.icon;
  return (
    <div
      className="hover-lift flex flex-col gap-2.5 rounded-[var(--r-lg)] bg-[var(--surface)] p-5"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--r-md)]"
          style={{ background: t.bg, color: t.fg }}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">{label}</p>
      </div>
      <p className="tabular-nums text-[32px] font-bold leading-none tracking-tight text-[var(--ink-primary)]">
        {count} <span className="text-[15px] font-semibold text-[var(--ink-secondary)]">{unit}</span>
      </p>
      <p className="text-[17px] font-bold text-[var(--ink-primary)]">{value}</p>
      <p className="text-[13px] font-medium text-[var(--ink-muted)]">{sub}</p>
    </div>
  );
}

export function Tile3({ tiles }: { tiles: SectionTiles }) {
  return (
    <div className="grid shrink-0 grid-cols-3 gap-4">
      <Tile tone="total" label="Total" count={tiles.totalCount} unit={tiles.totalUnit} value={tiles.totalValue} sub={tiles.totalSub} />
      <Tile
        tone="ongoing"
        label="Ongoing"
        count={tiles.ongoingCount}
        unit={tiles.ongoingUnit}
        value={tiles.ongoingValue}
        sub={tiles.ongoingSub}
      />
      <Tile
        tone="attention"
        label="Need Attention"
        count={tiles.attentionCount}
        unit={tiles.attentionUnit}
        value={tiles.attentionValue}
        sub={tiles.attentionSub}
      />
    </div>
  );
}
