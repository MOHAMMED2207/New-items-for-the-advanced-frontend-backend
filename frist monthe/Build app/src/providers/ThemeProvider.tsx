'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [loaded, setLoaded] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const initial = saved ?? 'light';

    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
    setLoaded(true);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      return next;
    });
  };

  // Prevent rendering before theme is loaded (no flash)
  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
