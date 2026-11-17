---
name: Servimangueras
description: The workshop's own yellow service order, printed in black ink on a black counter.
colors:
  counter: "#0e0d0b"
  sheet: "#f8cd1c"
  sheet-hi: "#fbdb55"
  sheet-lo: "#eabf12"
  ink: "#15130f"
  ink-2: "#4a3b06"
  red: "#c41f17"
  red-ink: "#a3150e"
  white: "#fffdf5"
  muted-on-dark: "#cfc6a6"
  plate-black: "#000000"
  error-wash: "#f6b9a0"
typography:
  display:
    fontFamily: "Bebas Neue, Barlow Condensed, sans-serif"
    fontSize: "clamp(2.75rem, 5.3vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Bebas Neue, Barlow Condensed, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
  title:
    fontFamily: "Bebas Neue, Barlow Condensed, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.02em"
  numeral:
    fontFamily: "Bebas Neue, Barlow Condensed, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.5
    fontFeature: "tnum"
  body-strong:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 700
    lineHeight: 1.3
  label:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  action:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  note:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.02em"
rounded:
  none: "0px"
spacing:
  margin: "clamp(8px, 1.2vw, 16px)"
  gutter: "clamp(16px, 3vw, 40px)"
  bar: "48px"
  cell: "8px 14px 10px"
  row: "14px 12px"
components:
  button-send:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0 22px 0 26px"
    height: "60px"
  button-send-hover:
    backgroundColor: "{colors.plate-black}"
    textColor: "{colors.sheet}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.plate-black}"
  pick:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  pick-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  field-focus:
    backgroundColor: "{colors.sheet-hi}"
  field-error:
    backgroundColor: "{colors.error-wash}"
  field-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.action}"
    width: "2.1em"
  checkbox:
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    size: "20px"
  checkbox-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.headline}"
    padding: "12px clamp(16px, 3vw, 40px) 9px"
  unit-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "8px 14px 7px"
    width: "64px"
  unit-toggle-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  size-row-selected:
    backgroundColor: "{colors.sheet-hi}"
    textColor: "{colors.ink}"
  size-cell-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  counter-bar:
    backgroundColor: "{colors.counter}"
    textColor: "{colors.muted-on-dark}"
    height: "{spacing.bar}"
  dock-primary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    height: "56px"
  dock-item:
    backgroundColor: "{colors.counter}"
    textColor: "{colors.white}"
    height: "56px"
---

# Design System: Servimangueras

## Overview

**Creative North Star: "The Yellow Carbon Copy"**

The whole site is one printed service order: a safety-yellow sheet lying on a black workshop counter. Everything that lives on the sheet behaves like a pre-printed form: black ink rules partition it into boxed cells, every field and line item carries a number, labels are condensed caps, and the only colour other than black and yellow is red ink reserved for numerators, serials and one rubber stamp. Nothing on the sheet floats, glows, or rounds off; the form is flat paper, and its hierarchy is carried by rule weight and type size rather than by surfaces stacked on surfaces.

Density is high and deliberate, as on a real order pad: tables, ledgers and readouts sit edge to edge inside a single bordered grid, separated by 1px, 2px or 5px rules. Interaction feels like filling in the form: a field you are writing in brightens to the active-yellow, a ticked box fills solid black, a chosen row or unit is inked in. Measurements are always tabular numerals.

The palette is pinned to the brand's own black, safety yellow and red (with white only on the dark counter), and the site must stay minimal: one sheet, one stamp, no decoration that is not a form device.

**Key Characteristics:**
- One yellow sheet on a black counter; the sheet is the only lifted surface.
- Square corners everywhere except radio dots.
- Black ink rules in three weights (1px, 2px, 5px) do all the structural work.
- Bebas Neue display for headings and every numeral; Barlow for reading; Barlow Condensed caps for labels.
- Numbered fields and line items; red ink only for numbers, serials and the stamp.
- State shown by inking in (solid black) or brightening the yellow, never by shadow or colour shift.

## Colors

Three-ink print on safety-yellow stock: black for structure and text, red for numbers that matter, yellow as the paper itself.

