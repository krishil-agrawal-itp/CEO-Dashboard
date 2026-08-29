import { CertAccelerator } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function AcceleratorCard(acc: CertAccelerator) {
  const pct = Math.min(100, Math.round((acc.certified / Math.max(acc.target, 1)) * 100));
  const remaining = Math.max(0, acc.target - acc.certified);

  return (
    <div
      className="min-w-0 rounded-[var(--r-lg)] bg-[var(--surface)] p-4 sm:p-5"
      style={{ border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[15px] font-bold text-[var(--ink-primary)]">{acc.name}</p>
          <p className="mt-1 text-[12px] font-semibold text-[var(--ink-muted)]">
            {acc.vendor} · {acc.window}
          </p>
        </div>
        <StatusPill label={acc.status.label} tone={acc.status.tone} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-[var(--r-md)] bg-[var(--surface-sunken)] px-2.5 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Target</p>
          <p className="tabular-nums mt-1 text-[18px] font-bold text-[var(--ink-primary)]">{acc.target}</p>
        </div>
        <div className="rounded-[var(--r-md)] bg-[var(--surface-sunken)] px-2.5 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Certified</p>
          <p className="tabular-nums mt-1 text-[18px] font-bold text-[var(--brand)]">{acc.certified}</p>
        </div>
        <div className="rounded-[var(--r-md)] bg-[var(--surface-sunken)] px-2.5 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Spend</p>
          <p className="tabular-nums mt-1 text-[18px] font-bold text-[var(--ink-primary)]">{acc.spend}</p>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-[12px] font-semibold">
          <span className="text-[var(--ink-secondary)]">{acc.enrolled} enrolled</span>
          <span className="text-[var(--ink-primary)]">
            {pct}% · {remaining} to go
          </span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-[var(--r-pill)]" style={{ background: "var(--border-subtle)" }}>
          <div className="h-full rounded-[var(--r-pill)]" style={{ width: `${pct}%`, background: "var(--brand)" }} />
        </div>
      </div>

      <p className="mt-3 text-[12.5px] font-medium leading-snug text-[var(--ink-secondary)]">{acc.note}</p>
    </div>
  );
}
