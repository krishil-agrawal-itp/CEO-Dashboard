import { SalesSection as SalesSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { SequentialBars } from "../ui/SequentialBars";
import { Feed } from "../ui/Feed";
import { StackedBar2 } from "../ui/StackedBar2";
import { DataTable } from "../ui/DataTable";
import { StatBlockView } from "../ui/StatBlockView";
import { SectionFrame } from "../controls/SectionFrame";

export function SalesSection({ data }: { data: SalesSectionData }) {
  return (
    <SectionFrame methodology="Commit is HubSpot weighted pipeline marked Commit by AE + manager. Coverage = open pipeline ÷ remaining target. Stalled = no stage movement >30 days or open pricing exception. Concentration uses open pipeline value by ultimate parent account.">
      <Tile3 tiles={data.tiles} />

      <div className="panel-grid">
        <Card
          title="Commit vs Target"
          subtitle="Your number for the quarter — Best Case is context, not the plan."
          sources={["HubSpot"]}
          definition="Target is board quota. Commit is manager-validated forecast. Gap = Target − Commit. Coverage healthy band is ≥3× remaining target."
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
        <Card
          title="Bookings pulse"
          subtitle="Closed-won and stall pressure this quarter."
          sources={["HubSpot"]}
          definition="Closed-won uses HubSpot close date in the selected range. Stalled $ is open deals with no stage change >30 days."
        >
          <div className="grid grid-cols-2 gap-3">
            {data.bookings.map((b) => (
              <StatBlockView key={b.label} {...b} />
            ))}
          </div>
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Open pipeline by stage"
          subtitle="Closed-won excluded — pure open risk."
          sources={["HubSpot"]}
          definition="Stage buckets from HubSpot deal stage. Amounts are amount-in-home-currency, unweighted."
        >
          <SequentialBars items={data.funnel} />
        </Card>
        <Card
          title="Needs your decision"
          subtitle="Stalled, pricing exceptions, or silent buyers — not a full CRM list."
          sources={["HubSpot"]}
          definition="CEO queue: contracting blockers, pricing exceptions >5 days, or buyer silence >14 days on deals ≥$5M."
        >
          <Feed items={data.attentionFeed} />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Revenue concentration"
          subtitle={data.concentrationSub}
          sources={["HubSpot"]}
          definition="Share of open pipeline by ultimate parent. Single-account >20% is a concentration flag."
        >
          <SequentialBars items={data.concentration} />
        </Card>
        <Card
          title="Renewals that can hurt"
          subtitle="≤60 days · risk or watch only — healthy renewals omitted."
          sources={["HubSpot"]}
          definition="Renewals with close date ≤60 days and health ≠ On Track. Risk joins delivery escalations from Beacon/Kantata."
        >
          <DataTable columns={data.renewals.columns} rows={data.renewals.rows} defaultSortKey="arr" />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Win / Loss trend"
          subtitle="Deal count, last 6 months."
          sources={["HubSpot"]}
          definition="Closed-won vs closed-lost deal count by close month. August is partial month."
        >
          <StackedBar2 rows={data.winLoss} aLabel="Won" bLabel="Lost" />
        </Card>
        <Card
          title="Why we lose"
          subtitle="Closed-lost primary reason — price still leads."
          sources={["HubSpot"]}
          definition="Primary closed-lost reason from HubSpot over the trailing 6 months. One reason per deal."
        >
          <SequentialBars items={data.winLossReasons} />
        </Card>
      </div>
    </SectionFrame>
  );
}
