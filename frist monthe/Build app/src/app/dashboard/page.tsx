"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import FloatingDockNavbar from "@/components/navbar/FloatingDockNavbar";
import { useAuthStore } from "@/State Managemet/store/authStore";
import { User } from "@/types/formAuth";
import { Chart } from "@/components/dashboard/Charts";
import { ChartAreaInteractive } from "@/components/Charts";

export default function DashboardPage() {
  const { user } = useAuthStore() as { user: User };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Loading user data...
      </div>
    );
  }

  // Dummy stats data (يمكن ربطه بالـ API لاحقًا)
  const chartData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 27 },
    { name: "Apr", value: 45 },
    { name: "May", value: 35 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.fullname}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Profile Info</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Monthly Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart data={chartData} />
          </CardContent>
        </Card>

        {/* Quick Actions Card */}
        <Card className="hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Use the floating navbar below to navigate.</p>
          </CardContent>
        </Card>
      </div>
      <section className="mt-5">
        <ChartAreaInteractive />
      </section>

      {/* Floating Navbar */}
      <FloatingDockNavbar />
    </div>
  );
}
