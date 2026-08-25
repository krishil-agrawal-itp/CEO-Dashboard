import {
  DashboardData,
  TableColumn,
  TableRow,
  StatusTone,
} from "./types";

/**
 * Placeholder data, ported from CEO-DASHBOARD-WIREFRAME-V2.html, converted
 * from INR (Cr/L) to USD ($M/$K; 1 Cr -> $1M, 1 L -> $10K) per request.
 *
 * To go live: replace the body of `getDashboardData()` with a real call
 * (REST endpoint, database query, MCP tool, whatever the source system is)
 * per section, resolving to a `DashboardData` object. Every component
 * downstream reads only from that type, so nothing else needs to change.
 */

function status(label: string, tone: StatusTone) {
  return { status: { label, tone } };
}

/** For status-pill columns whose key isn't literally "status" (risk, health, flag, selling...). */
function statusAt(key: string, label: string, tone: StatusTone) {
  return { [key]: { label, tone } };
}

const DEALS_COLUMNS: TableColumn[] = [
  { key: "deal", label: "Deal" },
  { key: "client", label: "Client" },
  { key: "stage", label: "Stage" },
  { key: "value", label: "Value", align: "right" },
  { key: "owner", label: "Owner" },
  { key: "status", label: "Status" },
];

const DEALS_ROWS: TableRow[] = [
  { id: "d1", cells: { deal: "Atlas Renewal", client: "Meridian Corp", stage: "Negotiation", value: "$18.4M", owner: "R. Shah", ...status("Ongoing", "positive") } },
  { id: "d2", cells: { deal: "Nimbus Platform", client: "Cascade Retail", stage: "Proposal", value: "$9.2M", owner: "A. Verma", ...status("Ongoing", "positive") } },
  { id: "d3", cells: { deal: "Sunrise Expansion", client: "Meridian Corp", stage: "Contracting", value: "$22.0M", owner: "R. Shah", ...status("Need Attention", "critical") } },
  { id: "d4", cells: { deal: "Beacon Analytics", client: "Orion Bank", stage: "Discovery", value: "$6.1M", owner: "P. Nair", ...status("Ongoing", "positive") } },
  { id: "d5", cells: { deal: "Cascade Support Renewal", client: "Cascade Retail", stage: "Closed Won", value: "$4.4M", owner: "A. Verma", ...status("Completed", "neutral") } },
  { id: "d6", cells: { deal: "Halcyon Migration", client: "Halcyon Foods", stage: "Negotiation", value: "$11.8M", owner: "S. Rao", ...status("Need Attention", "critical") } },
  { id: "d7", cells: { deal: "Orion Data Platform", client: "Orion Bank", stage: "Closed Won", value: "$14.6M", owner: "P. Nair", ...status("Completed", "neutral") } },
  { id: "d8", cells: { deal: "Vertex Pilot", client: "Vertex Logistics", stage: "Discovery", value: "$3.9M", owner: "R. Shah", ...status("Ongoing", "positive") } },
];

const RENEWALS_COLUMNS: TableColumn[] = [
  { key: "client", label: "Client" },
  { key: "arr", label: "ARR", align: "right" },
  { key: "date", label: "Renewal Date" },
  { key: "risk", label: "Risk" },
];

const RENEWALS_ROWS: TableRow[] = [
  { id: "r1", cells: { client: "Halcyon Foods", arr: "$4.1M", date: "2026-09-05", ...statusAt("risk", "Churn Risk", "critical") } },
  { id: "r2", cells: { client: "Meridian Corp", arr: "$18.4M", date: "2026-09-30", ...statusAt("risk", "Watch", "watch") } },
  { id: "r3", cells: { client: "Orion Bank", arr: "$6.2M", date: "2026-11-01", ...statusAt("risk", "On Track", "positive") } },
  { id: "r4", cells: { client: "Cascade Retail", arr: "$9.0M", date: "2026-10-15", ...statusAt("risk", "On Track", "positive") } },
];

