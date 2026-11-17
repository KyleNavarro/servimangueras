---
name: Servimangueras
description: The category-standard website of a hydraulic distributor and workshop, played straight in black, white and safety yellow.
colors:
  black: "#111111"
  black-2: "#1c1c1c"
  black-3: "#2a2a2a"
  footer-black: "#0a0a0a"
  white: "#ffffff"
  grey-50: "#f5f5f2"
  grey-100: "#ebebe6"
  grey-300: "#cfcfc8"
  grey-600: "#5a5a55"
  grey-700: "#3d3d39"
  on-dark-2: "#c9c9c2"
  yellow: "#f6c400"
  yellow-hover: "#ffd21f"
  yellow-wash: "#fff5cc"
  band-ink: "#3a3000"
  red: "#c8191f"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  title-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.45
  label-button:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
  label-nav:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
  label-data:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  numeric:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1.1
    fontFeature: "tnum"
  wordmark:
    fontFamily: "Bebas Neue, Barlow Condensed, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  hairline: "2px"
  base: "4px"
  pill: "28px"
  round: "50%"
spacing:
  page-pad: "clamp(16px, 4vw, 32px)"
  wrap: "1200px"
  header-h: "76px"
  section: "clamp(56px, 8vw, 96px)"
  section-head-gap: "clamp(28px, 4vw, 44px)"
  gutter: "24px"
  gutter-tight: "16px"
  card-pad: "22px"
  panel-pad: "clamp(20px, 3vw, 32px)"
components:
  button-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.black}"
    typography: "{typography.label-button}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "44px"
  button-yellow-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.black}"
  button-dark:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    typography: "{typography.label-button}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "44px"
  button-dark-hover:
    backgroundColor: "{colors.black-3}"
    textColor: "{colors.white}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label-button}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "44px"
  button-outline-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.black}"
    typography: "{typography.label-button}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "44px"
  button-outline-dark-hover:
    backgroundColor: "{colors.black}"
    textColor: "{colors.yellow}"
  button-lg:
    padding: "0 24px"
    height: "54px"
  topbar:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-dark-2}"
    typography: "{typography.body-sm}"
    height: "38px"
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.grey-700}"
    typography: "{typography.label-nav}"
    height: "{spacing.header-h}"
  hero:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    typography: "{typography.display}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    rounded: "{rounded.base}"
    padding: "{spacing.card-pad}"
  band-24h:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.black}"
    padding: "34px 0"
  icon-tile:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.black}"
    rounded: "{rounded.base}"
    size: "44px"
  brand-tile:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.base}"
    padding: "10px 12px"
    height: "92px"
  tab:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    rounded: "{rounded.base}"
    padding: "9px 16px 8px"
  tab-selected:
    backgroundColor: "{colors.black}"
    textColor: "{colors.yellow}"
  segment-selected:
    backgroundColor: "{colors.black}"
    textColor: "{colors.yellow}"
    padding: "8px 14px"
  readout:
    backgroundColor: "{colors.grey-50}"
    textColor: "{colors.black}"
    typography: "{typography.numeric}"
    rounded: "{rounded.base}"
    padding: "10px 16px"
  table-row-selected:
    backgroundColor: "{colors.yellow-wash}"
    textColor: "{colors.black}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "11px 12px"
    height: "46px"
  tag:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.black}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  footer:
    backgroundColor: "{colors.footer-black}"
    textColor: "{colors.on-dark-2}"
  whatsapp-float:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.black}"
    typography: "{typography.label-button}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 16px"
    height: "56px"
  whatsapp-float-hover:
    backgroundColor: "{colors.yellow-hover}"
---

# Design System: Servimangueras

## Overview

**Creative North Star: "The Distributor's Counter, Played Straight"**

