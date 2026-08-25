/**
 * CEO-private Command Center contracts.
 * Sources: HubSpot (revenue), Kantata (delivery PSA), Beacon (internal projects).
 * Every widget is scoped to decisions and risk — not operational CRM/PSA detail.
 */

export type StatusTone = "positive" | "neutral" | "watch" | "critical";
export type DataSource = "HubSpot" | "Kantata" | "Beacon";

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
  source?: DataSource;
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
  position: number;
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

export interface SystemStatus {
  name: DataSource;
  status: "live" | "delayed" | "offline";
  detail: string;
}

/* ---------------- Morning Brief (CEO home) ---------------- */
export interface BriefSection {
  generatedAt: string;
  headline: string;
  paragraphs: string[];
  decisions: FeedItem[];
  overnight: FeedItem[];
  pulse: StatBlock[];
  systems: SystemStatus[];
}

/* ---------------- Sales — HubSpot ---------------- */
export interface SalesSection {
  tiles: SectionTiles;
  funnel: BarItem[];
  forecast: {
    target: string;
    commit: string;
    commitSub: string;
    bestCase: string;
    coverage: string;
    coverageSub: string;
    gap: string;
    gapSub: string;
  };
  bookings: StatBlock[];
  attentionFeed: FeedItem[];
  concentration: BarItem[];
  concentrationSub: string;
  winLoss: StackedBarRow[];
  winLossReasons: BarItem[];
  renewals: { columns: TableColumn[]; rows: TableRow[] };
}

/* ---------------- Deliveries — Kantata + Beacon ---------------- */
export interface DeliveriesSection {
  tiles: SectionTiles;
  atRiskProjects: { columns: TableColumn[]; rows: TableRow[] };
  silentProjects: FeedItem[];
  capacityAlerts: BarItem[];
  clientHealth: { columns: TableColumn[]; rows: TableRow[] };
  marginRisk: { columns: TableColumn[]; rows: TableRow[] };
  keyPersonRisk: FeedItem[];
  milestones: MilestoneItem[];
}

/* ---------------- Products / Accelerators ---------------- */
export interface ProductsSection {
  tiles: SectionTiles;
  reuseStat: StatBlock;
  pipelineStat: StatBlock;
  adoptionNote: string;
  atRisk: { columns: TableColumn[]; rows: TableRow[] };
  investment: { columns: TableColumn[]; rows: TableRow[] };
  attentionProducts: { columns: TableColumn[]; rows: TableRow[] };
}

/* ---------------- Certification / Partner eligibility ---------------- */
export interface CertificationSection {
  tiles: SectionTiles;
  tiers: TierCardData[];
  benchReadiness: { columns: TableColumn[]; rows: TableRow[] };
  compliance: { columns: TableColumn[]; rows: TableRow[] };
  spendStat: StatBlock;
  unlockedStat: StatBlock;
  tierThreats: FeedItem[];
}

/* ---------------- Events / Demand gen ROI ---------------- */
export interface EventsSection {
  tiles: SectionTiles;
  budgetByCategory: BarItem[];
  budgetPlanned: string;
  budgetSpent: string;
  followUpStat: StatBlock;
  followUpNote: string;
  pipelinePerEvent: { columns: TableColumn[]; rows: TableRow[] };
  mdf: { columns: TableColumn[]; rows: TableRow[] };
  attentionEvents: { columns: TableColumn[]; rows: TableRow[] };
}

export interface SectionMeta {
  id: string;
  label: string;
  description: string;
  attentionBadge: number;
  sources: DataSource[];
}

export interface DashboardData {
  sections: SectionMeta[];
  brief: BriefSection;
  sales: SalesSection;
  deliveries: DeliveriesSection;
  products: ProductsSection;
  certification: CertificationSection;
  events: EventsSection;
}
