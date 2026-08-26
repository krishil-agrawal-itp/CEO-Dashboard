import { CertificationSection as CertificationSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { TierCard } from "../ui/TierCard";
import { StatBlockView } from "../ui/StatBlockView";
import { Feed } from "../ui/Feed";
import { SectionFrame } from "../controls/SectionFrame";

export function CertificationSection({ data }: { data: CertificationSectionData }) {
  return (
    <SectionFrame methodology="Partner tiers and cert inventory come from Beacon. Bench gaps compare certified headcount to HubSpot skills demanded by open pipeline this quarter. Unlocked deal value = HubSpot closed-won where a cert was a stated requirement.">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Partner competency tiers"
        subtitle="Eligibility for co-sell funding, marketplace rank, and enterprise RFPs."
        sources={["Beacon"]}
        definition="Vendor-published competency level. Gap text is the next requirement blocking an upgrade or defending current tier."
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
          definition="Expiries ≤60 days or headcount shortfalls that would drop the published partner tier."
        >
          <Feed items={data.tierThreats} />
        </Card>
        <Card
          title="Bench gaps where we are selling"
          subtitle="Only skills with a headcount shortfall against live pipeline demand."
          sources={["Beacon", "HubSpot"]}
          definition="Needed = open HubSpot pipeline requiring the skill. Gap = certified − needed. Zero/positive gaps omitted."
        >
          <DataTable columns={data.benchReadiness.columns} rows={data.benchReadiness.rows} defaultSortKey="gap" />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Audit & compliance gates"
          subtitle="Controls that block deals if they slip."
          sources={["Beacon"]}
          definition="Org controls with an upcoming audit date. At Risk = completion below audit threshold."
        >
          <DataTable columns={data.compliance.columns} rows={data.compliance.rows} />
        </Card>
        <Card
          title="Certification ROI"
          subtitle="Spend versus deal value that required a cert."
          sources={["Beacon", "HubSpot"]}
          definition="Spend is FY training cost. Unlocked = closed-won where a cert was cited as a deal requirement."
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <StatBlockView {...data.spendStat} />
            <StatBlockView {...data.unlockedStat} />
          </div>
        </Card>
      </div>
    </SectionFrame>
  );
}
