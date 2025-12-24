"use client";

import React, { ReactNode } from "react";
import FloatingDockNavbar from "@/components/Top_Navbar/FloatingDockNavbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Left_Sidebar/app-sidebar";
import { useAuthStore } from "@/State Managemet/store/authStore";
import { User } from "@/types/formAuth";
import LoadingPage from "@/components/ItemsWaiting/LodingPage";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const defaultOpen = true;
  const { user } = useAuthStore() as { user: User };

  if (!user) {
    return <LoadingPage />;
  }
  return (
    <React.Fragment>
      {/* // navbar  */}
      <FloatingDockNavbar />
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarTrigger />
        {children}
      </SidebarProvider>
    </React.Fragment>
  );
}
