import { CertificationSection as CertificationSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { TierCard } from "../ui/TierCard";
import { StatBlockView } from "../ui/StatBlockView";
import { Feed } from "../ui/Feed";

export function CertificationSection({ data }: { data: CertificationSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Partner competency tiers"
        subtitle="Eligibility for co-sell funding, marketplace rank, and enterprise RFPs."
        sources={["Beacon"]}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {data.tiers.map((t) => (
            <TierCard key={t.vendor} {...t} />
          ))}
        </div>
      </Card>

      <div className="panel-grid">
        <Card
          title="Tier threats"
          subtitle="Cert expiries and gaps that can drop a partner tier — not the full cert inventory."
          sources={["Beacon"]}
        >
          <Feed items={data.tierThreats} />
        </Card>
        <Card
          title="Bench gaps where we are selling"
          subtitle="Only skills with a headcount shortfall against live pipeline demand."
          sources={["Beacon", "HubSpot"]}
        >
          <DataTable columns={data.benchReadiness.columns} rows={data.benchReadiness.rows} />
        </Card>
      </div>

      <div className="panel-grid">
        <Card title="Audit & compliance gates" subtitle="Controls that block deals if they slip." sources={["Beacon"]}>
          <DataTable columns={data.compliance.columns} rows={data.compliance.rows} />
        </Card>
        <Card title="Certification ROI" subtitle="Spend versus deal value that required a cert." sources={["Beacon", "HubSpot"]}>
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView {...data.spendStat} />
            <StatBlockView {...data.unlockedStat} />
          </div>
        </Card>
      </div>
    </div>
  );
}
