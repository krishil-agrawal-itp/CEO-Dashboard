import { DeliveriesSection as DeliveriesSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { Heatmap } from "../ui/Heatmap";
import { Feed } from "../ui/Feed";
import { MilestoneTimeline } from "../ui/MilestoneTimeline";

export function DeliveriesSection({ data }: { data: DeliveriesSectionData }) {
  return (
    <div className="flex flex-col gap-4">
      <Tile3 tiles={data.tiles} />

      <Card title="Projects — Progress vs Budget Burn" subtitle="Burn ahead of progress is the tell. Showing 7 of 46.">
        <DataTable columns={data.projects.columns} rows={data.projects.rows} />
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card title="Delivery Capacity & Bench" subtitle="Utilisation % by practice, last 6 weeks.">
          <Heatmap columns={data.capacity.columns} rows={data.capacity.rows} />
        </Card>
        <Card title="Client Health" subtitle="Escalations in the last 30 days, self-reported NPS.">
          <DataTable columns={data.clientHealth.columns} rows={data.clientHealth.rows} />
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card title="Margin per Project" subtitle="Contract value vs delivery cost, this engagement to date.">
          <DataTable columns={data.margin.columns} rows={data.margin.rows} />
        </Card>
        <Card title="Key-Person Risk" subtitle="Single point of failure on active delivery.">
          <Feed items={data.keyPersonRisk} />
        </Card>
      </div>

      <Card title="Upcoming Milestones & Go-Lives" subtitle="This month.">
        <MilestoneTimeline items={data.milestones} />
      </Card>
    </div>
  );
}
