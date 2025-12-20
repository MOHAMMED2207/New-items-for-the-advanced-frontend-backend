
"use client";
import { useAuthStore } from "@/State Managemet/store/authStore";
import { useState, useEffect } from "react";
import { User } from "@/types/formAuth";

export const useAuth = () => {
  const { user, token } = useAuthStore() as {
    user: User | null;
    token: string | null;
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // مجرد تحايل بسيط لو عايز loading state
    setIsLoading(false);
  }, []);

  return { user, token, isLoading };
};
