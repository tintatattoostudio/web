# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tinta Tattoo Studio website - currently a landing page with theme and language switching capabilities. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and shadcn/ui components.

## Development Commands

```bash
# Development server (runs on port 3000, or 3001 if 3000 is in use)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Type checking
pnpm tsc --noEmit
```

## Architecture

### Framework & Routing
- **Next.js 16** with App Router (`src/app/` directory)
- Server components by default - use `"use client"` directive only when necessary
- Server-side rendering (SSR) is preferred; client components should be extracted to separate files

### Styling System
- **Tailwind CSS 4** with custom CSS variables using OKLCH color space
- Custom dark mode variant: `@custom-variant dark (&:is(.dark *))`
- Theme colors defined in `src/app/globals.css` with CSS variables
- Zero border radius by default (`--radius: 0`)
- Monochrome color scheme (neutral grays and blacks)

### UI Components
- **shadcn/ui** with `base-lyra` style using `@base-ui/react` primitives
- Components live in `src/components/ui/`
- Uses Lucide icons
- Import path alias: `@/components/ui`
- No `asChild` prop on dropdown menu triggers - use direct className styling

### Theme System
- **next-themes** for light/dark mode with system preference detection
- ThemeProvider configured with `attribute="class"` and `defaultTheme="system"`
- `suppressHydrationWarning` required on `<html>` tag to prevent hydration mismatches
- Theme-aware assets:
  - Dark mode: `/logo.png` (light logo) and `/decor.svg` (light decor)
  - Light mode: `/logo-dark.png` (dark logo) and `/decor-dark.svg` (dark decor)

### Internationalization (i18n)
- Custom React Context for language management (`src/lib/contexts/language-context.tsx`)
- Supported languages: English (`en`) and Slovenian (`sl`)
- Translations defined in `src/lib/translations.ts`
- Language preference persisted to localStorage
- Use `useLanguage()` hook in client components

### Typography
- Primary font: **JetBrains Mono** (configured as `--font-sans`)
- Secondary fonts: Geist Sans and Geist Mono available via CSS variables
- All fonts loaded via `next/font/google`

### Component Architecture Patterns

**Server vs Client Components:**
- Page components (`src/app/page.tsx`) should be server components
- Extract client-side logic (hooks, state, theme/language consumption) into separate client components
- Example: `page.tsx` is a server component that imports `LandingContent` (client component)

**Provider Hierarchy (in layout.tsx):**
```
<html suppressHydrationWarning>
  <body>
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  </body>
</html>
```

### Path Aliases
- `@/*` maps to `src/*`
- Common paths: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

## Key Implementation Details

### Adding New Translations
1. Add keys to both `en` and `sl` objects in `src/lib/translations.ts`
2. Type safety is enforced via `TranslationKey` type
3. Access via `translations[language].keyName`

### Theme-Aware Components
- Always check if component is mounted before rendering theme-dependent content
- Use `resolvedTheme` from `useTheme()` for actual theme value (handles system preference)
- Conditionally render assets based on theme to prevent flash

### shadcn/ui Component Usage
- Install new components with: `shadcn add <component-name>`
- Components use `@base-ui/react` primitives (not Radix UI)
- Dropdown menus use `MenuPrimitive` from `@base-ui/react/menu`
- No `asChild` prop support - use direct element props or className

### Assets
- Logo files: `logo.png` (for dark mode), `logo-dark.png` (for light mode)
- Decorative graphics: `decor.svg` (for dark mode), `decor-dark.svg` (for light mode)
- Use Next.js `Image` component with `priority` for above-the-fold images

## MapLibre Integration

The project includes maplibre-gl for potential map features. Custom styles in globals.css hide default popup styling:
```css
.maplibregl-popup-content { @apply bg-transparent! shadow-none! p-0! rounded-none!; }
.maplibregl-popup-tip { @apply hidden!; }
```

## Important Notes

- Use `pnpm` as the package manager (lockfile: `pnpm-lock.yaml`)
- TypeScript strict mode is enabled
- The project uses Turbopack for faster development builds
- date-fns should be used for any date formatting/management needs
