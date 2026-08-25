"use client";

import { useRef, useState } from "react";
import { DashboardData } from "@/lib/types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { SalesSection } from "./sections/SalesSection";
import { DeliveriesSection } from "./sections/DeliveriesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { CertificationSection } from "./sections/CertificationSection";
import { EventsSection } from "./sections/EventsSection";
import { SalesIcon, DeliveryIcon, ProductsIcon, CertificationIcon, CalendarIcon } from "./icons";

const SECTION_ICON: Record<string, (props: { className?: string }) => React.ReactElement> = {
  sales: SalesIcon,
  deliveries: DeliveryIcon,
  products: ProductsIcon,
  certification: CertificationIcon,
  events: CalendarIcon,
};

export function DashboardShell({ data }: { data: DashboardData }) {
  const [active, setActive] = useState(data.sections[0].id);
  const activeMeta = data.sections.find((s) => s.id === active) ?? data.sections[0];
  const mainRef = useRef<HTMLElement>(null);

  function selectSection(id: string) {
    setActive(id);
    // The scroll container persists across section switches (it's the same
    // <main>, only its children change) — reset it, or a section shorter
    // than the last one opens mid-scroll instead of at the top.
    mainRef.current?.scrollTo({ top: 0 });
  }

  return (
    <div className="page-atmosphere flex h-screen w-screen gap-4 overflow-hidden p-3 sm:p-4 lg:p-5">
      <Sidebar sections={data.sections} active={active} onSelect={selectSection} />

      <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar title={activeMeta.label} description={activeMeta.description} />

        {/* Mobile section switcher — sidebar is desktop-only */}
        <div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto pb-0.5 lg:hidden">
          {data.sections.map((section) => {
            const isActive = section.id === active;
            const Icon = SECTION_ICON[section.id] ?? SalesIcon;
            return (
              <button
                key={section.id}
                onClick={() => selectSection(section.id)}
                className={`focus-ring inline-flex shrink-0 items-center gap-2 rounded-[var(--r-pill)] px-3.5 py-2 text-[13px] font-bold transition-all ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--ink-secondary)]"
                }`}
                style={isActive ? { boxShadow: "var(--shadow-brand)" } : undefined}
              >
                <Icon className="h-4 w-4" />
                {section.label}
              </button>
            );
          })}
        </div>

        <main ref={mainRef} className="no-scrollbar min-h-0 flex-1 overflow-y-auto pb-4 pr-0.5">
          <div key={active} className="section-enter">
            {active === "sales" && <SalesSection data={data.sales} />}
            {active === "deliveries" && <DeliveriesSection data={data.deliveries} />}
            {active === "products" && <ProductsSection data={data.products} />}
            {active === "certification" && <CertificationSection data={data.certification} />}
            {active === "events" && <EventsSection data={data.events} />}
          </div>
        </main>
      </div>
    </div>
  );
}
