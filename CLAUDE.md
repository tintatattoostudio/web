# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for Tinta Tattoo Studio built with TypeScript, React 19, and Tailwind CSS 4. The site features internationalization (i18n) support for English and Slovenian, dark/light theme switching, and uses the shadcn/ui component library.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

### Internationalization (i18n)

The app uses `next-intl` for internationalization with locale-based routing:

- **Supported locales**: English (`en`) and Slovenian (`sl`)
- **Default locale**: English (`en`)
- **Locale prefix strategy**: `as-needed` (default locale has no prefix)
- **Configuration files**:
  - `src/i18n/routing.ts` - routing configuration and navigation helpers
  - `src/i18n/request.ts` - request configuration for locale detection
  - `src/i18n/messages/` - JSON translation files (`en.json`, `sl.json`)
- **Next.js integration**: Configured via `next.config.ts` using `createNextIntlPlugin('./src/i18n/request.ts')`

When working with translations:
- Access messages using the `useTranslations` hook from `next-intl`
- All translation keys are stored in `src/i18n/messages/{locale}.json`
- Use the navigation helpers (`Link`, `useRouter`, `usePathname`, `redirect`) exported from `src/i18n/routing.ts` instead of Next.js built-in navigation to maintain locale context

### Route Structure

The app uses Next.js App Router with locale-based dynamic routing:
- `src/app/[locale]/` - All pages are under locale-based routes
- `src/app/[locale]/layout.tsx` - Root layout with theme provider, i18n, navigation, and footer
- `src/app/[locale]/page.tsx` - Landing page with hero, about, and artists sections
- `src/app/[locale]/instructions/page.tsx` - Tattoo instructions page
- `src/app/[locale]/care/page.tsx` - Tattoo care information page
- `src/app/[locale]/faq/page.tsx` - FAQ page

### Component Organization

```
src/components/
├── ui/              # shadcn/ui components (Base UI React + custom styling)
├── landing/         # Landing page sections (hero, about, artists)
├── sections/        # Reusable animated sections and content segments
├── layout/          # Layout components (navigation, footer, switchers)
└── faq/             # FAQ-specific components
```

### Styling

- **Framework**: Tailwind CSS 4
- **Component Library**: shadcn/ui with `base-lyra` style variant
- **Theme**: Supports light/dark mode via `next-themes`
- **Utility**: Uses `clsx` and `tailwind-merge` via the `cn()` helper in `src/lib/utils.ts`
- **Configuration**: `components.json` defines shadcn/ui setup with path aliases
- **Global styles**: `src/app/globals.css`

### TypeScript Configuration

- Path alias `@/*` maps to `./src/*` for clean imports
- JSX pragma set to `react-jsx` (automatic JSX runtime)
- Strict mode enabled

### Key Libraries

- **Animation**: `framer-motion` for page transitions and animations
- **Map**: `maplibre-gl` for maps (requires `NEXT_PUBLIC_MAPTILER_KEY` env var)
- **HTTP Client**: `axios` for API requests
- **Form Validation**: `zod` for schema validation
- **Icons**: `lucide-react`
- **UI Primitives**: `@base-ui/react` (Base UI)

### Animations

Animation utilities are located in `src/lib/animations/`:
- `variants.ts` - Framer Motion animation variants
- `transitions.ts` - Transition configuration

Page transitions are handled by:
- `src/components/layout/page-transition.tsx` - Framer Motion wrapper
- `src/components/sections/animated-section.tsx` - Section-level animations

### Shared Types

Common TypeScript types are defined in `src/lib/types.ts`:
- `Artist` - Artist profile information
- `FAQSection` and `FAQSectionQA` - FAQ content structure
- `InstructionsSection` - Instructions content structure
- `CareSection` - Care information structure

### Environment Variables

Required environment variables (see `.env.example`):
- `NEXT_PUBLIC_MAPTILER_KEY` - MapTiler API key for map component

### Image Handling

- Remote images are allowed from all HTTPS sources (configured in `next.config.ts`)
- Local images are stored in `public/` (logos, decorative SVGs, artist photos)

### Code Style

- **Prettier**: Enforces semicolons, trailing commas, and single quotes (`.prettierrc`)
- **ESLint**: Uses Next.js core-web-vitals and TypeScript configs (`eslint.config.mjs`)
- **Fonts**: Uses Geist Sans, Geist Mono, and JetBrains Mono from `next/font/google`

## Working with This Codebase

- Always use the `@/` path alias for imports (e.g., `@/components/ui/button`)
- When adding new shadcn/ui components, use `pnpm dlx shadcn@latest add [component]`
- Keep translations in sync between `en.json` and `sl.json`
- Follow existing patterns for page structure: wrap pages in `PageLayout`, use animated sections
- Maintain type safety: define types in `src/lib/types.ts` for shared data structures
