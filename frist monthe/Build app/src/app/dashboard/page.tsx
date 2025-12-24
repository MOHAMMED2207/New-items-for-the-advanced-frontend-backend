"use client";

import { ChartAreaInteractive } from "@/components/AllCharts_AnalysisCard/Charts";
import { DataTable } from "@/components/data-table/data-table";
import { payments } from "@/data/DataTable/payments";
import { Suspense } from "react";
import { TableSkeleton } from "@/components/ItemsWaiting/Skeleton/TableSkeleton";
import StatsCardsGrid from "@/components/AllCharts_AnalysisCard/StatsCardsGrid/StatsCardsGrid";

export default function DashboardPage() {
  return (
    <div className=" min-h-screen w-full bg-background text-foreground px-6 py-8">
     

      <section className="mt-5">
        <StatsCardsGrid />
      </section>

      <section className="mt-5">
        <ChartAreaInteractive />
      </section>

      <section className="mt-5">
        <Suspense fallback={<TableSkeleton />}>
          <DataTable data={payments} />
        </Suspense>
      </section>
    </div>
  );
}
