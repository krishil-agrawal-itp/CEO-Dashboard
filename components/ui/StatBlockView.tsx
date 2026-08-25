import { StatBlock } from "@/lib/types";

export function StatBlockView({ label, value, sub }: StatBlock) {
  return (
    <div
      className="group relative overflow-hidden rounded-[var(--r-md)] p-4 transition-all duration-200 hover:bg-[#eceef3]"
      style={{ background: "var(--surface-sunken)", border: "1px solid transparent" }}
    >
      <span
        className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: "var(--brand)" }}
        aria-hidden
      />
      <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">
        {label}
      </p>
      <p className="tabular-nums mt-2 text-[26px] font-bold tracking-tight text-[var(--ink-primary)] lg:text-[28px]">
        {value}
      </p>
      {sub && <p className="mt-1.5 text-[12px] font-medium leading-snug text-[var(--ink-muted)]">{sub}</p>}
    </div>
  );
}
