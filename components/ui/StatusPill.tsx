import { StatusPillData } from "@/lib/types";
import { CheckCircleIcon, AlertIcon, ClockIcon } from "../icons";

/**
 * Brand rule: red is dark-surface-only, never on white, and there is no
 * defined "success green" or "warning amber" in a light UI. So status here
 * is never carried by a red/amber/green hue — only by icon shape + label,
 * with the brand blue reserved for "positive" and everything else in
 * neutral ink. This is the same constraint the delta chips follow.
 */
const TONE_STYLE: Record<StatusPillData["tone"], { bg: string; fg: string; icon: typeof CheckCircleIcon }> = {
  positive: { bg: "rgba(0,58,227,0.08)", fg: "var(--brand)", icon: CheckCircleIcon },
  neutral: { bg: "var(--surface-sunken)", fg: "var(--ink-secondary)", icon: ClockIcon },
  watch: { bg: "var(--surface-sunken)", fg: "var(--ink-primary)", icon: ClockIcon },
  critical: { bg: "#101010", fg: "#ffffff", icon: AlertIcon },
};

export function StatusPill({ label, tone }: StatusPillData) {
  const s = TONE_STYLE[tone];
  const Icon = s.icon;
  return (
    <span
      className="inline-flex items-center gap-1 whitespace-nowrap rounded-[var(--r-pill)] px-2.5 py-1 text-[12px] font-bold transition-transform hover:scale-105"
      style={{ background: s.bg, color: s.fg }}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}
