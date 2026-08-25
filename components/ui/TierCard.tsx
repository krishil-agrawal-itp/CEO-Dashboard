import { TierCardData } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function TierCard({ vendor, tier, gap, renewal, status }: TierCardData) {
  return (
    <div
      className="rounded-[var(--r-md)] p-4 transition-colors hover:bg-[#eceef2]"
      style={{ background: "var(--surface-sunken)" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[16px] font-bold text-[var(--ink-primary)]">{vendor}</span>
        <span className="rounded-[var(--r-sm)] bg-[var(--surface)] px-2 py-0.5 text-[11.5px] font-bold text-[var(--ink-secondary)]">
          {tier}
        </span>
      </div>
      <p className="mt-2 text-[13px] font-medium leading-snug text-[var(--ink-secondary)]">{gap}</p>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-[12px] font-semibold text-[var(--ink-muted)]">Renews {renewal}</span>
        <StatusPill label={status.label} tone={status.tone} />
      </div>
    </div>
  );
}
