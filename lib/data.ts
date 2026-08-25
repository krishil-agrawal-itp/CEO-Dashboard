import {
  DashboardData,
  TableColumn,
  TableRow,
  StatusTone,
} from "./types";

/**
 * CEO-private mock snapshot.
 * Live wiring: HubSpot → sales/renewals/bookings;
 * Kantata → delivery burn/margin/capacity;
 * Beacon → silent projects, internal milestones, accelerator usage.
 */

function status(label: string, tone: StatusTone) {
  return { status: { label, tone } };
}

function statusAt(key: string, label: string, tone: StatusTone) {
  return { [key]: { label, tone } };
}

const RENEWALS_COLUMNS: TableColumn[] = [
  { key: "client", label: "Account" },
  { key: "arr", label: "ARR", align: "right" },
  { key: "date", label: "Renewal" },
  { key: "risk", label: "Risk" },
  { key: "why", label: "Why it needs you" },
];

const RENEWALS_ROWS: TableRow[] = [
  {
    id: "r1",
    cells: {
      client: "Halcyon Foods",
      arr: "$4.1M",
      date: "Sep 5",
      why: "3 open escalations · NPS 22",
      ...statusAt("risk", "Churn Risk", "critical"),
    },
  },
  {
    id: "r2",
    cells: {
      client: "Meridian Corp",
      arr: "$18.4M",
      date: "Sep 30",
      why: "Atlas burn ahead of progress",
      ...statusAt("risk", "Watch", "watch"),
    },
  },
];

const AT_RISK_PROJECT_COLUMNS: TableColumn[] = [
  { key: "project", label: "Project" },
  { key: "client", label: "Client" },
  { key: "progress", label: "Progress", align: "right" },
  { key: "burn", label: "Burn", align: "right" },
  { key: "signal", label: "Signal" },
  { key: "status", label: "Status" },
];

const AT_RISK_PROJECT_ROWS: TableRow[] = [
  {
    id: "p1",
    cells: {
      project: "Atlas",
      client: "Meridian Corp",
      progress: "61%",
      burn: "84%",
      signal: "Kantata · burn > progress",
      ...status("Need Attention", "critical"),
    },
  },
  {
    id: "p6",
    cells: {
      project: "Vertex Pilot Build",
      client: "Vertex Logistics",
      progress: "22%",
      burn: "35%",
      signal: "Beacon · silent 12 days",
      ...status("Need Attention", "critical"),
    },
  },
  {
    id: "p8",
    cells: {
      project: "Halcyon Stabilisation",
      client: "Halcyon Foods",
      progress: "54%",
      burn: "62%",
      signal: "Beacon · client red",
      ...status("Watch", "watch"),
    },
  },
];

const CLIENT_HEALTH_COLUMNS: TableColumn[] = [
  { key: "account", label: "Account" },
  { key: "health", label: "Health" },
  { key: "escalations", label: "Escalations", align: "right" },
  { key: "nps", label: "NPS", align: "right" },
  { key: "exposure", label: "ARR / Contract", align: "right" },
];

const CLIENT_HEALTH_ROWS: TableRow[] = [
  {
    id: "c1",
    cells: {
      account: "Halcyon Foods",
      escalations: "3",
      nps: "22",
      exposure: "$4.1M ARR",
      ...statusAt("health", "Critical", "critical"),
    },
  },
  {
    id: "c2",
    cells: {
      account: "Meridian Corp",
      escalations: "2",
      nps: "41",
      exposure: "$40.4M open",
      ...statusAt("health", "Watch", "watch"),
    },
  },
  {
    id: "c3",
    cells: {
      account: "Vertex Logistics",
      escalations: "1",
      nps: "35",
      exposure: "$3.2M contract",
      ...statusAt("health", "Watch", "watch"),
    },
  },
];

const MARGIN_COLUMNS: TableColumn[] = [
  { key: "project", label: "Project" },
  { key: "contract", label: "Contract", align: "right" },
  { key: "margin", label: "Margin", align: "right" },
  { key: "target", label: "Target", align: "right" },
  { key: "flag", label: "Flag" },
];

