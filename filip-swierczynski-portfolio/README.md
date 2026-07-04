# Filip Swierczynski — Portfolio

A minimal, monochrome (black / gray / white) single-page portfolio with an
"awwwards-style" feel: oversized typography, hairline dividers, scroll-reveal
animations, a faint drifting-dust particle background, and a custom cursor.

Everything you see is served from `public/` and deployed to Firebase Hosting
(project `filipsw-de3ab` → filipsw.com).

---

## 1. Tech stack — what actually powers this

**There is no framework and no build step.** The site is plain, hand-written
HTML, CSS, and JavaScript. You can open `public/index.html` directly in a
browser and it just works.

| Concern            | What we use                          | Notes |
|--------------------|--------------------------------------|-------|
| Markup             | Static HTML                          | One file per page |
| Styling            | Plain CSS + CSS custom properties    | No Sass/Tailwind needed |
| Typography         | **Space Grotesk** via Google Fonts   | The only external dependency, loaded with a `<link>` |
| Scroll animations  | `IntersectionObserver` (browser API) | No library |
| Particle background | Hand-written `<canvas>` 2D drawing   | No library (not three.js / particles.js) |
| Custom cursor      | Two `<div>`s moved with JS + CSS `mix-blend-mode` | No library |
| Hosting            | Firebase Hosting                     | Static file serving |

> **Why no libraries?** The effects here are simple enough that vanilla code is
> smaller, faster, and dependency-free. Nothing to update, nothing to break.
> The `node_modules/` folder in the repo is only for the Firebase CLI, **not**
> for the website itself — none of it ships to visitors.

---

## 2. File structure

```
filip-swierczynski-portfolio/
├── firebase.json          # Firebase Hosting config (serves ./public)
├── .firebaserc            # Points at Firebase project "filipsw-de3ab"
└── public/                # <-- everything in here is the live website
    ├── index.html         # The main long-scroll page (hero, about, projects, contact)
    ├── css/
    │   └── style.css       # ALL styling for every page
    ├── js/
    │   └── main.js         # Scroll-reveal + particles + custom cursor
    ├── projects/
    │   ├── project-one.html    # Project detail / case-study pages
    │   ├── project-two.html
    │   └── project-three.html
    └── assets/
        ├── project-1.svg       # Placeholder project images (replace these)
        ├── project-2.svg
        ├── project-3.svg
        ├── Filip-Swierczynski-2025-CV.pdf
        ├── linkedin.png
        └── favicon_io/         # Full favicon set
```

Every page loads the **same** `css/style.css` and `js/main.js`, so a change in
either applies everywhere.

---

## 3. The styling system

### Design tokens (edit colors/spacing in one place)

The top of `css/style.css` defines CSS variables in `:root`. Change these and
the whole site updates:

```css
:root {
  --bg: #0a0a0a;        /* page background (near-black) */
  --bg-soft: #111111;   /* slightly lighter panels / image backdrops */
  --fg: #f2f2f0;        /* main text (off-white) */
  --muted: #8a8a8a;     /* secondary/gray text */
  --line: #262626;      /* hairline borders and dividers */
  --font: "Space Grotesk", ...;  /* the typeface */
  --pad: clamp(1.25rem, 4vw, 4rem);  /* global side padding, responsive */
}
```

Use them anywhere with `var(--name)`, e.g. `color: var(--muted);`.

### Responsive sizing with `clamp()`

Big headings scale with the viewport instead of using media queries. For
example the hero:

```css
.hero h1 { font-size: clamp(3rem, 12.5vw, 12rem); }
```

Read it as `clamp(MIN, PREFERRED, MAX)`: never smaller than `3rem`, never
larger than `12rem`, and in between it grows with screen width (`12.5vw`).
This is why the type looks huge on desktop but stays readable on a phone.

### Layout

- **Nav** (`.site-header`) is `position: fixed` at the top. It uses
  `mix-blend-mode: difference` so the text stays visible whether it's over a
  dark or light area.
- **Projects** (`.project`) use CSS Grid: two columns (image | text) that
  automatically stack to one column under 720px. Even-numbered rows flip the
  image to the other side via `.project:nth-of-type(even) .project-media { order: 2; }`.
- The single `@media (max-width: 720px)` block at the bottom of the file
  handles all mobile adjustments.

---

## 4. Animations — how each one works and how to tune it

All animation logic lives in `js/main.js`, with matching styles in
`css/style.css`. **Everything below automatically turns off** for visitors who
have "Reduce Motion" enabled in their OS (we check
`prefers-reduced-motion`), and the custom cursor also stays off on touch
devices.

### a) Hero text "rise in" (pure CSS)

The name slides up on page load. Each line sits in an `overflow: hidden` row
and the inner `<span>` animates from `translateY(110%)` to `0`.

```css
@keyframes rise { to { transform: translateY(0); } }
```

Tune: change the `animation-delay` values on `.hero h1 .row` to stagger lines
differently.

### b) Scroll-reveal (JavaScript, `IntersectionObserver`)

Any element you give the class `reveal` starts invisible and fades/slides up
when it scrolls into view.

- **CSS** defines the hidden and visible states:
  ```css
  .reveal { opacity: 0; transform: translateY(40px); transition: ... }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  ```
- **JS** watches those elements and adds `.visible` when they enter the
  viewport:
  ```js
  const observer = new IntersectionObserver(...);
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  ```

To animate a new element, just add `class="reveal"` to it in the HTML. To make
it trigger earlier/later, change the `threshold: 0.12` value (0 = as soon as
one pixel is visible, 1 = only when fully visible).

### c) Drifting-dust particle background (JavaScript `<canvas>`)

