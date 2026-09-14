---
name: Código Real
description: A dark-bookended landing page for a no-signup, real-Monaco-editor web-dev playground.
colors:
  canvas: "#0b0f19"
  surface: "#10141f"
  surface-2: "#161c29"
  line: "#1e2734"
  line-soft: "#2a3341"
  ink: "#e7eaf0"
  ink-muted: "#8b93a7"
  paper: "#ffffff"
  paper-muted: "#f8fafc"
  paper-ink: "#0f172a"
  paper-ink-muted: "#55617a"
  paper-line: "#e5e9f0"
  accent: "#6366f1"
  accent-2: "#8b5cf6"
  accent-ink: "#ede9fe"
  html: "#e34f26"
  html-bg: "#fdeee6"
  html-btn: "#ea580c"
  css: "#2965b5"
  css-bg: "#e8f1fd"
  css-btn: "#2563eb"
  js: "#f0db4f"
  js-ink: "#2b2a17"
  js-bg: "#fdf6d9"
  js-btn: "#eab308"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "56px"
  section-y: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-2}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
  language-card:
    backgroundColor: "{colors.html-bg}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Código Real

## Overview

**Creative North Star: "The Real Tool, Dark Bookends"**

Código Real reads as a serious developer tool that happens to be a landing page, not a marketing page pretending to be a tool. The dominant register is a deep, solid-dark IDE canvas (`#0b0f19`) at the top (nav + hero + Playground) and bottom (CTA + footer), with a single light section in the middle ("Elige tu camino" / tags) that functions as a paper interlude between two dark bookends — a deliberate split confirmed by the shipped structure, not a stray inconsistency. There are no decorative gradients on the canvas itself: color is restrained to thin slate borders and one reused indigo→violet accent, spent only on the hero's headline span and primary CTA gradients. The Playground is the one place ornament gives way to function — it embeds the real Monaco Editor (VS Code's engine, loaded from CDN) with a live `srcdoc` iframe preview, so the product's central claim ("this is a real editor, not a mockup") is load-bearing to the visual system, not just copy.

Language "ficha" cards break this restraint on purpose: each gets a flat, pale tint of its own language's brand color (HTML orange, CSS blue, JS yellow) as a full card background inside the light middle section — the one place the world intentionally turns colorful, echoing familiar language-brand hues rather than the site's own indigo accent.

**Key Characteristics:**
- Solid dark canvas at rest; no gradients, no glow, no glassmorphism.
- One accent gradient (indigo → violet), spent only on gated moments: hero headline span, primary CTA buttons, primary icon badges.
- A light "paper" section in the middle of an otherwise dark page, holding the three per-language ficha cards and the tag chips.
- Soft rounded geometry throughout (`rounded-xl`/`rounded-2xl`); never sharp corners, never heavy shadows.
- Hand-authored inline SVG icons only; no icon fonts, no emoji. **Exception:** the HTML5 icon (`Icon.astro`, `name="html5"`) is the official raster HTML5 shield logo (`public/images/html5-logo.png`) instead of a hand-drawn SVG, shown at its native colors with no `bg-html` badge behind it — CSS and JS keep their hand-drawn SVGs with a solid-color badge.
- A real code editor (Monaco) and a real iframe preview are first-class visual citizens, not screenshots.

## Colors

The palette is Restrained: a near-black slate world carries almost everything, one indigo-violet accent is spent sparingly and only on conversion moments, and a light "paper" register hosts the middle section plus the Playground's own preview pane.

### Primary
- **Canvas Ink** (`#0b0f19`): the dark page background (`--color-canvas`) used for the hero/nav/Playground/CTA/footer bookends.
- **Indigo-Violet Accent** (`#6366f1` → `#8b5cf6`, `--color-accent` / `--color-accent-2`): the sole brand gradient. Used only for the hero's gradient headline span, primary CTA button backgrounds (`bg-gradient-to-r from-accent to-accent-2`), the logo mark badge, and focus rings (`accent-2` on `:focus-visible`). Never used as a flat fill or on more than one or two elements per viewport.

