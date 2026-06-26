import Link from "next/link";
import { site } from "@/lib/content";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-6 py-24">
        <div className="hero-anim">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Available for new opportunities
          </p>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
