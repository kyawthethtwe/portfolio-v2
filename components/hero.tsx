import Image from "next/image";
import { hero, site } from "@/lib/content";

const socialLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
];

export function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          width: "100%",
          padding: "120px clamp(22px, 5vw, 80px) 72px",
        }}
      >
        {/* Intro beside the portrait on desktop, stacked above it on mobile. */}
        <div className="hero-top">
          <div>
            <span
              className="ff-mono"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "6px 13px",
                fontSize: 11,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--muted)",
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
              {hero.status}
            </span>

            <h1
              className="hero-name"
              style={{
                margin: "clamp(22px, 3.5vh, 32px) 0 0",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-.03em",
              }}
            >
              {site.name.replace(/ /g, " ")}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p
              style={{
                margin: "14px 0 0",
                fontSize: "clamp(19px, 1.9vw, 26px)",
                fontStyle: "italic",
                fontWeight: 300,
                letterSpacing: "-.01em",
                color: "var(--muted)",
              }}
            >
              {hero.tagline}
            </p>

            <p
              style={{
                margin: "clamp(18px, 2.5vh, 24px) 0 0",
                maxWidth: "46ch",
                fontSize: "clamp(17px, 1.4vw, 19px)",
                lineHeight: 1.6,
                color: "var(--muted)",
              }}
            >
              {hero.summary}
            </p>

            <div
              className="ff-mono"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "12px 14px",
                marginTop: "clamp(24px, 4vh, 36px)",
                fontSize: 11.5,
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              <a href={hero.primaryAction.href} className="hero-btn hero-btn-primary">
                {hero.primaryAction.label}
              </a>
              <a href={hero.secondaryAction.href} className="hero-btn hero-btn-secondary">
                {hero.secondaryAction.label}
              </a>
              <span style={{ display: "inline-flex", gap: 18 }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </span>
            </div>
          </div>

          <div className="hero-photo">
            {/* 4:3 source cropped to a 4:5 frame, so the rendered image is
                ~1.67× the frame width — `sizes` reflects that. */}
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={1448}
              height={1086}
              sizes="(min-width: 880px) 500px, 440px"
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <dl className="hero-facts">
          {hero.facts.map((fact) => (
            <div key={fact.label}>
              <dt
                className="ff-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                }}
              >
                {fact.label}
              </dt>
              <dd
                style={{
                  margin: "6px 0 0",
                  fontSize: 17,
                  lineHeight: 1.35,
                  textWrap: "balance",
                }}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