const PROJECTS_COLUMNS: TableColumn[] = [
  { key: "project", label: "Project" },
  { key: "client", label: "Client" },
  { key: "progress", label: "Progress", align: "right" },
  { key: "burn", label: "Budget Burn", align: "right" },
  { key: "pm", label: "PM" },
  { key: "status", label: "Status" },
];

const PROJECTS_ROWS: TableRow[] = [
  { id: "p1", cells: { project: "Atlas", client: "Meridian Corp", progress: "61%", burn: "84%", pm: "K. Iyer", ...status("Need Attention", "critical") } },
  { id: "p2", cells: { project: "Sunrise Rollout", client: "Meridian Corp", progress: "78%", burn: "71%", pm: "S. Rao", ...status("Ongoing", "positive") } },
  { id: "p3", cells: { project: "Beacon Analytics Build", client: "Orion Bank", progress: "45%", burn: "40%", pm: "P. Nair", ...status("Ongoing", "positive") } },
  { id: "p4", cells: { project: "Cascade POS Refresh", client: "Cascade Retail", progress: "92%", burn: "88%", pm: "A. Verma", ...status("Ongoing", "positive") } },
  { id: "p5", cells: { project: "Halcyon Migration Phase 1", client: "Halcyon Foods", progress: "100%", burn: "96%", pm: "S. Rao", ...status("Completed", "neutral") } },
  { id: "p6", cells: { project: "Vertex Pilot Build", client: "Vertex Logistics", progress: "22%", burn: "35%", pm: "R. Shah", ...status("Need Attention", "critical") } },
  { id: "p7", cells: { project: "Nimbus Integration", client: "Cascade Retail", progress: "67%", burn: "60%", pm: "K. Iyer", ...status("Ongoing", "positive") } },
];

const CLIENT_HEALTH_COLUMNS: TableColumn[] = [
  { key: "account", label: "Account" },
  { key: "health", label: "Health" },
  { key: "escalations", label: "Escalations", align: "right" },
  { key: "nps", label: "NPS", align: "right" },
];

const CLIENT_HEALTH_ROWS: TableRow[] = [
  { id: "c1", cells: { account: "Halcyon Foods", ...statusAt("health", "Red", "critical"), escalations: "3", nps: "22" } },
  { id: "c2", cells: { account: "Meridian Corp", ...statusAt("health", "Amber", "watch"), escalations: "2", nps: "41" } },
  { id: "c3", cells: { account: "Vertex Logistics", ...statusAt("health", "Amber", "watch"), escalations: "1", nps: "35" } },
  { id: "c4", cells: { account: "Cascade Retail", ...statusAt("health", "Green", "positive"), escalations: "1", nps: "58" } },
  { id: "c5", cells: { account: "Orion Bank", ...statusAt("health", "Green", "positive"), escalations: "0", nps: "62" } },
];

const MARGIN_COLUMNS: TableColumn[] = [
  { key: "project", label: "Project" },
  { key: "contract", label: "Contract", align: "right" },
  { key: "cost", label: "Delivery Cost", align: "right" },
  { key: "margin", label: "Margin", align: "right" },
  { key: "flag", label: "Flag" },
];

const MARGIN_ROWS: TableRow[] = [
  { id: "m1", cells: { project: "Atlas", contract: "$22.4M", cost: "$19.1M", margin: "14.7%", ...statusAt("flag", "Below Target", "critical") } },
  { id: "m2", cells: { project: "Sunrise Rollout", contract: "$15.0M", cost: "$9.8M", margin: "34.7%", ...statusAt("flag", "Healthy", "positive") } },
  { id: "m3", cells: { project: "Beacon Analytics Build", contract: "$8.5M", cost: "$6.0M", margin: "29.4%", ...statusAt("flag", "Healthy", "positive") } },
  { id: "m4", cells: { project: "Vertex Pilot Build", contract: "$3.2M", cost: "$2.9M", margin: "9.4%", ...statusAt("flag", "Below Target", "critical") } },
];

const AT_RISK_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product" },
  { key: "arr", label: "ARR at Risk", align: "right" },
  { key: "reason", label: "Reason" },
];