### Neutral (dark register)
- **Surface** (`#10141f` / `#161c29`, `--color-surface` / `--color-surface-2`): raised panels on the dark canvas — the Playground chrome, nav search field, CTA banner card.
- **Line / Line Soft** (`#1e2734` / `#2a3341`): the only borders on dark surfaces — thin 1px slate dividers, never shadows, defining header, cards, and the Playground frame.
- **Ink / Ink Muted** (`#e7eaf0` / `#8b93a7`): primary and secondary text on dark surfaces.

### Neutral (light register — "paper")
- **Paper / Paper Muted** (`#ffffff` / `#f8fafc`): the light middle section (LanguageGrid, PopularTags) and the Playground's own result pane, which stays light even though the editor pane beside it is dark. This is the full extent of the fixed-light "paper" register — the HTML course pages (`/html/*`) are NOT part of it: their sidebar, lesson text, and cards use the theme-reactive `canvas`/`surface`/`ink`/`line` tokens like the rest of the site, so the dark/light toggle applies there too. The course's four callout card types (Consejo, Reto rápido, Error común, Dato extra/Siguiente paso) additionally use a `dark:` variant (registered via `@custom-variant dark` in `global.css`, keyed off the same `data-theme` attribute) to re-tint their raw sky/emerald/red/accent colors for the dark register instead of staying pale.
- **Paper Ink / Paper Ink Muted** (`#0f172a` / `#55617a`): text on paper surfaces.
- **Paper Line** (`#e5e9f0`): borders on paper surfaces (tag chips, result-pane dividers).

### Per-Language Ficha Colors (fixed, not user-selectable)
- **HTML Orange** (icon `#e34f26`, card tint `#fdeee6`, button `#ea580c`): the HTML "camino" card and its HTML tab icon.
- **CSS Blue** (icon `#2965b5`, card tint `#e8f1fd`, button `#2563eb`): the CSS card and tab icon.
- **JS Yellow** (icon `#f0db4f`, card tint `#fdf6d9`, button `#eab308`, ink `#2b2a17`): the JS card and tab icon; JS is the only "ficha" whose button text is dark ink instead of white, because yellow fails contrast with white text.

### Named Rules
**The One Gradient Rule.** The indigo→violet gradient appears in exactly three roles across the page — hero headline span, primary CTA backgrounds, and small accent icon badges — never as a section background, never as a border, never repeated as a second competing gradient. This is scoped to the accent hue specifically: a neutral `from-canvas to-transparent` fade used to blend a photo into the dark canvas (e.g. the HTML course hero's cover photo) carries no accent color and is not a second gradient under this rule.

**The Ficha Rule.** A language's brand color (HTML/CSS/JS) is only ever used as a pale card tint plus a solid small icon badge and CTA button inside a language card. It never appears as the site's own accent, and the site's own accent never appears inside a ficha card.

## Typography

**Body/UI Font:** Inter (with ui-sans-serif, system-ui, -apple-system, sans-serif fallback)
**Code Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, Consolas, monospace fallback)

**Character:** A single workhorse humanist sans (Inter) carries every UI and copy role at weights from 400 to 800 — no display/serif pairing, because the Playground is a real tool in Operate register, not an editorial showcase. JetBrains Mono is reserved for anything that is, or represents, literal code: the Monaco editor itself and the monospaced tag chips (`<h1>`, `<div>`, etc.).

### Hierarchy
- **Display** (extrabold 800, `2.75rem`–`3.25rem` clamped, line-height 1.08, tracking tight): the hero H1 only, ending in the gradient-accent span.
- **Headline** (bold 700, `1.875rem`–`2.25rem`): section H2s ("Elige tu camino", CTA banner heading).
- **Title** (bold 700, `1.25rem`): card titles (language card names), CTA banner heading at its smaller breakpoint.
- **Body** (regular 400, `0.9375rem`–`1.0625rem`, line-height 1.5–1.6): paragraph copy, card descriptions, max-width constrained (`max-w-lg`/`max-w-xl`) rather than full-bleed.
- **Label** (semibold/medium 500–600, `0.75rem`–`0.875rem`): nav links, button text, trust badges, footer links, tab labels.
- **Code** (regular 400, `0.875rem`, JetBrains Mono): Monaco editor content and tag chips.

