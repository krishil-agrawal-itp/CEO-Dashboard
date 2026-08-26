"use client";

import { useRef, useState } from "react";
import { DashboardData } from "@/lib/types";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { BriefSection } from "./sections/BriefSection";
import { SalesSection } from "./sections/SalesSection";
import { DeliveriesSection } from "./sections/DeliveriesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { CertificationSection } from "./sections/CertificationSection";
import { EventsSection } from "./sections/EventsSection";
import { DashboardControlsProvider } from "./controls/DashboardControlsContext";
import { ControlBar } from "./controls/ControlBar";
import {
  BriefIcon,
  SalesIcon,
  DeliveryIcon,
  ProductsIcon,
  CertificationIcon,
  CalendarIcon,
} from "./icons";

const SECTION_ICON: Record<string, (props: { className?: string }) => React.ReactElement> = {
  brief: BriefIcon,
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
  const decisionsWaiting = data.brief.decisions.length;

  function selectSection(id: string) {
    setActive(id);
    mainRef.current?.scrollTo({ top: 0 });
  }

  return (
    <DashboardControlsProvider>
      <div className="page-atmosphere flex h-dvh w-full max-w-[100vw] gap-3 overflow-hidden p-2 sm:p-3 xl:gap-4 xl:p-4">
        <Sidebar sections={data.sections} active={active} onSelect={selectSection} />

        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
          <Topbar
            title={activeMeta.label}
            description={activeMeta.description}
            sources={activeMeta.sources}
            decisionsWaiting={decisionsWaiting}
          />

          <div className="no-scrollbar mb-2 flex gap-2 overflow-x-auto pb-0.5 lg:hidden">
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
                  {section.attentionBadge > 0 && (
                    <span
                      className={`tabular-nums rounded-full px-1.5 text-[10px] ${
                        isActive ? "bg-white/20" : "bg-[var(--risk-soft)] text-[var(--risk)]"
                      }`}
                    >
                      {section.attentionBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="px-0 sm:px-0">
            <ControlBar />
          </div>

          <main
            ref={mainRef}
            className="no-scrollbar min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto pb-4"
          >
            <div key={active} className="section-enter">
              {active === "brief" && <BriefSection data={data.brief} />}
              {active === "sales" && <SalesSection data={data.sales} />}
              {active === "deliveries" && <DeliveriesSection data={data.deliveries} />}
              {active === "products" && <ProductsSection data={data.products} />}
              {active === "certification" && <CertificationSection data={data.certification} />}
              {active === "events" && <EventsSection data={data.events} />}
            </div>
          </main>
        </div>
      </div>
    </DashboardControlsProvider>
  );
}
