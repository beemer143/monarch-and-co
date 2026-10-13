# MONARCH & CO.

A fictional luxury real-estate portfolio website for Project 04.

## Files

- `index.html` — semantic page structure, metadata, dialogs, form, intro curtain.
- `styles.css` — responsive editorial design system and motion.
- `main.js` — property data, filters, dialogs, mobile navigation, reveals, parallax, hero scene, and local form feedback.
- `lenis.min.js` — Lenis 1.1.14 smooth-scroll engine (the same library used in the Aurelia House build).

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Interaction coverage

- Responsive desktop/mobile navigation.
- Property filters for all homes, London, Country, and Europe.
- Property detail dialogs with gallery and viewing CTA.
- Journal article dialogs.
- Local-only enquiry form with browser validation and truthful demo feedback.
- Lenis expo-eased smooth scrolling with in-page navigation routed through it.
- Four-panel intro curtain with a staged hero entrance and a skip control.
- Pinned hero scroll scene (desktop): the hero holds while the page scrolls through it, scaling and darkening the visual and fading the copy out.
- Hero exit scene on mobile: the visual deepens and drifts while the copy fades.
- Scroll-scrubbed curtain on the signature showcase image, opening from 46% to full as the section arrives.
- Depth parallax on journal, location, property, and signature images, composed with hover scales through CSS custom properties.
- Scroll reveals (including centre-out curtain reveals), hover zoom, magnetic CTAs, and ticker motion.
- `prefers-reduced-motion` support.

## Image note

This portfolio concept uses remote Unsplash and Pexels image URLs so the site can be previewed immediately with network access. Confirm image licensing and add image-specific attribution before commercial deployment.

## Deployment

This is a static site. Deploy the `monarch-and-co` folder to a static host such as GitHub Pages, Netlify, Vercel static hosting, or Cloudflare Pages after replacing or licensing imagery.