### Named Rules
**The No-Kicker Rule.** No small uppercase/eyebrow label sits above any heading anywhere on the built page (hero, section headers, CTA banner). Every H1/H2 carries its own weight without a kicker; do not add one to a future section.

**The One-Face Rule.** Inter is the only UI/display face; JetBrains Mono is the only monospace face. Do not introduce a third family for "personality" — the tool character comes from restraint, not from typographic variety.

## Layout

The page is a single-column stack of full-bleed sections, each centered on a `max-w-7xl` container with `px-4 sm:px-6 lg:px-8` gutters. The first-viewport hero section follows the same single-column pattern as every other section: centered Hero copy (title, subhead, CTAs, trust points, width-capped at `max-w-2xl`) sits on top, and the full Playground module spans the entire container width below it — the Playground is the one place a two-column split still appears, but internally (editor pane left, live-preview pane right, `lg:grid-cols-2`), not at the page-section level. Section vertical rhythm runs large — `py-16` to `py-24` (`96px` at desktop) between major sections (LanguageGrid, PopularTags, CtaBanner), with tighter internal card padding (`p-7`/`p-8`/`p-10`). The language grid is `md:grid-cols-3`, collapsing to one column on mobile. The sticky top nav (`sticky top-0 z-50`) uses a translucent, blurred canvas background (`bg-canvas/90 backdrop-blur`) so page content is visible scrolling underneath it. Below `lg`, navigation links move into a full-width slide-down mobile menu toggled by a hamburger button.

## Elevation & Depth

The system is flat by default: nearly everything is separated by a 1px slate border (`border-line`/`border-line-soft`/`border-paper-line`), not a shadow. The only two shadow uses in the entire build are the Playground module's ambient `shadow-2xl shadow-black/30` (marking it as the single most important, "lifted" object in the first viewport) and a 1px inset highlight (`shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]`) on gradient CTA buttons, which reads as a light catch on a glossy surface rather than a drop shadow. There is no card-hover elevation change anywhere; hover states use color/border shifts and a small `scale` transform instead of shadow growth.

### Named Rules
**The Border-Not-Shadow Rule.** Depth between adjacent panels (nav, cards, Playground panes, footer) is conveyed with a 1px slate border, never a box-shadow. Reserve shadow for the single most important object on a given viewport.

## Shapes

Corners are soft and consistent: `rounded-lg`/`rounded-xl` (`8px`–`12px`) for buttons, inputs, and small badges; `rounded-2xl` (`16px`) for cards and the Playground module itself. Pills (`rounded-full`) are reserved for the Beta badge and tag chips. No sharp corners, no clipped/angled edges, and no glassmorphism beyond the nav's backdrop-blur-on-scroll, which is functional (content legibility) rather than decorative.

## Components

### Buttons
- **Shape:** `rounded-xl` (12px), consistent across primary and secondary.
- **Primary:** indigo→violet gradient fill (`from-accent to-accent-2`), white text, semibold, `px-6 py-3`, inset highlight shadow. Used for the single dominant CTA per section ("Comenzar a practicar", "Construir algo increíble hoy" / CTA banner, "Apóyame" in nav).
- **Hover / Focus:** `scale-[1.02]` on hover, `scale-[0.98]` on active, no color change on the gradient itself; focus uses the global 2px `accent-2` outline.
- **Secondary / Ghost:** transparent background, `border-line-soft`, ink text; hover fills with `bg-surface`. Used for lower-priority actions ("Ver ejemplos").
- **Language-card CTA:** flat solid fill in that language's own brand button color (not the site accent) — the one place a button isn't gradient-indigo.

