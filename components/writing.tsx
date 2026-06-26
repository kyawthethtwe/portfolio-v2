import { writing } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function Writing() {
  return (
    <section
      id="writing"
      style={{ padding: "clamp(60px, 10vh, 140px) 0", background: "var(--bg-2)" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
        }}
      >
        <SectionHeader num="04" title="Writing" />
        <p
          style={{
            margin: "clamp(28px, 4vh, 44px) 0 0",
            maxWidth: "52ch",
            fontSize: "clamp(17px, 1.5vw, 21px)",
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {writing.intro}{" "}
          <span style={{ color: "var(--text)" }}>{writing.comingSoon}</span>
        </p>

        <div style={{ marginTop: "clamp(32px, 5vh, 56px)" }}>
          {writing.posts.map((post) => (
            <div
              key={post.title}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "baseline",
                borderTop: "1px dashed var(--line)",
                padding: "26px 0",
                opacity: post.opacity,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(19px, 2vw, 26px)",
                  letterSpacing: "-.01em",
                  color: "var(--faint)",
                }}
              >
                {post.title}
              </div>
              <div
                className="ff-mono"
                style={{
                  fontSize: 12,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                }}
              >
                — —
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px dashed var(--line)" }} />
        </div>
      </div>
    </section>
  );
}
