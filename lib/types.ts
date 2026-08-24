/**
 * Data contracts for the CEO dashboard. Every widget on the page renders
 * strictly from one of these shapes — nothing is read from ad-hoc props.
 * To go live: replace the mock data returned by `getDashboardData()` in
 * `lib/data.ts` with a real fetch/DB call that resolves to `DashboardData`.
 * Nothing in the components needs to change.
 */

export type TrendDirection = "up" | "down";

export interface Delta {
  /** Percentage change, always positive — direction carries the sign. */
  percent: number;
  direction: TrendDirection;
}

export interface StatCard {
  id: string;
  label: string;
  /** Raw numeric value — formatting (currency, thousands) is chosen by `format`. */
  value: number;
  format: "currency" | "number";
  delta: Delta;
  comparisonLabel: string;
  icon: "sales" | "orders" | "visitors" | "products";
}

export interface MonthlyActivityPoint {
  month: string;
  seenProducts: number;
  sales: number;
}

export interface ProductCategoryStat {
  id: string;
  label: string;
  value: number;
  delta: Delta;
  icon: "electronic" | "games" | "furniture";
}

export interface ProductStatistic {
  totalLabel: string;
  totalValue: number;
  totalDelta: Delta;
  categories: ProductCategoryStat[];
}

export interface CountryGrowth {
  id: string;
  country: string;
  countryCode: string;
  customers: number;
}

export interface DashboardData {
  reportTitle: string;
  reportDate: string;
  stats: StatCard[];
  monthlyActivity: MonthlyActivityPoint[];
  productStatistic: ProductStatistic;
  customerGrowth: CountryGrowth[];
}
