export function Topbar({ title, description }: { title: string; description: string }) {
  return (
    <header className="flex shrink-0 items-center justify-between gap-4 px-6 py-5 lg:px-9">
      <div>
        <h1 className="text-[32px] font-bold tracking-tight text-[var(--ink-primary)]">{title}</h1>
        <p className="mt-1 text-[15px] font-medium text-[var(--ink-muted)]">{description}</p>
      </div>
    </header>
  );
}
