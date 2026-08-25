import { HeatmapRow } from "@/lib/types";

/** One sequential hue (blue), light -> dark for magnitude — a heatmap is
 * the canonical case for a single-hue ramp, and it's the only hue the
 * brand allows anyway. */
const STEPS = ["#eef2ff", "#c7d5fb", "#8fabf5", "#5b7fee", "#2a4fe0", "#003ae3", "#002099"];

function stepFor(value: number) {
  const idx = Math.min(STEPS.length - 1, Math.max(0, Math.floor((value / 100) * (STEPS.length - 1))));
  return STEPS[idx];
}

function textFor(value: number) {
  return value / 100 > 0.55 ? "#ffffff" : "#0b0b0f";
}

export function Heatmap({ columns, rows }: { columns: string[]; rows: HeatmapRow[] }) {
  return (
    <div>
      <div
        className="grid gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--ink-muted)]"
        style={{ gridTemplateColumns: `140px repeat(${columns.length}, 1fr)` }}
      >
        <div />
        {columns.map((c) => (
          <div key={c} className="pb-1.5 text-center">
            {c}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {rows.map((row, ri) => (
          <div
            key={row.label}
            className="grid items-center gap-1.5"
            style={{ gridTemplateColumns: `140px repeat(${row.values.length}, 1fr)` }}
          >
            <div className="pr-2 text-[13px] font-semibold text-[var(--ink-secondary)]">{row.label}</div>
            {row.values.map((v, ci) => (
              <div
                key={ci}
                className="cell-fade tabular-nums flex h-9 items-center justify-center rounded-[var(--r-sm)] text-[12px] font-bold transition-transform hover:z-10 hover:scale-110 hover:shadow-[var(--shadow-sm)]"
                style={{
                  background: stepFor(v),
                  color: textFor(v),
                  animationDelay: `${(ri * row.values.length + ci) * 18}ms`,
                }}
              >
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11.5px] font-semibold text-[var(--ink-muted)]">
        <span>Under-utilised</span>
        {STEPS.map((s) => (
          <span key={s} className="h-2.5 w-4 rounded-[3px]" style={{ background: s }} />
        ))}
        <span>Over-allocated</span>
      </div>
    </div>
  );
}
