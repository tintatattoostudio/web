# Tinta Tattoo Studio Website

Modern, animated website for Tinta Tattoo Studio in Ljubljana, Slovenia.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Base UI)
- **Animations**: Framer Motion
- **i18n**: next-intl (English & Slovenian)
- **Theme**: next-themes (dark/light mode)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Key Features

- Floating glassmorphic navigation (desktop) / hamburger menu (mobile)
- Smooth scroll-triggered animations with parallax effects
- Bilingual support (English/Slovenian)
- Dark/light theme switching
- Fully responsive design
- Accessibility optimized

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_MAPTILER_KEY=your_maptiler_api_key
```
