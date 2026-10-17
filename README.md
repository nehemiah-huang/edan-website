# Ɛdan website

Plain HTML, CSS and JS. No build step. Open `index.html` with the VS Code Live Server extension.

## Structure

```
edan-website/
├── index.html, labs.html, gather.html, stay.html, eat.html,
│   grow.html, about.html, contact.html
├── styleguide.html         draft style guide, not linked in the nav
├── css/
│   ├── base.css            the original styles.css, moved (split later)
│   ├── tokens.css          palette, spacing token, page colours, nav, focus
│   └── pages/              one file per page, only when the page needs one
├── js/
│   ├── main.js             the original script.js (nav, reveal, parallax)
│   └── nav.js              marks the current page, Escape closes the menu
├── partials/nav-footer.html  the ONE nav and footer; copy to every page
├── images/                 photos (not in the zip, keep your own folder)
├── video/  audio/          later
└── README.md
```

## Rules

- Every page loads `css/base.css`, then `css/tokens.css`, then its own `css/pages/<page>.css` if it has one.
- Every page sets a body class (`page-home`, `page-labs`, ...) that picks its colour in `tokens.css`.
- No inline `style=""` attributes. Page styles go in the page's css file.
- Change the nav or footer in `partials/nav-footer.html` first, then copy it to every page.
- Anything unfinished is marked `[PLACEHOLDER]`.
- If a style is used by two or more pages, it moves to `base.css`.
