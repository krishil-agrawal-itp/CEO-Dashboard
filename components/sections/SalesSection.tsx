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
        <Card title="Pipeline by Stage" subtitle="Open deals only — closed-won/lost excluded.">
          <SequentialBars items={data.funnel} />
        </Card>
        <Card title="Forecast vs Target" subtitle="This quarter, USD.">
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView label="Target" value={data.forecast.target} />
            <StatBlockView label="Commit" value={data.forecast.commit} sub={data.forecast.commitSub} />
            <StatBlockView label="Best Case" value={data.forecast.bestCase} />
            <StatBlockView label="Pipeline Coverage" value={data.forecast.coverage} sub={data.forecast.coverageSub} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Deals Needing Your Attention" subtitle="Sorted by why it needs you, not by value.">
          <Feed items={data.attentionFeed} />
        </Card>
        <Card title="Revenue Concentration" subtitle={data.concentrationSub}>
          <SequentialBars items={data.concentration} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Win / Loss Trend" subtitle="Deal count, last 6 months.">
          <StackedBar2 rows={data.winLoss} aLabel="Won" bLabel="Lost" />
        </Card>
        <Card title="Why We Lost" subtitle="Reason logged on closed-lost deals, last 6 months.">
          <SequentialBars items={data.winLossReasons} />
        </Card>
      </div>

      <Card title="Renewal Pipeline" subtitle="Existing accounts up for renewal in the next 120 days.">
        <DataTable columns={data.renewals.columns} rows={data.renewals.rows} />
      </Card>

      <Card title="Deals" subtitle="Showing 8 of 128 — most recent and at-risk.">
        <DataTable columns={data.deals.columns} rows={data.deals.rows} />
      </Card>
    </div>
  );
}
