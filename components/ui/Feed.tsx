import { FeedItem } from "@/lib/types";
import { AlertIcon, ClockIcon } from "../icons";
import { SourceChip } from "./SourceChip";

export function Feed({ items }: { items: FeedItem[] }) {
  return (
    <div className="-mb-1 flex flex-col">
      {items.map((item, i) => {
        const Icon = item.severity === "critical" ? AlertIcon : ClockIcon;
        return (
          <div
            key={item.id}
            className="cell-fade group flex items-start gap-3 rounded-[var(--r-md)] px-2 py-3.5 transition-colors hover:bg-[var(--surface-sunken)]"
            style={{
              animationDelay: `${i * 70}ms`,
              ...(i === 0 ? {} : { borderTop: "1px solid var(--border-subtle)" }),
            }}
          >
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{
                background: item.severity === "critical" ? "var(--risk-soft)" : "var(--brand-soft)",
                color: item.severity === "critical" ? "var(--risk)" : "var(--brand)",
              }}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14.5px] font-semibold leading-snug text-[var(--ink-primary)]">
                {item.text}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                {item.source && <SourceChip source={item.source} />}
                <p className="text-[12.5px] font-medium text-[var(--ink-muted)]">{item.meta}</p>
              </div>
            </div>
            <button className="focus-ring shrink-0 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[12.5px] font-bold text-[var(--ink-secondary)] transition-all hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white hover:shadow-[var(--shadow-brand)]">
              {item.action}
            </button>
          </div>
        );
      })}
    </div>
  );
}