### Chips (Tag chips)
- **Style:** transparent background, `border-paper-line`, monospace text (`<h1>`, `<div>`, etc.), `rounded-full`, `px-4 py-2`.
- **State:** hover shifts border and text to the accent indigo — the only place the site accent appears inside the light "paper" section.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px) for language cards, Playground module, CTA banner card.
- **Background:** language cards use their own pale brand tint on the paper section; the Playground module uses dark `surface` for its editor chrome and `paper` for its live-result pane in the same component.
- **Shadow Strategy:** none, except the Playground's ambient `shadow-2xl` (see Elevation & Depth).
- **Border:** 1px, `border-html-bg-ring`/`border-css-bg-ring`/`border-js-bg-ring` per language card; `border-line`/`border-line-soft` on dark cards.
- **Internal Padding:** `p-7` (language cards) to `p-8`/`p-10` (CTA banner).

### Inputs / Fields
- **Style:** `rounded-lg`, `border-line`, `bg-surface`, `py-2 pl-9 pr-3` with a leading search icon.
- **Focus:** border shifts to `accent-2`, field width expands (`focus:w-64`) as a deliberate micro-interaction, no glow/ring.

### Navigation
- **Style:** sticky, translucent-blurred dark bar; logo mark in a small gradient-accent badge, wordmark in bold ink, Beta pill badge.
- **Typography:** `text-sm font-medium`; active link is full `ink`, inactive links are `ink-muted` with a `hover:text-ink` transition — no underline, no background pill for active state.
- **Mobile treatment:** nav links, search, and CTA collapse behind a hamburger button into a full-width slide-down panel with a divided link list.

### The Playground (signature component)
The Playground is the one component where restraint yields to real functionality: a real Monaco Editor instance (loaded from `cdnjs`, `vs-dark`/`vs` theme synced to the site's own light/dark toggle, minimap disabled) sits in a dark pane on the left, and a live `<iframe srcdoc>` result pane sits in a light "paper" pane on the right — the module is the single place dark and light coexist side by side rather than as stacked page sections. Three tabs (HTML/CSS/JS, each tinted with that language's icon color) switch Monaco models; edits debounce (250ms) into the preview. A "Vista en tiempo real" toggle switch and "Abrir en nueva pestaña" (blob URL) button live in the result pane's footer. A pulsing-dot loading state placeholder covers both panes until Monaco's async CDN load resolves — this is a real loading state for a real asset fetch, not decorative.

### Theme Toggle
A sun/moon icon-swap button in the nav flips `document.documentElement[data-theme]` between `dark` (default) and `light`, persisted to `localStorage` (`codigo-real-theme`) and re-applied on load via an inline blocking script (avoiding a flash of wrong theme). All color tokens (`canvas`, `surface`, `line`, `ink`) are redefined under `:root[data-theme="light"]` in `global.css`; the "paper" tokens do not change with the toggle, since the paper section is a fixed light register regardless of site theme. A `codigo-real:theme-change` custom event also flips Monaco's own editor theme (`vs-dark`↔`vs`) to stay in sync.

## Do's and Don'ts

### Do:
- **Do** spend the indigo→violet accent only on the hero headline span, primary CTA gradients, and small icon badges — never as a section or card background.
- **Do** use a 1px slate border to separate adjacent panels; reach for `shadow-2xl` only for the page's single most important object (the Playground).
- **Do** keep language-brand colors (HTML/CSS/JS) confined to their own ficha cards and tab icons; never let them leak into the site's own accent role.
- **Do** use JetBrains Mono only for literal code or code-like tokens (tag chips, the editor); Inter for everything else.
- **Do** keep corners soft (`rounded-lg` to `rounded-2xl`); never introduce a sharp-cornered element.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading. None exists in the shipped build; the H1 and section H2s carry their own weight unassisted.
- **Don't** introduce icon fonts, emoji, or third-party icon packages. Every icon is a hand-authored inline SVG in `Icon.astro`.
- **Don't** add a second accent gradient or a second brand hue outside the indigo-violet pair and the three fixed language colors.
- **Don't** apply drop shadows to cards or buttons for "depth"; the system conveys separation with borders, reserving shadow for the Playground alone.
