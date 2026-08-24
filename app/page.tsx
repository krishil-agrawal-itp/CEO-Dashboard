import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { StatCard } from "@/components/StatCard";
import { MonthlyActivityChart } from "@/components/MonthlyActivityChart";
import { ProductStatisticCard } from "@/components/ProductStatisticCard";
import { CustomerGrowthCard } from "@/components/CustomerGrowthCard";
import { getDashboardData } from "@/lib/data";

export default async function Home() {
  const data = await getDashboardData();

  return (
    <div className="flex h-screen w-screen gap-4 overflow-hidden bg-[var(--page)] p-4">
      <Sidebar />

      <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar title={data.reportTitle} date={data.reportDate} />

        <main className="grid min-h-0 flex-1 grid-cols-3 gap-4 pb-1">
          <div className="col-span-2 flex min-h-0 flex-col gap-4">
            <div className="grid shrink-0 grid-cols-2 gap-4">
              {data.stats.map((stat, i) => (
                <StatCard key={stat.id} stat={stat} emphasize={i === 0} delay={i * 0.05} />
              ))}
            </div>
            <MonthlyActivityChart data={data.monthlyActivity} />
          </div>

          <div className="flex min-h-0 flex-col gap-4">
            <ProductStatisticCard data={data.productStatistic} />
            <CustomerGrowthCard data={data.customerGrowth} />
          </div>
        </main>
      </div>
    </div>
  );
}