This is the website of a serious hydraulic distributor and workshop, built to the conventions of the category (Parker Store, Eaton, Alfagomma) with no smuggled metaphor. A black utility bar and a white sticky header open the page; a dark photographic hero states the offer; white and light-grey content bands carry services, products, technical data and the installation guide; a black contact section and a near-black footer close it. Safety yellow, taken from the client's brochure and logo, marks every action and one fact band. Brand red belongs to the wordmark.

Density is that of a parts catalog: a 1200px column, three-up card grids, hairline-ruled lists, a real data table with tabular figures. Type is Barlow Condensed in bold capitals for anything that names or commands, and plain Barlow for anything that explains. Imagery is the client's own brochure photography, never stock. Depth is quiet: 4px corners, hairline grey borders and soft, real shadows that rise a step on hover.

The surface must work on a phone in a workshop: high contrast, large tap targets (44px minimum, 54px for primary calls), and a WhatsApp button that never leaves the screen.

**Key Characteristics:**
- Black frame (utility bar, hero, contact, footer) around white and grey-50 content bands.
- Safety yellow as the single action color; red only for the wordmark and error states.
- Barlow Condensed bold caps for headings, buttons, nav and data labels; Barlow for running text.
- 4px corners on every box; soft two-layer shadows; hairline grey-100 borders.
- Authored 24px line icons (1.8px stroke) from an inline sprite.
- Brochure photography and brand logos as the only imagery.

## Colors

A three-ink industrial palette pinned by the client: black, safety yellow and red, on white and warm light greys.

### Primary
- **Safety Yellow** (yellow): fill of every primary button, the 24-hour band, the floating WhatsApp button, service icon tiles, the 56x4px rule under section titles, link underlines, nav hover underline, the calculator's recommended-size highlight and the `WhatsApp` tag. On black it is also used as text and line-art (hero fact figures, selected tab and segment text, contact icons, topbar icons, focus rings on dark).
- **Lit Yellow** (yellow-hover): hover state of yellow fills only.
- **Yellow Wash** (yellow-wash): background of the selected row in the hose sizes table.
- **Band Ink** (band-ink): secondary line inside the yellow 24-hour band, a dark olive that reads as black-on-yellow without being pure black.

### Secondary
- **Brochure Red** (red): the SERVIMANGUERAS wordmark in the header, and error messaging (calculator error, form status error, invalid field border). Nothing else.

### Neutral
- **Workshop Black** (black): body text, the topbar, hero, contact section, dark buttons, selected tabs and segments, guide step discs, and the default focus ring.
- **Black 2** (black-2): placeholder ground behind the map embed.
- **Black 3** (black-3): hover state of the dark button.
- **Footer Black** (footer-black): the footer ground, one step deeper than the black sections so the page visibly ends. Its rule is `#262626` and its legal line `#a3a39c`.
- **White** (white): page ground, header, cards, brand tiles, inputs.
- **Grey 50** (grey-50): alternating section ground (Productos, Guía), table head, readouts and the calculator output panel.
- **Grey 100** (grey-100): hairline borders of cards, tiles, lists, the header's bottom edge and table rows.
- **Grey 300** (grey-300): stronger strokes for interactive outlines: input borders, tabs, segmented control, menu toggle, table head rule, brands divider.
- **Grey 600** (grey-600): secondary text, captions, data labels, units.
- **Grey 700** (grey-700): nav links at rest, table head text, longer secondary copy in the about block.
- **On-dark Grey** (on-dark-2): body and secondary text on black grounds.

### Named Rules
**The Yellow-On-Black Rule.** Yellow is text or line-art only on black. On light grounds yellow is always a fill (button, band, tile, rule, highlight) carrying black text; yellow text on white never appears.

**The Red Wordmark Rule.** Red is the wordmark and the error state. It is never a button, a band, a heading color or a decorative accent.

**The One Band Rule.** The 24-hour band is the only full-width yellow section. Other sections alternate white and grey-50, with black reserved for the hero and contact.

## Typography