### Primary
- **Safety-Yellow Sheet** (sheet): the paper. Background of the whole order, every section, table and field. Also the text colour on black (band headers, inked buttons, selected cells, the field number box).
- **Active-Field Yellow** (sheet-hi): the brightened paper under the pen. Field with focus, hovered ledger or size row, hovered checkbox, the selected size row, the hose bore in the cross-section.
- **Alternate-Row Yellow** (sheet-lo): a slightly darker pass of the same stock for the one row that must stand apart in a ledger (the 24-hour service line) and the scrollbar track.

### Secondary
- **Stamp Red** (red): the rubber-stamp ink. Used only for the "SERVICIO 24 HORAS" stamp (multiply-blended over the sheet), the text caret, and the reinforcing helix in the hose cross-section. Not for body-size text on yellow.
- **Numerator Red** (red-ink): the darker red that is legible as text on yellow. Line-item numbers, product numbers, the order serial, the company name in the sheet header, the headline pressure readout, the recommended hose size, the first (WhatsApp) phone line, and error messages.

### Neutral
- **Counter Black** (counter): the ground the sheet lies on; top bar, mobile dock, page background, browser theme colour.
- **Press Ink** (ink): every rule, all body text on the sheet, the band headers, filled boxes, inked buttons.
- **Faded Ink** (ink-2): secondary text on yellow, an ink tinted toward the paper: ledes, sub-lines, notes, captions, table units, optional tags.
- **Counter White** (white): text on the counter (dock labels, top bar default).
- **Counter Grey** (muted-on-dark): quiet text on black: top-bar nav links, band notes, secondary text inside inked cells.
- **Plate Black** (plate-black): the logo plate behind the brand mark, and the darker press of an inked button on hover.
- **Error Wash** (error-wash): background of a field that failed validation; the only non-brand tint, used for this state alone.

### Named Rules
**The Three Inks Rule.** On the sheet, only ink, red-ink and yellow tones appear. A fourth hue is a defect, with error-wash as the sole state exception.

**The Red Is For Numbers Rule.** Red marks numerals and the stamp: serials, item numbers, the decisive readout, the recommended size. Prose and headings are never red. Text-size red uses red-ink; bright red is reserved for the stamp and diagram strokes.

**The Counter Is Not The Sheet Rule.** White and counter grey belong only on the black counter (top bar, dock) and in inked cells on the sheet. Yellow-on-black is the only inverse used on the sheet itself.

## Typography

**Display Font:** Bebas Neue (with Barlow Condensed, sans-serif), self-hosted 400
**Body Font:** Barlow (with system-ui, sans-serif), self-hosted 400 to 700
**Label Font:** Barlow Condensed (with Barlow, sans-serif), self-hosted 500 to 700

**Character:** Brochure lettering on a technical form. Bebas Neue is the stencilled poster voice for headings and every figure; Barlow is the plain-spoken reading text; Barlow Condensed caps are the pre-printed field captions.

### Hierarchy
- **Display** (Bebas 400, clamp(2.75rem, 5.3vw, 4.75rem), 0.92): the one page headline in the intake, balanced wrap, max 34ch. The street address in the workshop block uses the same voice at a similar scale.
- **Headline** (Bebas 400, clamp(1.7rem, 3vw, 2.5rem), 1, 0.03em): section titles inside the black band.
- **Title** (Bebas 400, clamp(2.2rem, 4vw, 3.2rem), 0.95): the selected hose name in the annex; calculator heading slightly smaller (clamp(1.8rem, 3vw, 2.4rem)).
- **Numeral** (Bebas 400, 1.7 to 2.1rem, 1): line-item and product numbers, readout values, phone numbers, brand names in the support list, the size column of the hose table. The decisive readout (working pressure) scales to clamp(2.8rem, 5vw, 3.8rem) in red-ink.
- **Body** (Barlow 500, 1.0625rem, 1.5, tabular numerals): all reading text. Ledes and sub-lines cap at 62ch, spec copy at 66ch.
- **Body strong** (Barlow 700, 1.08rem, 1.3): the item name in a ledger row and product names; typed field input uses 600 at 1.15rem.
- **Label** (Barlow Condensed 600, 0.72 to 0.82rem, 0.08 to 0.1em, uppercase): field captions, table headers, definition-list terms, phone tags.
- **Action** (Barlow Condensed 700, 0.9rem, 0.1em, uppercase): outlined pick buttons, dock labels (0.95rem, 0.08em).
- **Note** (Barlow Condensed 500, 0.85 to 1rem, 0.02 to 0.03em): figure captions, diagram notes, band notes, footer line.

