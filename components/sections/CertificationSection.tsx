import { CertificationSection as CertificationSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { TierCard } from "../ui/TierCard";
import { StatBlockView } from "../ui/StatBlockView";
import { Feed } from "../ui/Feed";
import { SectionFrame } from "../controls/SectionFrame";
import { PartnerPathCard } from "../ui/PartnerPathCard";
import { AcceleratorCard } from "../ui/AcceleratorCard";

export function CertificationSection({ data }: { data: CertificationSectionData }) {
  return (
    <SectionFrame methodology="Partner tiers, employee cert coverage, and accelerator progress come from Beacon. Tier climb requirements (certs, business case studies, user stories) are vendor program rules. Spend = exam fees + training / cohort cost attributed to each cert family or accelerator.">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Partnership tiers by company"
        subtitle="Current published tier with each partner — AWS, Anthropic, Azure, GCP, Databricks, and more."
        sources={["Beacon"]}
        definition="Vendor-published competency / partnership level. Gap text is what blocks an upgrade or threatens the current tier."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {data.tiers.map((t) => (
            <TierCard key={t.vendor} {...t} />
          ))}
        </div>
      </Card>

      <Card
        title="How to increase each partnership tier"
        subtitle="Certifications, business case studies, and user stories required for the next tier — and the CEO action to get there."
        sources={["Beacon"]}
        definition="Have vs needed against the vendor's next-tier checklist. Bars turn brand blue when met; risk red when short."
      >
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-3">
          {data.partnerPaths.map((p) => (
            <PartnerPathCard key={p.vendor} {...p} />
          ))}
        </div>
      </Card>

      <Card
        title="Certification accelerators"
        subtitle="Company-run cohorts — including the Anthropic Claude Architect push to 150+ certified engineers."
        sources={["Beacon"]}
        definition="Accelerator = funded cohort with a headcount target, enrollment, certified count, window, and attributed spend."
      >
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {data.accelerators.map((a) => (
            <AcceleratorCard key={a.id} {...a} />
          ))}
        </div>
      </Card>

      <Card
        title="Employee certification coverage"
        subtitle="Who has the required cert, who is in an accelerator, and who is still a gap."
        sources={["Beacon"]}
        definition="Required cert is driven by partner-tier rules and live pipeline demand. Coverage = Done / In Progress / Gap."
      >
        <DataTable
          columns={data.employeeCoverage.columns}
          rows={data.employeeCoverage.rows}
          defaultSortKey="status"
        />
      </Card>

      <div className="panel-grid">
        <Card
          title="Spend by accelerator"
          subtitle="What we are putting behind each company-run certification cohort."
          sources={["Beacon"]}
          definition="Cohort budget: training + exam fees + ops. $ / seat = spend ÷ enrolled."
        >
          <DataTable
            columns={data.spendByAccelerator.columns}
            rows={data.spendByAccelerator.rows}
            defaultSortKey="spend"
          />
        </Card>
        <Card
          title="Spend by certification"
          subtitle="FY money on each certification family — exam fees vs training."
          sources={["Beacon"]}
          definition="Attributed FY spend per cert type. Includes accelerator seats that map to that cert."
        >
          <DataTable
            columns={data.spendByCertification.columns}
            rows={data.spendByCertification.rows}
            defaultSortKey="spend"
          />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Tier threats"
          subtitle="Expiries and shortfalls that can drop or stall a partner tier."
          sources={["Beacon"]}
          definition="Expiries ≤60 days, accelerator shortfalls, or headcount gaps against the next tier."
        >
          <Feed items={data.tierThreats} />
        </Card>
        <Card
          title="Bench gaps where we are selling"
          subtitle="Certified headcount vs skills demanded by open pipeline."
          sources={["Beacon", "HubSpot"]}
          definition="Needed = open HubSpot pipeline requiring the skill. Gap = certified − needed."
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
          title="Certification ROI & accelerator spend"
          subtitle="Training investment, unlocked deal value, and accelerator cash outlay."
          sources={["Beacon", "HubSpot"]}
          definition="Spend = FY training. Unlocked = closed-won citing a cert. Accelerator spend = sum of active/recent cohort budgets."
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <StatBlockView {...data.spendStat} />
            <StatBlockView {...data.unlockedStat} />
            <StatBlockView {...data.acceleratorSpendStat} />
          </div>
        </Card>
      </div>
    </SectionFrame>
  );
}