A full-screen `<canvas>` is injected behind everything (`z-index: -1`) and
~90 faint dots drift slowly up-and-to-the-right with a gentle sine wobble.

Tuning constants are at the top of the particle block in `js/main.js`:

```js
const COUNT = 90;         // number of particles
const DRIFT_X = 0.25;     // horizontal speed (+ = right, - = left)
const DRIFT_Y = -0.12;    // vertical speed (- = upward, + = downward)
const MAX_OPACITY = 0.35; // how bright the dots can get
```

Common tweaks:
- **Make it look like falling snow:** set `DRIFT_Y = 0.15` (positive = down).
- **Calmer / busier:** lower or raise `COUNT`.
- **More visible:** raise `MAX_OPACITY` (e.g. `0.5`).
- The dots are drawn with `ctx.fillStyle = "#f2f2f0"` — change that hex to
  recolor them.

### d) Custom cursor (JavaScript + CSS blend mode)

The native cursor is hidden and replaced by two elements:
- `.cursor-dot` — a small dot that tracks the mouse instantly.
- `.cursor-ring` — a larger ring that eases along behind it with a slight lag.

Both use `mix-blend-mode: difference`, so they invert whatever is underneath
(white on dark areas, dark on light). The ring **grows** when hovering
anything clickable (`a, button`) and **shrinks** on mouse-down.

Tuning:
- Ring/dot sizes: `.cursor-dot` and `.cursor-ring` width/height in
  `css/style.css`.
- Hover size: the `body.cursor-hover .cursor-ring` rule.
- Trailing lag: the `0.16` factor in the `follow()` function in `js/main.js`
  (higher = snappier, lower = more lag).

---

## 5. How to add a new project

Two steps: add a card to the homepage, then create its detail page.

### Step 1 — Add the card on the homepage

Open `public/index.html`, find the `<!-- Project 3 -->` block inside
`<section class="projects">`, and copy the whole `<a class="project reveal">
... </a>` block. Paste it below and edit:

```html
<a class="project reveal" href="projects/project-four.html">
  <div class="project-media">
    <img src="assets/project-4.svg" alt="Project Four preview" />
  </div>
  <div class="project-info">
    <span class="index">04</span>
    <h3>Project Four</h3>
    <p>One or two sentences describing what it is and why it matters.</p>
    <div class="tags">
      <span>React</span>
      <span>Node.js</span>
    </div>
    <span class="view">View project <span class="arrow">→</span></span>
  </div>
</a>
```

Things to update: the `href`, the image `src` + `alt`, the `index` number, the
title, description, and the tag `<span>`s. The alternating left/right image
layout happens automatically based on the card's position.

### Step 2 — Create the detail page

Copy an existing file in `public/projects/` (e.g. `project-three.html`) to
`project-four.html` and edit the content:

- `<title>` in the head
- The `<h1>` project name
- The `.detail-meta` block (Role / Year / Stack)
- The `.detail-media` image `src` (use `../assets/your-image`)
- The `.detail-body` text and the "Live demo" link
- The `.next-project` link at the bottom — point it at the next project so the
  chain keeps flowing (and update the last existing project to point at the
  new one).

> Note the paths inside `projects/` pages use `../` because they're one folder
> deep (e.g. `../css/style.css`, `../assets/...`, `../index.html#projects`).

---

## 6. Replacing the placeholder images

The three `assets/project-*.svg` files are stylized placeholders. To use real
screenshots:

- **Easiest:** save your screenshot as `assets/project-1.png` (or `.jpg`) and
  update the `src` in `index.html` and the matching detail page.
- Or keep the exact filename by overwriting the `.svg` — but you'll need to
  change the `src` extension anyway if it's a raster image.

Images are automatically shown in grayscale and de-saturate slightly on hover
(see `.project-media img` in `css/style.css`), which keeps mixed screenshots
looking cohesive. Any aspect ratio works — the CSS crops to fit a 4:3 box on
the homepage and 16:9 on detail pages.

---

## 7. Editing text content

All text is directly in the HTML — there's no CMS or data file:

- **Name, bio, skills:** `public/index.html`, in the `.hero` and
  `#about` sections.
- **Contact links** (email, LinkedIn, CV): bottom of `index.html` in the
  `.contact-links` block.
- **Project copy:** the card in `index.html` + the matching `projects/*.html`.

---

## 8. Running it locally

Pick whichever is convenient:

- **Just open the file:** double-click `public/index.html`.
- **VS Code Live Server extension:** right-click `index.html` → "Open with Live
  Server". (Recommended — some browsers restrict things over `file://`.)
- **Any static server**, e.g. `python3 -m http.server` run from inside
  `public/`, then visit the printed URL.

---

## 9. Deploying

From the project root (`filip-swierczynski-portfolio/`):

```bash
firebase deploy --only hosting
```

If you get a `401` / "resolving hosting target" error, your login token has
expired — refresh it and try again:

```bash
firebase login --reauth
firebase deploy --only hosting
```

Firebase reads the target project from `.firebaserc` (`filipsw-de3ab`), so the
deploy goes to filipsw.com regardless of what the local folder is named.

---

## 10. Accessibility & performance notes

- **Reduced motion:** all JS animations and the custom cursor are skipped when
  the OS "Reduce Motion" setting is on. Don't remove the
  `prefers-reduced-motion` checks.
- **Touch devices:** the custom cursor only activates for fine pointers
  (`pointer: fine`), so phones/tablets keep normal behavior.
- **No JS required to read the site:** particles and cursor are enhancements;
  the content, nav, and links all work with JavaScript disabled.
- **Zero third-party runtime code** ships to visitors (aside from the Google
  Fonts stylesheet), so there's very little to slow the page down.
```
