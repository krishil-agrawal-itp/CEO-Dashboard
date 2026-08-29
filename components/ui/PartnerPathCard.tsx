import { PartnerTierPath } from "@/lib/types";
import { StatusPill } from "./StatusPill";

function ReqBar({
  label,
  have,
  needed,
}: {
  label: string;
  have: number;
  needed: number;
}) {
  const pct = Math.min(100, Math.round((have / Math.max(needed, 1)) * 100));
  const short = needed - have;
  return (
    <div>
      <div className="flex items-center justify-between gap-2 text-[12px]">
        <span className="font-semibold text-[var(--ink-secondary)]">{label}</span>
        <span className="tabular-nums font-bold text-[var(--ink-primary)]">
          {have}/{needed}
          {short > 0 ? (
            <span className="ml-1 font-semibold text-[var(--risk)]">· −{short}</span>
          ) : (
            <span className="ml-1 font-semibold text-[var(--brand)]">· met</span>
          )}
        </span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-[var(--r-pill)]" style={{ background: "var(--border-subtle)" }}>
        <div
          className="h-full rounded-[var(--r-pill)]"
          style={{
            width: `${pct}%`,
            background: short > 0 ? "var(--risk)" : "var(--brand)",
          }}
        />
      </div>
    </div>
  );
}

export function PartnerPathCard(path: PartnerTierPath) {
  return (
    <div
      className="min-w-0 rounded-[var(--r-lg)] bg-[var(--surface)] p-4 sm:p-5"
      style={{ border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[16px] font-bold text-[var(--ink-primary)]">{path.vendor}</p>
          <p className="mt-1 text-[13px] font-semibold text-[var(--ink-secondary)]">
            <span className="text-[var(--ink-primary)]">{path.currentTier}</span>
            <span className="mx-1.5 text-[var(--ink-muted)]">→</span>
            <span className="text-[var(--brand)]">{path.nextTier}</span>
          </p>
        </div>
        <StatusPill label={path.status.label} tone={path.status.tone} />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <ReqBar label="Certifications" have={path.certsHave} needed={path.certsNeeded} />
        <ReqBar label="Business case studies" have={path.caseStudiesHave} needed={path.caseStudiesNeeded} />
        <ReqBar label="User stories" have={path.userStoriesHave} needed={path.userStoriesNeeded} />
      </div>

      <div className="mt-4 rounded-[var(--r-md)] bg-[var(--surface-sunken)] px-3 py-2.5">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
          How to increase the tier
        </p>
        <p className="mt-1 text-[12.5px] font-medium leading-snug text-[var(--ink-secondary)]">
          {path.howToIncrease}
        </p>
      </div>
    </div>
  );
}
