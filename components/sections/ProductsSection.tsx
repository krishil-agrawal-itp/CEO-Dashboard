import { ProductsSection as ProductsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { StatBlockView } from "../ui/StatBlockView";

export function ProductsSection({ data }: { data: ProductsSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Reuse Across the Business" subtitle="How much of delivery and sales leans on packaged IP.">
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView {...data.reuseStat} />
            <StatBlockView {...data.pipelineStat} />
          </div>
        </Card>
        <Card title="Adoption Trend & Decay Signal" subtitle="Monthly active usage across the accelerator portfolio.">
          <p className="text-[14px] font-medium leading-relaxed text-[var(--ink-secondary)]">{data.adoptionNote}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="At-Risk ARR" subtitle="Revenue that could disappear without action.">
          <DataTable columns={data.atRisk.columns} rows={data.atRisk.rows} />
        </Card>
        <Card title="Investment vs Return" subtitle="Build + maintenance cost against ARR generated.">
          <DataTable columns={data.investment.columns} rows={data.investment.rows} />
        </Card>
      </div>

      <Card title="Products & Accelerators" subtitle="Showing 7 of 18.">
        <DataTable columns={data.products.columns} rows={data.products.rows} />
      </Card>
    </div>
  );
}
