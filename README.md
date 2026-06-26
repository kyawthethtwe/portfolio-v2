# Portfolio

A minimal, single-page developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS v4**. Features light/dark themes, responsive layout, and subtle scroll-reveal animations.

## Getting started

> **Note:** This project's lockfile is pnpm, but the globally installed `pnpm`
> is tied to a Node 22 install. With the active Node version (20.x), use `npm`
> to run scripts (dependencies are already installed in `node_modules`).

```bash
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Customizing the content

**Almost everything you'll want to change lives in [`lib/content.ts`](lib/content.ts)** —
your name, role, bio, projects, experience, skills, and social links. Edit that
one file and the whole site updates.

Things to replace before publishing (marked with `TODO` in the file):

- [ ] Confirm your **name** and **initials** (the nav logo)
- [ ] Update **GitHub** and **LinkedIn** URLs in `site.socials`
- [ ] Replace the placeholder **projects** with your real work
- [ ] Update the **experience** entries
- [ ] Add your CV at `public/resume.pdf` (or change `site.resumeUrl`)
- [ ] Replace the favicon at `app/favicon.ico`

## Project structure

```
app/
  layout.tsx        # root layout, metadata, fonts, no-flash theme script
  page.tsx          # composes the sections
  globals.css       # design tokens (colors, dark mode) + base styles
components/
  nav.tsx           # sticky nav + mobile menu
  hero.tsx          # landing / intro
  about.tsx         # bio + quick facts
  projects.tsx      # featured project + grid
  experience.tsx    # timeline + skills
  contact.tsx       # email + social links
  footer.tsx
  section.tsx       # shared section shell (label + heading)
  reveal.tsx        # scroll-reveal wrapper (respects reduced-motion)
  theme-toggle.tsx  # light/dark toggle
  icons.tsx         # inline SVG icons
lib/
  content.ts        # ← edit your content here
```

## Theming

Colors are CSS variables in `app/globals.css` (a `:root` light set and a `.dark`
set). Change the `--accent` value to recolor the site. Dark mode is class-based
and toggled from the nav; it defaults to the visitor's system preference.

## Deploying

The easiest path is [Vercel](https://vercel.com/new): push this repo to GitHub
and import it. No configuration needed.
