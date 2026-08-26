import { SectionTiles } from "@/lib/types";
import { LayersIcon, TrendingUpIcon, AlertIcon } from "../icons";

const TILE_TONE = {
  total: {
    bg: "var(--surface-sunken)",
    fg: "var(--ink-primary)",
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
      className="hover-lift relative flex min-w-0 flex-col gap-2.5 overflow-hidden rounded-[var(--r-lg)] bg-[var(--surface)] p-4 sm:p-5"
      style={{ border: `1px solid ${t.ring}`, boxShadow: "var(--shadow-sm)" }}
    >
      {t.accent !== "transparent" && (
        <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: t.accent }} aria-hidden />
      )}
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--r-md)] sm:h-10 sm:w-10"
          style={{ background: t.bg, color: t.fg }}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--ink-primary)]">{label}</p>
      </div>
      <p className="tabular-nums text-[28px] font-bold leading-none tracking-tight text-[var(--ink-primary)] sm:text-[32px] 2xl:text-[36px]">
        {count} <span className="text-[14px] font-bold text-[var(--ink-primary)] sm:text-[15px]">{unit}</span>
      </p>
      <div>
        <p className="text-[15px] font-bold text-[var(--ink-primary)] sm:text-[16px]">{value}</p>
        <p className="mt-1 text-[13px] font-semibold leading-snug text-[var(--ink-secondary)]">{sub}</p>
      </div>
    </div>
  );
}

export function Tile3({ tiles }: { tiles: SectionTiles }) {
  return (
    <div className="grid shrink-0 grid-cols-1 gap-3 min-[900px]:grid-cols-3 min-[900px]:gap-3 xl:gap-4">
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
