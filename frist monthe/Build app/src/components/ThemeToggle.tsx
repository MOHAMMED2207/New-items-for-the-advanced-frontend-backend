"use client";
import { useTheme } from "../providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme}>{theme === "dark" ? <Moon /> : <Sun />}</div>
  );
}
