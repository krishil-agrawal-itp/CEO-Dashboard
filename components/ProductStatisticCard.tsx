"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { ProductStatistic } from "@/lib/types";
import { formatCompact, formatDelta } from "@/lib/format";
import { RING_STEPS } from "@/lib/palette";
import { ArrowUpIcon, ArrowDownIcon, BoxIcon, ProductsIcon, DashboardIcon } from "./icons";

const CATEGORY_ICON = {
  electronic: BoxIcon,
  games: DashboardIcon,
  furniture: ProductsIcon,
} as const;

/**
 * Brand rule: red is dark-surface-only, never on white. A "down" delta on
 * this light card uses neutral ink + a down arrow, never red.
 */
function DeltaChip({ percent, direction }: { percent: number; direction: "up" | "down" }) {
  const isUp = direction === "up";
  const Icon = isUp ? ArrowUpIcon : ArrowDownIcon;
  return (
    <span
      className="inline-flex items-center gap-0.5 rounded-[var(--r-pill)] px-1.5 py-0.5 text-[10px] font-medium"
      style={
        isUp
          ? { background: "rgba(0,58,227,0.08)", color: "var(--brand)" }
          : { background: "var(--surface-sunken)", color: "var(--ink-secondary)" }
      }
    >
      <Icon className="h-2.5 w-2.5" />
      {formatDelta(percent)}
    </span>
  );
}

export function ProductStatisticCard({ data }: { data: ProductStatistic }) {
  const ringData = data.categories.map((c, i) => ({
    name: c.label,
    value: c.value,
    fill: RING_STEPS[Math.min(i, RING_STEPS.length - 1)],
  }));

  return (
    <div
      className="flex shrink-0 flex-col rounded-[var(--r-lg)] bg-[var(--surface)] p-5"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[15px] font-bold tracking-tight text-[var(--ink-primary)]">
            Product Statistic
          </h3>
          <p className="mt-0.5 text-[11.5px] font-normal text-[var(--ink-muted)]">Track your product sales</p>
        </div>
        <span className="rounded-[var(--r-pill)] border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium text-[var(--ink-secondary)]">
          Today
        </span>
      </div>

      <div className="relative mx-auto mt-2 flex h-[150px] w-[150px] items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={ringData}
            innerRadius="48%"
            outerRadius="100%"
            barSize={9}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 3000]} tick={false} axisLine={false} />
            <RadialBar dataKey="value" background={{ fill: "var(--surface-sunken)" }} cornerRadius={5} />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="tabular-nums text-[19px] font-bold tracking-tight text-[var(--ink-primary)]">
            {formatCompact(data.totalValue)}
          </p>
          <p className="text-[9px] font-medium text-[var(--ink-muted)]">{data.totalLabel}</p>
          <span
            className="mt-1 inline-flex items-center gap-0.5 rounded-[var(--r-pill)] px-1.5 py-0.5 text-[9px] font-medium"
            style={{ background: "rgba(0,58,227,0.08)", color: "var(--brand)" }}
          >
            <ArrowUpIcon className="h-2 w-2" />
            {formatDelta(data.totalDelta.percent)}
          </span>
        </div>
      </div>

      <div className="mt-3.5 flex flex-col gap-2">
        {data.categories.map((cat, i) => {
          const Icon = CATEGORY_ICON[cat.icon];
          const ringColor = RING_STEPS[Math.min(i, RING_STEPS.length - 1)];
          return (
            <div key={cat.id} className="flex items-center gap-2.5">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--r-md)]"
                style={{ background: "var(--surface-sunken)", color: ringColor }}
              >
                <Icon className="h-[14px] w-[14px]" />
              </span>
              <span className="flex-1 text-[12.5px] font-medium text-[var(--ink-secondary)]">
                {cat.label}
              </span>
              <span className="tabular-nums text-[13px] font-bold text-[var(--ink-primary)]">
                {formatCompact(cat.value)}
              </span>
              <DeltaChip percent={cat.delta.percent} direction={cat.delta.direction} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
