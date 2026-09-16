# THERO Portfolio

Personal portfolio for Hyginus Toya Andre-Elladim (THERO) — Software
Engineering student, web developer, AI enthusiast, and portrait artist.

## Status

This is the **HTML + CSS implementation pass**. No JavaScript has been
added yet — that comes next, as part of the W3Schools JavaScript course
work, and will live in `js/`.

## Structure

- `index.html` — semantic markup for all sections, in the required order
  (Home → About → Journey → Skills → Projects → Art → Interests →
  Currently Learning → Credentials → Closing → Contact → Footer).
- `css/style.css` — reset, design tokens (colour/type/spacing), typography,
  global layout, and every component/section's base styles.
- `css/responsive.css` — tablet (`<=1024px`) and mobile (`<=640px`)
  adaptations: nav → drawer, grid collapses, spacing/type scale-down.
- `css/animations.css` — keyframes and transition classes (hero entrance,
  scroll reveal target state, lightbox open/close, form loading/error
  states). Trigger classes (`.is-visible`, `.lightbox--open`,
  `.site-header--scrolled`, etc.) are defined here and in style.css but are
  toggled by the future JS modules listed in `index.html`'s closing
  comment and below.
- `data/` — placeholders for `artwork.json` / `projects.json`, for when
  the gallery/projects rendering moves to data-driven JS.
- `js/` — empty for now; each file's intended responsibility is documented
  in `index.html`.

## Missing assets referenced by the markup

None of these were provided in this conversation, so the HTML references
them by their correct final paths, but the files themselves still need to
be added to the project folder before the images/PDFs will actually
display:

- `assets/images/profile/ProHeadshot.jpeg`
- `assets/images/projects/cubbes-clone.png`
- `assets/images/projects/dropbox-clone.png`
- `assets/images/projects/simple-dev-calculator.png`
- `assets/art/*.jpg` (all 12 artworks)
- `assets/documents/THERO-CV.pdf`
- `assets/documents/CLAUDE-101-CERTIFICATE.pdf`
- `assets/documents/NAMTECH-CERTIFICATE.pdf`
- `assets/icons/**` (Lucide UI icons currently inlined as SVG directly in
  the HTML instead — swap for the icon files if you'd rather load them
  as assets)

The "All About Art" project card intentionally has no image (status:
Coming Soon).

## Next step (JavaScript)

Wire up, in this order: `data.js` → `navigation.js` → `hero.js` →
`journey.js` → `skills.js` → `projects.js` → `gallery.js` → `contact.js`
→ `main.js` (bootstraps everything, sets up the `IntersectionObserver`
for `.reveal`). The contact form already posts to
`https://formspree.io/f/xqpakknz` via its `action`/`method` attributes,
so it degrades gracefully even before `contact.js` adds the AJAX
handling and validation states.
