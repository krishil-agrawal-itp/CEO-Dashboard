"use client";

import { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "./icons";

export function Topbar({ title, description }: { title: string; description: string }) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    function tick() {
      setNow(
        new Date().toLocaleString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    }
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <header className="glass-panel mb-4 flex shrink-0 items-center justify-between gap-4 rounded-[var(--r-xl)] border border-[var(--border-subtle)] px-5 py-4 lg:px-7">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="truncate text-[28px] font-bold tracking-tight text-[var(--ink-primary)] lg:text-[32px]">
            {title}
          </h1>
          <span className="hidden rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--ink-secondary)] sm:inline-flex">
            This quarter
          </span>
        </div>
        <p className="mt-1 max-w-2xl truncate text-[14px] font-medium text-[var(--ink-muted)] lg:text-[15px]">
          {description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2.5">
        {now && (
          <p className="hidden text-right text-[12.5px] font-semibold text-[var(--ink-muted)] xl:block">
            <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
              Local time
            </span>
            {now}
          </p>
        )}

        <button
          type="button"
          className="focus-ring hidden h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)] md:inline-flex"
          aria-label="Search"
        >
          <SearchIcon className="h-[18px] w-[18px]" />
        </button>

        <button
          type="button"
          className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
          aria-label="Notifications"
        >
          <BellIcon className="h-[18px] w-[18px]" />
          <span
            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--brand)]"
            style={{ boxShadow: "0 0 0 2px #fff" }}
            aria-hidden
          />
        </button>

        <div
          className="ml-0.5 hidden h-10 items-center gap-2.5 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] pl-1.5 pr-3.5 sm:flex"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--brand), var(--deep-blue))" }}
          >
            CEO
          </span>
          <span className="text-[13px] font-bold text-[var(--ink-primary)]">Executive</span>
        </div>
      </div>
    </header>
  );
}
