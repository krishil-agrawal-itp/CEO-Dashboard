import { SearchIcon, BellIcon } from "./icons";

export function Topbar({ title, date }: { title: string; date: string }) {
  return (
    <header className="flex shrink-0 items-center justify-between gap-4 px-6 py-5 lg:px-9">
      <div>
        <h1 className="text-[24px] font-bold tracking-tight text-[var(--ink-primary)]">
          {title}
        </h1>
        <p className="mt-0.5 text-[12.5px] font-medium text-[var(--ink-muted)]">{date}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink-primary)]"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          <SearchIcon className="h-[17px] w-[17px]" />
        </button>
        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)] transition-colors hover:text-[var(--ink-primary)]"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          <BellIcon className="h-[17px] w-[17px]" />
          <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
        </button>
      </div>
    </header>
  );
}
