# Serendia Landing Page

Landing page for **Serendia**, a software consulting firm specializing in AI adoption, Edge AI solutions, digital transformation, marketing, and business analytics.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, SSR)
- **Material UI 7** (`@mui/material`)
- **next-intl 4** (i18n with ES/EN/PT)
- **flag-icons** (language switcher flags)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/[locale]/          # Pages (Home, About, Contact, Services)
├── components/            # React components by domain
├── data/                  # Service definitions
├── i18n/                  # Internationalization config
├── messages/              # Translation files (es.json, en.json, pt.json)
└── theme/                 # MUI theme configuration
spec/
├── brand-manual.md        # Brand identity guidelines
└── technical-decisions.md # Architecture decisions
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Supported Languages

- Spanish (default)
- English
- Portuguese (Brazilian)
