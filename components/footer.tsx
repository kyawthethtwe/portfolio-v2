import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="ff-mono"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "28px clamp(22px, 5vw, 80px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px 28px",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11.5,
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "var(--faint)",
        }}
      >
        <span>
          © {new Date().getFullYear()} {site.name} — {site.brand}
        </span>
        <a
          href="#about"
          className="foot-link"
          style={{ color: "var(--muted)", transition: "color 0.25s ease" }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
