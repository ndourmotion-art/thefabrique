# The FABRIQUE — WordPress one-page theme

## Files
```
the-fabrique/
├── style.css              Theme header + all styling
├── functions.php          Theme setup, asset enqueue, helpers
├── header.php             Sticky nav with hover slide-up labels
├── footer.php             Logo, widgets, copyright
├── front-page.php         One-page layout (hero, work, services, solutions, about, contact)
├── index.php              Blog/archive/search fallback
├── inc/
│   └── customizer.php     Customizer panel, sections, colors
└── assets/js/
    ├── main.js            Sticky header, mobile menu, smooth anchors, scroll reveals
    └── customizer.js      Live preview bindings
```

## Install
1. Put all files in a folder named `the-fabrique`.
2. Zip that folder (the zip must contain the folder, not loose files).
3. WordPress admin → Appearance → Themes → Add New → Upload Theme → Activate.
4. Settings → Reading → set "Your homepage displays" to a static page so `front-page.php` is used.
5. Appearance → Customize:
   - Site Identity → upload the logo.
   - One-page content → edit hero, section and contact text.
   - Colors → accent and primary color.
   - Menus → create a menu with anchor links (`#work`, `#services`, `#solutions`, `#about`, `#contact`) and assign it to "Primary one-page menu". Without a menu, the theme shows those five links by default.

## Notes
- The Work section automatically lists the six most recent posts with featured images.
- Section headings animate word-by-word on scroll; all motion is disabled for visitors with reduced-motion enabled.
