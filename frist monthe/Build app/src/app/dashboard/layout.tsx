"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import FloatingDockNavbar from "@/components/navbar/FloatingDockNavbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <FloatingDockNavbar />

      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
