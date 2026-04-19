"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rootsandcaps-theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [mounted, theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="tap-highlight inline-flex h-10 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="text-base leading-none" aria-hidden>
        {isDark ? "☀" : "☾"}
      </span>
      {/* <span>{mounted ? (isDark ? "Light" : "Dark") : "Theme"}</span> */}
    </button>
  );
}
