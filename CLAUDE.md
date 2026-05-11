# CLAUDE.md — KKDS Dance School Website

## Project Overview

You are rebuilding the **KKDS Dance School** website from scratch in a clean branch. This is a full rewrite to eliminate technical debt. The goal is a pixel-perfect, fully responsive Next.js implementation driven by the Figma design, with Sanity CMS stubs ready for future content handoff to the client.

**Figma Design:** https://www.figma.com/design/azUbXESPE4dTSPccNo8nFl/New-Color-Version?m=dev  
**GitHub Repo:** https://github.com/webimpactuw/kkds  
**Active Branch:** (clean rewrite branch — do not touch `main`)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| CMS (future) | Sanity v3 |
| Language | TypeScript |
| MCP | Figma MCP Server (for design token/component extraction) |

---

## Core Principles

### 1. Figma is the Source of Truth
- Always reference the Figma file for layout, spacing, color, typography, and component structure.
- The Figma contains **both desktop and mobile frames** — implement both. Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) accordingly.
- Extract exact hex colors, font sizes, font families, line heights, and spacing values from Figma — do not approximate.
- If a Figma value is ambiguous or missing, **ask a clarifying question before proceeding**.

### 2. Component-First Architecture
- Identify every reusable UI pattern in the Figma and build it as a standalone component first.
- Build components in `components/` before assembling pages.
- Every page should be composed entirely of reusable components — no one-off inline layouts.
- Component props should be typed with TypeScript interfaces.

### 3. Sanity-Ready Data Layer (Stubs Only — No Sanity Setup Yet)
- All dynamic content (text, images, class schedules, instructors, etc.) must be abstracted behind a data layer.
- Use a **fallback pattern**: hardcode Figma data as the default, but accept Sanity data if provided.
- Define Sanity schema types in `sanity/schemas/` even if Sanity is not yet connected.
- Every piece of client-editable content should have a corresponding schema field defined.
- Use this pattern for data fetching:

```ts
// lib/data/instructors.ts
import { sanityClient } from '@/lib/sanity/client' // stub, not connected yet
import { fallbackInstructors } from '@/lib/data/fallbacks'

export async function getInstructors() {
  try {
    // Future: const data = await sanityClient.fetch(INSTRUCTORS_QUERY)
    // if (data?.length) return data
    return fallbackInstructors
  } catch {
    return fallbackInstructors
  }
}
```

- Fallback data lives in `lib/data/fallbacks/` as typed TypeScript constants.
- Sanity schema files live in `sanity/schemas/` (one file per content type).
- Sanity queries (GROQ) live in `lib/sanity/queries/` (written but not yet called).

### 4. Responsive Design Rules
- Mobile-first: write base styles for mobile, then add `md:`/`lg:` overrides.
- Breakpoints follow Tailwind defaults unless Figma specifies otherwise.
- Test every component at 375px (mobile) and 1440px (desktop) widths.
- Never hardcode pixel widths for layout containers — use `max-w-*` + `mx-auto` + `px-*`.

### 5. Animation with Framer Motion
- Use Framer Motion for entrance animations, page transitions, and interactive states.
- Keep animations tasteful and consistent — match the dance school's aesthetic (elegant, not gimmicky).
- Wrap animated sections in `motion.div` with `initial`, `animate`, and `whileInView` variants.
- Use `viewport={{ once: true }}` for scroll-triggered animations to avoid re-triggering.

### 6. Code Quality
- TypeScript strict mode — no `any` types.
- All components must have explicit prop interfaces.
- Use named exports for components (not default exports, except for pages).
- No inline styles — all styling via Tailwind classes.
- Group Tailwind classes logically (layout → spacing → typography → color → animation).

---

## Project Structure

```
/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, global providers)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── classes/page.tsx
│   ├── events/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                     # Atomic: Button, Badge, Card, etc.
│   ├── layout/                 # Navbar, Footer, Section wrappers
│   └── sections/               # Page-level sections (Hero, ClassGrid, etc.)
│
├── lib/
│   ├── data/
│   │   ├── fallbacks/          # Hardcoded Figma data (typed TS constants)
│   │   └── index.ts            # Re-exports all data fetchers
│   └── sanity/
│       ├── client.ts           # Sanity client (stub — not connected)
│       └── queries/            # GROQ query strings (written, not yet called)
│
├── sanity/
│   └── schemas/                # Sanity schema definitions (one per type)
│       ├── instructor.ts
│       ├── classOffering.ts
│       ├── announcement.ts
│       └── index.ts
│
├── public/                     # Static assets (images from Figma exports)
├── styles/
│   └── globals.css             # Tailwind base + CSS custom properties
└── tailwind.config.ts          # Extend with Figma design tokens
```

---

## Design Tokens (Populate from Figma)

Add all values extracted from Figma into `tailwind.config.ts`:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      // Extract exact values from Figma
      primary: '#...',
      secondary: '#...',
      accent: '#...',
      background: '#...',
      foreground: '#...',
      // Add all brand colors here
    },
    fontFamily: {
      // Extract font families from Figma
      display: ['...', 'serif'],
      body: ['...', 'sans-serif'],
    },
    fontSize: {
      // Extract type scale from Figma if non-standard
    },
  },
}
```

---

## Sanity Schema Checklist

Define schemas for every type of client-managed content. At minimum:

- [ ] `instructor` — name, bio, photo, specialties, order
- [ ] `classOffering` — title, description, level, schedule, instructor, image
- [ ] `announcement` — title, body, date, active (boolean)
- [ ] `siteSettings` — studio name, contact info, social links, hero copy
- [ ] `galleryImage` — image, caption, category
- [ ] `testimonial` — quote, author, class

Each schema file should export a Sanity schema object even if Sanity Studio is not yet configured.

---

## Clarification Protocol

Before writing any code, if any of the following are ambiguous — **stop and ask**:

1. A Figma frame exists but the interaction/behavior is unclear
2. A component appears in multiple contexts with different states
3. A page section has content that isn't in the Figma (e.g., a form's submission behavior)
4. The responsive behavior between desktop and mobile frames is contradictory
5. The Figma uses a font that isn't on Google Fonts or a standard system stack

Format clarifying questions as a numbered list before generating any code for that section.

---

## What NOT To Do

- ❌ Do not set up Sanity Studio or connect the Sanity client — that comes later
- ❌ Do not use `create-react-app` patterns or Pages Router
- ❌ Do not use inline styles or `style={}` props
- ❌ Do not hardcode colors as hex literals in components — use Tailwind tokens
- ❌ Do not create one-off layout code inside page files — extract to components
- ❌ Do not skip mobile styles — every component must be responsive
- ❌ Do not import from `main` branch code — this is a clean rewrite

---

## Session Workflow

When starting a new Cursor session, follow this order:

1. **Read this file** (`CLAUDE.md`)
2. **Open the Figma** and survey all pages and components
3. **Extract design tokens** → populate `tailwind.config.ts`
4. **Build atomic UI components** (Button, Badge, Card, etc.)
5. **Build layout components** (Navbar, Footer)
6. **Build page sections** in order of Figma pages
7. **Assemble pages** from sections
8. **Define Sanity schemas** for all editable content
9. **Write fallback data** matching schema shape
10. **Wire data fetchers** with fallback pattern

Complete each step fully before moving to the next. Ask clarifying questions at the start of each step if needed.