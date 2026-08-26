"use client";

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="inline-flex max-w-full overflow-x-auto rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--surface-sunken)] p-0.5"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt.value)}
            className={`focus-ring shrink-0 rounded-[6px] px-2.5 py-1.5 text-[11.5px] font-bold transition-colors ${
              active
                ? "bg-[var(--surface)] text-[var(--ink-primary)] shadow-[var(--shadow-xs)]"
                : "text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
