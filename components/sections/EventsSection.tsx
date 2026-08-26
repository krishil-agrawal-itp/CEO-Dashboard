import { EventsSection as EventsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { SequentialBars } from "../ui/SequentialBars";
import { StatBlockView } from "../ui/StatBlockView";

export function EventsSection({ data }: { data: EventsSectionData }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <Tile3 tiles={data.tiles} />

      <div className="panel-grid">
        <Card
          title="Budget vs actual"
          subtitle={`Revenue events only. Planned ${data.budgetPlanned} · spent ${data.budgetSpent}.`}
          sources={["HubSpot"]}
        >
          <SequentialBars items={data.budgetByCategory} />
        </Card>
        <Card
          title="Follow-up leakage"
          subtitle="% of leads contacted within 7 days — where event ROI quietly dies."
          sources={["HubSpot"]}
        >
          <StatBlockView {...data.followUpStat} sub={data.followUpNote} />
        </Card>
      </div>

      <Card
        title="Pipeline generated per event"
        subtitle="Spend against leads and pipeline. Past = actuals; future = projected."
        sources={["HubSpot"]}
      >
        <DataTable columns={data.pipelinePerEvent.columns} rows={data.pipelinePerEvent.rows} />
      </Card>

      <div className="panel-grid">
        <Card
          title="Partner MDF"
          subtitle="Money that expires unused — a CEO allocation call."
          sources={["HubSpot"]}
        >
          <DataTable columns={data.mdf.columns} rows={data.mdf.rows} />
        </Card>
        <Card
          title="Blocked revenue events"
          subtitle="Internal offsights and galas removed. Only demand gen with a blocker."
          sources={["HubSpot"]}
        >
          <DataTable columns={data.attentionEvents.columns} rows={data.attentionEvents.rows} />
        </Card>
      </div>
    </div>
  );
}
