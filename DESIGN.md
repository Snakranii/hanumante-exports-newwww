# Design Brief — Hanumante Exports

**Tone & Purpose:** Trust-focused B2B agricultural export platform. International buyers require instant credibility, professional clarity, and reliability signals. Every design choice reinforces agricultural heritage and export expertise.

**Visual Direction:** Deep agricultural green (#2D5016 → OKLCH `0.32 0.1 128`) symbolizes freshness and farming; clean whites create clarity and trust; minimal shadows prevent fussiness; professional sans-serif typography conveys competence.

**Differentiation:** Export-specific iconography (certifications: APEDA/FSSAI/IEC/GST, logistics flow, quality badges), origin badges on product cards, WhatsApp CTA as trust signal for direct communication.

## Color Palette

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|------------|-----------|---------|
| Primary | `0.32 0.1 128` | `0.65 0.12 128` | Deep agricultural green for headers, CTAs, navigation |
| Secondary | `0.95 0 0` | `0.2 0 0` | Off-white cards and neutral sections |
| Accent | `0.55 0.15 128` | `0.72 0.18 128` | Bright green for highlights, WhatsApp CTA, active states |
| Background | `0.99 0 0` | `0.11 0 0` | Page background, light/dark neutral |
| Foreground | `0.2 0 0` | `0.97 0 0` | Text on light/dark backgrounds |
| Muted | `0.93 0 0` | `0.25 0 0` | Secondary text, dividers, subtle elements |
| Border | `0.92 0 0` | `0.25 0 0` | Card borders, section dividers |

## Typography

| Layer | Font | Usage | Scale |
|-------|------|-------|-------|
| Display | Space Grotesk | Headlines (H1–H3), navigation, CTAs | 32px–48px (H1), 24px (H2), 20px (H3) |
| Body | Plus Jakarta Sans | Paragraph text, card content, labels | 16px (default), 14px (metadata) |
| Mono | JetBrains Mono | Specifications, certifications, codes | 12px–14px |

## Structural Zones

| Zone | Background | Border | Elevation | Use Case |
|------|-----------|--------|-----------|----------|
| Header | Primary green (`0.32 0.1 128`) | None | Card | Navigation, logo, mobile menu trigger |
| Hero | Primary green with 40% overlay over product image | None | Elevated | Headline, subheading, hero CTA |
| Content Cards | Secondary white (`0.95 0 0`) | Subtle grey border (`0.92 0 0`) | Card shadow | Product cards, feature cards, form sections |
| Footer | Primary green (`0.32 0.1 128`) | Top border accent green | None | Links, contact info, WhatsApp CTA |
| Muted Sections | Muted grey (`0.93 0 0`) | None | None | Alternating sections (Why Choose Us, Logistics) |

## Component Patterns

- **Buttons**: Primary (solid green, white text, 48px min tap), Secondary (white bg, green text, border), CTA (Accent green for WhatsApp)
- **Cards**: White bg, subtle shadow, rounded corners (0.625rem), hover lift effect (elevated shadow)
- **Icons**: Lucide-react 24–32px, green primary color or grey muted for secondary use
- **Forms**: Input fields with muted grey border, focus ring with primary green, clear labels
- **Certification Badges**: Small circular badges with APEDA/FSSAI/IEC/GST icons and text, green accent on hover

## Spacing & Rhythm

- **Grid density**: 1rem base unit, sections use 3–4rem padding, cards use 1.5rem internal padding
- **Mobile-first breakpoints**: `sm: 640px`, `md: 768px`, `lg: 1024px`, container max-width 1400px
- **Touch targets**: All interactive elements ≥48px height; buttons ≥44px width

## Motion & Interaction

- **Transition default**: `cubic-bezier(0.4, 0, 0.2, 1)` 0.3s smooth for all interactive elements
- **Hover states**: Buttons opacity -10%, cards translate-y -4px + elevated shadow, borders brighten to accent
- **Focus states**: 2px ring with primary green, offset 2px outward
- **Loading states**: Subtle pulse animation on buttons, skeleton loaders on cards

## Constraints

- **No decoration**: No gradients beyond primary-to-accent on hero; no animations except focus/hover/load
- **Accessibility**: Text contrast AA+ in both light/dark; touch targets minimum 48px; semantic HTML
- **Performance**: System fonts fallback chain; WOFF2 for custom fonts; lazy-load product images
- **SEO**: H1 per page, proper heading hierarchy (H2→H3), alt text on all images, meta tags optimized for "Indian Exporter", "Fresh Fruit Exporter", "Agricultural Export"

## Signature Detail

Export timeline flow in Logistics section: animated connector lines between origin → processing → packaging → port → delivery, with icons and status labels at each stage. On mobile, vertical stack; on desktop, horizontal flow with subtle green accent lines.