const AT_RISK_ROWS: TableRow[] = [
  { id: "ar1", cells: { product: "Accelerator: Data Migration Kit", arr: "$4.8M", reason: "Adoption down 18% across 3 accounts" } },
  { id: "ar2", cells: { product: "Legacy ETL Bridge", arr: "$2.1M", reason: "Approaching EOL, Q4 2026" } },
];

const INVESTMENT_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product" },
  { key: "build", label: "Build Cost", align: "right" },
  { key: "maint", label: "Maint./yr", align: "right" },
  { key: "arr", label: "ARR", align: "right" },
  { key: "roi", label: "ROI", align: "right" },
];

const INVESTMENT_ROWS: TableRow[] = [
  { id: "i1", cells: { product: "Paperclip Ingestion Engine", build: "$3.2M", maint: "$0.6M", arr: "$14.2M", roi: "4.4×" } },
  { id: "i2", cells: { product: "Entity Resolution Toolkit", build: "$2.1M", maint: "$0.4M", arr: "$11.0M", roi: "5.2×" } },
  { id: "i3", cells: { product: "Data Migration Kit", build: "$1.8M", maint: "$0.5M", arr: "$9.5M", roi: "5.3×" } },
  { id: "i4", cells: { product: "Legacy ETL Bridge", build: "$0.9M", maint: "$0.3M", arr: "$2.1M", roi: "2.3×" } },
];

const PRODUCTS_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product" },
  { key: "owner", label: "Owner" },
  { key: "stage", label: "Stage" },
  { key: "arr", label: "ARR", align: "right" },
  { key: "status", label: "Status" },
];

const PRODUCTS_ROWS: TableRow[] = [
  { id: "pr1", cells: { product: "Paperclip Ingestion Engine", owner: "K. Iyer", stage: "GA", arr: "$14.2M", ...status("Ongoing", "positive") } },
  { id: "pr2", cells: { product: "Hermes Chat Connector", owner: "S. Rao", stage: "Beta", arr: "$6.8M", ...status("Ongoing", "positive") } },
  { id: "pr3", cells: { product: "Accelerator: Data Migration Kit", owner: "A. Verma", stage: "GA", arr: "$9.5M", ...status("Need Attention", "critical") } },
  { id: "pr4", cells: { product: "Accelerator: Entity Resolution Toolkit", owner: "P. Nair", stage: "GA", arr: "$11.0M", ...status("Ongoing", "positive") } },
  { id: "pr5", cells: { product: "Legacy ETL Bridge", owner: "R. Shah", stage: "Sunset", arr: "$2.1M", ...status("Need Attention", "critical") } },
  { id: "pr6", cells: { product: "Obsidian Sync Module", owner: "K. Iyer", stage: "GA", arr: "$5.4M", ...status("Completed", "neutral") } },
  { id: "pr7", cells: { product: "MCP Gateway", owner: "S. Rao", stage: "Beta", arr: "$7.9M", ...status("Ongoing", "positive") } },
];

const BENCH_COLUMNS: TableColumn[] = [
  { key: "skill", label: "Skill" },
  { key: "certified", label: "Certified", align: "right" },
  { key: "selling", label: "Selling Now?" },
  { key: "gap", label: "Gap", align: "right" },
];

function sellingStatus(label: "Yes" | "No") {
  return statusAt("selling", label, label === "Yes" ? "positive" : "neutral");
}

const BENCH_ROWS: TableRow[] = [
  { id: "b1", cells: { skill: "AWS Solutions Architecture", certified: "9", gap: "0", ...sellingStatus("Yes") } },
  { id: "b2", cells: { skill: "Databricks Data Engineering", certified: "4", gap: "-3", ...sellingStatus("Yes") } },
  { id: "b3", cells: { skill: "ISO 27001 / Security", certified: "3", gap: "-2", ...sellingStatus("Yes") } },
  { id: "b4", cells: { skill: "Salesforce Administration", certified: "6", gap: "—", ...sellingStatus("No") } },
];

