# Hostinger Static Deployment Guide

## Overview

This project is configured to deploy as a static website on Hostinger shared hosting for the subdomain:

```text
https://travel.serendia.tech
```

Hostinger is configured to pull the GitHub repository and serve the folder named `travel`. Because Hostinger shared hosting does not run a Node.js server, the application must be exported as static HTML, CSS, and JavaScript before deployment.

## Current Static Export Setup

The project uses Next.js static export:

```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

The build script generates the standard Next.js static export in `out/` and then copies it into `travel/`:

```json
"build": "next build && rm -rf travel && cp -R out travel"
```

This keeps the Hostinger installation path unchanged:

```text
travel
```

## Deployment Flow

1. Make the code/content changes locally.
2. Run the production build:

```bash
npm run build
```

3. Confirm the generated files exist:

```bash
travel/index.html
travel/es/index.html
travel/en/index.html
travel/pt/index.html
```

4. Commit both the source changes and the generated `travel/` folder:

```bash
git add -A
git commit -m "Update static site"
git push origin main
```

5. In Hostinger hPanel, go to the Git deployment section and click **Implementar**.

Hostinger should keep these values:

| Field | Value |
|-------|-------|
| Repository | `git@github.com:Serendia-Technologies/LandingPage.git` |
| Branch | `main` |
| Installation path | `travel` |

## Why the `travel/` Folder Must Be Committed

Hostinger shared hosting serves static files. It does not run:

```bash
npm install
npm run build
npm run start
```

That means Hostinger cannot transform the Next.js source code into HTML by itself. The generated static output must already exist in the Git repository. For this setup, that output is the `travel/` folder.

## Root Redirect Behavior

Static hosting cannot run Next.js middleware. Instead, `public/index.html` is copied into `travel/index.html` during build and performs a client-side redirect:

1. If `localStorage.NEXT_LOCALE` is `es`, `en`, or `pt`, redirect to that locale.
2. Otherwise, redirect to `/es/`.

This replaces the previous server-side locale redirect.

## Current Limitations

Because this deployment is static, the following server-side Next.js features cannot be used:

- Middleware/proxy-based redirects or locale detection.
- API routes for contact form submission.
- Server actions.
- Runtime server rendering.
- Runtime environment-dependent metadata.
- Next.js image optimizer.

The contact form currently shows a success message on the client only. To send real emails or connect to a CRM, use one of these static-compatible options:

- External form service such as Formspree, Basin, Getform, or HubSpot forms.
- A separate serverless endpoint hosted outside Hostinger static hosting.
- Hostinger VPS or Node.js hosting with a backend API.

## SEO Notes

The site is still SEO-friendly because `npm run build` pre-renders HTML for:

- `/es/`, `/en/`, `/pt/`
- `/es/about/`, `/en/about/`, `/pt/about/`
- `/es/contact/`, `/en/contact/`, `/pt/contact/`
- All service detail pages in all three languages.
- `robots.txt`
- `sitemap.xml`

The sitemap and robots files are configured for:

```text
https://travel.serendia.tech
```

## Troubleshooting

### 403 Forbidden on `travel.serendia.tech`

This usually means Hostinger is serving the configured folder but cannot find an `index.html` file.

Check that the repository includes:

```text
travel/index.html
```

If it does not exist, run:

```bash
npm run build
git add -A
git commit -m "Generate static Hostinger build"
git push origin main
```

Then click **Implementar** in Hostinger.

### Links Return 404

The project uses `trailingSlash: true`, so static pages are generated as folders with `index.html` files. Internal links should resolve to URLs like:

```text
/es/
/es/about/
/es/services/ai-adoption/
```

If Hostinger still returns 404 for these paths, verify that the generated folder structure exists inside `travel/`.

### Changes Do Not Appear After Deploy

Hostinger may serve cached files. Try:

1. Re-run **Implementar** in hPanel.
2. Clear browser cache.
3. Check the latest build output using **Ver la salida del ultimo build** in Hostinger.

## When to Use a Node.js Deployment Instead

Move away from static hosting and use Hostinger VPS, Vercel, or another Node.js-capable platform if the project needs:

- Real server-side contact form processing.
- Authenticated dashboard functionality.
- Runtime personalization.
- API routes.
- Middleware-based routing.
- Dynamic content from a CMS at request time.
