import { StatusPillData } from "@/lib/types";
import { CheckCircleIcon, AlertIcon, ClockIcon } from "../icons";

/**
 * Status color language: brand blue for positive, soft brand-red wash for
 * critical / need-attention (never solid black), neutrals for the rest.
 */
const TONE_STYLE: Record<
  StatusPillData["tone"],
  { bg: string; fg: string; border: string; icon: typeof CheckCircleIcon }
> = {
  positive: {
    bg: "rgba(0,58,227,0.08)",
    fg: "var(--brand)",
    border: "rgba(0,58,227,0.16)",
    icon: CheckCircleIcon,
  },
  neutral: {
    bg: "var(--surface-sunken)",
    fg: "var(--ink-secondary)",
    border: "var(--border-subtle)",
    icon: ClockIcon,
  },
  watch: {
    bg: "var(--surface-sunken)",
    fg: "var(--ink-primary)",
    border: "var(--border)",
    icon: ClockIcon,
  },
  critical: {
    bg: "var(--risk-soft)",
    fg: "var(--risk)",
    border: "var(--risk-border)",
    icon: AlertIcon,
  },
};

export function StatusPill({ label, tone }: StatusPillData) {
  const s = TONE_STYLE[tone];
  const Icon = s.icon;
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[var(--r-pill)] border px-2.5 py-1 text-[12px] font-bold transition-transform hover:scale-[1.03]"
      style={{ background: s.bg, color: s.fg, borderColor: s.border }}
    >
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}
