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
          {writing.intro}
        </p>

        <div style={{ marginTop: "clamp(32px, 5vh, 56px)" }}>
          {writing.posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "baseline",
                borderTop: "1px solid var(--line)",
                padding: "26px 0",
                transition: "color 0.25s ease",
              }}
            >
              <span style={{ fontSize: "clamp(19px, 2vw, 26px)", letterSpacing: "-.01em" }}>
                {post.title}
              </span>
              <span
                className="ff-mono"
                style={{
                  fontSize: 12,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {post.date}
              </span>
            </a>
          ))}
          <div style={{ borderTop: "1px solid var(--line)" }} />
        </div>
      </div>
    </section>
  );
}
