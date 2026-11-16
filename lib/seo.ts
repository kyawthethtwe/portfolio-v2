import { experience, hero, site, skills } from "@/lib/content";

// ── Page metadata (used by app/layout.tsx) ──────────────────────────────────
export const seo = {
  title: `${site.name} — ${site.role} in Bangkok`,
  description: `${site.name} (${site.brand}) is a fullstack developer in Bangkok who builds features end to end, from the database to the user interface.`,
  // 1200×630 link-preview card for LinkedIn, Slack, X, etc.
  ogImage: {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: `${site.name} — ${site.role}`,
  },
};

// ── Structured data (schema.org JSON-LD) ────────────────────────────────────
const personId = `${site.websiteUrl}/#person`;
const websiteId = `${site.websiteUrl}/#website`;
const currentJob = experience.find((job) => job.current);

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: site.brand,
      url: site.websiteUrl,
      image: `${site.websiteUrl}${hero.portrait.src}`,
      jobTitle: site.role,
      description: seo.description,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
      },
      ...(currentJob && {
        worksFor: { "@type": "Organization", name: currentJob.company },
      }),
      alumniOf: { "@type": "CollegeOrUniversity", name: "Rangsit University" },
      knowsAbout: skills
        .filter((group) => !group.accent)
        .flatMap((group) => group.value.split(", ")),
      knowsLanguage: ["Burmese", "English"],
      sameAs: [site.github, site.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.websiteUrl,
      name: site.name,
      description: seo.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.websiteUrl}/#profile`,
      url: site.websiteUrl,
      name: seo.title,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
  ],
};
