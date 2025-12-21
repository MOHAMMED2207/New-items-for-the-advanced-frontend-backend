"use client";

import Link from "next/link";
import { LayoutDashboard, Users, ShieldCheck } from "lucide-react";
import { useAuthStore } from "@/State Managemet/store/authStore";
import { User } from "@/types/formAuth";

export const Sidebar = () => {
  const { user } = useAuthStore() as {
    user: User;
  };


  const menu = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Users", href: "/dashboard/users", icon: Users, role: "admin" },
    {
      label: "Roles",
      href: "/dashboard/roles",
      icon: ShieldCheck,
      role: "admin",
    },
  ];

  return (
    <aside className="w-64 border-r bg-background p-4">
      <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>

      <nav className="space-y-2">
        {menu.map((item) => {
          if (item.role && item.role !== user?.role) return null;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
