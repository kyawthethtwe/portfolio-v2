import { contact } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "clamp(60px, 10vh, 140px) 0 clamp(40px, 6vh, 72px)" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
        }}
      >
        <SectionHeader num="05" title="Contact" />

        <h3
          style={{
            margin: "clamp(36px, 6vh, 72px) 0 0",
            fontWeight: 400,
            fontSize: "clamp(38px, 6.5vw, 92px)",
            lineHeight: 1.0,
            letterSpacing: "-.03em",
            maxWidth: "14ch",
          }}
        >
          {contact.heading}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h3>

        <div
          style={{
            marginTop: "clamp(40px, 6vh, 72px)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 0,
            maxWidth: 780,
          }}
        >
          {contact.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="contact-row"
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 20,
                borderTop: "1px solid var(--line)",
                borderBottom:
                  i === contact.links.length - 1
                    ? "1px solid var(--line)"
                    : undefined,
                padding: "clamp(20px, 3vh, 30px) 0",
                transition: "color 0.25s ease",
              }}
            >
              <span
                style={{ fontSize: "clamp(22px, 2.6vw, 34px)", letterSpacing: "-.01em" }}
              >
                {link.label}
              </span>
              <span
                className="ff-mono"
                style={{
                  fontSize: "clamp(11px, 1.2vw, 14px)",
                  letterSpacing: ".02em",
                  color: "var(--muted)",
                }}
              >
                {link.value}
              </span>
            </a>
          ))}
        </div>

        <p
          style={{
            margin: "clamp(36px, 5vh, 56px) 0 0",
            fontSize: "clamp(17px, 1.5vw, 21px)",
            color: "var(--muted)",
            maxWidth: "46ch",
            lineHeight: 1.6,
          }}
        >
          {contact.closing}
        </p>
      </div>
    </section>
  );
}
