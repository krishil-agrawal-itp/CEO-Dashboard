import { ReactNode } from "react";
import { DataSource } from "@/lib/types";
import { SourceRow } from "./SourceChip";

export function Card({
  title,
  subtitle,
  tag,
  sources,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  tag?: string;
  sources?: DataSource[];
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`hover-lift group/card rounded-[var(--r-lg)] bg-[var(--surface)] p-5 lg:p-6 ${className}`}
      style={{ border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
    >
      {(title || tag || sources) && (
        <div className="flex items-start justify-between gap-3">
          {title && (
            <div className="card-title-accent min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[17px] font-bold tracking-tight text-[var(--ink-primary)] lg:text-[18px]">
                  {title}
                </h3>
                {sources && <SourceRow sources={sources} />}
              </div>
              {subtitle && (
                <p className="mt-1 text-[13px] font-medium leading-snug text-[var(--ink-muted)] lg:text-[13.5px]">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {tag && (
            <span className="shrink-0 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface-sunken)] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.06em] text-[var(--ink-secondary)]">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className={title || tag || sources ? "mt-4" : ""}>{children}</div>
    </div>
  );
}
