import { StatBlock } from "@/lib/types";

export function StatBlockView({ label, value, sub }: StatBlock) {
  return (
    <div
      className="rounded-[var(--r-md)] p-4 transition-colors hover:bg-[#eceef2]"
      style={{ background: "var(--surface-sunken)" }}
    >
      <p className="text-[12.5px] font-semibold text-[var(--ink-muted)]">{label}</p>
      <p className="tabular-nums mt-1 text-[27px] font-bold tracking-tight text-[var(--ink-primary)]">{value}</p>
      {sub && <p className="mt-1 text-[12px] font-medium text-[var(--ink-muted)]">{sub}</p>}
    </div>
  );
}
