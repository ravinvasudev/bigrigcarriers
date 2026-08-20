# Big Rig Carriers Design System

Status: locked for the homepage

## Direction

Editorial industrial: premium freight operations with a composed, image-led feel. Use strong grid lines, sharp rectangular geometry, restrained motion, and deliberate contrast. Avoid generic SaaS cards, soft gradients, excessive rounded corners, and invented operational claims.

## Typography

- Primary family: League Spartan, loaded from `public/assets/LeagueSpartan.woff2`
- Display headings: bold, tight, condensed, high contrast
- Hero heading: `clamp(3.8rem, 7.7vw, 7.5rem)` with a compact `.84` line height
- Section headings: `clamp(2.4rem, 4.5vw, 4.2rem)` with a compact `.96` line height
- Body copy: 17px base with muted supporting text
- Eyebrows: uppercase, 0.7rem, 0.18em tracking
- Letter spacing remains purposeful and restrained; do not use negative tracking for body copy

## Palette

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#141817` | Primary dark surfaces and footer |
| `--forest` | `#173b35` | Service cards and brand field |
| `--forest-deep` | `#0d2926` | Quote section and deep contrast |
| `--red` | `#df4f2e` | Signal accent, primary CTA, contact band |
| `--red-dark` | `#b83620` | Accent hover state |
| `--sand` | `#ece8df` | Warm page background |
| `--cream` | `#f7f5ef` | Light content surfaces and forms |
| `--smoke` | `#d9ddd7` | Neutral supporting surface |
| `--muted` | `#65716d` | Supporting copy |
| `--white` | `#fff` | High-contrast text and controls |

Do not introduce a competing primary hue, purple bias, or a second accent system without revisiting this decision.

## Components

- Buttons are rectangular with no rounded-pill treatment.
- Service cards use photography, a dark readable overlay, a fine inset frame, and a red/coral text accent.
- The capability strip is a dark four-column bridge between the hero and services.
- The quote form is a light editorial panel placed inside a deep green section.
- The contact band is the only broad red field on the page.
- Logo artwork uses the transparent PNG at `public/assets/logo.png`.

## Content Guardrails

Keep all claims tied to confirmed business information. Do not add fleet statistics, service territories, safety credentials, delivery rates, customer logos, testimonials, or response-time promises without confirmation.
