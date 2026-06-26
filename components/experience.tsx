import { experience, type ExperienceItem } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

function ExperienceRow({ job, last }: { job: ExperienceItem; last: boolean }) {
  const bottomPad = last ? 0 : "clamp(36px, 5vh, 56px)";
  return (
    <div className="exp-row">
      {/* Date + location meta */}
      <div style={{ paddingBottom: bottomPad }}>
        {job.current ? (
          <div
            className="ff-mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              letterSpacing: ".07em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            {job.period}
          </div>
        ) : (
          <div
            className="ff-mono"
            style={{
              fontSize: 11,
              letterSpacing: ".07em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {job.period}
          </div>
        )}
        <div
          className="ff-mono"
          style={{
            fontSize: 11,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--faint)",
            marginTop: 9,
          }}
        >
          {job.location}
        </div>
      </div>

      {/* Timeline rail + content */}
      <div
        style={{
          position: "relative",
          borderLeft: "1px solid var(--line)",
          padding: last
            ? "0 0 4px clamp(24px, 3vw, 40px)"
            : "0 0 clamp(36px, 5vh, 56px) clamp(24px, 3vw, 40px)",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: -6,
            top: 5,
            width: 11,
            height: 11,
            borderRadius: 999,
            background: job.current ? "var(--accent)" : "var(--text)",
            boxShadow: "0 0 0 4px var(--bg-2)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            gap: "8px 14px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: "clamp(23px, 2.6vw, 32px)",
              letterSpacing: "-.02em",
            }}
          >
            {job.company}
          </h3>
          <span
            style={{
              fontSize: "clamp(15px, 1.5vw, 20px)",
              fontStyle: "italic",
              color: "var(--muted)",
            }}
          >
            {job.role}
          </span>
        </div>
        <p
          style={{
            margin: "14px 0 0",
            maxWidth: "64ch",
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {job.product && <span style={{ color: "var(--text)" }}>{job.product}</span>}
          {job.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}>
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="ff-mono"
              style={{
                fontSize: 10.5,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                color: "var(--muted)",
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "clamp(60px, 10vh, 140px) 0", background: "var(--bg-2)" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
        }}
      >
        <SectionHeader num="02" title="Experience" />
        <div style={{ marginTop: "clamp(44px, 7vh, 80px)" }}>
          {experience.map((job, i) => (
            <ExperienceRow
              key={job.company}
              job={job}
              last={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
