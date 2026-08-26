import { DeliveriesSection as DeliveriesSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { Feed } from "../ui/Feed";
import { MilestoneTimeline } from "../ui/MilestoneTimeline";
import { SequentialBars } from "../ui/SequentialBars";
import { SectionFrame } from "../controls/SectionFrame";

export function DeliveriesSection({ data }: { data: DeliveriesSectionData }) {
  return (
    <SectionFrame methodology="Burn and progress come from Kantata (hours posted ÷ budget hours vs % complete). Silence is Beacon-only: no status, timesheet, or client note past the practice threshold (default 7 days). Margin target is 28% contribution. Capacity alerts show practices ≥90% or ≤50% utilisation.">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Projects on your radar"
        subtitle="Only burn-ahead, silent, or client-red work. Healthy projects stay off this desk."
        sources={["Kantata", "Beacon"]}
        definition="Shown when burn − progress ≥15 pts, Beacon silence ≥7 days, or linked account health is Critical/Watch."
      >
        <DataTable columns={data.atRiskProjects.columns} rows={data.atRiskProjects.rows} defaultSortKey="burn" />
      </Card>

      <div className="panel-grid">
        <Card
          title="Silent projects"
          subtitle="Beacon detects no status / timesheet / client update past threshold. Kantata cannot see silence."
          sources={["Beacon"]}
          definition="Silence = no Beacon check-in, timesheet, or client note for N days (practice default 7; critical at 12)."
        >
          <Feed items={data.silentProjects} />
        </Card>
        <Card
          title="Key-person risk"
          subtitle="Single points of failure on active revenue delivery."
          sources={["Kantata", "Beacon"]}
          definition="Named individual is sole certified lead or rolls off within 30 days with no backfill in Kantata."
        >
          <Feed items={data.keyPersonRisk} />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Capacity pressure"
          subtitle="Practice utilisation extremes — overallocated vs bench. Not a weekly heatmap."
          sources={["Kantata"]}
          definition="Trailing 6-week average utilisation. Over = ≥90%. Bench = ≤50%. Mid-band practices are omitted."
        >
          <SequentialBars items={data.capacityAlerts} />
        </Card>
        <Card
          title="Client health (red / watch)"
          subtitle="Green accounts omitted. Escalations + NPS + commercial exposure."
          sources={["Beacon", "HubSpot"]}
          definition="Health score blends open escalations, NPS, and linked delivery risk. Green accounts are filtered out."
        >
          <DataTable columns={data.clientHealth.columns} rows={data.clientHealth.rows} defaultSortKey="nps" />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Margin below target"
          subtitle="Only engagements under the 28% delivery target."
          sources={["Kantata"]}
          definition="Contribution margin = (contract − delivery cost) ÷ contract. Target band is ≥28%."
        >
          <DataTable columns={data.marginRisk.columns} rows={data.marginRisk.rows} defaultSortKey="margin" />
        </Card>
        <Card
          title="Go-lives this month"
          subtitle="Milestones that create client or reputational risk if missed."
          sources={["Beacon"]}
          definition="Beacon milestones tagged Go-Live / Cutover / UAT sign-off in the current calendar month."
        >
          <MilestoneTimeline items={data.milestones} />
        </Card>
      </div>
    </SectionFrame>
  );
}
