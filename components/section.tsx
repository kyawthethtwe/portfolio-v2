import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

/** Consistent section shell: centered width, vertical rhythm, and an optional
 *  eyebrow label + heading that fade in on scroll. */
export function Section({ id, label, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28 ${className}`}
    >
      {(label || title) && (
        <Reveal className="mb-10">
          {label && (
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              {label}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