const MARGIN_ROWS: TableRow[] = [
  {
    id: "m1",
    cells: {
      project: "Atlas",
      contract: "$22.4M",
      margin: "14.7%",
      target: "28%",
      ...statusAt("flag", "Below Target", "critical"),
    },
  },
  {
    id: "m4",
    cells: {
      project: "Vertex Pilot Build",
      contract: "$3.2M",
      margin: "9.4%",
      target: "28%",
      ...statusAt("flag", "Below Target", "critical"),
    },
  },
];

const AT_RISK_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product / Accelerator" },
  { key: "arr", label: "ARR at Risk", align: "right" },
  { key: "reason", label: "Signal" },
];

const AT_RISK_ROWS: TableRow[] = [
  {
    id: "ar1",
    cells: {
      product: "Data Migration Kit",
      arr: "$4.8M",
      reason: "Beacon adoption −18% across 3 accounts",
    },
  },
  {
    id: "ar2",
    cells: {
      product: "Legacy ETL Bridge",
      arr: "$2.1M",
      reason: "EOL Q4 2026 · no migration path sold",
    },
  },
];

const INVESTMENT_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product" },
  { key: "build", label: "Build", align: "right" },
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

const ATTENTION_PRODUCT_COLUMNS: TableColumn[] = [
  { key: "product", label: "Product" },
  { key: "arr", label: "ARR", align: "right" },
  { key: "issue", label: "Why on your desk" },
  { key: "status", label: "Status" },
];

const ATTENTION_PRODUCT_ROWS: TableRow[] = [
  {
    id: "pr3",
    cells: {
      product: "Data Migration Kit",
      arr: "$9.5M",
      issue: "Adoption decay · 3 renewals exposed",
      ...status("Need Attention", "critical"),
    },
  },
  {
    id: "pr5",
    cells: {
      product: "Legacy ETL Bridge",
      arr: "$2.1M",
      issue: "Sunset with no replacement booked",
      ...status("Need Attention", "critical"),
    },
  },
];

const BENCH_COLUMNS: TableColumn[] = [
  { key: "skill", label: "Skill (sold this quarter)" },
  { key: "certified", label: "Certified", align: "right" },
  { key: "needed", label: "Needed", align: "right" },
  { key: "gap", label: "Gap", align: "right" },
];

const BENCH_ROWS: TableRow[] = [
  { id: "b2", cells: { skill: "Databricks Data Engineering", certified: "4", needed: "7", gap: "−3" } },
  { id: "b3", cells: { skill: "ISO 27001 / Security", certified: "3", needed: "5", gap: "−2" } },
];

const COMPLIANCE_COLUMNS: TableColumn[] = [
  { key: "cert", label: "Control" },
  { key: "status", label: "Status" },
  { key: "audit", label: "Next Audit" },
  { key: "impact", label: "Business Impact" },
];

const COMPLIANCE_ROWS: TableRow[] = [
  {
    id: "co1",
    cells: {
      cert: "ISO 27001 (org)",
      audit: "Oct 1",
      impact: "Enterprise RFPs gated",
      ...status("Watch", "watch"),
    },
  },
  {
    id: "co3",
    cells: {
      cert: "Data Handling & Privacy",
      audit: "Sep 1",
      impact: "84% staff complete — audit risk",
      ...status("At Risk", "critical"),
    },
  },
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
  { id: "pe4", cells: { event: "Partner Summit 2026 (proj.)", leads: "180", pipeline: "$6.2M", spend: "$1.4M", roi: "4.4×" } },
];

const MDF_COLUMNS: TableColumn[] = [
  { key: "vendor", label: "Vendor" },
  { key: "remaining", label: "Remaining", align: "right" },
  { key: "deadline", label: "Deadline" },
  { key: "status", label: "Status" },
];

const MDF_ROWS: TableRow[] = [
  {
    id: "mdf2",
    cells: {
      vendor: "Microsoft",
      remaining: "$20K",
      deadline: "Sep 30",
      ...status("Use It or Lose It", "critical"),
    },
  },
  {
    id: "mdf1",
    cells: {
      vendor: "AWS",
      remaining: "$300K",
      deadline: "Dec 31",
      ...status("On Track", "positive"),
    },
  },
];

