export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
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

export type WritingPost = { title: string; opacity: number };

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
  brand: "Jot",
  role: "Fullstack Developer",
  location: "Bangkok, Thailand",
  email: "kyawthethtwe595@gmail.com",
  website: "kyawthethtwe.me",
  websiteUrl: "https://kyawthethtwe.me",
  github: "https://github.com/kyawthethtwe",
  githubHandle: "github.com/kyawthethtwe",
  linkedin: "https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/",
  linkedinHandle: "in/kyawthethtwe",
};

export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

// ── Hero / About ─────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Fullstack Developer · Bangkok, Thailand",
  subline: "— goes by Jo",
  statement:
    "I build features end to end — from PostgreSQL schema to React interface to AWS deploy.",
  bio: "I'm a fullstack developer in Bangkok, originally from Myanmar, building production systems all the way through — from the database schema, up through the React / Next.js interface, out to AWS. My work tends toward the harder corners of the stack: real-time media over WebRTC and Mediasoup, self-hosted eKYC pipelines, and multi-party document workflows. I like owning a feature from data model to the screen someone actually uses.",
  education: "B.Sc. Information & Communication Technology",
  educationMeta: "Rangsit University · 2023–2025 · GPA 3.80",
  languages: "Burmese (native) · English (fluent)",
};

// ── Projects ─────────────────────────────────────────────────────────────────
export const projectsIntro = "Personal — open source & live";
// TODO: replace the placeholder Live demo / GitHub URLs with real per-project links.
export const projects: Project[] = [
  {
    title: "Secondhand E-commerce Platform",
    description:
      "A full-featured marketplace with user authentication, product catalog, cart, and wishlist — built fullstack, from schema to storefront.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    liveUrl: "https://github.com/kyawthethtwe/E-commerce",
    repoUrl: "https://github.com/kyawthethtwe/E-commerce",
  },
  {
    title: "Room Rental Website",
    description:
      "A platform for searching, listing, and booking rooms and apartments — with filtering, listing management, and a booking flow.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/kyawthethtwe",
    repoUrl: "https://github.com/kyawthethtwe",
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
      " — a digital tenancy platform. Owned features end to end: server-side PDF agreement generation, invite-based multi-party signing, and a self-hosted eKYC pipeline (NRIC OCR, OTP, liveness detection, face matching) that removed dependence on third-party identity vendors.",
    tags: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "React",
      "AWS",
      "TensorFlow / face-api",
      "Twilio",
      "OpenAPI",
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
  comingSoon: "Coming soon.",
  posts: [
    { title: "Building a self-hosted eKYC pipeline", opacity: 0.5 },
    { title: "Low-latency group video with a Mediasoup SFU", opacity: 0.38 },
  ] as WritingPost[],
};

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
