"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [active, setActive] = useState("about");

  // Active-section tracking: the link for the section near viewport center
  // turns accent (matches the design's IntersectionObserver settings).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "saturate(180%) blur(14px)",
        WebkitBackdropFilter: "saturate(180%) blur(14px)",
        background: "color-mix(in oklab, var(--bg) 80%, transparent)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <a
          href="#about"
          style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-.01em" }}
        >
          {site.brand}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 2vw, 28px)",
          }}
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="ff-mono nav-link"
                style={{
                  fontSize: 11.5,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: active === link.id ? "var(--accent)" : "var(--muted)",
                  transition: "color 0.25s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