### Named Rules
**The Every Figure Is Bebas Rule.** A number the visitor reads as data (item, size, pressure, diameter, phone) is set in Bebas Neue; units sit beside it small in Barlow Condensed. Inline figures in body text stay Barlow with tabular numerals.

**The Caps Are Captions Rule.** Uppercase is for condensed labels, table headers and action words only. Barlow body text and Bebas headings are never letter-spaced caps paragraphs.

## Layout

The sheet is a single centred column, max 1320px, inset from the viewport by the margin (clamp(8px, 1.2vw, 16px)) so a thin strip of black counter always frames it; content inside uses the gutter (clamp(16px, 3vw, 40px)) as its left and right edge. The top bar is sticky at 48px (46px under 760px) and scroll targets are padded by its height plus 12px.

Inside the sheet, every section is a bordered grid that runs edge to edge: the intake form is a 12-column grid (fields span 7/5, 12, 7/5); services pair a ledger table with a side column (1.75fr / 1fr); products run three to a row; the annex pairs a diagram column (minmax(260px, 0.8fr)) with a spec column (2fr); checklists and the workshop block split in two. Cells carry their own padding (fields 8px 14px 10px, ledger rows 14px 12px, blocks 22 to 28px vertical) and are separated by rules, not gaps.

Responsive: at 1080px side-by-side sections stack and products drop to two; at 760px everything goes single-column, the top nav hides, the band notes hide, the hose table becomes a horizontally scrolling region with a sticky first column and a fade mask, and the fixed contact dock appears at the bottom with the sheet margin raised to clear it. A short-viewport rule (min-width 761px, max-height 840px) tightens the first view so the order fits.

### Named Rules
**The Cells Not Cards Rule.** Content is partitioned by shared ink rules inside one grid. There are no free-floating cards with their own margins and backgrounds.

## Elevation & Depth

