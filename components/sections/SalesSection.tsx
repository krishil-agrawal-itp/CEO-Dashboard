import { SalesSection as SalesSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { SequentialBars } from "../ui/SequentialBars";
import { Feed } from "../ui/Feed";
import { StackedBar2 } from "../ui/StackedBar2";
import { DataTable } from "../ui/DataTable";
import { StatBlockView } from "../ui/StatBlockView";

export function SalesSection({ data }: { data: SalesSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card
          title="Commit vs Target"
          subtitle="Your number for the quarter — Best Case is context, not the plan."
          sources={["HubSpot"]}
        >
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView label="Target" value={data.forecast.target} />
            <StatBlockView label="Commit" value={data.forecast.commit} sub={data.forecast.commitSub} />
            <StatBlockView label="Gap to target" value={data.forecast.gap} sub={data.forecast.gapSub} />
            <StatBlockView label="Coverage" value={data.forecast.coverage} sub={data.forecast.coverageSub} />
          </div>
          <p className="mt-3 text-[12.5px] font-medium text-[var(--ink-muted)]">
            Best case {data.forecast.bestCase} — upside only, not accountable.
          </p>
        </Card>
        <Card title="Bookings pulse" subtitle="Closed-won and stall pressure this quarter." sources={["HubSpot"]}>
          <div className="grid grid-cols-2 gap-3">
            {data.bookings.map((b) => (
              <StatBlockView key={b.label} {...b} />
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Open pipeline by stage" subtitle="Closed-won excluded — pure open risk." sources={["HubSpot"]}>
          <SequentialBars items={data.funnel} />
        </Card>
        <Card
          title="Needs your decision"
          subtitle="Stalled, pricing exceptions, or silent buyers — not a full CRM list."
          sources={["HubSpot"]}
        >
          <Feed items={data.attentionFeed} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Revenue concentration" subtitle={data.concentrationSub} sources={["HubSpot"]}>
          <SequentialBars items={data.concentration} />
        </Card>
        <Card title="Renewals that can hurt" subtitle="≤60 days · risk or watch only — healthy renewals omitted." sources={["HubSpot"]}>
          <DataTable columns={data.renewals.columns} rows={data.renewals.rows} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Win / Loss trend" subtitle="Deal count, last 6 months." sources={["HubSpot"]}>
          <StackedBar2 rows={data.winLoss} aLabel="Won" bLabel="Lost" />
        </Card>
        <Card title="Why we lose" subtitle="Closed-lost primary reason — price still leads." sources={["HubSpot"]}>
          <SequentialBars items={data.winLossReasons} />
        </Card>
      </div>
    </div>
  );
}
