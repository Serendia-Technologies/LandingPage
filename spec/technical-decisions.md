# Serendia Landing Page — Technical Decisions

## 1. Framework: Next.js 16 (App Router)

### Decision

Next.js 16 with the App Router was chosen as the application framework.

### Rationale

- **Server-Side Rendering (SSR) by default**: All pages are server-rendered, which is critical for SEO and fast initial page loads — essential for a landing page targeting search engines.
- **App Router**: The newer routing paradigm provides React Server Components (RSC), nested layouts, and streaming, enabling better performance and code organization.
- **TypeScript**: First-class TypeScript support reduces bugs and improves developer experience.
- **Image Optimization**: Built-in `next/image` component with automatic WebP/AVIF conversion and lazy loading.
- **Static Generation**: Pages with no dynamic data can be statically generated at build time for optimal performance.
- **Turbopack**: Development server uses Turbopack for faster HMR.

### Alternatives Considered

| Alternative    | Why Not                                                                 |
|----------------|-------------------------------------------------------------------------|
| Gatsby         | Slower build times, GraphQL overhead unnecessary for this use case      |
| Astro          | Less React ecosystem integration, smaller community                     |
| Vite + React   | No built-in SSR, would require manual setup for SEO optimization        |
| Remix          | Viable but smaller ecosystem, less community support for MUI            |

## 2. UI Library: Material UI 7

### Decision

Material UI (MUI) 7 is the component library, using `@mui/material` and `@mui/icons-material`.

### Rationale

- **Comprehensive component set**: Provides all necessary components (AppBar, Drawer, Card, Grid, Fab, Menu, TextField, etc.) out of the box.
- **Theming system**: MUI's `createTheme` allows centralized brand token management (colors, typography, spacing) ensuring consistency.
- **Responsive design**: Built-in responsive breakpoints via the `sx` prop and Grid component.
- **Accessibility**: MUI components follow WAI-ARIA standards by default.
- **Emotion-based styling**: CSS-in-JS approach aligns with React component model and supports SSR.
- **Next.js integration**: `@mui/material-nextjs` package handles SSR emotion cache hydration.

### Styling Strategy

- **`sx` prop**: Primary styling mechanism for component-level styles.
- **`createTheme`**: All brand tokens (colors, fonts, spacing, breakpoints) defined centrally.
- **No Tailwind CSS**: Avoided to prevent styling methodology conflicts with MUI.
- **No CSS Modules**: Unnecessary given MUI's comprehensive styling solution.

## 3. Internationalization: next-intl 4

### Decision

`next-intl` v4 is used for all internationalization, with local JSON translation files.

### Rationale

- **App Router native**: Designed specifically for Next.js App Router with full RSC support.
- **Local translations**: All translations stored in `src/messages/{locale}.json` — no external translation management service required.
- **SSR-compatible**: Translations are resolved on the server, ensuring SEO crawlers see localized content.
- **Type-safe**: Provides TypeScript integration for translation keys.
- **Middleware-based routing**: Automatic locale detection and URL prefix routing (`/es/`, `/en/`, `/pt/`).

### Supported Locales

| Locale | Language   | Flag (for UI) | ISO Code |
|--------|------------|---------------|----------|
| `es`   | Spanish    | Spain (fi-es) | es       |
| `en`   | English    | UK (fi-gb)    | en       |
| `pt`   | Portuguese | Brazil (fi-br)| pt       |

### Default Locale

Spanish (`es`) is the default locale. When no locale prefix is present in the URL, the middleware redirects to `/es/`.

### Language Persistence

Language preference is persisted using `localStorage`:

1. When a user selects a language via the floating language switcher, the selection is saved to `localStorage` under the key `NEXT_LOCALE`.
2. Additionally, a cookie `NEXT_LOCALE` is set so that the server-side middleware can read it on subsequent requests.
3. On return visits, the middleware reads the cookie and redirects to the saved locale.

### Translation File Structure

Messages are organized by page/section namespace:

```json
{
  "metadata": { "title": "...", "description": "..." },
  "nav": { "home": "...", "services": "...", ... },
  "hero": { "title": "...", "subtitle": "...", "cta": "..." },
  "services": { ... },
  "about": { ... },
  "contact": { ... },
  ...
}
```

## 4. Language Switcher: flag-icons

### Decision

The `flag-icons` library (v7.5) provides SVG country flags for the language selector dropdown.

### Rationale

- **Lightweight**: SVG-based, no image assets to manage.
- **CSS-only**: Flags rendered via CSS classes (`fi fi-gb`, `fi fi-es`, `fi fi-br`).
- **Standardized**: Uses ISO 3166-1-alpha-2 country codes.

