import { SectionMeta } from "@/lib/types";
import { SalesIcon, DeliveryIcon, ProductsIcon, CertificationIcon, CalendarIcon } from "./icons";

const SECTION_ICON: Record<string, (props: { className?: string }) => React.ReactElement> = {
  sales: SalesIcon,
  deliveries: DeliveryIcon,
  products: ProductsIcon,
  certification: CertificationIcon,
  events: CalendarIcon,
};

export function Sidebar({
  sections,
  active,
  onSelect,
}: {
  sections: SectionMeta[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <aside
      className="hidden h-full w-[260px] shrink-0 flex-col overflow-hidden rounded-[var(--r-xl)] border border-[var(--border-subtle)] bg-[var(--surface)] lg:flex"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      {/* Brand mark */}
      <div className="relative overflow-hidden border-b border-[var(--border-subtle)] px-5 pb-5 pt-6">
        <div
          className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,58,227,0.12), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG mark */}
          <img
            src="/brand/logo-mark-black.svg"
            alt=""
            width={42}
            height={42}
            className="shrink-0"
            style={{ filter: "brightness(0)" }}
          />
          <div className="min-w-0">
            <p className="text-[20px] font-bold leading-none tracking-tight text-[var(--ink-primary)]">
              Intuitive
            </p>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Command Center
            </p>
          </div>
        </div>
      </div>

      <nav className="no-scrollbar flex-1 overflow-y-auto px-3 py-5">
        <p className="mb-2.5 px-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          Overview
        </p>
        <div className="flex flex-col gap-1">
          {sections.map((section) => {
            const isActive = section.id === active;
            const Icon = SECTION_ICON[section.id] ?? SalesIcon;
            return (
              <button
                key={section.id}
                onClick={() => onSelect(section.id)}
                className={`focus-ring group relative flex items-center gap-3 rounded-[var(--r-md)] px-3 py-3 text-[14.5px] font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)]"
                }`}
                style={isActive ? { boxShadow: "var(--shadow-brand)" } : undefined}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-white/90"
                    aria-hidden
                  />
                )}
                <Icon
                  className={`h-[18px] w-[18px] shrink-0 transition-colors ${
                    isActive ? "text-white" : "text-[var(--ink-muted)] group-hover:text-[var(--brand)]"
                  }`}
                />
                <span className="flex-1 text-left">{section.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Live status footer */}
      <div className="mx-3 mb-4 rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--surface-sunken)] px-3.5 py-3">
        <div className="flex items-center gap-2">
          <span className="live-dot h-2 w-2 rounded-full bg-[var(--brand)]" aria-hidden />
          <span className="text-[12px] font-bold text-[var(--ink-primary)]">Systems live</span>
        </div>
        <p className="mt-1 text-[11.5px] font-medium leading-snug text-[var(--ink-muted)]">
          Data synced · Q3 FY26 snapshot
        </p>
      </div>
    </aside>
  );
}
