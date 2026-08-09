# Jumana Motorwala — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Why this exists in this exact shape

I built this from your written brief (navy/white/lime/lavender, Montserrat,
nav + hero + project cards + contact CTA, reusable components, accessible
markup) — **not** from a live read of the Figma frame. I don't have an
authenticated Figma connection in this chat, so I couldn't pull the actual
layer positions, hex values, copy, or exported images from
"Portfolio Redesign — Homepage v2." Everything structural (grid, breakpoints,
component boundaries, a11y) is real and working. Everything content-shaped
(colors' exact hex, headline copy, project titles/links, images) is a
labeled placeholder. Search the codebase for `TODO` and `PLACEHOLDER` — that's
the full list of what to swap before this goes live.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What to replace, in order

1. **Colors** — `tailwind.config.ts`. Open the Figma frame in Dev Mode,
   click each fill (navy background, lime CTA, lavender accent), copy the
   hex, paste into the three `TODO` slots. Everything else in the app
   references `navy` / `lime` / `lavender` / `paper` by name, so this one
   file recolors the whole site.
2. **Images** — `public/images/projects/project-1.svg` (and `-2`, `-3`) are
   flat placeholder graphics. Export the real project thumbnails from Figma
   (PNG/JPG/WebP, 2x for retina, ideally under ~300KB each after Figma's own
   export compression) into `public/images/projects/`, and point
   `lib/projects.ts` at the new filenames. Write real `alt` text describing
   what's actually in each image — not a repeat of the title.
3. **Copy** — `lib/projects.ts` (titles, summaries, tags, case study links),
   `components/Hero.tsx` (headline, subhead), `components/ProjectsSection.tsx`
   (intro line), `components/ContactCTA.tsx` (invitation line, email,
   LinkedIn URL), `app/layout.tsx` (meta description).
4. **Nav destinations** — `components/Navbar.tsx`. `#work` and `#contact`
   already scroll to real sections on this page. `#about` and the "Resume"
   link are stubs — point them at a real route or file once you have one.

## Structure

```
app/
  layout.tsx        — root layout, Montserrat font, skip link
  page.tsx           — composes Navbar / Hero / ProjectsSection / ContactCTA / Footer
  globals.css        — Tailwind layers, focus-visible ring, reduced-motion guard
components/
  NavLink.tsx        — reusable nav anchor (used in both desktop + mobile menu)
  Navbar.tsx         — sticky nav, hamburger menu below md breakpoint
  Hero.tsx           — navy hero section
  ProjectCard.tsx    — reusable card (stretched-link pattern: whole card
                        clickable, one real focusable link, descriptive name)
  ProjectsSection.tsx— grid of ProjectCard, 1 col mobile / 2 tablet / 3 desktop
  ContactCTA.tsx     — lavender-tinted closing section with email + LinkedIn
  Footer.tsx
lib/
  projects.ts        — typed project data (placeholder content, see above)
```

## Accessibility notes (already built in, don't remove)

- Semantic landmarks: `header`/`nav`, `main`, section `h2`s each tied to
  their section via `aria-labelledby`, `footer`.
- Skip-to-content link, visible on keyboard focus, first in tab order.
- `:focus-visible` outline is set globally in `globals.css` — never add
  `outline: none` without a replacement focus style.
- Mobile menu button has `aria-expanded` and `aria-controls`.
- Reduced-motion users get instant transitions (`prefers-reduced-motion`
  media query in `globals.css`).
- Project card is keyboard-operable as a single tab stop with a real
  descriptive link name (the project title), not a generic "click here."

## Known sandbox-only build note

If you ever see a `next/font` "Failed to fetch font Montserrat" error, it's
an environment without internet access reaching Google Fonts at build time —
not a bug in this repo. Normal local dev, CI with internet, and Vercel all
fetch it fine.
