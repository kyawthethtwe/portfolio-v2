import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, skills, site } from "@/lib/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function Experience() {
  return (
    <Section id="experience" label="Career" title="Experience & skills">
      <div className="grid gap-12 md:grid-cols-5">
        {/* Timeline */}
        <div className="md:col-span-3">
          <ol className="relative border-l border-border">
            {experience.map((item, i) => (
              <Reveal key={`${item.company}-${item.period}`} delay={i * 80}>
                <li className="ml-6 pb-9 last:pb-0">
                  <span
                    className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-background bg-accent"
                    aria-hidden
                  />
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-semibold">
                    {item.role}{" "}
                    <span className="text-muted-foreground">· {item.company}</span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  {item.highlights && (
                    <ul className="mt-2 space-y-1">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>

          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
          >
            Download résumé <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Skills */}
        <div className="space-y-7 md:col-span-2">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
