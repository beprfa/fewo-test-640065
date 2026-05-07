# CLAUDE.md

## Repository

https://github.com/beprfa/fewo-demo-6

## Stack

- **Framework**: Astro 5 (static output)
- **Styling**: Tailwind CSS 3 with `@tailwindcss/typography`
- **Icons**: astro-icon with `@iconify-json/tabler`
- **Language**: TypeScript
- **Base template**: AstroWind (heavily customized)

## Project layout

```
src/
  pages/          # Routes — index.astro (DE), en/ (EN), contact, privacy, terms
  components/     # Astro components (ImageCarousel, AvailabilityCalendar, Logo, etc.)
  components/widgets/  # Reusable section widgets (Hero, Content, FAQs, CallToAction, etc.)
  layouts/        # PageLayout.astro (DE), PageLayoutEn.astro (EN), Layout.astro (base)
  navigation.ts   # Header/footer link definitions for both languages
  config.yaml     # Site metadata, SEO defaults, feature flags
  assets/images/  # Source images (optimized at build time)
  utils/          # Permalink helpers, frontmatter plugins
vendor/           # AstroWind integration glue
public/           # Static files (robots.txt, headers)
```

## Build & dev

```sh
npm install          # Install dependencies
npm run dev          # Dev server on localhost:4326
npm run build        # Production build → ./dist/
npm run preview      # Preview production build locally
```

## Linting & checks

```sh
npm run check        # Run all checks (astro check + eslint + prettier)
npm run check:astro  # Type-check Astro/TS files
npm run check:eslint # Lint with ESLint
npm run check:prettier # Check formatting with Prettier
npm run fix          # Auto-fix eslint + prettier
```

There are no unit or integration tests.

## Deployment

- **Netlify**: configured via `netlify.toml` (build command: `npm run build`, publish: `dist/`)
- **Vercel**: configured via `vercel.json`
- **Docker**: multi-stage `Dockerfile` builds the site and serves via nginx on port 8080

## I18n approach

No i18n framework — separate page files per language. German pages live at `src/pages/`, English at `src/pages/en/`. Each language has its own layout (`PageLayout` vs `PageLayoutEn`) and navigation exports (`headerData` / `headerDataEn`).

## Notes

- The blog system (inherited from AstroWind) is disabled in `config.yaml`.
- All page content is inline in `.astro` files; there is no CMS or external data source.
- Client-side JS is vanilla (no React/Vue/etc.) — used only for the image carousel, availability calendar, and booking form validation.