const COMPLIANCE_COLUMNS: TableColumn[] = [
  { key: "cert", label: "Certification" },
  { key: "status", label: "Status" },
  { key: "audit", label: "Next Audit" },
];

const COMPLIANCE_ROWS: TableRow[] = [
  { id: "co1", cells: { cert: "ISO 27001 (org)", ...status("Watch", "watch"), audit: "2026-10-01" } },
  { id: "co2", cells: { cert: "SOC 2 Type II", ...status("On Track", "positive"), audit: "2027-02-15" } },
  { id: "co3", cells: { cert: "Data Handling & Privacy (all staff)", ...status("84% Complete", "critical"), audit: "2026-09-01" } },
];

const CERTS_COLUMNS: TableColumn[] = [
  { key: "cert", label: "Certification" },
  { key: "holder", label: "Holder" },
  { key: "vendor", label: "Vendor" },
  { key: "expiry", label: "Expiry" },
  { key: "status", label: "Status" },
];

const CERTS_ROWS: TableRow[] = [
  { id: "ce1", cells: { cert: "ISO 27001 Lead Auditor", holder: "P. Nair", vendor: "PECB", expiry: "2026-09-01", ...status("Need Attention", "critical") } },
  { id: "ce2", cells: { cert: "Databricks Data Engineer", holder: "K. Iyer", vendor: "Databricks", expiry: "2026-09-05", ...status("Need Attention", "critical") } },
  { id: "ce3", cells: { cert: "AWS Solutions Architect", holder: "R. Shah", vendor: "AWS", expiry: "2026-12-01", ...status("Ongoing", "positive") } },
  { id: "ce4", cells: { cert: "PMP", holder: "K. Iyer", vendor: "PMI", expiry: "2026-11-30", ...status("Ongoing", "positive") } },
];

const PIPELINE_EVENT_COLUMNS: TableColumn[] = [
  { key: "event", label: "Event" },
  { key: "leads", label: "Leads", align: "right" },
  { key: "pipeline", label: "Pipeline", align: "right" },
  { key: "spend", label: "Spend", align: "right" },
  { key: "roi", label: "ROI", align: "right" },
];

const PIPELINE_EVENT_ROWS: TableRow[] = [
  { id: "pe1", cells: { event: "Webinar: AI OS Launch", leads: "112", pipeline: "$0.9M", spend: "$0.1M", roi: "9.0×" } },
  { id: "pe2", cells: { event: "Accelerator Demo Day", leads: "64", pipeline: "$2.1M", spend: "$0.5M", roi: "4.2×" } },
  { id: "pe3", cells: { event: "Q3 Client Advisory Board", leads: "—", pipeline: "—", spend: "$0.3M", roi: "n/a" } },
  { id: "pe4", cells: { event: "Partner Summit 2026 (proj.)", leads: "180", pipeline: "$6.2M", spend: "$1.4M", roi: "4.4×" } },
];

const MDF_COLUMNS: TableColumn[] = [
  { key: "vendor", label: "Vendor" },
  { key: "amount", label: "Amount", align: "right" },
  { key: "used", label: "Used", align: "right" },
  { key: "remaining", label: "Remaining", align: "right" },
  { key: "deadline", label: "Deadline" },
  { key: "status", label: "Status" },
];

const MDF_ROWS: TableRow[] = [
  { id: "mdf1", cells: { vendor: "AWS", amount: "$0.8M", used: "$0.5M", remaining: "$0.3M", deadline: "2026-12-31", ...status("On Track", "positive") } },
  { id: "mdf2", cells: { vendor: "Microsoft", amount: "$0.4M", used: "$0.38M", remaining: "$0.02M", deadline: "2026-09-30", ...status("Use It or Lose It", "critical") } },
];

const EVENTS_COLUMNS: TableColumn[] = [
  { key: "event", label: "Event" },
  { key: "type", label: "Type" },
  { key: "date", label: "Date" },
  { key: "budget", label: "Budget", align: "right" },
  { key: "owner", label: "Owner" },
  { key: "status", label: "Status" },
];

