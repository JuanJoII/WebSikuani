---
version: alpha
name: Ecohotel-Sikuani-design-system
description: An organic, serene web design system anchored on a dual-mode canvas, balancing a clean white daylight experience with a deeply relaxing, low-luminescence night experience, inspired by ancestral symmetry.

colors:
  # Light Mode / Core Brand
  primary: "#368062" # Verde Jade/Bosque (Core Brand)
  primary-light: "#5e9a81"
  primary-soft: "#86b3a1"
  secondary: "#9aad8c" # Azul Petróleo / Verde Musgo Seco
  secondary-light: "#aebe9f"
  accent: "#F7DD16" # Amarillo Vibrante
  ink: "#222222"
  body: "#3f3f3f"
  muted: "#6a6a6a"
  hairline: "#dddddd"
  hairline-soft: "#ebebeb"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface-card: "#ffffff"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

  # Dark Mode / Night Palette (Tokens Semánticos)
  dark-canvas: "#121815"       # Fondo profundo (Negro orgánico con tinte verde bosque)
  dark-surface: "#1a231f"      # Superficie de tarjetas y contenedores elevados
  dark-surface-soft: "#232e29" # Fondos de inputs y componentes secundarios
  dark-primary: "#449977"      # Verde Jade optimizado (más brillo para accesibilidad AA)
  dark-secondary: "#a8bfa0"    # Tono complementario suave para textos secundarios/iconos
  dark-accent: "#F9E343"       # Amarillo optimizado para alto contraste en fondo oscuro
  dark-ink: "#f5f7f6"          # Texto principal (Blanco roto, reduce la fatiga visual)
  dark-body: "#c9d1cc"         # Texto de cuerpo y descripciones
  dark-muted: "#8ca096"        # Textos secundarios y deshabilitados
  dark-hairline: "#2c3b35"     # Bordes y divisores estándar
  dark-hairline-soft: "#3a4d45"# Bordes suaves para elementos secundarios

typography:
  display-xl:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  display-lg:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.3
  title-md:
    fontFamily: "'Be Vietnam', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: "'Be Vietnam', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Be Vietnam', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "'Be Vietnam', sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4

rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  section: 64px
---

## Overview

Ecohotel Sikuani is an authentic, nature-first consumer marketplace web experience. The user interface operates on a dual-mode foundation designed to mirror nature's cycles: a bright, high-contrast daylight **Canvas** (`{colors.canvas}`) and a low-luminescence, deep-forest **Night Canvas** (`{colors.dark-canvas}`) optimized for evening trip-planning without visual strain.

The baseline system architecture utilizes a core focal voltage of **Verde Jade/Bosque** (`{colors.primary}` / `{colors.dark-primary}`) to anchor primary user conversion states, navigation indicators, and environmental highlights. High visual priority and interactive focus utilize an organic **Amarillo Vibrante** (`{colors.accent}` / `{colors.dark-accent}`) to inject warmth and immediate attention states in both themes.

The typography relies on **DM Serif Display** for prominent heading actions to emphasize ancestral identity and elegant grounding. UI copy, tabular metadata, and general running content utilize **Be Vietnam** at modest tracking levels. Interactive element boundaries adopt a highly symmetrical, fluid shape language featuring soft corner constraints (`{rounded.md}`) and perfectly circular nodes (`{rounded.full}`) inspired directly by the natural geometry of the brand's master logo emblem.

---

## Colors & Themes

