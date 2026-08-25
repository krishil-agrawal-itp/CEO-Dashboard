import { FeedItem } from "@/lib/types";
import { AlertIcon, ClockIcon } from "../icons";

export function Feed({ items }: { items: FeedItem[] }) {
  return (
    <div className="-mb-1 flex flex-col">
      {items.map((item, i) => {
        const Icon = item.severity === "critical" ? AlertIcon : ClockIcon;
        return (
          <div
            key={item.id}
            className="cell-fade group flex items-start gap-3 rounded-[var(--r-md)] px-1.5 py-3 transition-colors hover:bg-[var(--surface-sunken)]"
            style={{ animationDelay: `${i * 70}ms`, ...(i === 0 ? {} : { borderTop: "1px solid var(--border)" }) }}
          >
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{
                background: item.severity === "critical" ? "#101010" : "var(--surface-sunken)",
                color: item.severity === "critical" ? "#ffffff" : "var(--ink-secondary)",
              }}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold leading-snug text-[var(--ink-primary)]">{item.text}</p>
              <p className="mt-0.5 text-[12.5px] font-medium text-[var(--ink-muted)]">{item.meta}</p>
            </div>
            <button className="shrink-0 rounded-[var(--r-md)] border border-[var(--border)] px-3 py-1.5 text-[13px] font-bold text-[var(--ink-secondary)] transition-colors hover:border-[var(--brand)] hover:bg-[rgba(0,58,227,0.06)] hover:text-[var(--brand)]">
              {item.action}
            </button>
          </div>
        );
      })}
    </div>
  );
}
