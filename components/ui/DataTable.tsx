"use client";

import { useMemo, useState } from "react";
import { TableColumn, TableRow, StatusPillData } from "@/lib/types";
import { StatusPill } from "./StatusPill";
import { useDashboardControls } from "../controls/DashboardControlsContext";

function cellText(cell: string | StatusPillData | undefined): string {
  if (cell == null) return "";
  if (typeof cell === "object") return cell.label;
  return cell;
}

function toneRank(tone?: string) {
  if (tone === "critical") return 0;
  if (tone === "watch") return 1;
  if (tone === "positive") return 2;
  return 3;
}

export function DataTable({
  columns,
  rows,
  defaultSortKey,
  filterable = true,
}: {
  columns: TableColumn[];
  rows: TableRow[];
  defaultSortKey?: string;
  filterable?: boolean;
}) {
  const { risk, density } = useDashboardControls();
  const [sortKey, setSortKey] = useState(defaultSortKey ?? columns[0]?.key ?? "");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const compact = density === "compact";

  const filtered = useMemo(() => {
    if (!filterable || risk === "all") return rows;
    return rows.filter((row) => {
      const tones = Object.values(row.cells)
        .filter((c): c is StatusPillData => typeof c === "object" && c !== null)
        .map((c) => c.tone);
      if (!tones.length) return risk !== "critical";
      if (risk === "critical") return tones.includes("critical");
      return tones.some((t) => t === "critical" || t === "watch");
    });
  }, [rows, risk, filterable]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const aCell = a.cells[sortKey];
      const bCell = b.cells[sortKey];
      if (typeof aCell === "object" && typeof bCell === "object") {
        const d = toneRank(aCell.tone) - toneRank(bCell.tone);
        return sortDir === "asc" ? d : -d;
      }
      const av = cellText(aCell);
      const bv = cellText(bCell);
      const an = Number(String(av).replace(/[^0-9.-]/g, ""));
      const bn = Number(String(bv).replace(/[^0-9.-]/g, ""));
      if (!Number.isNaN(an) && !Number.isNaN(bn) && String(av).match(/\d/)) {
        return sortDir === "asc" ? an - bn : bn - an;
      }
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    return copy;
  }, [filtered, sortKey, sortDir]);

  function toggleSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[11.5px] font-semibold text-[var(--ink-muted)]">
        <span>
          Showing <span className="text-[var(--ink-primary)]">{sorted.length}</span> of {rows.length}
          {risk !== "all" ? ` · risk lens: ${risk}` : ""}
        </span>
        <span className="hidden sm:inline">Click a column to sort</span>
      </div>
      <div className="no-scrollbar -mx-1 overflow-x-auto rounded-[var(--r-md)]">
        <table className="w-full min-w-[520px] border-collapse text-[13.5px]">
          <thead>
            <tr style={{ background: "var(--surface-sunken)" }}>
              {columns.map((col) => {
                const active = sortKey === col.key;
                return (
                  <th
                    key={col.key}
                    className={`whitespace-nowrap px-2.5 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)] first:rounded-l-[var(--r-md)] first:pl-3 last:rounded-r-[var(--r-md)] last:pr-3 ${
                      col.align === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort(col.key)}
                      className={`focus-ring inline-flex items-center gap-1 rounded-[4px] hover:text-[var(--ink-primary)] ${
                        active ? "text-[var(--ink-primary)]" : ""
                      }`}
                    >
                      {col.label}
                      <span className="text-[9px]">{active ? (sortDir === "asc" ? "▲" : "▼") : "↕"}</span>
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-3 py-8 text-center text-[13px] font-semibold text-[var(--ink-muted)]"
                >
                  No rows match the current risk lens. Widen to Watch+ or All.
                </td>
              </tr>
            ) : (
              sorted.map((row, ri) => (
                <tr
                  key={row.id}
                  className="cell-fade transition-colors hover:bg-[rgba(0,58,227,0.03)]"
                  style={{ animationDelay: `${Math.min(ri, 8) * 30}ms` }}
                >
                  {columns.map((col) => {
                    const cell = row.cells[col.key];
                    const isStatus = typeof cell === "object" && cell !== null;
                    return (
                      <td
                        key={col.key}
                        className={`tabular-nums whitespace-nowrap border-b border-[var(--border-subtle)] px-2.5 font-semibold text-[var(--ink-secondary)] first:pl-3 first:font-bold first:text-[var(--ink-primary)] last:pr-3 ${
                          compact ? "py-2" : "py-3"
                        } ${col.align === "right" ? "text-right" : "text-left"}`}
                      >
                        {isStatus ? <StatusPill {...(cell as StatusPillData)} /> : (cell as string)}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
