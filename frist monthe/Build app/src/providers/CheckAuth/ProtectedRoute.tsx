"use client";
import { useAuth } from "@/providers/CheckAuth/useAuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingPage from "../../components/ItemsWaiting/LodingPage";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, checking } = useAuth();

  useEffect(() => {
    if (!checking && !isAuthenticated) {
      // Redirect to login page if not authenticated
      router.replace("/login");
    }
  }, [checking, isAuthenticated, router]);

  if (checking) return <LoadingPage />;

  return <>{children}</>;
}