const ATTENTION_EVENT_COLUMNS: TableColumn[] = [
  { key: "event", label: "Event" },
  { key: "date", label: "Date" },
  { key: "budget", label: "Budget", align: "right" },
  { key: "issue", label: "Blocker" },
  { key: "status", label: "Status" },
];

const ATTENTION_EVENT_ROWS: TableRow[] = [
  {
    id: "ev1",
    cells: {
      event: "Webinar: AI OS Launch",
      date: "Aug 20",
      budget: "$0.1M",
      issue: "Speaker unconfirmed · HubSpot campaign live",
      ...status("Need Attention", "critical"),
    },
  },
  {
    id: "ev3",
    cells: {
      event: "Q3 Client Advisory Board",
      date: "Sep 2",
      budget: "$0.3M",
      issue: "Venue hold expires in 4 days",
      ...status("Need Attention", "critical"),
    },
  },
];

const MOCK_DASHBOARD_DATA: DashboardData = {
  sections: [
    {
      id: "brief",
      label: "Morning Brief",
      description: "What changed overnight and what only you can unblock today.",
      attentionBadge: 4,
      sources: ["HubSpot", "Kantata", "Beacon"],
    },
    {
      id: "sales",
      label: "Sales",
      description: "HubSpot — commit, pipeline risk, renewals, and concentration.",
      attentionBadge: 9,
      sources: ["HubSpot"],
    },
    {
      id: "deliveries",
      label: "Delivery",
      description: "Kantata + Beacon — burn vs progress, silence, margin, and go-lives.",
      attentionBadge: 6,
      sources: ["Kantata", "Beacon"],
    },
    {
      id: "products",
      label: "Products",
      description: "Accelerator ARR at risk, reuse in delivery, and investment return.",
      attentionBadge: 3,
      sources: ["Beacon", "HubSpot"],
    },
    {
      id: "certification",
      label: "Certifications",
      description: "Partner tiers and compliance that gate co-sell and enterprise deals.",
      attentionBadge: 15,
      sources: ["Beacon"],
    },
    {
      id: "events",
      label: "Events",
      description: "Event ROI, MDF at risk of expiry, and follow-up leakage.",
      attentionBadge: 3,
      sources: ["HubSpot"],
    },
  ],

  brief: {
    generatedAt: "Today · 07:02",
    headline: "Four items need a CEO decision before noon. Delivery risk is concentrated in Meridian and Halcyon.",
    paragraphs: [
      "Commit sits at $41.3M against a $52.0M quarter target — a $10.7M gap. Sunrise Expansion ($22.0M) is still waiting on your redlines in HubSpot.",
      "Kantata shows Atlas burn at 84% with progress at 61%. Beacon flags Vertex Pilot silent for 12 days — no status, no timesheet, no client update.",
      "Halcyon Foods is red across systems: $4.1M ARR renewal Sep 5, three escalations, NPS 22. Treat sales, delivery, and renewal as one account problem.",
    ],
    decisions: [
      {
        id: "d1",
        severity: "critical",
        text: "Approve or reject Meridian redlines on Sunrise Expansion ($22.0M) — stalled 45 days in Contracting.",
        meta: "HubSpot DEAL-4402 · Owner R. Shah",
        action: "Decide",
        source: "HubSpot",
      },
      {
        id: "d2",
        severity: "critical",
        text: "Authorise backfill for K. Iyer rolling off Atlas on Sep 5 — no shadow assigned.",
        meta: "Kantata CNT-1183 · Meridian Corp",
        action: "Assign",
        source: "Kantata",
      },
      {
        id: "d3",
        severity: "watch",
        text: "Release or reallocate $20K Microsoft MDF before Sep 30 — use-it-or-lose-it.",
        meta: "Partner marketing · HubSpot campaign link",
        action: "Approve",
        source: "HubSpot",
      },
      {
        id: "d4",
        severity: "watch",
        text: "Halcyon 12% pricing exception on Migration renewal — pending your call for 6 days.",
        meta: "HubSpot DEAL-4511 · Owner S. Rao",
        action: "Decide",
        source: "HubSpot",
      },
    ],
    overnight: [
      {
        id: "o1",
        severity: "critical",
        text: "Beacon: Vertex Pilot marked silent — last activity Aug 5.",
        meta: "Beacon · Vertex Logistics",
        action: "Open",
        source: "Beacon",
      },
      {
        id: "o2",
        severity: "watch",
        text: "HubSpot: Cascade Support Renewal closed-won +$4.4M.",
        meta: "Bookings QTD now $19.7M",
        action: "View",
        source: "HubSpot",
      },
      {
        id: "o3",
        severity: "watch",
        text: "Kantata: Atlas weekly burn crossed the 80% threshold.",
        meta: "Meridian Corp · PM K. Iyer",
        action: "Review",
        source: "Kantata",
      },
    ],
    pulse: [
      { label: "Commit / Target", value: "79%", sub: "$41.3M of $52.0M" },
      { label: "Delivery at risk", value: "$28.4M", sub: "6 projects · Kantata + Beacon" },
      { label: "Renewals ≤60d at risk", value: "$22.5M", sub: "Halcyon + Meridian" },
      { label: "Decisions on you", value: "4", sub: "2 critical · 2 watch" },
    ],
    systems: [
      { name: "HubSpot", status: "live", detail: "Synced 06:58 · deals & renewals" },
      { name: "Kantata", status: "live", detail: "Synced 06:55 · burn & utilisation" },
      { name: "Beacon", status: "delayed", detail: "Last sync 05:40 · +78m lag" },
    ],
  },

  sales: {
    tiles: {
      totalLabel: "Open pipeline",
      totalCount: 54,
      totalUnit: "deals",
      totalValue: "$166.7M",
      totalSub: "HubSpot · open stages only",
      ongoingCount: 54,
      ongoingUnit: "active",
      ongoingValue: "$92.1M",
      ongoingSub: "moving this quarter",
      attentionCount: 9,
      attentionUnit: "deals",
      attentionValue: "$14.3M",
      attentionSub: "stalled >30d or waiting on you",
    },
    funnel: [
      { label: "Discovery", value: 58.2, displayValue: "$58.2M" },
      { label: "Proposal", value: 47.6, displayValue: "$47.6M" },
      { label: "Negotiation", value: 38.9, displayValue: "$38.9M" },
      { label: "Contracting", value: 22.0, displayValue: "$22.0M" },
    ],
    forecast: {
      target: "$52.0M",
      commit: "$41.3M",
      commitSub: "79% of target — your number",
      bestCase: "$61.8M",
      coverage: "3.6×",
      coverageSub: "healthy above 3×",
      gap: "$10.7M",
      gapSub: "to hit commit target",
    },
    bookings: [
      { label: "Closed won QTD", value: "$19.7M", sub: "6 deals · HubSpot" },
      { label: "Bookings vs last Q", value: "+12%", sub: "same point in quarter" },
      { label: "Avg. cycle (won)", value: "94 days", sub: "−8 days YoY" },
      { label: "Stalled >30 days", value: "$14.3M", sub: "9 deals" },
    ],
    attentionFeed: [
      {
        id: "f1",
        severity: "critical",
        text: "Sunrise Expansion ($22.0M) stalled 45 days in Contracting — Meridian waiting on redlines.",
        meta: "HubSpot · Owner R. Shah",
        action: "Decide",
        source: "HubSpot",
      },
      {
        id: "f2",
        severity: "watch",
        text: "Halcyon Migration ($11.8M) — unresolved 12% pricing exception, day 6.",
        meta: "HubSpot · Owner S. Rao",
        action: "Decide",
        source: "HubSpot",
      },
      {
        id: "f3",
        severity: "watch",
        text: "Beacon Analytics ($6.1M) — Orion Bank silent 18 days in Discovery.",
        meta: "HubSpot · Owner P. Nair",
        action: "Nudge",
        source: "HubSpot",
      },
    ],
    concentration: [
      { label: "Meridian Corp", value: 22, displayValue: "22%" },
      { label: "Orion Bank", value: 14, displayValue: "14%" },
      { label: "Cascade Retail", value: 11, displayValue: "11%" },
      { label: "Halcyon Foods", value: 9, displayValue: "9%" },
      { label: "Vertex Logistics", value: 6, displayValue: "6%" },
    ],
    concentrationSub: "Top 5 accounts = 62% of open pipeline. Meridian alone is a single-point revenue risk.",
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
  },

  deliveries: {
    tiles: {
      totalLabel: "Active delivery",
      totalCount: 31,
      totalUnit: "projects",
      totalValue: "$146.2M",
      totalSub: "Kantata contract value in flight",
      ongoingCount: 31,
      ongoingUnit: "projects",
      ongoingValue: "$146.2M",
      ongoingSub: "active across practices",
      attentionCount: 6,
      attentionUnit: "projects",
      attentionValue: "$28.4M",
      attentionSub: "burn ahead, silent, or client red",
    },
    atRiskProjects: { columns: AT_RISK_PROJECT_COLUMNS, rows: AT_RISK_PROJECT_ROWS },
    silentProjects: [
      {
        id: "s1",
        severity: "critical",
        text: "Vertex Pilot Build — no Beacon status, timesheet, or client note in 12 days.",
        meta: "Beacon · R. Shah · $3.2M",
        action: "Escalate",
        source: "Beacon",
      },
      {
        id: "s2",
        severity: "watch",
        text: "Nimbus Integration — Beacon check-in overdue by 4 days (threshold 7).",
        meta: "Beacon · K. Iyer · Cascade Retail",
        action: "Review",
        source: "Beacon",
      },
    ],
    capacityAlerts: [
      { label: "AI / ML", value: 96, displayValue: "96% · over" },
      { label: "Data Engineering", value: 93, displayValue: "93% · tight" },
      { label: "QA & Testing", value: 42, displayValue: "42% · bench" },
    ],
    clientHealth: { columns: CLIENT_HEALTH_COLUMNS, rows: CLIENT_HEALTH_ROWS },
    marginRisk: { columns: MARGIN_COLUMNS, rows: MARGIN_ROWS },
    keyPersonRisk: [
      {
        id: "k1",
        severity: "critical",
        text: "K. Iyer rolls off Atlas Sep 5 — no backfill in Kantata.",
        meta: "Atlas · Meridian Corp · $22.4M",
        action: "Assign",
        source: "Kantata",
      },
      {
        id: "k2",
        severity: "watch",
        text: "S. Rao is sole certified lead on Halcyon — no shadow.",
        meta: "Halcyon Stabilisation",
        action: "Plan",
        source: "Beacon",
      },
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
      totalLabel: "Portfolio ARR",
      totalCount: 18,
      totalUnit: "products",
      totalValue: "$64.0M",
      totalSub: "accelerators + platforms",
      ongoingCount: 11,
      ongoingUnit: "active",
      ongoingValue: "$38.5M",
      ongoingSub: "GA or beta in market",
      attentionCount: 3,
      attentionUnit: "products",
      attentionValue: "$6.2M",
      attentionSub: "adoption decay or EOL",
    },
    reuseStat: {
      label: "Delivery hours on accelerators",
      value: "62%",
      sub: "Beacon · up from 41% YoY",
    },
    pipelineStat: {
      label: "Pipeline touching an accelerator",
      value: "$41.2M",
      sub: "HubSpot · of $166.7M open",
    },
    adoptionNote:
      "Legacy ETL Bridge usage is down 46% since March (Beacon). Decay already mapped to $2.1M ARR at risk — no replacement deal in HubSpot.",
    atRisk: { columns: AT_RISK_COLUMNS, rows: AT_RISK_ROWS },
    investment: { columns: INVESTMENT_COLUMNS, rows: INVESTMENT_ROWS },
    attentionProducts: { columns: ATTENTION_PRODUCT_COLUMNS, rows: ATTENTION_PRODUCT_ROWS },
  },

  certification: {
    tiles: {
      totalLabel: "Partner posture",
      totalCount: 4,
      totalUnit: "vendors",
      totalValue: "$38.6M",
      totalSub: "deal value unlocked by certs YTD",
      ongoingCount: 47,
      ongoingUnit: "in progress",
      ongoingValue: "$310K",
      ongoingSub: "training spend in flight",
      attentionCount: 15,
      attentionUnit: "expiring ≤30d",
      attentionValue: "2 tiers",
      attentionSub: "Databricks + AWS competency at risk",
    },
    tiers: [
      {
        vendor: "AWS",
        tier: "Advanced",
        gap: "Need 3 more Solutions Architects for Premier — blocks large co-sell.",
        renewal: "Mar 2027",
        status: { label: "Watch", tone: "watch" },
      },
      {
        vendor: "Microsoft",
        tier: "Gold",
        gap: "One certification of buffer above minimum.",
        renewal: "Jan 2027",
        status: { label: "On Track", tone: "positive" },
      },
      {
        vendor: "Databricks",
        tier: "Select",
        gap: "Two Data Engineer certs expire before renewal — tier drop risk.",
        renewal: "Sep 2026",
        status: { label: "At Risk", tone: "critical" },
      },
      {
        vendor: "Salesforce",
        tier: "Registered",
        gap: "No action this cycle.",
        renewal: "Dec 2026",
        status: { label: "On Track", tone: "positive" },
      },
    ],
    benchReadiness: { columns: BENCH_COLUMNS, rows: BENCH_ROWS },
    compliance: { columns: COMPLIANCE_COLUMNS, rows: COMPLIANCE_ROWS },
    spendStat: { label: "Training spend FY", value: "$1.8M" },
    unlockedStat: {
      label: "Deal value unlocked",
      value: "$38.6M",
      sub: "14 certs cited as deal requirement",
    },
    tierThreats: [
      {
        id: "t1",
        severity: "critical",
        text: "Databricks Select at risk — 2 Data Engineer certs expire before Sep renewal.",
        meta: "Beacon · holders K. Iyer, P. Nair",
        action: "Prioritise",
        source: "Beacon",
      },
      {
        id: "t2",
        severity: "watch",
        text: "AWS Premier path short 3 Solutions Architects against current pipeline demand.",
        meta: "Blocks co-sell funding on 4 open deals",
        action: "Fund",
        source: "Beacon",
      },
      {
        id: "t3",
        severity: "critical",
        text: "Org privacy training at 84% — Sep 1 audit gate for enterprise RFPs.",
        meta: "Compliance · all staff",
        action: "Push",
        source: "Beacon",
      },
    ],
  },

  events: {
    tiles: {
      totalLabel: "Demand spend",
      totalCount: 14,
      totalUnit: "revenue events",
      totalValue: "$3.2M",
      totalSub: "excludes internal offsights",
      ongoingCount: 5,
      ongoingUnit: "in flight",
      ongoingValue: "$1.8M",
      ongoingSub: "actively being planned",
      attentionCount: 3,
      attentionUnit: "blocked",
      attentionValue: "$0.6M",
      attentionSub: "speaker, venue, or follow-up leak",
    },
    budgetByCategory: [
      { label: "Conferences", value: 1.6, displayValue: "$1.6M" },
      { label: "Showcases", value: 0.5, displayValue: "$0.5M" },
      { label: "Webinars", value: 0.3, displayValue: "$0.3M" },
      { label: "Advisory", value: 0.3, displayValue: "$0.3M" },
    ],
    budgetPlanned: "$3.2M",
    budgetSpent: "$1.9M",
    followUpStat: { label: "Contacted ≤7 days", value: "71%" },
    followUpNote: "Worst: Accelerator Demo Day — only 38% contacted in 7 days. Pipeline leak, not a lead problem.",
    pipelinePerEvent: { columns: PIPELINE_EVENT_COLUMNS, rows: PIPELINE_EVENT_ROWS },
    mdf: { columns: MDF_COLUMNS, rows: MDF_ROWS },
    attentionEvents: { columns: ATTENTION_EVENT_COLUMNS, rows: ATTENTION_EVENT_ROWS },
  },
};

export async function getDashboardData(): Promise<DashboardData> {
  return MOCK_DASHBOARD_DATA;
}
