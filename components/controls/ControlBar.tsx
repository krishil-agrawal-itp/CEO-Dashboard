"use client";

import {
  CompareMode,
  Density,
  RiskLens,
  TimeRange,
  useDashboardControls,
} from "./DashboardControlsContext";
import { SegmentedControl } from "./SegmentedControl";

export function ControlBar() {
  const {
    range,
    setRange,
    compare,
    setCompare,
    risk,
    setRisk,
    density,
    setDensity,
    rangeLabel,
    compareLabel,
    asOf,
  } = useDashboardControls();

  return (
    <div className="mb-3 rounded-[var(--r-lg)] border border-[var(--border-subtle)] bg-[var(--surface)] px-3 py-2.5 sm:px-4">
      <div className="flex flex-col gap-2.5 xl:flex-row xl:items-center xl:justify-between">
        <div className="no-scrollbar flex flex-wrap items-center gap-2 overflow-x-auto">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
            Range
          </span>
          <SegmentedControl<TimeRange>
            ariaLabel="Time range"
            value={range}
            onChange={setRange}
            options={[
              { value: "mtd", label: "MTD" },
              { value: "qtd", label: "QTD" },
              { value: "l30", label: "30d" },
              { value: "fy", label: "FY" },
            ]}
          />

          <span className="ml-1 hidden text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)] sm:inline">
            Compare
          </span>
          <SegmentedControl<CompareMode>
            ariaLabel="Compare mode"
            value={compare}
            onChange={setCompare}
            options={[
              { value: "none", label: "Off" },
              { value: "prior", label: "Prior" },
              { value: "plan", label: "Plan" },
            ]}
          />

          <span className="ml-1 hidden text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)] md:inline">
            Risk
          </span>
          <SegmentedControl<RiskLens>
            ariaLabel="Risk lens"
            value={risk}
            onChange={setRisk}
            options={[
              { value: "all", label: "All" },
              { value: "watch", label: "Watch+" },
              { value: "critical", label: "Critical" },
            ]}
          />

          <span className="ml-1 hidden text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)] lg:inline">
            Density
          </span>
          <div className="hidden lg:block">
            <SegmentedControl<Density>
              ariaLabel="Density"
              value={density}
              onChange={setDensity}
              options={[
                { value: "comfortable", label: "Comfort" },
                { value: "compact", label: "Compact" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] font-semibold text-[var(--ink-muted)]">
          <span>
            Viewing <span className="text-[var(--ink-primary)]">{rangeLabel}</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">
            {compareLabel === "No compare" ? "Absolute" : compareLabel}
          </span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">{asOf}</span>
        </div>
      </div>
    </div>
  );
}