**Display Font:** Barlow Condensed 500/600/700 (with Arial Narrow, sans-serif)
**Body Font:** Barlow 400/500/600/700 (with system-ui, sans-serif)
**Wordmark Font:** Bebas Neue 400 (with Barlow Condensed), for the wordmark only

All three are self-hosted woff2 with `font-display: swap`; Barlow Condensed 700 and Barlow 400 are preloaded.

**Character:** An engineering pairing. The condensed face gives headings and controls the compressed, stamped look of industrial catalogs; the regular-width Barlow keeps explanations easy to read on a phone.

### Hierarchy
- **Display** (700, clamp(2.4rem, 4.6vw, 3.9rem), 1.02, uppercase): the hero headline only. On phones clamp(2.1rem, 9vw, 2.6rem).
- **Headline** (700, clamp(2rem, 3.6vw, 2.9rem), 1.1, uppercase): section titles, always followed by the yellow rule. The 24-hour band uses clamp(1.7rem, 3vw, 2.4rem); the spec name clamp(1.8rem, 3vw, 2.4rem).
- **Title** (700, 1.45rem, 1.1, uppercase): card titles; 1.6rem for sub-heads, calculator and quote titles; 1.3rem for product tiles.
- **Title small** (700, 1.25rem, uppercase): service list items, guide steps, contact list heads.
- **Body** (400, 1.0625rem, 1.6): running text. Section intros use 1.1rem at 62ch max; hero subline clamp(1.05rem, 1.4vw, 1.2rem) at 54ch.
- **Body small** (400, 0.9rem): topbar and fine print; captions and footer legal at 0.88rem.
- **Label button** (700, 1rem, 0.04em, uppercase): buttons; 1.1rem on large buttons, 1.05rem on the floating WhatsApp button.
- **Label nav** (600, 1.05rem, 0.04em, uppercase): header nav; 1.15rem in the mobile menu.
- **Label data** (600, 0.78 to 0.9rem, 0.08em, uppercase, grey-600): spec definitions, readout captions, table tool labels, the legal name under the wordmark.
- **Numeric** (700, 1.7rem, tabular figures): spec readouts; the sizes table and calculator output also use tabular figures.
- **Wordmark** (Bebas Neue 400, 1.75rem, 0.02em, red): the header wordmark; 1.45rem on phones.

### Named Rules
**The Condensed Caps Rule.** Anything that names or commands (headings, buttons, nav, data labels) is Barlow Condensed in capitals; anything that explains is Barlow in sentence case. Headings use `text-wrap: balance`.

**The Wordmark-Only Rule.** Bebas Neue sets the SERVIMANGUERAS wordmark and nothing else.

**The Tabular Numbers Rule.** Every pressure, diameter, radius and weight is set with tabular figures so columns align.

## Layout

A single centered column: max width 1200px with fluid side padding clamp(16px, 4vw, 32px). Sections pad clamp(56px, 8vw, 96px) vertically; the section head (max 720px) sits clamp(28px, 4vw, 44px) above its content. Card grids are three-up with 24px gaps (feature cards, product tiles), the service list is a three-column hairline-ruled grid, brand tiles six-up with 16px gaps, the guide two-up, about and contact two-column.

The header is sticky at 76px (68px under 960px) with `scroll-padding-top` so anchors land below it; it gains a soft shadow after 8px of scroll.

Breakpoints:
- **1100px:** nav links tighten; the header phone link hides.
- **960px:** the nav collapses into a toggle-driven dropdown panel; grids drop to two columns (brands three); calculator, contact and about stack; the hero photo goes full-bleed behind a vertical scrim; the topbar 24h item hides.
- **640px:** single column for features, services, guide and footer; product tiles stay two-up with 12px gaps; hero buttons go full width; the floating WhatsApp button becomes a 58px icon-only circle; the sizes table gets a right-edge fade mask to signal horizontal scroll.

### Named Rules
**The Black Frame Rule.** Black opens (topbar, hero) and closes (contact, footer) the page; the working content between is white and grey-50, alternating by section.

## Elevation & Depth

