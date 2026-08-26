import { BarItem } from "@/lib/types";
import { SEQUENTIAL_BLUE } from "@/lib/palette";

/**
 * One hue, light -> dark by rank — magnitude encoding, not identity, so it
 * stays within the brand's "one highlight color" rule regardless of how
 * many bars are shown. Each bar already carries its own text label, so
 * hue was never needed to distinguish identity here.
 */
export function SequentialBars({ items }: { items: BarItem[] }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const pct = Math.max(6, Math.round((item.value / max) * 100));
        const step = SEQUENTIAL_BLUE[Math.min(i, SEQUENTIAL_BLUE.length - 1)];
        return (
          <div key={item.label} className="group flex min-w-0 flex-col gap-1 text-[13px] sm:flex-row sm:items-center sm:gap-3 sm:text-[14px]">
            <span className="shrink-0 font-semibold text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)] sm:w-[120px] sm:truncate xl:w-[134px]">
              {item.label}
            </span>
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className="h-[16px] min-w-0 flex-1 overflow-hidden rounded-[var(--r-sm)] sm:h-[20px]"
                style={{ background: "var(--surface-sunken)" }}
              >
              <span
                className="bar-grow block h-full rounded-[var(--r-sm)] transition-[filter] duration-200 group-hover:brightness-110"
                style={{
                  width: `${pct}%`,
                  background: `linear-gradient(90deg, ${step.bg}, ${step.bg})`,
                  boxShadow: i === 0 ? "0 0 12px rgba(0,58,227,0.25)" : undefined,
                  animationDelay: `${i * 60}ms`,
                }}
              />
            </span>
            <span className="w-[72px] shrink-0 text-right font-bold tabular-nums text-[var(--ink-primary)] sm:w-[80px]">
              {item.displayValue}
            </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
