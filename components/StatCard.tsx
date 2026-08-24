"use client";

import { motion } from "framer-motion";
import { StatCard as StatCardData } from "@/lib/types";
import { formatStatValue, formatDelta } from "@/lib/format";
import { WalletIcon, CartIcon, EyeIcon, BoxIcon, ArrowUpIcon, ArrowDownIcon } from "./icons";

const ICONS = {
  sales: WalletIcon,
  orders: CartIcon,
  visitors: EyeIcon,
  products: BoxIcon,
} as const;

/**
 * Brand rule: red is dark-surface-only, never on white — so a "down" delta
 * on this light card cannot be red. Positive uses the brand blue; negative
 * uses neutral ink + a down arrow. Direction is never colour-alone either
 * way — the arrow icon carries the sign.
 */
function DeltaChip({ percent, direction, onBrand = false }: { percent: number; direction: "up" | "down"; onBrand?: boolean }) {
  const isUp = direction === "up";
  const Icon = isUp ? ArrowUpIcon : ArrowDownIcon;
  const style = onBrand
    ? { background: "rgba(255,255,255,0.16)", color: "#ffffff" }
    : isUp
      ? { background: "rgba(0,58,227,0.08)", color: "var(--brand)" }
      : { background: "var(--surface-sunken)", color: "var(--ink-secondary)" };
  return (
    <span className="inline-flex items-center gap-1 rounded-[var(--r-pill)] px-2 py-1 text-[11px] font-medium" style={style}>
      <Icon className="h-3 w-3" />
      {formatDelta(percent)}
    </span>
  );
}

export function StatCard({
  stat,
  emphasize = false,
  delay = 0,
}: {
  stat: StatCardData;
  emphasize?: boolean;
  delay?: number;
}) {
  const Icon = ICONS[stat.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.2, 0.6, 0.2, 1] }}
      className="flex h-full flex-col justify-between rounded-[var(--r-lg)] p-5"
      style={
        emphasize
          ? { background: "var(--brand)" }
          : { background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }
      }
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-[var(--r-md)] ${
            emphasize ? "bg-white/15" : "bg-[var(--surface-sunken)]"
          }`}
        >
          <Icon className={`h-[18px] w-[18px] ${emphasize ? "text-white" : "text-[var(--ink-secondary)]"}`} />
        </div>
        <DeltaChip percent={stat.delta.percent} direction={stat.delta.direction} onBrand={emphasize} />
      </div>

      <div className="mt-3.5">
        <p className={`text-[13px] font-medium ${emphasize ? "text-white/75" : "text-[var(--ink-muted)]"}`}>
          {stat.label}
        </p>
        <p
          className={`tabular-nums mt-1 text-[28px] font-bold tracking-tight ${
            emphasize ? "text-white" : "text-[var(--ink-primary)]"
          }`}
        >
          {formatStatValue(stat.value, stat.format)}
        </p>
        <p className={`mt-1 text-[11.5px] font-normal ${emphasize ? "text-white/55" : "text-[var(--ink-muted)]"}`}>
          {stat.comparisonLabel}
        </p>
      </div>
    </motion.div>
  );
}
