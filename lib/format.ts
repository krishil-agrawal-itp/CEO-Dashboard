/** Dot as the thousands separator (e.g. 612.917), matching the report's number style. */
function groupWithDots(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatStatValue(value: number, format: "currency" | "number"): string {
  const grouped = groupWithDots(value);
  return format === "currency" ? `$${grouped}` : grouped;
}

export function formatCompact(value: number): string {
  return groupWithDots(value);
}

export function formatDelta(percent: number): string {
  return `${percent.toFixed(2).replace(/\.00$/, "")}%`;
}
