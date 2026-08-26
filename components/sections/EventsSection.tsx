import { EventsSection as EventsSectionData } from "@/lib/types";
import { Tile3 } from "../ui/Tile3";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { SequentialBars } from "../ui/SequentialBars";
import { StatBlockView } from "../ui/StatBlockView";
import { SectionFrame } from "../controls/SectionFrame";

export function EventsSection({ data }: { data: EventsSectionData }) {
  return (
    <SectionFrame methodology="Pipeline and leads are HubSpot campaign attributions within 30 days of the event. Follow-up rate = % of event leads with a logged contact ≤7 days. MDF remaining is partner marketing funds with a hard expiry. Internal offsights are excluded from demand spend.">
      <Tile3 tiles={data.tiles} />

      <div className="panel-grid">
        <Card
          title="Budget vs actual"
          subtitle={`Revenue events only. Planned ${data.budgetPlanned} · spent ${data.budgetSpent}.`}
          sources={["HubSpot"]}
          definition="Category spend for revenue events in the selected range. Internal social/offsite excluded."
        >
          <SequentialBars items={data.budgetByCategory} />
        </Card>
        <Card
          title="Follow-up leakage"
          subtitle="% of leads contacted within 7 days — where event ROI quietly dies."
          sources={["HubSpot"]}
          definition="Org-wide trailing 90 days. Worst event is named so the leak is actionable."
        >
          <StatBlockView {...data.followUpStat} sub={data.followUpNote} />
        </Card>
      </div>

      <Card
        title="Pipeline generated per event"
        subtitle="Spend against leads and pipeline. Past = actuals; future = projected."
        sources={["HubSpot"]}
        definition="ROI = attributed pipeline ÷ spend. Future events use projected leads/pipeline from the campaign plan."
      >
        <DataTable columns={data.pipelinePerEvent.columns} rows={data.pipelinePerEvent.rows} defaultSortKey="roi" />
      </Card>

      <div className="panel-grid">
        <Card
          title="Partner MDF"
          subtitle="Money that expires unused — a CEO allocation call."
          sources={["HubSpot"]}
          definition="Marketing development funds by vendor. Critical = remaining balance with ≤45 days to expiry."
        >
          <DataTable columns={data.mdf.columns} rows={data.mdf.rows} />
        </Card>
        <Card
          title="Blocked revenue events"
          subtitle="Internal offsights and galas removed. Only demand gen with a blocker."
          sources={["HubSpot"]}
          definition="Revenue events with an open blocker: speaker, venue, budget, or campaign not live."
        >
          <DataTable columns={data.attentionEvents.columns} rows={data.attentionEvents.rows} />
        </Card>
      </div>
    </SectionFrame>
  );
}
