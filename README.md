# Serendia Landing Page

Landing page for **Serendia**, a software consulting firm specializing in AI adoption, Edge AI solutions, digital transformation, marketing, and business analytics.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, static export)
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
├── technical-decisions.md # Architecture decisions
└── hostinger-deployment.md # Static deployment guide for Hostinger
travel/                    # Generated static site served by Hostinger
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Static production build into `out/`, then copies it to `travel/`
- `npm run start` — Start production server for non-static Node.js deployments only
- `npm run lint` — Run ESLint

## Supported Languages

- Spanish (default)
- English
- Portuguese (Brazilian)

## Hostinger Deployment

Hostinger is configured to serve the `travel/` folder for the subdomain `travel.serendia.tech`.

To deploy changes:

```bash
npm run build
git add -A
git commit -m "Update static site"
git push origin main
```

Then click **Implementar** in Hostinger hPanel.

For limitations and troubleshooting, see `spec/hostinger-deployment.md`.
