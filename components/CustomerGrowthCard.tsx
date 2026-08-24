import { CountryGrowth } from "@/lib/types";
import { formatCompact } from "@/lib/format";
import { SEQUENTIAL_BLUE } from "@/lib/palette";

const MIN_DIAMETER = 40;
const MAX_DIAMETER = 66;

export function CustomerGrowthCard({ data }: { data: CountryGrowth[] }) {
  const sorted = [...data].sort((a, b) => b.customers - a.customers);
  const maxValue = sorted[0]?.customers ?? 1;

  return (
    <div
      className="flex min-h-0 flex-1 flex-col justify-center rounded-[var(--r-lg)] bg-[var(--surface)] p-5"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex shrink-0 items-start justify-between">
        <div>
          <h3 className="text-[15px] font-bold tracking-tight text-[var(--ink-primary)]">
            Customer Growth
          </h3>
          <p className="mt-0.5 text-[11.5px] font-normal text-[var(--ink-muted)]">Track customer by locations</p>
        </div>
        <span className="rounded-[var(--r-pill)] border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--ink-secondary)]">
          Today
        </span>
      </div>

      {/* Fixed natural height — the bubbles are the point of this card and
          must never collapse; the list below absorbs any tight-viewport
          squeeze instead (via its own scroll, see below). */}
      <div className="mt-3 flex shrink-0 flex-nowrap items-center justify-center gap-2">
        {sorted.map((entry, i) => {
          // Area-proportional: diameter scales with sqrt(value), not value.
          const ratio = Math.sqrt(entry.customers / maxValue);
          const diameter = Math.round(MIN_DIAMETER + (MAX_DIAMETER - MIN_DIAMETER) * ratio);
          const step = SEQUENTIAL_BLUE[Math.min(i, SEQUENTIAL_BLUE.length - 1)];

          return (
            <div
              key={entry.id}
              className="flex shrink-0 flex-col items-center justify-center rounded-full transition-transform hover:scale-105"
              style={{
                width: diameter,
                height: diameter,
                background: step.bg,
                color: step.text,
              }}
              title={`${entry.country}: ${formatCompact(entry.customers)} customers`}
            >
              <span className="text-[9px] font-medium tracking-wide opacity-80">
                {entry.countryCode}
              </span>
              <span className="tabular-nums text-[12.5px] font-bold leading-tight">
                {formatCompact(entry.customers)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex min-h-0 flex-col gap-1.5 overflow-y-auto border-t border-[var(--border)] pt-2.5">
        {sorted.map((entry) => (
          <div key={entry.id} className="flex shrink-0 items-center justify-between text-[12px]">
            <span className="flex items-center gap-2 font-medium text-[var(--ink-secondary)]">
              <span className="flex h-5 w-7 items-center justify-center rounded-[var(--r-sm)] bg-[var(--surface-sunken)] text-[10px] font-bold text-[var(--ink-muted)]">
                {entry.countryCode}
              </span>
              {entry.country}
            </span>
            <span className="tabular-nums font-bold text-[var(--ink-primary)]">
              {formatCompact(entry.customers)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
