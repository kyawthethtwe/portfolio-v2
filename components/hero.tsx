import { hero, site } from "@/lib/content";

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
          padding: "120px clamp(22px, 5vw, 80px) 80px",
        }}
      >
        <div
          className="ff-mono"
          style={{
            fontSize: 12.5,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: 11,
            marginBottom: "clamp(28px, 5vh, 52px)",
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
          {hero.eyebrow}
        </div>

        <h1
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: "clamp(50px, 10.5vw, 150px)",
            lineHeight: 0.92,
            letterSpacing: "-.03em",
          }}
        >
          {site.name.replace(/ /g, "\u00A0")}
          <span style={{ color: "var(--accent)" }}>.</span>
          <span
            style={{
              display: "block",
              fontSize: ".32em",
              fontStyle: "italic",
              fontWeight: 300,
              letterSpacing: "-.01em",
              color: "var(--muted)",
              marginTop: ".18em",
            }}
          >
            {hero.subline}
          </span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(28px, 4vw, 72px)",
            marginTop: "clamp(40px, 7vh, 80px)",
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: "15ch",
              fontSize: "clamp(23px, 2.9vw, 38px)",
              lineHeight: 1.16,
              letterSpacing: "-.015em",
              fontWeight: 400,
            }}
          >
            {hero.statement}
          </p>
          <div style={{ maxWidth: "56ch" }}>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(17px, 1.5vw, 20px)",
                lineHeight: 1.65,
                color: "var(--muted)",
              }}
            >
              {hero.bio}
            </p>
            <div
              className="ff-mono"
              style={{
                marginTop: 26,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 11.5,
                letterSpacing: ".05em",
                color: "var(--faint)",
                textTransform: "uppercase",
              }}
            >
              <span>
                <span style={{ color: "var(--muted)" }}>{hero.education}</span> —{" "}
                {hero.educationMeta}
              </span>
              <span>{hero.languages}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
