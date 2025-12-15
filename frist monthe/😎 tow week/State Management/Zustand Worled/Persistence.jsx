// 🟦 حفظ البيانات (Persistence)
import { persist } from "zustand/middleware";
import { create } from "zustand";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light", // as initial value
      toggleTheme: () => set((state) => ({ // as action
        theme: state.theme === "light" ? "dark" : "light"
      }))
    }),
    { name: "theme-storage" } // unique name in localStorage
  )
);


// ➡ يتخزن في localStorage




