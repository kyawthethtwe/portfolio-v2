import { projects, projectsIntro, type Project } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="ff-mono"
      style={{
        fontSize: 11,
        letterSpacing: ".04em",
        textTransform: "uppercase",
        color: "var(--muted)",
        border: "1px solid var(--line)",
        borderRadius: 999,
        padding: "4px 12px",
      }}
    >
      {children}
    </span>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-link"
      style={{
        color: "var(--text)",
        borderBottom: "1px solid var(--line)",
        paddingBottom: 3,
        transition: "color 0.25s ease, border-color 0.25s ease",
      }}
    >
      {label}
      <span style={{ color: "var(--faint)" }}> ↗</span>
    </a>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: "clamp(16px, 3vw, 40px)",
        borderTop: "1px solid var(--line)",
        padding: "clamp(30px, 4vh, 46px) 0",
        alignItems: "start",
      }}
    >
      <span
        className="ff-mono"
        style={{ fontSize: 13, color: "var(--faint)", paddingTop: 10 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: "clamp(26px, 3.2vw, 40px)",
            letterSpacing: "-.02em",
            lineHeight: 1.05,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            margin: "14px 0 0",
            maxWidth: "58ch",
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.6,
            color: "var(--muted)",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div
          className="ff-mono"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            marginTop: 24,
            fontSize: 12.5,
            letterSpacing: ".05em",
            textTransform: "uppercase",
          }}
        >
          <ProjectLink href={project.liveUrl} label="Live demo" />
          <ProjectLink href={project.repoUrl} label="GitHub" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: "clamp(60px, 10vh, 140px) 0" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(22px, 5vw, 80px)",
        }}
      >
        <SectionHeader num="01" title="Projects" />
        <div
          className="ff-mono"
          style={{
            fontSize: 11.5,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginTop: "clamp(40px, 6vh, 72px)",
          }}
        >
          {projectsIntro}
        </div>

        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </div>
    </section>
  );
}
