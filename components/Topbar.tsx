"use client";

import { useEffect, useState } from "react";
import { DataSource } from "@/lib/types";
import { BellIcon } from "./icons";
import { SourceRow } from "./ui/SourceChip";

export function Topbar({
  title,
  description,
  sources,
  decisionsWaiting,
}: {
  title: string;
  description: string;
  sources: DataSource[];
  decisionsWaiting: number;
}) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    function tick() {
      setNow(
        new Date().toLocaleString("en-US", {
          timeZone: "America/Chicago",
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
    <header className="glass-panel mb-3 flex shrink-0 items-center justify-between gap-3 rounded-[var(--r-xl)] border border-[var(--border-subtle)] px-3 py-3 sm:px-5 sm:py-4 lg:px-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="truncate text-[20px] font-bold tracking-tight text-[var(--ink-primary)] sm:text-[24px] xl:text-[28px]">
            {title}
          </h1>
        </div>
        <p className="mt-1 hidden max-w-2xl truncate text-[13px] font-medium text-[var(--ink-muted)] sm:block lg:text-[15px]">
          {description}
        </p>
        <div className="mt-2 hidden sm:block">
          <SourceRow sources={sources} />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
        {now && (
          <p className="hidden text-right text-[12.5px] font-semibold text-[var(--ink-muted)] md:block">
            <span className="block text-[11px] font-bold uppercase tracking-[0.1em]">Dallas</span>
            {now}
          </p>
        )}

        <div
          className="hidden items-center gap-2 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 md:flex"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            On you
          </span>
          <span className="tabular-nums text-[15px] font-bold text-[var(--risk)]">{decisionsWaiting}</span>
        </div>

        <button
          type="button"
          className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:border-[var(--brand)] hover:text-[var(--brand)]"
          aria-label="Alerts"
        >
          <BellIcon className="h-[18px] w-[18px]" />
          <span
            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--risk)]"
            style={{ boxShadow: "0 0 0 2px #fff" }}
            aria-hidden
          />
        </button>

        <div
          className="ml-0.5 hidden h-10 items-center gap-2.5 rounded-[var(--r-pill)] border border-[var(--border)] bg-[var(--surface)] pl-1.5 pr-3.5 sm:flex"
          style={{ boxShadow: "var(--shadow-xs)" }}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--brand), var(--deep-blue))" }}
          >
            CEO
          </span>
          <span className="hidden text-[13px] font-bold text-[var(--ink-primary)] 2xl:inline">Executive</span>
        </div>
      </div>
    </header>
  );
}
