"use client";

import { useId, useState } from "react";

export function InfoTip({ label, children }: { label: string; children: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        className="focus-ring inline-flex h-4 w-4 items-center justify-center rounded-full border border-[var(--border)] text-[10px] font-bold text-[var(--ink-muted)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
        aria-label={label}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
      >
        i
      </button>
      {open && (
        <span
          id={id}
          role="tooltip"
          className="absolute left-0 top-[calc(100%+6px)] z-30 w-[240px] rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--surface)] p-2.5 text-[11.5px] font-medium leading-snug text-[var(--ink-secondary)] shadow-[var(--shadow-md)] sm:w-[280px]"
        >
          {children}
        </span>
      )}
    </span>
  );
}
