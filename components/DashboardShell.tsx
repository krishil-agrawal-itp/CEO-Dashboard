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
    <div className="flex h-screen w-screen gap-4 overflow-hidden bg-[var(--page)] p-4">
      <Sidebar sections={data.sections} active={active} onSelect={selectSection} />

      <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar title={activeMeta.label} description={activeMeta.description} />

        <main ref={mainRef} className="no-scrollbar min-h-0 flex-1 overflow-y-auto pb-6">
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