Flat by construction. The only depth in the system is the sheet lifting off the counter; everything on the sheet is printed and flat. Hierarchy on the sheet comes from rule weight (1px, 2px, 5px) and from inking cells solid black.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 1px 0 rgba(0,0,0,.4), 0 18px 40px -12px rgba(0,0,0,.65)`): the yellow sheet on the black counter. Used once; removed in print.

### Named Rules
**The One Lift Rule.** Only the sheet casts a shadow. Buttons, fields, tables and images on the sheet are flat; a state change is an ink fill or a yellow brightening, never a raise.

## Shapes

Everything is square (0px radius): buttons, fields, checkboxes, toggles, image frames, the logo plate. The single round form is the radio dot, which distinguishes single-choice from multiple-choice boxes. Rules come in three weights and three line styles: 1px solid for row dividers, 2px solid for cell and component borders, 5px solid to open each section and close the sheet header; dashed 1px for writing lines under inputs and for unselected rows of the hose table; dotted 2px for the tear-off perforation near the top of the sheet. Photos sit in 2px ink frames. The stamp is a double-ruled rectangle rotated -7deg with a grain filter.

## Components

### Buttons
Inked, square and loud, like a rubber-stamped instruction.
- **Shape:** square (0px).
- **Send (primary):** the order's submit. Ink fill, yellow Bebas at 1.75rem with 0.04em tracking, min height 60px, padding 0 22px 0 26px, trailing arrow icon at 26px. Full-width with the arrow pushed right on phones.
- **Ink (secondary):** same treatment at 1.45rem, min height 52px, padding 0 20px; used for "order this hose" and the map route, optionally with a trailing icon.
- **Hover / Focus:** fill presses darker to plate-black (0.2s ease-out); the send arrow slides 4px right; active nudges 1px down. Focus ring flips to a 3px yellow outline on inked buttons.
- **Pick (outlined):** the line-item "Pedir" control. 2px ink border, transparent fill, condensed 700 caps 0.9rem, min 40px by 76px. Hover and picked state fill solid ink with yellow text.

### Checkboxes and radios
- **Style:** a 20px square box with a 2px ink border inside a 36px-tall tappable label; radios use a round box. Checked fills solid ink with a yellow tick (checkbox) or yellow dot (radio), the tick scaling in over 0.2s.
- **State:** hover brightens the empty box to active-yellow; focus draws a 3px ink outline 3px off the box.

### Inputs / Fields
The boxed, numbered field is the system's core cell.
- **Style:** a grid cell bounded by 2px ink rules right and bottom (the grid supplies top and left), padding 8px 14px 10px. Caption in condensed caps, preceded by an inked number box (ink fill, yellow 700 condensed digits, min width 2.1em). Input is borderless and transparent on a 1px dashed writing line, 600 weight 1.15rem; optional fields carry a lowercase "opcional" tag in faded ink.
- **Focus:** the whole cell brightens to active-yellow (0.2s ease-out) and the writing line turns solid; caret is stamp red.
- **Error:** the cell washes to error-wash; the message prints in red-ink under the submit.
- **Numeric with unit:** the calculator input is set in Bebas at 2.2rem with its unit in condensed type on the same baseline.

### Band header
Every section opens with a 5px ink rule and a solid ink band: Bebas headline in yellow on the left, a condensed note in counter grey on the right (hidden on phones).

### Ledger rows
Services are a numbered table: a red-ink Bebas number in the gutter column, a bold item name with an optional faded sub-line (max 62ch), and a right-aligned pick button. Rows divide with 1px ink, hover brightens to active-yellow, and a row that must stand apart takes alternate-row yellow. Products repeat the pattern as grid cells: framed square photo (112px, 88px on phones), red number above a bold name, pick button at the foot.

### Unit segmented toggle
A 2px-bordered strip of radio segments (kg/cm², bar, psi), each condensed 700 at 0.92rem, min 64px wide, divided by 2px ink. The selected segment is inked solid with yellow text.

### Sizes table
Hose sizes in tabular numerals, right-aligned, headers in condensed caps with units on a second line. Unselected rows divide with dashed 1px ink; the selected row turns solid: 2px ink rules above and below, active-yellow fill, bold figures, and its size cell inked solid. The size column is Bebas and sticks to the left edge when the table scrolls.

### Type picker
A full-width strip of square tabs separated by 1px ink, Bebas name with a small condensed caption; the selected tab is inked solid.

### Readout
A definition grid under the cross-section: condensed caps terms in faded ink, Bebas values at 1.7rem, divided by 1px ink; the decisive value spans the row in red-ink at display scale.

### Stamp
One red double-ruled "SERVICIO 24 HORAS" stamp, rotated -7deg, multiply-blended, with an ink-grain filter. It lands once (0.38s, from 1.45x scale at -11deg, after 0.35s) and then stays still; reduced motion shows it already landed. Never repeated elsewhere.

### Navigation
- **Top bar:** sticky counter-black strip, 48px. Yellow Bebas wordmark left, condensed 600 caps nav links in counter grey (hover to white), primary phone in yellow with a stroked phone icon. Nav hides under 760px; the phone stays.
- **Mobile dock:** fixed to the bottom under 760px, three cells (1.3fr / 1fr / 1fr) at 56px min height: WhatsApp on a yellow cell with ink text, call and route on the counter in white condensed 700 caps, divided by a dark hairline; stroked 20px icons; respects the safe-area inset.

## Do's and Don'ts

### Do:
- **Do** build new content as cells inside the sheet's ruled grid, divided by 1px rows, 2px cell borders, and a 5px rule plus black band to open a section.
- **Do** number fields and line items, and set every data figure in Bebas with its unit small in Barlow Condensed.
- **Do** show state by inking in (ink fill, yellow text) or by brightening to active-yellow.
- **Do** use red-ink for text-size red on yellow; keep bright red for the stamp and diagram strokes.
- **Do** keep every corner square; reserve round shapes for radio dots.
- **Do** keep tap targets at least 36px (options), 40px (pick buttons), 56px (dock).
- **Do** honour prefers-reduced-motion: no smooth scroll, the stamp shown already landed.

### Don't:
- **Don't** add shadows to anything on the sheet; the sheet lift is the only one.
- **Don't** introduce a fourth hue on the sheet, gradient fills, or tinted card backgrounds (the scroll-fade mask on the hose table is functional, not decoration).
- **Don't** set prose, headings or links in red.
- **Don't** add a second stamp or animate the stamp more than once.
- **Don't** round corners on buttons, fields, toggles or images.
- **Don't** separate content with free-floating cards and gaps instead of shared rules.
