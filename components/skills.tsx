import { skills } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "clamp(60px, 10vh, 140px) 0" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
        }}
      >
        <SectionHeader num="03" title="Stack" />
        <div style={{ marginTop: "clamp(36px, 5vh, 64px)" }}>
          {skills.map((group, i) => (
            <div
              key={group.label}
              className="skill-row"
              style={{
                borderTop: "1px solid var(--line)",
                borderBottom:
                  i === skills.length - 1 ? "1px solid var(--line)" : undefined,
                padding: "clamp(20px, 3vh, 30px) 0",
              }}
            >
              <div
                className="ff-mono"
                style={{
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: group.accent ? "var(--accent)" : "var(--muted)",
                  paddingTop: 6,
                }}
              >
                {group.label}
              </div>
              <div
                style={{
                  fontSize: "clamp(19px, 2vw, 26px)",
                  lineHeight: 1.45,
                  letterSpacing: "-.01em",
                  color: group.accent ? "var(--muted)" : undefined,
                }}
              >
                {group.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
