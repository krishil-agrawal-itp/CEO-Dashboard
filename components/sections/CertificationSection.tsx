import { CertificationSection as CertificationSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { TierCard } from "../ui/TierCard";
import { StatBlockView } from "../ui/StatBlockView";

export function CertificationSection({ data }: { data: CertificationSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Partner Competency Tiers"
        subtitle="The status our sales eligibility, co-sell funding and marketplace ranking depend on."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.tiers.map((t) => (
            <TierCard key={t.vendor} {...t} />
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Bench Readiness by Skill" subtitle="Certified headcount against what's currently being sold.">
          <DataTable columns={data.benchReadiness.columns} rows={data.benchReadiness.rows} />
        </Card>
        <Card title="Compliance & Mandatory Certifications" subtitle="Audit readiness, org-wide.">
          <DataTable columns={data.compliance.columns} rows={data.compliance.rows} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card title="Certification Investment & ROI" subtitle="This fiscal year.">
          <div className="grid grid-cols-2 gap-3">
            <StatBlockView {...data.spendStat} />
            <StatBlockView {...data.unlockedStat} />
          </div>
        </Card>
        <Card title="Certifications" subtitle="Showing 4 of 312 — expiring soonest first.">
          <DataTable columns={data.certifications.columns} rows={data.certifications.rows} />
        </Card>
      </div>
    </div>
  );
}
