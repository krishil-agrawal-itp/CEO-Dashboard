import { TableColumn, TableRow, StatusPillData } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function DataTable({ columns, rows }: { columns: TableColumn[]; rows: TableRow[] }) {
  return (
    <div className="no-scrollbar -mx-1 overflow-x-auto rounded-[var(--r-md)]">
      <table className="w-full min-w-[520px] border-collapse text-[14px]">
        <thead>
          <tr style={{ background: "var(--surface-sunken)" }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`whitespace-nowrap px-3 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--ink-muted)] first:rounded-l-[var(--r-md)] first:pl-3.5 last:rounded-r-[var(--r-md)] last:pr-3.5 ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={row.id}
              className="cell-fade transition-colors hover:bg-[rgba(0,58,227,0.03)]"
              style={{ animationDelay: `${Math.min(ri, 8) * 35}ms` }}
            >
              {columns.map((col) => {
                const cell = row.cells[col.key];
                const isStatus = typeof cell === "object" && cell !== null;
                return (
                  <td
                    key={col.key}
                    className={`tabular-nums whitespace-nowrap border-b border-[var(--border-subtle)] px-3 py-3.5 font-semibold text-[var(--ink-secondary)] first:pl-3.5 first:font-bold first:text-[var(--ink-primary)] last:pr-3.5 ${
                      col.align === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    {isStatus ? <StatusPill {...(cell as StatusPillData)} /> : (cell as string)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
