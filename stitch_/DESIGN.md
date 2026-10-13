---
name: Modern Minimal Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#0051b1'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f69dc'
  on-tertiary-container: '#edf0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system embodies an editorial, high-precision personal portfolio aesthetic that balances intellectual authority with tech-forward modernity. The design movement pairs Contemporary Minimalism with subtle Tactile Elevation, prioritizing content readability, structured negative space, and micro-interactions.

The experience communicates clarity, craftsmanship, and quiet confidence to recruiters, engineering leaders, and collaborators. Visual noise is stripped away to highlight projects, writing, and experience through pristine white surfaces, crisp structural borders, and electric blue focal accents.

## Colors
The palette is built around high-contrast legibility and deliberate accent placement.

- **Canvas & Surfaces:**
  - `surface-canvas`: `#ffffff` (Pure white primary background)
  - `surface-subtle`: `#f8fafc` (Slate 50, secondary background for grouped cards and alternating sections)
  - `surface-muted`: `#f1f5f9` (Slate 100, tertiary background for badge chips, code blocks, and hover fills)
  - `surface-border`: `#e2e8f0` (Slate 200, ultra-refined structural borders)

- **Primary Brand (Royal Electric Blue):**
  - Primary Base: `#2563eb` (Interactive CTAs, key milestones, active links)
  - Primary Hover: `#1d4ed8` (Pressed/hover states)
  - Primary Light: `#eff6ff` (Translucent badge background, selected item tint)
  - Primary Accent: `#3b82f6` (Secondary highlights, focus indicators)

- **Typography & Neutrals (Deep Slate):**
  - Text Primary: `#0f172a` (Slate 900, headline emphasis and titles)
  - Text Secondary: `#334155` (Slate 700, primary body content)
  - Text Muted: `#64748b` (Slate 500, metadata, dates, secondary labels)
  - Text Subtle: `#94a3b8` (Slate 400, placeholder text, disabled states)

## Typography
Typography is strictly neutral, geometric, and optimized for screens using Inter (or Pretendard in multi-language environments).

- **Tight Letter Spacing on Displays:** Titles above 24px employ tight tracking (`-0.02em` to `-0.03em`) to deliver modern editorial weight.
- **Body Comfort:** Body text maintains proportional line height (1.6x) and zero tracking to preserve rhythm during extended reading of technical essays and case studies.
- **Labels & Micro-data:** Micro-labels utilize semi-bold weight with deliberate positive letter-spacing (`0.01em` - `0.04em`) for clear categorizations, tech stacks, and dates.

## Layout & Spacing
The layout follows a centered 12-column grid system capped at a maximum width of `1120px` to maintain focused eye lines.

- **Breakpoints:**
  - `sm` (Mobile): `0px – 639px`, 4-column layout, 16px margins, 16px gutters.
  - `md` (Tablet): `640px – 1023px`, 8-column layout, 24px margins, 20px gutters.
  - `lg` (Desktop): `1024px+`, 12-column layout, auto margins (max 1120px container), 24px gutters.

- **Vertical Rhythm:**
  - Section-to-section spacing: `80px` to `120px` on desktop, scaled down to `48px` to `64px` on mobile.
  - Card inner padding: `24px` on desktop, `16px` to `20px` on mobile screens.

## Elevation & Depth
Depth is created through ambient, cool-toned shadows paired with 1px border lines rather than saturated drop shadows.

- **Elevation 0 (Surface Base):** Pure flat surface with a 1px border (`#e2e8f0`).
- **Elevation 1 (Card Default):** `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)` combined with a 1px border (`#e2e8f0`).
- **Elevation 2 (Interactive Hover / Floating Nav):** `box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` with a slightly darkened border (`#cbd5e1`).
- **Translucent Navigation / Glassmorphism:** For top navigation and modal backdrops, use `rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(12px)` and a bottom border of `rgba(226, 232, 240, 0.8)`.

## Shapes
The design embraces generous, modern curvatures that soften content cards without appearing playful:

- **Large Surfaces & Bento Cards:** `rounded-2xl` (`1.25rem` / `20px`) for major portfolio cards, case study previews, and modal windows.
- **Medium Elements:** `rounded-xl` (`0.75rem` / `12px`) for interactive inputs, code blocks, and nested media previews.
- **Buttons & Small Controls:** `rounded-lg` (`0.5rem` / `8px`) for standard buttons, text inputs, and filter controls.
- **Pills / Status Chips:** Full pill radius (`9999px`) for tech stack tags, status indicators (e.g., "Available for hire"), and categorical badges.

## Components

### Buttons
- **Primary:** Background `#2563eb`, text `#ffffff`, border none, radius `8px`, height `44px` (touch target minimum), padding `0 20px`, typography `label-md`. Hover: `#1d4ed8` with Elevation 1.
- **Secondary / Ghost:** Background `transparent`, text `#0f172a`, border `1px solid #e2e8f0`, radius `8px`. Hover: Background `#f8fafc`, border `#cbd5e1`.
- **Icon Button:** 44x44px centered flex container, 1px border, text `#334155`. Hover: background `#f1f5f9`.

### Cards (Portfolio & Bento Grid)
- **Background:** `#ffffff` or `#f8fafc`.
- **Border:** `1px solid #e2e8f0`.
- **Radius:** `20px` (`rounded-2xl`).
- **Padding:** `24px` on desktop, `18px` on mobile.
- **Hover Behavior:** Translates `-2px` on the Y-axis with a transition curve of `cubic-bezier(0.16, 1, 0.3, 1)` (duration `200ms`) and transitions to Elevation 2.

### Chips & Tags (Tech Stack / Skills)
- **Container:** Height `28px`, padding `0 12px`, radius `9999px` (pill).
- **Default State:** Background `#f1f5f9`, border `1px solid transparent`, text `#475569`, font `label-sm`.
- **Active / Accent State:** Background `#eff6ff`, border `1px solid #bfdbfe`, text `#1d4ed8`.

### Input Fields & Contact Forms
- **Field Height:** `44px` on mobile and desktop.
- **Background:** `#ffffff`, border `1px solid #e2e8f0`, radius `8px`, text `#0f172a`, placeholder `#94a3b8`.
- **Focus State:** Border `#2563eb`, box-shadow `0 0 0 3px rgba(37, 99, 235, 0.15)`.

### Project Showcase List / Timeline
- Left-aligned vertical line (`2px solid #e2e8f0`).
- Timeline nodes: `12px` circle with a `2px solid #2563eb` fill `#ffffff`.
- Meta-information (dates/roles) uses `body-sm` (`#64748b`), followed by title in `headline-sm` (`#0f172a`).