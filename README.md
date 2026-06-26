# Jot — Portfolio

A single-page developer portfolio. Editorial,
type-led design — heavy whitespace, **Newsreader** serif + **JetBrains Mono**,
a warm OKLCH palette with one vermilion accent, and a persisted light/dark theme.
Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS v4**.

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

**Everything the site displays lives in [`lib/content.ts`](lib/content.ts)** — copy,
projects, experience, skills, writing, and links. Edit that one file and the whole
site updates.

## Project structure

```
app/
  layout.tsx          # root layout, metadata, next/font, no-flash theme script
  page.tsx            # composes the sections in order
  globals.css         # OKLCH design tokens + base styles + responsive grids
components/
  nav.tsx             # fixed nav, active-section tracking (client)
  theme-toggle.tsx    # light/dark pill toggle (client)
  hero.tsx            # hero / about (#about)
  projects.tsx        # numbered project rows (#projects)
  experience.tsx      # timeline (#experience)
  skills.tsx          # stack rows (#skills)
  writing.tsx         # writing placeholders (#writing)
  contact.tsx         # contact links (#contact)
  footer.tsx
  section-header.tsx  # shared "01  Title" numbered header
lib/
  content.ts          # ← edit your content here
```

## Theming

Colors are CSS custom properties in [`app/globals.css`](app/globals.css): a light
`:root` set and a dark `[data-theme="dark"]` set, defined in **OKLCH**. The theme
toggle writes `data-theme` on `<html>` and persists to `localStorage['jot-theme']`;
on first load with no stored value it respects `prefers-color-scheme`. An inline
script in `layout.tsx` applies the theme before first paint to avoid a flash.

To recolor the site, change `--accent` (light and dark) in `globals.css`.

Fonts are loaded via `next/font/google` (Newsreader + JetBrains Mono) and exposed
as `--font-newsreader` / `--font-jetbrains-mono`.

## Notes

- Sections are styled with inline styles using the OKLCH token variables, closely
  mirroring the design handoff; responsive grid behavior lives in `globals.css`
  (nav links hide below 880px; the experience/stack grids collapse below 720px).
- No images or icon libraries — the design is purely typographic.