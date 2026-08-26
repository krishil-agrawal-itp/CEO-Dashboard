import { DeliveriesSection as DeliveriesSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { Feed } from "../ui/Feed";
import { MilestoneTimeline } from "../ui/MilestoneTimeline";
import { SequentialBars } from "../ui/SequentialBars";

export function DeliveriesSection({ data }: { data: DeliveriesSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <Card
        title="Projects on your radar"
        subtitle="Only burn-ahead, silent, or client-red work. Healthy projects stay off this desk."
        sources={["Kantata", "Beacon"]}
      >
        <DataTable columns={data.atRiskProjects.columns} rows={data.atRiskProjects.rows} />
      </Card>

      <div className="panel-grid">
        <Card
          title="Silent projects"
          subtitle="Beacon detects no status / timesheet / client update past threshold. Kantata cannot see silence."
          sources={["Beacon"]}
        >
          <Feed items={data.silentProjects} />
        </Card>
        <Card
          title="Key-person risk"
          subtitle="Single points of failure on active revenue delivery."
          sources={["Kantata", "Beacon"]}
        >
          <Feed items={data.keyPersonRisk} />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Capacity pressure"
          subtitle="Practice utilisation extremes — overallocated vs bench. Not a weekly heatmap."
          sources={["Kantata"]}
        >
          <SequentialBars items={data.capacityAlerts} />
        </Card>
        <Card
          title="Client health (red / watch)"
          subtitle="Green accounts omitted. Escalations + NPS + commercial exposure."
          sources={["Beacon", "HubSpot"]}
        >
          <DataTable columns={data.clientHealth.columns} rows={data.clientHealth.rows} />
        </Card>
      </div>

      <div className="panel-grid">
        <Card
          title="Margin below target"
          subtitle="Only engagements under the 28% delivery target."
          sources={["Kantata"]}
        >
          <DataTable columns={data.marginRisk.columns} rows={data.marginRisk.rows} />
        </Card>
        <Card title="Go-lives this month" subtitle="Milestones that create client or reputational risk if missed." sources={["Beacon"]}>
          <MilestoneTimeline items={data.milestones} />
        </Card>
      </div>
    </div>
  );
}
