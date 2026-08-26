"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type TimeRange = "mtd" | "qtd" | "l30" | "fy";
export type CompareMode = "none" | "prior" | "plan";
export type RiskLens = "all" | "watch" | "critical";
export type Density = "comfortable" | "compact";

export interface DashboardControlsState {
  range: TimeRange;
  compare: CompareMode;
  risk: RiskLens;
  density: Density;
  setRange: (v: TimeRange) => void;
  setCompare: (v: CompareMode) => void;
  setRisk: (v: RiskLens) => void;
  setDensity: (v: Density) => void;
  rangeLabel: string;
  compareLabel: string;
  asOf: string;
}

const RANGE_LABEL: Record<TimeRange, string> = {
  mtd: "Month to date",
  qtd: "Quarter to date",
  l30: "Last 30 days",
  fy: "Fiscal YTD",
};

const COMPARE_LABEL: Record<CompareMode, string> = {
  none: "No compare",
  prior: "vs prior period",
  plan: "vs plan",
};

const DashboardControlsContext = createContext<DashboardControlsState | null>(null);

export function DashboardControlsProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<TimeRange>("qtd");
  const [compare, setCompare] = useState<CompareMode>("prior");
  const [risk, setRisk] = useState<RiskLens>("all");
  const [density, setDensity] = useState<Density>("comfortable");

  const value = useMemo<DashboardControlsState>(
    () => ({
      range,
      compare,
      risk,
      density,
      setRange,
      setCompare,
      setRisk,
      setDensity,
      rangeLabel: RANGE_LABEL[range],
      compareLabel: COMPARE_LABEL[compare],
      asOf: "Synced 06:58 CT · HubSpot · Kantata · Beacon",
    }),
    [range, compare, risk, density],
  );

  return (
    <DashboardControlsContext.Provider value={value}>{children}</DashboardControlsContext.Provider>
  );
}

export function useDashboardControls() {
  const ctx = useContext(DashboardControlsContext);
  if (!ctx) {
    throw new Error("useDashboardControls must be used within DashboardControlsProvider");
  }
  return ctx;
}
