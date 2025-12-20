// src/store/authStore.ts
import { User } from "@/types/formAuth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setUser: (user: User, token: string) =>
        set({ user, token, isAuthenticated: true }),
    }),
    { name: "auth-storage" } // key for localStorage
  )
);
