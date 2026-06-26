"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

/**
 * Light/dark toggle. The initial theme is applied before paint by the inline
 * script in layout.tsx, so this component just reads the current state and
 * flips it (persisting the choice to localStorage).
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore (e.g. storage disabled)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      {/* Until mounted, render the moon to match server output and avoid a flash. */}
      {mounted && isDark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
