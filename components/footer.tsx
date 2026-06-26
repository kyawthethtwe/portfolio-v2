import Link from "next/link";
import { site } from "@/lib/content";
import { ArrowUpIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            Tailwind CSS
          </a>
        </p>
        <Link
          href="#top"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          Back to top <ArrowUpIcon className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
