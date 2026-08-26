import { BriefSection as BriefSectionData } from "@/lib/types";
import { Card } from "../ui/Card";
import { Feed } from "../ui/Feed";
import { StatBlockView } from "../ui/StatBlockView";
import { SourceChip } from "../ui/SourceChip";
import { SectionFrame } from "../controls/SectionFrame";

export function BriefSection({ data }: { data: BriefSectionData }) {
  return (
    <SectionFrame methodology="Brief is generated from overnight deltas across HubSpot, Kantata, and Beacon. Decisions are items with a CEO-only approval flag or escalation owner = Executive. Pulse metrics inherit the global time range and risk lens.">
      <Card className="!p-5 sm:!p-6">
        <div>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
            Morning brief · {data.generatedAt}
          </p>
          <h2 className="mt-2 max-w-4xl text-[20px] font-bold leading-snug tracking-tight text-[var(--ink-primary)] sm:text-[22px] xl:text-[24px]">
            {data.headline}
          </h2>
        </div>
        <div className="mt-5 space-y-3">
          {data.paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="max-w-4xl text-[14px] font-medium leading-relaxed text-[var(--ink-secondary)] sm:text-[15px]"
            >
              {p}
            </p>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {data.pulse.map((stat) => (
          <StatBlockView key={stat.label} {...stat} />
        ))}
      </div>

      <div className="panel-grid">
        <Card
          title="Waiting on you"
          subtitle="Approvals and calls only the CEO can make. Clear these first."
          sources={["HubSpot", "Kantata"]}
          tag={`${data.decisions.length}`}
          definition="Items with approval owner = CEO, or escalations that block ≥$5M revenue / delivery."
        >
          <Feed items={data.decisions} />
        </Card>
        <Card
          title="What changed overnight"
          subtitle="Cross-system delta since yesterday's brief."
          sources={["HubSpot", "Kantata", "Beacon"]}
          definition="Material changes since prior brief: stage moves, silence breaches, closed-won, burn threshold crossings."
        >
          <Feed items={data.overnight} />
        </Card>
      </div>

      <Card
        title="System integrity"
        subtitle="Freshness of the three feeds this desk depends on."
        definition="Live ≤30m lag. Delayed = 30m–4h. Offline = connector error or >4h stale."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {data.systems.map((sys) => {
            const tone =
              sys.status === "live" ? "positive" : sys.status === "delayed" ? "watch" : "critical";
            const badge =
              tone === "positive"
                ? { bg: "var(--brand-soft)", fg: "var(--brand)", label: "Live" }
                : tone === "watch"
                  ? { bg: "var(--surface-sunken)", fg: "var(--ink-primary)", label: "Delayed" }
                  : { bg: "var(--risk-soft)", fg: "var(--risk)", label: "Offline" };
            return (
              <div
                key={sys.name}
                className="rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-[var(--surface-sunken)] p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <SourceChip source={sys.name} />
                  <span
                    className="rounded-[var(--r-pill)] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.06em]"
                    style={{ background: badge.bg, color: badge.fg }}
                  >
                    {badge.label}
                  </span>
                </div>
                <p className="mt-3 text-[13px] font-medium leading-snug text-[var(--ink-secondary)]">
                  {sys.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </SectionFrame>
  );
}
