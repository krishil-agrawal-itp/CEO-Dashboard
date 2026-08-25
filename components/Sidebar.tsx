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
      className="hidden lg:flex h-full w-[240px] shrink-0 flex-col rounded-[var(--r-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-6"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex items-center gap-3 px-2 mb-9">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG mark, Image optimization adds no value here */}
        <img
          src="/brand/logo-mark-black.svg"
          alt=""
          width={44}
          height={44}
          className="shrink-0"
          style={{ filter: "brightness(0)" }}
        />
        <span className="text-[22px] font-bold tracking-tight text-[var(--ink-primary)]">
          Intuitive
        </span>
      </div>

      <nav className="no-scrollbar flex-1 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {sections.map((section) => {
            const isActive = section.id === active;
            const Icon = SECTION_ICON[section.id] ?? SalesIcon;
            return (
              <button
                key={section.id}
                onClick={() => onSelect(section.id)}
                className={`group flex items-center gap-3 rounded-[var(--r-md)] px-3 py-3 text-[15px] font-bold transition-colors ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)]"
                }`}
              >
                <Icon
                  className={`h-[20px] w-[20px] shrink-0 ${
                    isActive ? "text-white" : "text-[var(--ink-muted)] group-hover:text-[var(--ink-secondary)]"
                  }`}
                />
                <span className="flex-1 text-left">{section.label}</span>
                {section.attentionBadge > 0 && (
                  <span
                    className="rounded-[var(--r-pill)] px-2 py-0.5 text-[11px] font-bold"
                    style={
                      isActive
                        ? { background: "rgba(255,255,255,0.2)", color: "#ffffff" }
                        : { background: "#101010", color: "#ffffff" }
                    }
                  >
                    {section.attentionBadge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
