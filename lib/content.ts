export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  /** Highlighted product/lead name rendered in --text before the description. */
  product?: string;
  description: string;
  tags: string[];
  /** Current role — accent-colored date + timeline dot. */
  current?: boolean;
};

export type SkillGroup = {
  label: string;
  value: string;
  /** Accent-colored label, muted value (e.g. "Learning"). */
  accent?: boolean;
};

export type WritingPost = { title: string; href: string; date: string };

export type NavLink = { id: string; label: string };

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

// ── Identity ─────────────────────────────────────────────────────────────────
export const site = {
  name: "Kyaw Thet Htwe",
  brand: "Jo",
  role: "Fullstack Developer",
  location: "Bangkok, Thailand",
  email: "kyawthethtwe595@gmail.com",
  // Canonical address for SEO tags, sitemap and structured data (not shown on the page).
  websiteUrl: "https://www.kyawthethtwe.dev",
  github: "https://github.com/kyawthethtwe",
  githubHandle: "github.com/kyawthethtwe",
  linkedin: "https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/",
  linkedinHandle: "in/kyawthethtwe",
};

const allNavLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

// ── Hero / About ─────────────────────────────────────────────────────────────
export const hero = {
  status: "Open to fullstack roles",
  tagline: "Fullstack developer in Bangkok. Goes by Jo.",
  summary:
    "I build features end to end, from the database to the user interface. Recently that's meant identity verification, live video, and online contract signing.",
  primaryAction: { label: "View projects", href: "#projects" },
  secondaryAction: { label: "Get in touch", href: "#contact" },
  // Facts strip along the bottom of the hero.
  facts: [
    { label: "Now", value: "Fullstack at Zurely" },
    { label: "Based in", value: "Bangkok, Thailand" },
    { label: "Education", value: "B.Sc. ICT, Rangsit" },
    { label: "Languages", value: "Burmese, English" },
  ],
  // Long-form bio — not shown in the hero any more; kept for reuse.
  bio: "I'm a fullstack developer in Bangkok, originally from Myanmar, building production systems all the way through — from the database schema, up through the user interface, out to AWS. My work tends toward the harder corners of the stack: real-time media over WebRTC and Mediasoup, eKYC pipelines, and multi-party document workflows. I like owning a feature from data model to the screen someone actually uses.",
  portrait: { src: "/profile.png", alt: "Portrait of Kyaw Thet Htwe" },
};

// ── Projects ─────────────────────────────────────────────────────────────────
export const projectsIntro = "Personal — open source & live";
// liveUrl / repoUrl are optional — a link only renders when it's set.
export const projects: Project[] = [
  {
    title: "Relist",
    description:
      "A secondhand marketplace with user authentication, product catalog, cart, and wishlist — built fullstack, from schema to storefront.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    liveUrl: "https://she-liart.vercel.app/",
    repoUrl: "https://github.com/kyawthethtwe/E-commerce",
  },
  {
    title: "Room Rental Website",
    description:
      "A platform for searching, listing, and booking rooms and apartments — with filtering, listing management, and a booking flow.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
];

// ── Experience ─────────────────────────────────────────────────────────────--
export const experience: ExperienceItem[] = [
  {
    company: "Double D Sdn Bhd",
    role: "Fullstack Developer",
    period: "Feb 2026 — Present",
    location: "Remote · Malaysia",
    current: true,
    product: "Zurely",
    description:
      " — a digital tenancy platform. I started on e-signing and identity verification, and now build across the whole product: the mobile app, the backend, and the staff portal that handles stamp duty, including OCR document checks and Biometric login.",
    tags: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "Capacitor",
      "AWS Bedrock",
      "face-api",
      "Twilio",
    ],
  },
  {
    company: "Shwe Ngwe Aung Holdings",
    role: "Fullstack Developer",
    period: "Jun 2025 — Jan 2026",
    location: "Remote · Myanmar",
    product: "TuTu Watch",
    description:
      " — a real-time watch-party platform with synchronized video playback. Integrated a Mediasoup SFU for low-latency group video and audio, plus real-time chat, presence, and playback sync over Socket.IO.",
    tags: [
      "Next.js",
      "TypeScript",
      "Mediasoup",
      "Socket.IO",
      "Express.js",
      "MongoDB",
      "Auth.js",
    ],
  },
  {
    company: "App Intouch Co., Ltd",
    role: "Frontend Developer Intern",
    period: "Jan 2025 — Apr 2025",
    location: "Onsite · Thailand",
    description:
      "Built responsive UI, hardened forms with React Hook Form + Zod, and integrated APIs via React Query.",
    tags: ["Next.js", "TypeScript", "Zustand", "React Query", "Tailwind", "Zod"],
  },
  {
    company: "Rangsit University Language Center",
    role: "Volunteer Frontend Developer",
    period: "Jan 2024 — Apr 2024",
    location: "Thailand",
    description:
      "Enhanced the center's website — improving digital resources, UX, and functionality.",
    tags: ["Frontend", "UX"],
  },
];

// ── Stack / Skills ─────────────────────────────────────────────────────────--
export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    value:
      "TypeScript, React, Next.js, React Native, Tailwind CSS, Zustand, Redux, React Query, Zod, shadcn/ui",
  },
  { label: "Backend", value: "Node.js, Express.js, NestJS, Socket.IO, Mediasoup" },
  { label: "Database", value: "PostgreSQL, Supabase, MongoDB" },
  { label: "Tools", value: "Git, GitHub, Postman, Docker, AWS" },
  { label: "Learning", value: "Mobile Development, Design Systems, User Experience", accent: true },
];

// ── Writing ────────────────────────────────────────────────────────────────--
export const writing = {
  intro:
    "Notes and short technical posts — on building fullstack in TypeScript, real-time media, and self-hosting the hard parts.",
  // The Writing section (and its nav link) only shows once there's at least one post.
  posts: [] as WritingPost[],
};

export const hasWriting = writing.posts.length > 0;

// ── Contact ────────────────────────────────────────────────────────────────--
export const contact = {
  heading: "Let's build something that ships",
  links: [
    {
      label: "Email",
      value: "kyawthethtwe595@gmail.com ↗",
      href: "mailto:kyawthethtwe595@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/kyawthethtwe ↗",
      href: "https://github.com/kyawthethtwe",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "in/kyawthethtwe ↗",
      href: "https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/",
      external: true,
    },
  ] as ContactLink[],
  closing:
    "Currently in Bangkok, building in TypeScript, and open to fullstack roles and interesting problems — wherever they are.",
};

export const navLinks: NavLink[] = allNavLinks.filter(
  (link) => link.id !== "writing" || hasWriting,
);
