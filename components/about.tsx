import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { aboutParagraphs, site } from "@/lib/content";

function Fact({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm font-medium">
        {href ? (
          <a href={href} className="transition-colors hover:text-accent">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-3">
        <Reveal className="space-y-4 text-base leading-7 text-muted-foreground md:col-span-2">
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-5 rounded-xl border border-border bg-card p-6 md:grid-cols-1">
            <Fact label="Location" value={site.location} />
            <Fact label="Focus" value={site.focus} />
            <Fact label="Email" value={site.email} href={`mailto:${site.email}`} />
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
