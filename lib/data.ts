import { DashboardData } from "./types";

/**
 * Placeholder data, shaped exactly like the real thing will be.
 *
 * To go live: replace the body of `getDashboardData()` with a real call
 * (REST endpoint, database query, MCP tool, whatever the source system is)
 * that resolves to a `DashboardData` object. Every component downstream
 * reads only from that type, so nothing else needs to change.
 */
const MOCK_DASHBOARD_DATA: DashboardData = {
  reportTitle: "Sales Report",
  reportDate: "Friday, December 15th 2026",
  stats: [
    {
      id: "total-sales",
      label: "Total Sales",
      value: 612917,
      format: "currency",
      delta: { percent: 2.08, direction: "up" },
      comparisonLabel: "Products vs last month",
      icon: "sales",
    },
    {
      id: "total-orders",
      label: "Total Orders",
      value: 34760,
      format: "number",
      delta: { percent: 12.4, direction: "up" },
      comparisonLabel: "Orders vs last month",
      icon: "orders",
    },
    {
      id: "visitors",
      label: "Visitor",
      value: 14987,
      format: "number",
      delta: { percent: 2.08, direction: "down" },
      comparisonLabel: "Users vs last month",
      icon: "visitors",
    },
    {
      id: "sold-products",
      label: "Total Sold Products",
      value: 12987,
      format: "number",
      delta: { percent: 12.1, direction: "up" },
      comparisonLabel: "Products vs last month",
      icon: "products",
    },
  ],
  monthlyActivity: [
    { month: "Jan", seenProducts: 28000, sales: 21000 },
    { month: "Feb", seenProducts: 33000, sales: 19000 },
    { month: "Mar", seenProducts: 31000, sales: 27000 },
    { month: "Apr", seenProducts: 43787, sales: 39784 },
    { month: "May", seenProducts: 30000, sales: 24000 },
    { month: "Jun", seenProducts: 47000, sales: 36000 },
    { month: "Jul", seenProducts: 41000, sales: 34000 },
  ],
  productStatistic: {
    totalLabel: "Products Sales",
    totalValue: 9829,
    totalDelta: { percent: 5.34, direction: "up" },
    categories: [
      {
        id: "electronic",
        label: "Electronic",
        value: 2487,
        delta: { percent: 1.8, direction: "up" },
        icon: "electronic",
      },
      {
        id: "games",
        label: "Games",
        value: 1828,
        delta: { percent: 2.3, direction: "up" },
        icon: "games",
      },
      {
        id: "furniture",
        label: "Furniture",
        value: 1463,
        delta: { percent: 1.04, direction: "down" },
        icon: "furniture",
      },
    ],
  },
  customerGrowth: [
    { id: "us", country: "United States", countryCode: "US", customers: 2417 },
    { id: "de", country: "Germany", countryCode: "DE", customers: 812 },
    { id: "au", country: "Australia", countryCode: "AU", customers: 2281 },
    { id: "fr", country: "France", countryCode: "FR", customers: 287 },
  ],
};

export async function getDashboardData(): Promise<DashboardData> {
  return MOCK_DASHBOARD_DATA;
}
