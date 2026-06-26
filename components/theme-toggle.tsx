"use client";

import { useEffect, useState } from "react";

/**
 * Pill toggle matching the design: 1px border, accent dot, and a label showing
 * the action ("Dark" while light, "Light" while dark). The initial theme is set
 * before paint by the inline script in layout.tsx; this reads and flips it,
 * writing data-theme on <html> and persisting to localStorage['jot-theme'].
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light",
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("jot-theme", next);
    } catch {
      // ignore (storage disabled)
    }
  }

  // Before mount, render "Dark" to match the server output and avoid a flash.
  const label = mounted && theme === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="ff-mono theme-btn"
      style={{
        cursor: "pointer",
        background: "transparent",
        border: "1px solid var(--line)",
        borderRadius: 999,
        padding: "7px 13px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--text)",
        fontSize: 11,
        letterSpacing: ".07em",
        textTransform: "uppercase",
        transition: "border-color 0.25s ease",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: "var(--accent)",
          display: "inline-block",
        }}
      />
      <span>{label}</span>
    </button>
  );
}