const EVENTS_ROWS: TableRow[] = [
  { id: "ev1", cells: { event: "Webinar: AI OS Launch", type: "Webinar", date: "2026-08-20", budget: "$0.1M", owner: "R. Shah", ...status("Need Attention", "critical") } },
  { id: "ev2", cells: { event: "Accelerator Demo Day", type: "Showcase", date: "2026-08-28", budget: "$0.5M", owner: "S. Rao", ...status("Ongoing", "positive") } },
  { id: "ev3", cells: { event: "Q3 Client Advisory Board", type: "Roundtable", date: "2026-09-02", budget: "$0.3M", owner: "P. Nair", ...status("Need Attention", "critical") } },
  { id: "ev4", cells: { event: "Regional Sales Kickoff", type: "Internal", date: "2026-09-20", budget: "$0.4M", owner: "P. Nair", ...status("Completed", "neutral") } },
  { id: "ev5", cells: { event: "Partner Summit 2026", type: "Conference", date: "2026-10-14", budget: "$1.4M", owner: "A. Verma", ...status("Ongoing", "positive") } },
  { id: "ev6", cells: { event: "Leadership Offsite", type: "Internal", date: "2026-11-05", budget: "$0.6M", owner: "K. Iyer", ...status("Ongoing", "positive") } },
  { id: "ev7", cells: { event: "Client Appreciation Gala", type: "Social", date: "2026-12-12", budget: "$0.9M", owner: "A. Verma", ...status("Completed", "neutral") } },
];

