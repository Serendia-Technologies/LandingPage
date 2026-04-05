# Serendia — Brand Manual

## 1. Brand Name & Origin

**Serendia** is derived from the word *Serendipity* — a valuable, fortunate, and unexpected discovery made by accident or chance, especially while searching for something entirely different.

The brand embodies the idea that the encounter between potential clients and Serendia should feel like a fortunate, valuable accident — a moment of unexpected discovery that transforms how they see technology and their own business potential.

## 2. Tagline

> *Where technology meets discovery.*

Alternative taglines for campaign use:

- "Your next breakthrough starts here."
- "Discover what's possible."
- "The happy accident your business needs."

## 3. Color Palette

| Token            | Hex       | RGB             | Usage                                              |
|------------------|-----------|-----------------|-----------------------------------------------------|
| Primary          | `#41a7ed` | 65, 167, 237    | Buttons, links, interactive accents, CTAs           |
| Primary Dark     | `#1b679e` | 27, 103, 158    | Hover states, gradients, dark accents, section dividers |
| Background Light | `#f2f2f2` | 242, 242, 242   | Alternating section backgrounds, card surfaces      |
| Dark             | `#000024` | 0, 0, 36        | Hero overlays, footer, dark-themed sections, body text |
| White            | `#ffffff` | 255, 255, 255   | Card backgrounds, text on dark surfaces, page base  |

### Color Usage Guidelines

- **Primary (`#41a7ed`)** is the dominant brand color. Use it for all primary call-to-action buttons, navigation highlights, and interactive elements.
- **Primary Dark (`#1b679e`)** serves as a gradient endpoint alongside Primary, and as the hover/active state for primary buttons.
- **Dark (`#000024`)** replaces pure black for all dark surfaces and body text. It provides a slightly warmer, more sophisticated alternative to `#000000`.
- **Background Light (`#f2f2f2`)** is used for alternating page sections to create visual rhythm and depth.
- **White (`#ffffff`)** is the default page background and is used for text on dark surfaces.

### Gradient Definitions

- **Hero Gradient**: `linear-gradient(135deg, #000024 0%, #1b679e 100%)`
- **CTA Banner Gradient**: `linear-gradient(90deg, #1b679e 0%, #41a7ed 100%)`

## 4. Typography

### Primary Font: Roboto

Roboto is the default Material UI typeface and provides excellent readability across all screen sizes. It is used across the entire application.

| Element       | Weight    | Size (Desktop) | Size (Mobile) |
|---------------|-----------|----------------|---------------|
| H1 (Hero)     | 700 (Bold)| 3rem (48px)    | 2rem (32px)   |
| H2 (Section)  | 700 (Bold)| 2.25rem (36px) | 1.75rem (28px)|
| H3 (Card)     | 600 (Semi)| 1.5rem (24px)  | 1.25rem (20px)|
| H4 (Subtitle) | 600 (Semi)| 1.25rem (20px) | 1.1rem (18px) |
| Body 1        | 400 (Reg) | 1rem (16px)    | 1rem (16px)   |
| Body 2        | 400 (Reg) | 0.875rem (14px)| 0.875rem      |
| Button        | 500 (Med) | 0.875rem (14px)| 0.875rem      |

### Font Loading

Roboto is loaded via `@fontsource/roboto` or Google Fonts CDN to ensure fast, reliable delivery.

## 5. Logo Usage

The Serendia logo should be placed in the top-left corner of the navigation bar. Guidelines:

- **Minimum clear space**: Equal to the height of the "S" in Serendia on all sides.
- **On dark backgrounds**: Use the white version of the logo.
- **On light backgrounds**: Use the dark (`#000024`) version.
- **Minimum display size**: 120px wide for digital.
- **Do not**: Stretch, rotate, add effects, or change the logo colors outside of the approved palette.

> **Note**: A final logo asset is pending. The application currently uses the brand name "Serendia" as a typographic logo in the navigation bar.

## 6. Iconography

Material UI Icons (`@mui/icons-material`) are used throughout the site for service cards, process steps, and UI elements. Icons follow these rules:

- Use **outlined** variants by default for a lighter, modern feel.
- Icon color should match the Primary (`#41a7ed`) on light backgrounds or White (`#ffffff`) on dark backgrounds.
- Icon size: 40px for feature cards, 24px for inline UI elements.

## 7. Tone of Voice

Serendia's communication style balances **professionalism** with **approachability**, and **technical confidence** with **accessibility**:

- **Professional yet warm**: We speak as trusted advisors, not as distant experts.
- **Discovery-oriented**: We frame our services as journeys of discovery, aligning with the serendipity concept.
- **Results-focused**: Every message ties back to tangible business outcomes.
- **Inclusive**: Content must feel welcoming to both technical and non-technical audiences.
- **Multilingual sensitivity**: Translations (ES, EN, PT) should feel native, not machine-translated. Idiomatic expressions are preferred over literal translations.

### Example Phrasing

| Instead of...                           | Use...                                              |
|-----------------------------------------|------------------------------------------------------|
| "We sell AI solutions"                  | "We help you discover how AI transforms your business" |
| "Buy our service"                       | "Start your transformation journey"                  |
| "Contact sales"                         | "Let's talk"                                         |
| "Our product features"                  | "What we can achieve together"                       |

## 8. Photography & Imagery

- Prefer **abstract, technology-themed visuals**: neural networks, data flows, connected nodes, light patterns.
- Avoid generic stock photos of people in suits shaking hands.
- Images should evoke **innovation, connection, and discovery**.
- Use images with blue-toned color grading to align with the brand palette.

## 9. Spacing & Layout Principles

- **Section padding**: 80px vertical (desktop), 48px (mobile).
- **Container max-width**: 1200px, centered.
- **Card spacing**: 24px gap in grids.
- **Button padding**: 12px 32px for primary CTAs.
- **Border radius**: 8px for cards, 24px for buttons (pill shape for CTAs).
