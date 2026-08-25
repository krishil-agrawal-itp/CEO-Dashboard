import { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  tag,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  tag?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`hover-lift rounded-[var(--r-lg)] bg-[var(--surface)] p-5 ${className}`}
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      {(title || tag) && (
        <div className="flex items-start justify-between">
          {title && (
            <div>
              <h3 className="text-[18px] font-bold tracking-tight text-[var(--ink-primary)]">{title}</h3>
              {subtitle && <p className="mt-1 text-[13.5px] font-medium text-[var(--ink-muted)]">{subtitle}</p>}
            </div>
          )}
          {tag && (
            <span className="rounded-[var(--r-pill)] border border-[var(--border)] px-2.5 py-1 text-[12.5px] font-bold text-[var(--ink-secondary)]">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className={title || tag ? "mt-3.5" : ""}>{children}</div>
    </div>
  );
}