const MOCK_DASHBOARD_DATA: DashboardData = {
  sections: [
    { id: "sales", label: "Sales", description: "Pipeline across all open and closed deals this fiscal year.", attentionBadge: 9 },
    { id: "deliveries", label: "Deliveries", description: "Active and completed project delivery across all clients.", attentionBadge: 6 },
    { id: "products", label: "Products", description: "Product and accelerator portfolio, by annual recurring revenue.", attentionBadge: 3 },
    { id: "certification", label: "Certification", description: "Partner competency tiers, employee certifications, and the training investment behind them.", attentionBadge: 15 },
    { id: "events", label: "Event Planning", description: "Conferences, internal events and webinars, by planning status.", attentionBadge: 3 },
  ],

  sales: {
    tiles: {
      totalLabel: "Total", totalCount: 128, totalUnit: "deals", totalValue: "$186.4M", totalSub: "across all stages",
      ongoingCount: 54, ongoingUnit: "deals", ongoingValue: "$92.1M", ongoingSub: "actively progressing this quarter",
      attentionCount: 9, attentionUnit: "deals", attentionValue: "$14.3M", attentionSub: "stalled >30 days or unresolved objection",
    },
    funnel: [
      { label: "Discovery", value: 58.2, displayValue: "$58.2M" },
      { label: "Proposal", value: 47.6, displayValue: "$47.6M" },
      { label: "Negotiation", value: 38.9, displayValue: "$38.9M" },
      { label: "Contracting", value: 22.0, displayValue: "$22.0M" },
      { label: "Closed Won (Q)", value: 19.7, displayValue: "$19.7M" },
    ],
    forecast: { target: "$52.0M", commit: "$41.3M", commitSub: "79% of target", bestCase: "$61.8M", coverage: "3.6×", coverageSub: "healthy above 3×" },
    attentionFeed: [
      { id: "f1", severity: "critical", text: "Sunrise Expansion ($22.0M) stalled 45 days in Contracting — Meridian Corp is waiting on our redlines.", meta: "Owner: R. Shah", action: "Review" },
      { id: "f2", severity: "watch", text: "Halcyon Migration ($11.8M) has an unresolved 12% pricing exception request.", meta: "Owner: S. Rao · pending 6 days", action: "Decide" },
      { id: "f3", severity: "watch", text: "Beacon Analytics ($6.1M) — Orion Bank hasn't responded in 18 days.", meta: "Owner: P. Nair", action: "Nudge" },
    ],
    concentration: [
      { label: "Meridian Corp", value: 22, displayValue: "22%" },
      { label: "Orion Bank", value: 14, displayValue: "14%" },
      { label: "Cascade Retail", value: 11, displayValue: "11%" },
      { label: "Halcyon Foods", value: 9, displayValue: "9%" },
      { label: "Vertex Logistics", value: 6, displayValue: "6%" },
    ],
    concentrationSub: "Share of open pipeline value by account. Top 5 = 62%.",
    winLoss: [
      { label: "Mar", aValue: 9, bValue: 3, displayA: "9W", displayB: "3L" },
      { label: "Apr", aValue: 7, bValue: 2, displayA: "7W", displayB: "2L" },
      { label: "May", aValue: 11, bValue: 4, displayA: "11W", displayB: "4L" },
      { label: "Jun", aValue: 8, bValue: 3, displayA: "8W", displayB: "3L" },
      { label: "Jul", aValue: 10, bValue: 2, displayA: "10W", displayB: "2L" },
      { label: "Aug*", aValue: 6, bValue: 1, displayA: "6W", displayB: "1L" },
    ],
    winLossReasons: [
      { label: "Price", value: 34, displayValue: "34%" },
      { label: "Timing", value: 27, displayValue: "27%" },
      { label: "Competitor", value: 22, displayValue: "22%" },
      { label: "Other", value: 17, displayValue: "17%" },
    ],
    renewals: { columns: RENEWALS_COLUMNS, rows: RENEWALS_ROWS },
    deals: { columns: DEALS_COLUMNS, rows: DEALS_ROWS },
  },

  deliveries: {
    tiles: {
      totalCount: 46, totalUnit: "projects", totalValue: "$210.8M", totalSub: "contract value, all statuses", totalLabel: "Total",
      ongoingCount: 31, ongoingUnit: "projects", ongoingValue: "$146.2M", ongoingSub: "in active delivery",
      attentionCount: 6, attentionUnit: "projects", attentionValue: "$28.4M", attentionSub: "budget burn ahead of progress, or silent >10 days",
    },
    projects: { columns: PROJECTS_COLUMNS, rows: PROJECTS_ROWS },
    capacity: {
      columns: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"],
      rows: [
        { label: "Data Engineering", values: [88, 91, 94, 89, 90, 93] },
        { label: "Cloud & DevOps", values: [76, 74, 82, 79, 77, 78] },
        { label: "AI / ML", values: [85, 92, 96, 98, 94, 95] },
        { label: "Program Mgmt", values: [70, 68, 65, 71, 69, 72] },
        { label: "QA & Testing", values: [58, 52, 48, 45, 61, 42] },
      ],
    },
    clientHealth: { columns: CLIENT_HEALTH_COLUMNS, rows: CLIENT_HEALTH_ROWS },
    margin: { columns: MARGIN_COLUMNS, rows: MARGIN_ROWS },
    keyPersonRisk: [
      { id: "k1", severity: "critical", text: "K. Iyer rolls off Atlas on Sep 5 — no backfill assigned yet.", meta: "Atlas · Meridian Corp", action: "Assign" },
      { id: "k2", severity: "watch", text: "S. Rao is the only certified lead on Halcyon Migration — no shadow in place.", meta: "Halcyon Migration", action: "Plan" },
      { id: "k3", severity: "critical", text: "Vertex Pilot has had no status update in 12 days — R. Shah unresponsive since Aug 5.", meta: "Vertex Pilot Build", action: "Escalate" },
    ],
    milestones: [
      { date: "Aug 18", label: "Atlas UAT sign-off", position: 8 },
      { date: "Aug 22", label: "Beacon go-live P1", position: 38 },
      { date: "Aug 28", label: "Sunrise data cutover", position: 68 },
      { date: "Sep 2", label: "Cascade POS rollout", position: 96 },
    ],
  },

  products: {
    tiles: {
      totalLabel: "Total", totalCount: 18, totalUnit: "products", totalValue: "$64.0M", totalSub: "total ARR, all stages",
      ongoingCount: 11, ongoingUnit: "products", ongoingValue: "$38.5M", ongoingSub: "in active development or beta",
      attentionCount: 3, attentionUnit: "products", attentionValue: "$6.2M", attentionSub: "renewal risk, falling adoption, or nearing EOL",
    },
    reuseStat: { label: "Delivery hours using an accelerator", value: "62%", sub: "up from 41% a year ago" },
    pipelineStat: { label: "Pipeline touching an accelerator", value: "$41.2M", sub: "of $186.4M open pipeline" },
    adoptionNote: "Legacy ETL Bridge usage is down 46% since March — decay signal, already flagged Need Attention.",
    atRisk: { columns: AT_RISK_COLUMNS, rows: AT_RISK_ROWS },
    investment: { columns: INVESTMENT_COLUMNS, rows: INVESTMENT_ROWS },
    products: { columns: PRODUCTS_COLUMNS, rows: PRODUCTS_ROWS },
  },

  certification: {
    tiles: {
      totalLabel: "Total", totalCount: 312, totalUnit: "certifications", totalValue: "$1.8M", totalSub: "training investment, all statuses",
      ongoingCount: 47, ongoingUnit: "certifications", ongoingValue: "$310K", ongoingSub: "renewal or new cert in progress",
      attentionCount: 15, attentionUnit: "certifications", attentionValue: "$90K", attentionSub: "expiring within 30 days",
    },
    tiers: [
      { vendor: "AWS", tier: "Advanced", gap: "Need 3 more certified Solutions Architects to reach Premier by target date.", renewal: "Mar 2027", status: { label: "Watch", tone: "watch" } },
      { vendor: "Microsoft", tier: "Gold", gap: "On track, one certification of buffer above the minimum.", renewal: "Jan 2027", status: { label: "On Track", tone: "positive" } },
      { vendor: "Databricks", tier: "Select", gap: "Two Data Engineer certs expire before renewal — at risk of dropping a tier.", renewal: "Sep 2026", status: { label: "At Risk", tone: "critical" } },
      { vendor: "Salesforce", tier: "Registered", gap: "No action needed this cycle.", renewal: "Dec 2026", status: { label: "On Track", tone: "positive" } },
    ],
    benchReadiness: { columns: BENCH_COLUMNS, rows: BENCH_ROWS },
    compliance: { columns: COMPLIANCE_COLUMNS, rows: COMPLIANCE_ROWS },
    spendStat: { label: "Total spend", value: "$1.8M" },
    unlockedStat: { label: "Deal value unlocked", value: "$38.6M", sub: "14 certs cited as a deal requirement" },
    certifications: { columns: CERTS_COLUMNS, rows: CERTS_ROWS },
  },

  events: {
    tiles: {
      totalLabel: "Total", totalCount: 22, totalUnit: "events", totalValue: "$4.6M", totalSub: "total budget, all statuses",
      ongoingCount: 8, ongoingUnit: "events", ongoingValue: "$2.1M", ongoingSub: "actively being planned",
      attentionCount: 3, attentionUnit: "events", attentionValue: "$0.6M", attentionSub: "venue, vendor or speaker unconfirmed",
    },
    budgetByCategory: [
      { label: "Conferences", value: 1.6, displayValue: "$1.6M" },
      { label: "Internal", value: 0.7, displayValue: "$0.7M" },
      { label: "Webinars", value: 0.3, displayValue: "$0.3M" },
      { label: "Social", value: 0.3, displayValue: "$0.3M" },
    ],
    budgetPlanned: "$4.6M",
    budgetSpent: "$2.9M",
    followUpStat: { label: "Org-wide, trailing 90 days", value: "71%" },
    followUpNote: "Accelerator Demo Day: only 38% contacted within 7 days — worst performer.",
    pipelinePerEvent: { columns: PIPELINE_EVENT_COLUMNS, rows: PIPELINE_EVENT_ROWS },
    mdf: { columns: MDF_COLUMNS, rows: MDF_ROWS },
    events: { columns: EVENTS_COLUMNS, rows: EVENTS_ROWS },
  },
};

export async function getDashboardData(): Promise<DashboardData> {
  return MOCK_DASHBOARD_DATA;
}
