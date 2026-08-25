import { MilestoneItem } from "@/lib/types";

export function MilestoneTimeline({ items }: { items: MilestoneItem[] }) {
  return (
    <div className="relative pb-1 pt-11">
      <div className="mx-1 h-[2px]" style={{ background: "var(--border)" }} />
      {items.map((item, i) => (
        <div
          key={item.label}
          className="cell-fade absolute top-11 cursor-default transition-transform hover:scale-125"
          style={{ left: `${item.position}%`, transform: "translate(-50%, -50%)", animationDelay: `${i * 90}ms` }}
        >
          <span className="block h-3 w-3 rounded-full border-2 border-[var(--surface)]" style={{ background: "var(--brand)" }} />
        </div>
      ))}
      {items.map((item, i) => (
        <div
          key={item.label + "-label"}
          className="cell-fade absolute top-0 w-max max-w-[140px] text-center"
          style={{ left: `${item.position}%`, transform: "translateX(-50%)", animationDelay: `${i * 90}ms` }}
        >
          <p className="text-[12px] font-bold text-[var(--ink-secondary)]">{item.date}</p>
          <p className="text-[12px] font-medium leading-snug text-[var(--ink-muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
