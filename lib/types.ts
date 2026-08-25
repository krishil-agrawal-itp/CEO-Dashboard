/**
 * Data contracts for the CEO dashboard. Every widget renders strictly from
 * one of these shapes — nothing is read from ad-hoc props. To go live:
 * replace the mock data returned by `getDashboardData()` in `lib/data.ts`
 * with a real fetch/DB call that resolves to `DashboardData`. Nothing in
 * the components needs to change.
 */

export type StatusTone = "positive" | "neutral" | "watch" | "critical";

export interface StatusPillData {
  label: string;
  tone: StatusTone;
}

export interface SectionTiles {
  totalLabel: string;
  totalCount: number;
  totalUnit: string;
  totalValue: string;
  totalSub: string;
  ongoingCount: number;
  ongoingUnit: string;
  ongoingValue: string;
  ongoingSub: string;
  attentionCount: number;
  attentionUnit: string;
  attentionValue: string;
  attentionSub: string;
}

export interface TableColumn {
  key: string;
  label: string;
  align?: "left" | "right";
}

export interface TableRow {
  id: string;
  cells: Record<string, string | StatusPillData>;
}

export interface FeedItem {
  id: string;
  severity: "critical" | "watch";
  text: string;
  meta: string;
  action: string;
}

export interface BarItem {
  label: string;
  value: number;
  displayValue: string;
}

export interface StackedBarRow {
  label: string;
  aValue: number;
  bValue: number;
  displayA: string;
  displayB: string;
}

export interface HeatmapRow {
  label: string;
  values: number[];
}

export interface MilestoneItem {
  date: string;
  label: string;
  position: number; // 0-100, position along the timeline
}

export interface TierCardData {
  vendor: string;
  tier: string;
  gap: string;
  renewal: string;
  status: StatusPillData;
}

export interface StatBlock {
  label: string;
  value: string;
  sub?: string;
}

/* ---------------- Sales ---------------- */
export interface SalesSection {
  tiles: SectionTiles;
  funnel: BarItem[];
  forecast: { target: string; commit: string; commitSub: string; bestCase: string; coverage: string; coverageSub: string };
  attentionFeed: FeedItem[];
  concentration: BarItem[];
  concentrationSub: string;
  winLoss: StackedBarRow[];
  winLossReasons: BarItem[];
  renewals: { columns: TableColumn[]; rows: TableRow[] };
  deals: { columns: TableColumn[]; rows: TableRow[] };
}

/* ---------------- Deliveries ---------------- */
export interface DeliveriesSection {
  tiles: SectionTiles;
  projects: { columns: TableColumn[]; rows: TableRow[] };
  capacity: { columns: string[]; rows: HeatmapRow[] };
  clientHealth: { columns: TableColumn[]; rows: TableRow[] };
  margin: { columns: TableColumn[]; rows: TableRow[] };
  keyPersonRisk: FeedItem[];
  milestones: MilestoneItem[];
}

/* ---------------- Products ---------------- */
export interface ProductsSection {
  tiles: SectionTiles;
  reuseStat: StatBlock;
  pipelineStat: StatBlock;
  adoptionNote: string;
  atRisk: { columns: TableColumn[]; rows: TableRow[] };
  investment: { columns: TableColumn[]; rows: TableRow[] };
  products: { columns: TableColumn[]; rows: TableRow[] };
}

/* ---------------- Certification ---------------- */
export interface CertificationSection {
  tiles: SectionTiles;
  tiers: TierCardData[];
  benchReadiness: { columns: TableColumn[]; rows: TableRow[] };
  compliance: { columns: TableColumn[]; rows: TableRow[] };
  spendStat: StatBlock;
  unlockedStat: StatBlock;
  certifications: { columns: TableColumn[]; rows: TableRow[] };
}

/* ---------------- Event Planning ---------------- */
export interface EventsSection {
  tiles: SectionTiles;
  budgetByCategory: BarItem[];
  budgetPlanned: string;
  budgetSpent: string;
  followUpStat: StatBlock;
  followUpNote: string;
  pipelinePerEvent: { columns: TableColumn[]; rows: TableRow[] };
  mdf: { columns: TableColumn[]; rows: TableRow[] };
  events: { columns: TableColumn[]; rows: TableRow[] };
}

export interface SectionMeta {
  id: string;
  label: string;
  description: string;
  attentionBadge: number;
}

export interface DashboardData {
  sections: SectionMeta[];
  sales: SalesSection;
  deliveries: DeliveriesSection;
  products: ProductsSection;
  certification: CertificationSection;
  events: EventsSection;
}