### ☀️ Light Mode (Daylight)
* **Canvas Background:** `{colors.canvas}` (#ffffff) fields absolute clarity and clean negative space.
* **Brand Primary:** `{colors.primary}` (#368062) commands critical layout actions and navigation states.
* **Text Hierarchy:** `{colors.ink}` (#222222) for bold displays, `{colors.body}` (#3f3f3f) for copy, and `{colors.muted}` (#6a6a6a) for secondary captions.
* **Surfaces & Lines:** `{colors.surface-soft}` (#f7f7f7) guides subtle content segments divided by 1px `{colors.hairline}` (#dddddd).

### 🌙 Dark Mode (Night Forest)
* **Canvas Background:** `{colors.dark-canvas}` (#121815). A deeply rich, bio-centric black infused with a touch of organic forest green. Pure blacks (#000000) are explicitly banned to prevent stark, cold contrasts.
* **Brand Primary:** `{colors.dark-primary}` (#449977). A desaturated, slightly lighter shift of the signature Jade green to maintain an accessible contrast ratio (AA standard) against dark background layers.
* **Accent Highlight:** `{colors.dark-accent}` (#F9E343). Fine-tuned to pop safely on dark sheets for instant booking indicators.
* **Surfaces & Cards:** `{colors.dark-surface}` (#1a231f) serves as the elevated card layer for listing blocks, calendar popovers, and floating reservation menus.
* **Text Hierarchy:** `{colors.dark-ink}` (#f5f7f6) delivers crisp readability for titles, `{colors.dark-body}` (#c9d1cc) preserves comfort for text-heavy stories, and `{colors.dark-muted}` (#8ca096) handles non-interactive metadata.
* **Borders & Rules:** `{colors.dark-hairline}` (#2c3b35) functions as the 1px architectural divider.

---

## Typography

### Font Family
The system utilizes **DM Serif Display** for display treatments and critical heading hierarchies to convey an elegant, culturally grounded brand personality. All functional UI layers, search parameters, card blocks, and standard message body copy utilize **Be Vietnam**.

### Hierarchy & Theme Mapping

| Token | Size | Weight | Line Height | Light Text | Dark Text | Use Case |
|---|---|---|---|---|---|---|
| `{typography.display-xl}` | 32px | 400 | 1.3 | `{colors.ink}` | `{colors.dark-ink}` | Hero statements and brand slogans |
| `{typography.display-lg}` | 26px | 400 | 1.3 | `{colors.ink}` | `{colors.dark-ink}` | Main section titles and cabin detail labels |
| `{typography.title-md}` | 18px | 600 | 1.4 | `{colors.ink}` | `{colors.dark-ink}` | Card headers and navigational menu groupings |
| `{typography.body-md}` | 16px | 400 | 1.6 | `{colors.body}` | `{colors.dark-body}` | Narrative review details and descriptive copy |
| `{typography.body-sm}` | 14px | 400 | 1.5 | `{colors.muted}`| `{colors.dark-muted}`| Metadata points, listing metrics, and sub-labels |
| `{typography.caption}` | 13px | 500 | 1.4 | `{colors.muted}`| `{colors.dark-muted}`| Informational microcopy, inputs, and form descriptors |

---

## Layout & Spacing

* **Base Unit Matrix:** 4px incremental scale.
* **Layout Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.section}` 64px.
* **Global Separation Rules:** Vertical content blocks are standardly segmented by a `{spacing.section}` (64px) layout parameter.
* **Max Component Bounds:** 1200px max centered width layout for primary reservation search screens and informational landing grids.

---

## Elevation & Depth Profiles

### ☀️ Light Mode Elevation
* **Flat Configurations:** Layout sections sit entirely flush over the primary `{colors.canvas}` layer.
* **Elevated Overlays:** `box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 12px` — exclusively utilized during interactive hover states on cards or active dropdowns.

### 🌙 Dark Mode Elevation
* **Flat Configurations:** Base sections sit flush over `{colors.dark-canvas}`.
* **Elevated Overlays (Z-Index Shifting):** In dark mode, elevation is communicated by shifting the background tone rather than throwing dark drop shadows (which are invisible against dark canvas backgrounds). 
  * Floating cards, active property listings, and modal layers adopt the `{colors.dark-surface}` or `{colors.dark-surface-soft}` tokens to visually sit closer to the user.
  * An ultra-subtle border stroke using 1px `{colors.dark-hairline}` must frame all elevated surfaces to prevent structural blooming.

---

## Components

### Buttons

**`button-primary`**
* **Light Mode:** Solid `{colors.primary}` fill with clean white text.
* **Dark Mode:** Solid `{colors.dark-primary}` fill with dark ink text (`{colors.dark-canvas}`) to enforce premium AAA legibility.
* **Parameters:** Radius set to `{rounded.sm}` (8px), height tracking at 48px, bold weight.

**`button-conversion`**
* **Light Mode:** High-contrast solid `{colors.accent}` fill with dark ink typography.
* **Dark Mode:** High-contrast solid `{colors.dark-accent}` fill with deep base typography (`{colors.dark-canvas}`).
* **Parameters:** Height tracking at 48px, weight mapped to 600. Reserved for high-priority instant booking triggers.

### Navigation, Search & Forms

**`search-pill-container`**
* **Light Mode:** `{colors.canvas}` base profile split using thin 1px separators.
* **Dark Mode:** `{colors.dark-surface}` base profile split using 1px `{colors.dark-hairline}` separators.

**`form-inputs`**
* **Light Mode:** Input fields utilize `{colors.surface-soft}` background with a `{colors.hairline}` border frame.
* **Dark Mode:** Input fields utilize `{colors.dark-surface-soft}` background with a `{colors.dark-hairline}` border frame. On active focus, the stroke changes to a clean 2px `{colors.dark-primary}` line.

### Media Handling (Photography)
* **Dark Mode Image Dimming:** To prevent blinding flashes when viewing natural scenery at night, all image container tags (`<img>`) under the dark theme must inherit a CSS filter: `filter: brightness(0.85) contrast(1.02);`. This preserves vivid organic colors while softening light emissions.

---

## Responsive Behavior

| Screen Profile | Viewport Range | Core Layout Adaptation Metrics |
|---|---|---|
| **Mobile** | < 744px | Navigation converts to a mobile menu overlay. Multi-column component grids compress to a clean single-column sequence. Sticky right-rail booking modules shift into a persistent bottom execution panel. |
| **Tablet** | 744px – 1128px | Cabin display listings adapt into a balanced dual-column track layout. Global padding constraints resize down to 24px margins. |
| **Desktop** | > 1128px | Standard multi-column arrangements apply. The main workspace expands out to its maximum centered width of 1200px. |

---

## Known Gaps

* **Live Map Interfacing:** Geographical map layout dark-tile vector configurations remain unmapped within this specific baseline profile.
* **Real-time Error Frameworks:** Specific focus input changes and alert banners during severe validation faults require future design detailing.