A hybrid of hairline borders and soft, real shadows tinted with the page black (rgba(17,17,17,...)). Surfaces at rest carry a small two-layer shadow plus a grey-100 border; interactive cards lift on hover with a deeper shadow and a 2px rise. Dark sections are flat.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgba(17,17,17,.06), 0 2px 6px rgba(17,17,17,.05)`): every card at rest.
- **Lift** (`box-shadow: 0 2px 4px rgba(17,17,17,.06), 0 10px 24px rgba(17,17,17,.10)`): feature and product cards on hover, and the about photo at rest.
- **Header scrolled** (`box-shadow: 0 4px 18px rgba(17,17,17,.08)`): sticky header after scroll.
- **Menu panel** (`box-shadow: 0 14px 24px rgba(17,17,17,.1)`): mobile nav dropdown.
- **Button hover** (`box-shadow: 0 4px 12px rgba(17,17,17,.18)`): yellow button hover.
- **Floating** (`box-shadow: 0 6px 20px rgba(17,17,17,.28)`, hover `0 10px 26px rgba(17,17,17,.32)`): floating WhatsApp button.

### Named Rules
**The Soft Real Shadow Rule.** Shadows are blurred, offset straight down and tinted with the page black; they respond to state (hover, scroll, floating). No hard offset shadows, no colored glows.

## Shapes

One corner radius rules the system: 4px on buttons, cards, inputs, tabs, tiles, segmented control, readouts, map and the brand-logo plate. A 2px radius softens the yellow section rule and focus rings; 3px on the calculator highlight. Round forms are reserved: the `WhatsApp` tag and the floating WhatsApp button are pills, the guide step numbers are 38px black discs with yellow numerals, and the phone-size floating button is a circle. Borders are 1px hairlines (grey-100 passive, grey-300 interactive); buttons carry a 2px border so outline and filled variants share a box.

### Named Rules
**The Four-Pixel Rule.** Every rectangle is 4px. Pills and circles appear only on the tag, the floating WhatsApp button and the guide step discs.

## Components

### Buttons
Square-shouldered and loud: condensed caps on a solid fill.
- **Shape:** 4px corners, 2px border, 44px min height (54px large), 10px icon gap, 20px line icon leading.
- **Yellow (primary):** yellow fill, black text. Every WhatsApp and quote action. Hover: lit yellow plus the button-hover shadow.
- **Dark:** black fill, white text; hover black-3. Used on the yellow band.
- **Outline light:** 70% white border, white text on dark grounds; hover inverts to white fill, black text.
- **Outline dark:** black border and text on the yellow band; hover black fill with yellow text.
- **Press / Focus:** 1px downward press on `:active`; transitions 0.2s on the system ease. Focus is a 3px black ring at 2px offset (yellow inside the topbar, hero, dark sections and footer).

### Link Arrow
Inline action link: Barlow 600, black, 2px yellow underline as a bottom border, trailing 18px arrow icon that slides 3px right on hover. Sits at the bottom of every card body; white text on the black contact section.

### Navigation
- **Topbar:** black, 38px tall, on-dark grey 0.9rem text with yellow 16px icons; address, 24h and email (email pushed right).
- **Header:** white, sticky, grey-100 bottom hairline. Brand block is the logo on a 4px black plate (64px wide) beside the red Bebas wordmark and the condensed legal name. Nav links are condensed caps in grey-700 with a 2px yellow underline that scales in from the left on hover; a phone link and a yellow `Cotizar por WhatsApp` button close the row.
- **Mobile:** under 960px a 46px bordered toggle (menu / close icons, `aria-expanded`) opens a full-width white panel under the header with stacked 1.15rem links divided by grey-100 rules and a full-width 50px yellow button. Escape closes it.

### Hero
Black ground; the workshop photo occupies the right min(62%, 900px), positioned at 60% 50%, under a left-to-right scrim from solid black to 5% black. White display headline at max 620px, on-dark grey subline, a large yellow WhatsApp button plus a large outline-light call button, then three fact items above an 18% white hairline: yellow condensed figures over grey text. Height clamp(520px, 74vh, 640px). Under 960px the photo goes full-bleed behind a top-to-bottom scrim.

### Section Head
Uppercase headline, then a 56x4px yellow rule (2px radius) 14px below, then an optional 1.1rem grey-600 intro at 62ch. The about block repeats the same rule.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** white with a grey-100 hairline border.
- **Shadow Strategy:** Rest shadow; feature and product cards rise to Lift with translateY(-2px) on hover (0.25s).
- **Internal Padding:** 22px sides, 24px bottom; the body is a 10px-gap column with the link arrow pinned to the bottom.
- **Feature card:** 4:3 photo on top (16:9 on phones), title, grey description, link arrow.
- **Product tile:** 4:3 white image well with a grey-100 bottom rule over a cut-out product shot, title, `Consultar` link arrow.

### Service Icon List
A ruled three-column list: each item is a 44px yellow tile with a 32px black line icon (1.6px stroke), a title-small heading and a short grey line. Hairline grey-100 rules between rows and columns; no card boxes.

### 24-Hour Band
Full-width yellow band, 34px vertical padding: headline left with a band-ink subline, large dark and outline-dark buttons right.

### Brand Tiles
Six white 92px-tall tiles with grey-100 hairlines and 4px corners, each holding a brand logo contained at max 58px tall (Parker 44px, Best Flex 48px to balance optical weight). Introduced by a `Soporte comercial` heading over a grey-300 divider.

### Tabs (hose type picker)
Bordered (grey-300) white buttons, condensed 1.15rem type with a small Barlow grey caption below. Hover darkens the border to black. Selected: black fill, yellow label, on-dark grey caption, with a black focus ring at 3px offset.

### Spec Card (signature)
A padded card (clamp(20px, 3vw, 32px)) pairing a 220px cross-section diagram of the selected hose with its name, construction, a three-column definition list (condensed caps labels) and three grey-50 readouts showing size, inner diameter and working pressure in large tabular numerals. The diagram is drawn in system inks: black cover and tube, light grey reinforcement, grey-600 or olive layer lines, a yellow bore; ring radii animate over 0.45s.

### Segmented Toggle
Pressure unit switch: a grey-300 bordered strip of radio labels divided by grey-300 rules; the checked segment is black with yellow text. Keyboard focus draws an inset 3px black outline.

### Sizes Table
Full-width, min 680px, horizontally scrollable inside a bordered 4px wrapper. Head on grey-50 in condensed caps (grey-700) with Barlow unit captions; numerals right-aligned and tabular; the size column is sticky on the left. Rows hover to grey-50; the selected row turns yellow-wash with bold figures; rows are focusable with an inset black ring.

### Calculator
A card split 1 : 1.6: title and explanation left; a two-field form right with a grey-50 output panel spanning both columns. The recommended size is a 1.8rem numeral on a yellow highlight (3px radius); errors appear in red.

### Inputs / Fields
- **Style:** label above in Barlow 600 at 0.95rem (optional hint in grey-600); white field, 1px grey-300 border, 4px corners, 46px min height (textarea 92px), Barlow 1rem.
- **Focus:** border turns black with a 3px yellow halo (`box-shadow: 0 0 0 3px rgba(246,196,0,.55)`).
- **Error:** border turns red; status message in red at 600. Placeholder `#6e6e68`.

