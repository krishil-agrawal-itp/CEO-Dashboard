import { TableColumn, TableRow, StatusPillData } from "@/lib/types";
import { StatusPill } from "./StatusPill";

export function DataTable({ columns, rows }: { columns: TableColumn[]; rows: TableRow[] }) {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-[14px]">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`whitespace-nowrap border-b border-[var(--border)] px-3 py-3 text-[11.5px] font-bold uppercase tracking-[0.06em] text-[var(--ink-muted)] first:pl-0 last:pr-0 ${
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
              className="cell-fade transition-colors hover:bg-[var(--surface-sunken)]"
              style={{ animationDelay: `${Math.min(ri, 8) * 35}ms` }}
            >
              {columns.map((col) => {
                const cell = row.cells[col.key];
                const isStatus = typeof cell === "object" && cell !== null;
                return (
                  <td
                    key={col.key}
                    className={`tabular-nums whitespace-nowrap border-b border-[var(--border)] px-3 py-3 font-semibold text-[var(--ink-secondary)] first:pl-0 first:font-bold first:text-[var(--ink-primary)] last:pr-0 ${
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
