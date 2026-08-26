"use client";

import { ReactNode } from "react";
import { DataSource } from "@/lib/types";
import { SourceRow } from "./SourceChip";
import { InfoTip } from "../controls/InfoTip";
import { useDashboardControls } from "../controls/DashboardControlsContext";

export function Card({
  title,
  subtitle,
  tag,
  sources,
  definition,
  actions,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  tag?: string;
  sources?: DataSource[];
  definition?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const { density } = useDashboardControls();
  const compact = density === "compact";

  return (
    <div
      className={`hover-lift group/card min-w-0 rounded-[var(--r-lg)] bg-[var(--surface)] ${
        compact ? "p-3.5 sm:p-4" : "p-4 sm:p-5"
      } ${className}`}
      style={{ border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
    >
      {(title || tag || sources || actions) && (
        <div className="flex items-start justify-between gap-3">
          {title && (
            <div className="card-title-accent min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[15px] font-bold tracking-tight text-[var(--ink-primary)] sm:text-[16px]">
                  {title}
                </h3>
                {definition && <InfoTip label={`Definition: ${title}`}>{definition}</InfoTip>}
                {sources && <SourceRow sources={sources} />}
              </div>
              {subtitle && (
                <p className="mt-1 text-[12.5px] font-medium leading-snug text-[var(--ink-muted)]">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          <div className="flex shrink-0 items-center gap-2">
            {actions}
            {tag && (
              <span className="rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface-sunken)] px-2.5 py-1 text-[11px] font-bold tabular-nums text-[var(--ink-secondary)]">
                {tag}
              </span>
            )}
          </div>
        </div>
      )}
      <div className={title || tag || sources || actions ? (compact ? "mt-3" : "mt-4") : ""}>
        {children}
      </div>
    </div>
  );
}
