import { DashboardShell } from "@/components/DashboardShell";
import { getDashboardData } from "@/lib/data";

export default async function Home() {
  const data = await getDashboardData();
  return <DashboardShell data={data} />;
}
