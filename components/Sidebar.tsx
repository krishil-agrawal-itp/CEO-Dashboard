"use client";

import { useState } from "react";
import {
  DashboardIcon,
  ReportIcon,
  ProductsIcon,
  ConsumerIcon,
  TransactionsIcon,
  InvoicesIcon,
  SettingsIcon,
  FeedbackIcon,
  HelpIcon,
} from "./icons";

type NavItem = {
  id: string;
  label: string;
  icon: (props: { className?: string }) => React.ReactElement;
};

const menuItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
  { id: "report", label: "Report", icon: ReportIcon },
  { id: "products", label: "Products", icon: ProductsIcon },
  { id: "consumer", label: "Consumer", icon: ConsumerIcon },
];

const financialItems: NavItem[] = [
  { id: "transactions", label: "Transactions", icon: TransactionsIcon },
  { id: "invoices", label: "Invoices", icon: InvoicesIcon },
];

const toolItems: NavItem[] = [
  { id: "settings", label: "Settings", icon: SettingsIcon },
  { id: "feedback", label: "Feedback", icon: FeedbackIcon },
  { id: "help", label: "Help", icon: HelpIcon },
];

function NavSection({
  title,
  items,
  active,
  onSelect,
}: {
  title: string;
  items: NavItem[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mb-5">
      <p className="px-3 mb-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--ink-muted)]">
        {title}
      </p>
      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = item.id === active;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`group flex items-center gap-3 rounded-[var(--r-md)] px-3 py-2.5 text-[13.5px] font-medium transition-colors ${
                isActive
                  ? "bg-[var(--brand)] text-white"
                  : "text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)]"
              }`}
            >
              <Icon
                className={`h-[18px] w-[18px] shrink-0 ${
                  isActive ? "text-white" : "text-[var(--ink-muted)] group-hover:text-[var(--ink-secondary)]"
                }`}
              />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Sidebar() {
  const [active, setActive] = useState("report");

  return (
    <aside
      className="hidden lg:flex h-full w-[236px] shrink-0 flex-col rounded-[var(--r-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-6"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex items-center gap-2.5 px-2 mb-9">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVG mark, Image optimization adds no value here */}
        <img
          src="/brand/logo-mark-black.svg"
          alt=""
          width={24}
          height={24}
          className="shrink-0"
          style={{ filter: "brightness(0)" }}
        />
        <span className="text-[15px] font-bold tracking-tight text-[var(--ink-primary)]">
          Intuitive
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <NavSection title="Menu" items={menuItems} active={active} onSelect={setActive} />
        <NavSection title="Financial" items={financialItems} active={active} onSelect={setActive} />
        <NavSection title="Tools" items={toolItems} active={active} onSelect={setActive} />
      </nav>
    </aside>
  );
}
