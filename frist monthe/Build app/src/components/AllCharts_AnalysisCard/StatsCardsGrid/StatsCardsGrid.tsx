import { StatCard } from "./StatsCards";

export default function StatsCardsGrid() {
    return (
    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <StatCard
        title="Total Revenue"
        value="$1,250.00"
        percent="+12.5%"
        trend="up"
        subtitle="Trending up this month"
      />

      <StatCard
        title="New Customers"
        value="1,234"
        percent="-20%"
        trend="down"
        subtitle="Down 20% this period"
      />

      <StatCard
        title="Active Accounts"
        value="45,678"
        percent="+12.5%"
        trend="up"
        subtitle="Strong user retention"
      />

      <StatCard
        title="Growth Rate"
        value="4.5%"
        percent="+4.5%"
        trend="up"
        subtitle="Steady performance increase"
      />
    </div>
  );
}
