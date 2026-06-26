// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE to customize your portfolio.
//  Everything the site displays — your name, bio, projects, experience, skills,
//  and links — lives here. Change the values below and the whole site updates.
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Mark exactly one project as `featured` to highlight it at the top. */
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type NavLink = { href: string; label: string };

// ── Basic info ───────────────────────────────────────────────────────────────
export const site = {
  name: "Kyaw Thet Htwe", // TODO: confirm your name
  initials: "KTH", // shown as the small logo in the nav
  role: "Full-Stack Web Developer",
  tagline:
    "I design and build fast, accessible web applications — turning ideas into polished products with React, Next.js, and TypeScript.",
  location: "Remote",
  focus: "Web apps & developer tooling",
  email: "kyawthethtwe595@gmail.com",
  /** Drop your CV at public/resume.pdf, or change this path. */
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/your-username", // TODO
    linkedin: "https://www.linkedin.com/in/your-username", // TODO
  },
};

// ── About ──────────────────────────────────────────────────────────────────--
export const aboutParagraphs: string[] = [
  "I'm a web developer who enjoys the whole stack — from designing clean, intuitive interfaces to shaping the APIs and data models behind them. I care about details: fast load times, sensible accessibility, and code that's a pleasure to maintain.",
  "Outside of shipping features, I like exploring new tools, contributing to side projects, and turning rough ideas into things people can actually use. I'm currently open to new opportunities and interesting collaborations.",
];

// ── Projects ─────────────────────────────────────────────────────────────────
// Set `featured: true` on the one you most want to show off.
export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A real-time collaborative task board with drag-and-drop, optimistic updates, and presence indicators. Built to feel instant even on flaky connections.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/taskflow",
    featured: true,
  },
  {
    title: "DevNotes",
    description:
      "A markdown-first knowledge base with full-text search and keyboard-driven navigation for developers.",
    tags: ["React", "Tailwind CSS", "SQLite"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/devnotes",
  },
  {
    title: "Weatherly",
    description:
      "A clean weather dashboard with location search, hourly forecasts, and a configurable widget API.",
    tags: ["Next.js", "REST API", "Charts"],
    repoUrl: "https://github.com/your-username/weatherly",
  },
  {
    title: "Snippet CLI",
    description:
      "A terminal tool for saving, searching, and pasting code snippets — synced across machines.",
    tags: ["Node.js", "TypeScript", "CLI"],
    repoUrl: "https://github.com/your-username/snippet-cli",
  },
];

// ── Experience ─────────────────────────────────────────────────────────────--
export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Contract",
    period: "2023 — Present",
    description:
      "Design and ship end-to-end web applications for clients across several industries.",
    highlights: [
      "Built production Next.js apps from design to deployment.",
      "Improved a client's page load time by ~40% through code-splitting and caching.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Your Company",
    period: "2021 — 2023",
    description:
      "Owned core UI features and the component library used across the product.",
    highlights: [
      "Led the migration to a typed, reusable design system.",
      "Collaborated closely with design and backend teams in an agile setup.",
    ],
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────--
export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  { label: "Tools", items: ["Git", "Docker", "PostgreSQL", "Vercel", "Figma"] },
];

// ── Nav ──────────────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