### Guide List
Numbered two-column list of white bordered cards, each with a 38px black disc carrying a yellow condensed numeral at the left (CSS counter) and a title-small heading over grey text.

### Contact
Black section: a list of yellow 32px line icons beside condensed white headings and on-dark grey details, white bold phone links, a yellow `WhatsApp` pill tag and a `Cómo llegar` link arrow; beside it the quote form on a white card with a full-width large yellow submit button. A 360px map embed (300px on phones) with a 35% grayscale filter follows.

### Footer
Footer-black ground, three columns (brand with logo and short line, sections, contact) collapsing to two then one; condensed caps white column heads; links turn yellow on hover; a legal row under a `#262626` rule.

### Floating WhatsApp Button
Fixed bottom-right (respecting safe-area insets), 56px yellow pill with a 26px chat icon and condensed caps label, Floating shadow; hover lifts 2px to lit yellow. On phones it becomes a 58px icon-only circle.

### Motion
One easing curve, `cubic-bezier(.22, 1, .36, 1)`, for everything: 0.12s press, 0.15s fields and table rows, 0.2s buttons and link arrows, 0.25s card lift, nav underline and header shadow, 0.45s diagram rings. Smooth anchor scrolling. `prefers-reduced-motion` cuts transitions and smooth scroll.

