import { ProductsSection as ProductsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { StatBlockView } from "../ui/StatBlockView";

export function ProductsSection({ data }: { data: ProductsSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <div className="panel-grid">
        <Card
          title="Reuse & pipeline leverage"
          subtitle="How much of delivery and sales leans on packaged IP."
          sources={["Beacon", "HubSpot"]}
        >
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView {...data.reuseStat} />
            <StatBlockView {...data.pipelineStat} />
          </div>
        </Card>
        <Card title="Decay signal" subtitle="Stated plainly — not left for you to read a chart." sources={["Beacon"]}>
          <p className="text-[15px] font-medium leading-relaxed text-[var(--ink-secondary)]">
            {data.adoptionNote}
          </p>
        </Card>
      </div>

      <div className="panel-grid">
        <Card title="ARR that can disappear" subtitle="Revenue at risk without a CEO or product action." sources={["Beacon", "HubSpot"]}>
          <DataTable columns={data.atRisk.columns} rows={data.atRisk.rows} />
        </Card>
        <Card title="On your product desk" subtitle="Attention products only — healthy GA catalogue omitted." sources={["Beacon"]}>
          <DataTable columns={data.attentionProducts.columns} rows={data.attentionProducts.rows} />
        </Card>
      </div>

      <Card
        title="Investment vs return"
        subtitle="Build + maintenance against ARR. Bottom of the table is the portfolio question."
        sources={["Beacon"]}
      >
        <DataTable columns={data.investment.columns} rows={data.investment.rows} />
      </Card>
    </div>
  );
}
