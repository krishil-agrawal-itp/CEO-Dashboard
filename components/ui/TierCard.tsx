import { TierCardData } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function TierCard({ vendor, tier, gap, renewal, status }: TierCardData) {
  return (
    <div
      className="group relative overflow-hidden rounded-[var(--r-md)] border border-transparent p-4 transition-all duration-200 hover:border-[var(--border)] hover:bg-[#eceef3]"
      style={{ background: "var(--surface-sunken)" }}
    >
      <span
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-[15px] font-bold text-[var(--ink-primary)] lg:text-[16px]">{vendor}</span>
        <span className="rounded-[var(--r-sm)] border border-[var(--border-subtle)] bg-[var(--surface)] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--ink-secondary)]">
          {tier}
        </span>
      </div>
      <p className="mt-2.5 text-[13px] font-medium leading-snug text-[var(--ink-secondary)]">{gap}</p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-[12px] font-semibold text-[var(--ink-muted)]">Renews {renewal}</span>
        <StatusPill label={status.label} tone={status.tone} />
      </div>
    </div>
  );
}
