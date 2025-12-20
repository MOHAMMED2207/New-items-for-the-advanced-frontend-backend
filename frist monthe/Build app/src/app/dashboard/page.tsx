"use client";

import FloatingDockNavbar from "@/components/navbar/FloatingDockNavbar";
import ProtectedRoute from "@/providers/CheckAuth/ProtectedRoute";
import React from "react";
import LoadingPage from "@/components/ItemsWaiting/LodingPage";
import { useAuth } from "@/State Managemet/api/useMe";

export default function DashboardPage() {
  const { user } = useAuth();
  const authAuthUser = {
    ...user,
  };

  return (
    <ProtectedRoute>
      {authAuthUser ? (
        <React.Fragment>
          <main className="h-screen p-5 flex items-center justify-center">
            <main>
              <div className="text-2xl font-bold  text-center">
                <h1>Welcome</h1>
                {authAuthUser.fullname} in Dashboard
                {authAuthUser.role === "User" && (
                  <h1>As a {authAuthUser.role}</h1>
                )}
                <h1>...</h1>
              </div>
            </main>
          </main>
          <FloatingDockNavbar />
        </React.Fragment>
      ) : (
        <LoadingPage />
      )}
    </ProtectedRoute>
  );
}
