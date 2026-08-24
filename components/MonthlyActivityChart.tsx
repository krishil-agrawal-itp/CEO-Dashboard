"use client";

"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MonthlyActivityPoint } from "@/lib/types";
import { formatCompact } from "@/lib/format";

const SEEN_COLOR = "#dddddd";
const SALES_COLOR = "#003ae3";

interface ChartTooltipEntry {
  dataKey: string;
  value: number;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: ChartTooltipEntry[];
  label?: string;
}

function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const seen = payload.find((p) => p.dataKey === "seenProducts")?.value;
  const sales = payload.find((p) => p.dataKey === "sales")?.value;

  return (
    <div className="rounded-[var(--r-md)] bg-black px-3.5 py-2.5 text-white" style={{ boxShadow: "var(--shadow-md)" }}>
      <p className="mb-1 text-[10.5px] font-medium text-white/50">{label}</p>
      {seen !== undefined && (
        <p className="text-[12px] font-bold leading-snug">
          {formatCompact(seen)} <span className="font-normal text-white/50">Products seen</span>
        </p>
      )}
      {sales !== undefined && (
        <p className="text-[12px] font-bold leading-snug">
          {formatCompact(sales)} <span className="font-normal text-white/50">Products sold</span>
        </p>
      )}
    </div>
  );
}

export function MonthlyActivityChart({ data }: { data: MonthlyActivityPoint[] }) {
  return (
    <div
      className="flex min-h-0 flex-1 flex-col rounded-[var(--r-lg)] bg-[var(--surface)] p-6"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex shrink-0 items-start justify-between">
        <div>
          <h3 className="text-[16px] font-bold tracking-tight text-[var(--ink-primary)]">
            Customer Habits
          </h3>
          <p className="mt-0.5 text-[12px] font-normal text-[var(--ink-muted)]">Track your customer habits</p>
        </div>
        <div className="flex items-center gap-4 text-[12px] font-medium text-[var(--ink-secondary)]">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: SEEN_COLOR }} />
            Seen product
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: SALES_COLOR }} />
            Sales
          </span>
        </div>
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke="var(--border)" strokeDasharray="0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#808080", fontSize: 12, fontWeight: 500 }}
              dy={8}
            />
            <YAxis hide domain={[0, "dataMax + 5000"]} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
            <Bar dataKey="seenProducts" fill={SEEN_COLOR} radius={[6, 6, 0, 0]} maxBarSize={20} />
            <Bar dataKey="sales" fill={SALES_COLOR} radius={[6, 6, 0, 0]} maxBarSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