## Do's and Don'ts

### Do:
- **Do** put every WhatsApp, call-to-quote and submit action on a yellow button with black condensed caps text, 44px minimum height (54px for primary page calls).
- **Do** follow every section headline with the 56x4px yellow rule.
- **Do** use 4px corners, grey-100 hairlines and the Rest shadow for any new card; lift to the Lift shadow with a 2px rise only for cards that lead somewhere.
- **Do** use the client's brochure photography and the authored 1.8px-stroke line icons from the inline sprite.
- **Do** set every technical number with tabular figures and its unit in a smaller grey Barlow.
- **Do** switch focus rings from black to yellow inside black grounds.

### Don't:
- **Don't** use red for anything other than the wordmark and error states.
- **Don't** set yellow text on white or grey grounds.
- **Don't** use Bebas Neue outside the wordmark.
- **Don't** add a second full-width yellow band to a page.
- **Don't** use hard offset shadows, colored glows, or radii other than 4px on rectangles.
- **Don't** add stock photography, invented testimonials, client logos or certifications; imagery and brand logos come from the client's brochure.
- **Don't** add small uppercase kickers or eyebrows above headings; the yellow rule under the headline is the section mark.

## Asset Provenance

Every raster in `assets/img` was extracted from the client's brochure `BROCHURE SERVIMANGUERAS SAS.pdf` and carries an embedded origin note.

- `logo-sm.png` (297x156): page 1 logo, cropped to the icon (excavator, SM monogram, hose); black ground converted to transparency by luminance; scaled to 50%.
- `marca-parker`, `marca-eaton`, `marca-alfagomma`, `marca-bestflex`, `marca-jason`, `marca-rexon` (.png, 360x120): page 2 "Soporte comercial"; each logo cropped to the mark and centered on a white canvas.
- `taller-mangueras.jpg` (894x594, hero): page 2 "Nuestra empresa" photo, extracted unchanged, JPEG recompressed.
- `srv-mangueras.jpg` (800x576): page 3, left 75% crop to exclude third-party SAE/DOT logos.
- `srv-bombas.jpg` (370x333): page 3, right edge trimmed.
- `srv-cilindro.jpg` (760x584): page 3, cropped to exclude a third-party logo top right.
- `srv-soldadura.jpg` (323x280, about photo): page 3, extracted unchanged.
- `prod-racores`, `prod-valvula`, `prod-orings`, `prod-acoples`, `prod-siliconada`, `prod-correas` (.jpg, 800x600): page 4 "Productos"; each product cropped to content, centered on white with 8% margin, side crops to exclude source watermarks.
- `favicon.svg`: hand-authored vector, not from the brochure.

### Known gaps
- **Hero photo resolution (open).** The only source for the hero, `taller-mangueras.jpg`, is 894x594, so it renders upscaled about 1.1x at 1x density and about 2.2x at 2x. Awaiting a client photo at least 1800px wide; replace the file at the same aspect without changing the layout.
- `srv-bombas.jpg` (370px) and `srv-soldadura.jpg` (323px) are also smaller than their rendered slots (feature card, about photo) and share the same remedy: original client photographs.
