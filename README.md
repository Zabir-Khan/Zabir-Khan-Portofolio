# Zabir Khan — Photographer Portfolio

A premium, dark-mode, editorial photographer portfolio built with Next.js 14
(App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Home page — assembles all sections
│   └── globals.css      # Tailwind layers + custom utilities
├── components/
│   ├── Navbar.tsx        # Sticky nav, mobile menu, scroll-spy
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── Portfolio.tsx  # Filterable masonry gallery + lightbox
│   │   ├── Lightbox.tsx
│   │   ├── Services.tsx
│   │   ├── Achievements.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx    # Form with client-side validation
│   └── ui/
│       ├── PhotoScene.tsx  # Inline SVG photo placeholders
│       ├── RevealSection.tsx
│       └── icons.ts
├── data/                  # Content — edit these to update copy
│   ├── site.ts
│   ├── about.ts
│   ├── portfolio.ts
│   └── content.ts
└── lib/
    ├── tokens.ts          # Design tokens (keep in sync with tailwind.config.js)
    └── useActiveSection.ts
```

## Replacing Placeholder Photography

All images are currently rendered via `PhotoScene`, a set of hand-built
inline SVG "photographs" with zero network dependency. To use real photos:

1. Add image files to `public/images/` (or a remote host configured in
   `next.config.js` under `images.remotePatterns`).
2. Replace `<PhotoScene seed={n} alt="..." className="..." />` usages with
   `next/image`, e.g.:

   ```tsx
   <Image src="/images/portrait-01.jpg" alt="..." fill className="object-cover" />
   ```

3. Update `src/data/portfolio.ts` to reference real image paths instead of
   numeric seeds.

## Editing Content

All copy lives in `src/data/`:

- `site.ts` — name, tagline, contact info, nav links, social links
- `about.ts` — bio facts, skills, career timeline
- `portfolio.ts` — gallery items and categories
- `content.ts` — services, stats, achievements, testimonials

## Contact Form

The form validates required fields and email format client-side. It does
**not** currently send anywhere — wire it up to a real backend (Resend,
EmailJS, or a custom `app/api/contact/route.ts`) before going live. See
`.env.example` for suggested environment variables.

## Scripts

| Command                | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run dev`           | Start development server             |
| `npm run build`          | Production build                     |
| `npm run start`          | Run production build                 |
| `npm run lint`           | Run ESLint                           |
| `npm run format`         | Format with Prettier                 |
| `npm run format:check`   | Check formatting without writing     |

## Accessibility

- All interactive elements have `aria-label`s or visible text labels
- Filter buttons use `aria-pressed`; nav links use `aria-current`
- Lightbox is a labeled dialog, closable via Escape key or click-outside
- Respects `prefers-reduced-motion` (disables grain animation and shortens
  transitions)

## Deployment

This project is ready to deploy on Vercel:

```bash
npm run build
```

Push to a Git repository and import it into Vercel, or run `vercel` via the
CLI. Update `SITE.url` in `src/data/site.ts` with the real production domain
before deploying — it's used for Open Graph / Twitter card metadata.