### Implementation

A floating button fixed to the upper-right corner displays the current locale code ("EN", "ES", "PT"). On click, a MUI `Menu` dropdown appears with three options, each showing the corresponding country flag followed by the language name.

## 5. SEO Strategy

### Server-Side Rendering

All pages use React Server Components and are server-rendered by default. This ensures search engine crawlers receive fully rendered HTML with all content and metadata.

### Metadata Management

Each page exports a `generateMetadata()` function that returns localized:
- `title`
- `description`
- `openGraph` properties (title, description, url, locale)
- `alternates.languages` for hreflang

### Hreflang Tags

Every page includes `<link rel="alternate" hreflang="xx" href="..." />` for all three locales, enabling search engines to serve the correct language variant.

### Sitemap & Robots

- `robots.txt`: Generated at build time, allows all crawlers.
- `sitemap.xml`: Dynamically generated via `app/sitemap.ts`, includes all pages in all locales.

### Semantic HTML

- One `<h1>` per page (hero title)
- Logical `<h2>` / `<h3>` hierarchy within sections
- `<nav>`, `<main>`, `<footer>`, `<section>` landmarks
- Descriptive `alt` text on all images

## 6. Component Architecture

### Organization Principle

Components are organized by **domain/feature**, not by type:

```
src/components/
├── layout/        → Shared layout components (Header, Footer, FloatingCTA)
├── home/          → Home page sections
├── services/      → Service detail page sections
├── about/         → About page sections
├── contact/       → Contact form and related components
└── common/        → Shared UI components (LanguageSwitcher)
```

### Server vs Client Components

- **Server Components (default)**: Page layouts, section containers, static content.
- **Client Components (`"use client"`)**: Interactive elements only — LanguageSwitcher, mobile Drawer toggle, ContactForm, Testimonials carousel, FloatingCTA.

This minimizes client-side JavaScript and improves performance.

### Data Layer

Service definitions (slugs, icons, order) are stored in `src/data/services.ts` as a typed array. This serves as the single source of truth for service routing and display order.

## 7. Responsive Design Strategy

### Breakpoints (MUI Defaults)

| Breakpoint | Min Width | Target Devices       |
|------------|-----------|----------------------|
| xs         | 0px       | Mobile phones        |
| sm         | 600px     | Large phones/tablets |
| md         | 900px     | Tablets/small laptops|
| lg         | 1200px    | Desktops             |
| xl         | 1536px    | Large desktops       |

### Key Responsive Behaviors

- **Navigation**: Full horizontal nav on `md+`, hamburger menu with MUI `Drawer` on `xs`/`sm`.
- **Service cards**: 1 column on `xs`, 2 on `sm`, 3 on `md+`.
- **Hero text**: Scales font size based on breakpoint.
- **Floating buttons**: Slightly smaller on mobile, maintain fixed positioning.
- **Section padding**: Reduces from 80px to 48px on mobile.

## 8. Performance Considerations

- **React Server Components**: Minimize client-side JS bundle.
- **next/image**: Automatic lazy loading, responsive sizing, modern format conversion.
- **Code splitting**: Next.js App Router automatically code-splits by route.
- **Font optimization**: `next/font` for optimal font loading without layout shift.
- **No heavy animation libraries**: Simple CSS transitions only.
- **Emotion SSR**: `@mui/material-nextjs` ensures styles are injected server-side to prevent FOUC (Flash of Unstyled Content).

## 9. Contact Form

### Architecture

The contact form is a client-side component with controlled inputs (React state). Fields:

| Field   | Type     | Required | Validation                    |
|---------|----------|----------|-------------------------------|
| Name    | text     | Yes      | Min 2 characters              |
| Email   | email    | Yes      | Valid email format             |
| Phone   | tel      | No       | Optional, basic format check   |
| Company | text     | Yes      | Min 2 characters              |
| Message | textarea | Yes      | Min 10 characters             |

### Submission

Currently, the form displays a success message on submit without backend integration. The form is designed to be easily connected to any backend service (API route, email service, CRM webhook) in the future.

## 10. Deployment Considerations

The application is designed for deployment on:
- **Vercel**: Native Next.js support, automatic SSR, edge functions.
- **Docker**: Can be containerized using the standard Next.js Dockerfile.
- **Node.js server**: Standard `next build && next start` for any Node.js hosting.

No environment variables are required for the base landing page. Future integrations (contact form backend, analytics) may require additional configuration.
