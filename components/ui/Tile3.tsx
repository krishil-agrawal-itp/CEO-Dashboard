import { SectionTiles } from "@/lib/types";
import { LayersIcon, TrendingUpIcon, AlertIcon } from "../icons";

const TILE_TONE = {
  total: {
    bg: "var(--surface-sunken)",
    fg: "var(--ink-secondary)",
    icon: LayersIcon,
    accent: "transparent",
    ring: "var(--border-subtle)",
    defaultLabel: "Portfolio",
  },
  ongoing: {
    bg: "rgba(0,58,227,0.1)",
    fg: "var(--brand)",
    icon: TrendingUpIcon,
    accent: "linear-gradient(90deg, var(--brand), rgba(0,58,227,0.35))",
    ring: "rgba(0,58,227,0.18)",
    defaultLabel: "In Motion",
  },
  attention: {
    bg: "var(--risk-soft)",
    fg: "var(--risk)",
    icon: AlertIcon,
    accent: "linear-gradient(90deg, var(--risk), rgba(203,28,42,0.35))",
    ring: "var(--risk-border)",
    defaultLabel: "Needs You",
  },
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
      className="hover-lift relative flex flex-col gap-3 overflow-hidden rounded-[var(--r-lg)] bg-[var(--surface)] p-5 lg:p-6"
      style={{ border: `1px solid ${t.ring}`, boxShadow: "var(--shadow-sm)" }}
    >
      {t.accent !== "transparent" && (
        <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: t.accent }} aria-hidden />
      )}
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-md)]"
          style={{ background: t.bg, color: t.fg }}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <p className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
          {label}
        </p>
      </div>
      <p className="tabular-nums text-[34px] font-bold leading-none tracking-tight text-[var(--ink-primary)] lg:text-[36px]">
        {count} <span className="text-[15px] font-semibold text-[var(--ink-secondary)]">{unit}</span>
      </p>
      <div>
        <p className="text-[16px] font-bold text-[var(--ink-primary)] lg:text-[17px]">{value}</p>
        <p className="mt-1 text-[13px] font-medium leading-snug text-[var(--ink-muted)]">{sub}</p>
      </div>
    </div>
  );
}

export function Tile3({ tiles }: { tiles: SectionTiles }) {
  return (
    <div className="grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      <Tile
        tone="total"
        label={tiles.totalLabel || TILE_TONE.total.defaultLabel}
        count={tiles.totalCount}
        unit={tiles.totalUnit}
        value={tiles.totalValue}
        sub={tiles.totalSub}
      />
      <Tile
        tone="ongoing"
        label={TILE_TONE.ongoing.defaultLabel}
        count={tiles.ongoingCount}
        unit={tiles.ongoingUnit}
        value={tiles.ongoingValue}
        sub={tiles.ongoingSub}
      />
      <Tile
        tone="attention"
        label={TILE_TONE.attention.defaultLabel}
        count={tiles.attentionCount}
        unit={tiles.attentionUnit}
        value={tiles.attentionValue}
        sub={tiles.attentionSub}
      />
    </div>
  );
}
