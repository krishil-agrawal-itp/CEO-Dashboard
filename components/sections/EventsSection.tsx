import { EventsSection as EventsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { SequentialBars } from "../ui/SequentialBars";
import { StatBlockView } from "../ui/StatBlockView";

export function EventsSection({ data }: { data: EventsSectionData }) {
  return (
    <div className="flex flex-col gap-4">
      <Tile3 tiles={data.tiles} />

      <div className="grid grid-cols-2 gap-4">
        <Card title="Budget vs Actual" subtitle={`All 22 events, by category. Planned ${data.budgetPlanned} · spent to date ${data.budgetSpent}.`}>
          <SequentialBars items={data.budgetByCategory} />
        </Card>
        <Card title="Post-Event Follow-Up Rate" subtitle="% of leads contacted within 7 days of the event.">
          <StatBlockView {...data.followUpStat} sub={data.followUpNote} />
        </Card>
      </div>

      <Card title="Pipeline Generated per Event" subtitle="Leads and pipeline value against spend. Past events are actuals; future events are projected.">
        <DataTable columns={data.pipelinePerEvent.columns} rows={data.pipelinePerEvent.rows} />
      </Card>

      <Card title="Partner Co-Marketing / MDF" subtitle="Marketing development funds — easy to let expire unused.">
        <DataTable columns={data.mdf.columns} rows={data.mdf.rows} />
      </Card>

      <Card title="Events" subtitle="Showing 7 of 22 — soonest first.">
        <DataTable columns={data.events.columns} rows={data.events.rows} />
      </Card>
    </div>
  );
}
