import { MilestoneItem } from "@/lib/types";

export function MilestoneTimeline({ items }: { items: MilestoneItem[] }) {
  return (
    <div className="relative pb-2 pt-12">
      <div
        className="mx-1 h-[3px] rounded-[var(--r-pill)]"
        style={{
          background: "linear-gradient(90deg, rgba(0,58,227,0.15), var(--brand), rgba(0,58,227,0.15))",
        }}
      />
      {items.map((item, i) => (
        <div
          key={item.label}
          className="cell-fade absolute top-12 cursor-default transition-transform hover:scale-125"
          style={{ left: `${item.position}%`, transform: "translate(-50%, -50%)", animationDelay: `${i * 90}ms` }}
        >
          <span
            className="block h-3.5 w-3.5 rounded-full border-[3px] border-[var(--surface)]"
            style={{ background: "var(--brand)", boxShadow: "0 0 0 3px rgba(0,58,227,0.18)" }}
          />
        </div>
      ))}
      {items.map((item, i) => (
        <div
          key={item.label + "-label"}
          className="cell-fade absolute top-0 w-max max-w-[140px] text-center"
          style={{ left: `${item.position}%`, transform: "translateX(-50%)", animationDelay: `${i * 90}ms` }}
        >
          <p className="text-[12px] font-bold text-[var(--brand)]">{item.date}</p>
          <p className="mt-0.5 text-[12px] font-medium leading-snug text-[var(--ink-muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
