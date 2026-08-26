"use client";

import { ReactNode } from "react";
import { useDashboardControls } from "../controls/DashboardControlsContext";

export function SectionFrame({
  children,
  methodology,
}: {
  children: ReactNode;
  methodology: string;
}) {
  const { density, rangeLabel, risk } = useDashboardControls();

  return (
    <div className={`flex flex-col ${density === "compact" ? "gap-3" : "gap-4 lg:gap-5"}`}>
      {children}
      <div className="rounded-[var(--r-md)] border border-dashed border-[var(--border)] bg-[var(--surface)] px-3.5 py-3">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
          Methodology · {rangeLabel}
          {risk !== "all" ? ` · risk: ${risk}` : ""}
        </p>
        <p className="mt-1.5 text-[12.5px] font-medium leading-relaxed text-[var(--ink-secondary)]">
          {methodology}
        </p>
      </div>
    </div>
  );
}
