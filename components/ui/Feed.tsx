"use client";

import { useMemo, useState } from "react";
import { FeedItem } from "@/lib/types";
import { AlertIcon, ClockIcon } from "../icons";
import { SourceChip } from "./SourceChip";
import { useDashboardControls } from "../controls/DashboardControlsContext";
import { SegmentedControl } from "../controls/SegmentedControl";

type FeedFilter = "all" | "critical" | "watch";

export function Feed({ items }: { items: FeedItem[] }) {
  const { risk, density } = useDashboardControls();
  const [filter, setFilter] = useState<FeedFilter>("all");
  const compact = density === "compact";

  const visible = useMemo(() => {
    let list = items;
    if (risk === "critical") list = list.filter((i) => i.severity === "critical");
    else if (risk === "watch") list = list.filter((i) => i.severity === "critical" || i.severity === "watch");
    if (filter === "critical") list = list.filter((i) => i.severity === "critical");
    if (filter === "watch") list = list.filter((i) => i.severity === "watch");
    return list;
  }, [items, risk, filter]);

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <SegmentedControl<FeedFilter>
          ariaLabel="Feed severity"
          value={filter}
          onChange={setFilter}
          options={[
            { value: "all", label: "All" },
            { value: "critical", label: "Critical" },
            { value: "watch", label: "Watch" },
          ]}
        />
        <span className="text-[11.5px] font-semibold text-[var(--ink-muted)]">
          {visible.length} item{visible.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="flex flex-col">
        {visible.length === 0 ? (
          <p className="py-6 text-center text-[13px] font-semibold text-[var(--ink-muted)]">
            Nothing in this severity under the current lens.
          </p>
        ) : (
          visible.map((item, i) => {
            const Icon = item.severity === "critical" ? AlertIcon : ClockIcon;
            return (
              <div
                key={item.id}
                className={`cell-fade group flex flex-col gap-2 rounded-[var(--r-md)] px-1.5 sm:flex-row sm:items-start sm:gap-3 sm:px-2 ${
                  compact ? "py-2.5" : "py-3.5"
                }`}
                style={{
                  animationDelay: `${i * 50}ms`,
                  ...(i === 0 ? {} : { borderTop: "1px solid var(--border-subtle)" }),
                }}
              >
                <div className="flex min-w-0 flex-1 items-start gap-2.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: item.severity === "critical" ? "var(--risk-soft)" : "var(--brand-soft)",
                      color: item.severity === "critical" ? "var(--risk)" : "var(--brand)",
                    }}
                  >
                    <Icon className="h-3 w-3" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[13.5px] font-semibold leading-snug text-[var(--ink-primary)]">
                      {item.text}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      {item.source && <SourceChip source={item.source} />}
                      <p className="text-[11.5px] font-medium text-[var(--ink-muted)]">{item.meta}</p>
                    </div>
                  </div>
                </div>
                <button className="focus-ring self-start rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[12px] font-bold text-[var(--ink-secondary)] transition-all hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white sm:shrink-0">
                  {item.action}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
