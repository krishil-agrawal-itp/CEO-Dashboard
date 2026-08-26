import { ProductsSection as ProductsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { StatBlockView } from "../ui/StatBlockView";
import { SectionFrame } from "../controls/SectionFrame";

export function ProductsSection({ data }: { data: ProductsSectionData }) {
  return (
    <SectionFrame methodology="ARR is HubSpot recurring revenue on product-linked subscriptions. Adoption and reuse hours come from Beacon. At-risk ARR flags adoption decay ≥15% QoQ or EOL within 2 quarters without a replacement deal.">
      <Tile3 tiles={data.tiles} />

      <div className="panel-grid">
        <Card
          title="Reuse & pipeline leverage"
          subtitle="How much of delivery and sales leans on packaged IP."
          sources={["Beacon", "HubSpot"]}
          definition="Reuse = Beacon delivery hours tagged to an accelerator ÷ total delivery hours. Pipeline touch = HubSpot open pipeline with accelerator product line."
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <StatBlockView {...data.reuseStat} />
            <StatBlockView {...data.pipelineStat} />
          </div>
        </Card>
        <Card
          title="Decay signal"
          subtitle="Stated plainly — not left for you to read a chart."
          sources={["Beacon"]}
          definition="Beacon monthly active usage vs 6-month baseline. Decay ≥15% QoQ triggers Needs You."
        >
          <p className="text-[14px] font-medium leading-relaxed text-[var(--ink-secondary)]">{data.adoptionNote}</p>
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="ARR that can disappear"
          subtitle="Revenue at risk without a CEO or product action."
          sources={["Beacon", "HubSpot"]}
          definition="Subscription ARR on products with decay, EOL, or churn-linked renewals in the next 2 quarters."
        >
          <DataTable columns={data.atRisk.columns} rows={data.atRisk.rows} defaultSortKey="arr" />
        </Card>
        <Card
          title="On your product desk"
          subtitle="Attention products only — healthy GA catalogue omitted."
          sources={["Beacon"]}
          definition="Products with critical status: adoption decay, sunset without replacement, or renewal exposure."
        >
          <DataTable columns={data.attentionProducts.columns} rows={data.attentionProducts.rows} />
        </Card>
      </div>

      <Card
        title="Investment vs return"
        subtitle="Build + maintenance against ARR. Bottom of the table is the portfolio question."
        sources={["Beacon"]}
        definition="ROI = ARR ÷ (build + annual maintenance). Sort ascending to surface underperforming IP."
      >
        <DataTable columns={data.investment.columns} rows={data.investment.rows} defaultSortKey="roi" />
      </Card>
    </SectionFrame>
  );
}
