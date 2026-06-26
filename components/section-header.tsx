/** Numbered section header with a top hairline rule (e.g. "01  Projects"). */
export function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 18,
        borderTop: "1px solid var(--text)",
        paddingTop: 22,
      }}
    >
      <span className="ff-mono" style={{ fontSize: 13, color: "var(--accent)" }}>
        {num}
      </span>
      <h2
        style={{
          margin: 0,
          fontWeight: 400,
          fontSize: "clamp(30px, 4vw, 52px)",
          letterSpacing: "-.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
