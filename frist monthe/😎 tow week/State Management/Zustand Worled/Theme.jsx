// 🟦 مثال واقعي: Theme (Enterprise 🔥)

// 📁 store/useThemeStore.ts

import { create } from "zustand";

type ThemeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));



// استخدامه في Navbar
"use client";

const theme = useThemeStore((s) => s.theme); // as a state value
const toggleTheme = useThemeStore((s) => s.toggleTheme); // as an action