import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact" label="Contact" title="Let's build something">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <p className="max-w-xl text-pretty leading-7 text-muted-foreground">
            Have a project in mind, a role to fill, or just want to say hello?
            I&apos;m always happy to talk. The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-6 inline-flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors hover:text-accent sm:text-2xl"
          >
            {site.email}
            <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              <MailIcon className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
