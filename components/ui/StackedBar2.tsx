import { StackedBarRow } from "@/lib/types";

/** Two-series stack: brand blue (primary) + light grey (secondary) — the
 * same two-tone language as the bar chart elsewhere, never a 3rd hue. */
export function StackedBar2({
  rows,
  aLabel,
  bLabel,
}: {
  rows: StackedBarRow[];
  aLabel: string;
  bLabel: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((row, i) => {
        const total = row.aValue + row.bValue || 1;
        const aPct = Math.round((row.aValue / total) * 100);
        return (
          <div key={row.label} className="group flex items-center gap-3 text-[13.5px]">
            <span className="w-10 shrink-0 font-semibold text-[var(--ink-secondary)]">{row.label}</span>
            <span
              className="flex h-[20px] flex-1 overflow-hidden rounded-[var(--r-sm)]"
              style={{ background: "var(--surface-sunken)" }}
            >
              <span
                className="bar-grow block h-full"
                style={{ width: `${aPct}%`, background: "#003ae3", animationDelay: `${i * 60}ms` }}
              />
              <span
                className="bar-grow block h-full"
                style={{
                  width: `${100 - aPct}%`,
                  background: "#d7dbe0",
                  animationDelay: `${i * 60 + 40}ms`,
                }}
              />
            </span>
            <span className="w-[96px] shrink-0 text-right font-semibold tabular-nums text-[var(--ink-secondary)]">
              {row.displayA} &middot; {row.displayB}
            </span>
          </div>
        );
      })}
      <div className="mt-2 flex items-center gap-4 text-[12.5px] font-semibold text-[var(--ink-secondary)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#003ae3" }} />
          {aLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#d7dbe0" }} />
          {bLabel}
        </span>
      </div>
    </div>
  );
}
