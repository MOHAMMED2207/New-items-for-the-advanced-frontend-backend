"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/State Managemet/api/useMe";

export function Header() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b px-6 h-14">
      <h2 className="font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {user?.fullname}
        </span>
        <Button size="sm" variant="outline">
          Profile
        </Button>
      </div>
    </header>
  );
}
