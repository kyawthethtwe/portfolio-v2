import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/content";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4 text-sm">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 font-medium transition-colors hover:text-accent"
        >
          Live <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4" /> Code
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        Featured
      </p>
      <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 max-w-2xl text-pretty leading-7 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-5">
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" label="Work" title="Selected projects">
      <div className="space-y-6">
        {featured && (
          <Reveal>
            <FeaturedCard project={featured} />
          </Reveal>
        )}
        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
