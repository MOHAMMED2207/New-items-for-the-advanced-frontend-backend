"use client";

import { Spinner } from "@/components/ItemsWaiting/shadcn-io/spinner";

export default function LoadingPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        {/* ⬅️ Spinner ellipsis */}
        <Spinner variant="ellipsis" className="w-[5rem] h-[5rem]" />
      </div>
    </main>
  );
}
