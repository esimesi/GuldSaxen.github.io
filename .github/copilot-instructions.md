# Guldsaxen Barbershop – AI Guide

## Snabb överblick
- Single-page site (`index.html`, `lang="sv"`) served from `main` via GitHub Pages + custom domain in `CNAME` (`xn--guldsaxenume-4cb.se`).
- Visual identity = twin background videos (`video-background/`), gold accent via `.Guldsaxen`, Kanit font loaded from Google Fonts; keep **all copy in Swedish** with clear drop-in messaging.
- No build tooling. Open `index.html` locally for feedback, test responsive breakpoints (1000px, 768px, 660px) and hover behaviors.

## Nyckelfiler & tillgångar
- `index.html`: Entire layout from hero video → slider → prislista → karta → galleri → footer + fixed social icons (`.social-logos`).
- `index.css`: Single global stylesheet; section-specific rules followed by media queries for tablet/mobile; don’t split this file.
- `index.js`: jQuery 3.5.1 (via CDN) powers slider hover classes and scroll-triggered header reveal; avoid vanilla rewrites unless replacing script entirely.
- Assets live under `icons/`, `pictures/`, `video-background/`; filenames are referenced directly in markup/CSS so retain existing paths/casing.

## UI-mönster att respektera
- Navigation: desktop `.desktop-nav` fixed at `top: 28px`; mobile uses checkbox `#burger` + overlay `<nav>`. `.hidden-header` slides in after 700px scroll (desktop only) via `show-header` class.
- Slider: `.content-container .stage` holds three `.element` panels (`.hair/.beard/.product`); JS toggles `.active/.inactive` width states, CSS sets breakpoints (900px, default, 660px). Add panels only if you also update widths/media queries.
- Prislistan (`.video-text-container`): each service uses `.video-text-details` + `.name-price-container` + `.line`. Keep services grouped and price copy in SEK (e.g. `279 KR`).
- Hero overlays: `<video autoplay muted loop playsinline>` with `.gradient-overlay` + `.overlay-content` stacking; centered image `pictures/professionella.png` must remain pointer-events: none.
- Map/contact block: `iframe` embed scoped by `.map-wrapper`; grayscale/invert filters give branded look—maintain when swapping map URLs.

## Innehållsregler
- Business facts are fixed: address `Skolgatan 58B, 903 27 Umeå`, phone `090 - 3409995`, hours `Mån-Fre 10:00-18:00`, `Lör 10:00-15:00`, `Sön Stängt`, socials Instagram `@guldsaxen_umea` + Facebook link.
- “Drop-in” policy is reiterated in hero text and scrolling banner (`.scrolling-banner`). Any new messaging must reinforce no-booking stance.
- Gallery descriptions are intentionally blank; don’t add captions unless every image gets one.

## Vanliga ändringar
- **Nya tjänster/priser**: duplicate an existing `.video-text-details` block, keep Swedish description and align price formatting (`XXX KR`).
- **Uppdatera bilder**: replace files in `pictures/` (slider backgrounds referenced in CSS) or `icons/`; ensure identical filenames or update both HTML and CSS.
- **Navigationsjustering**: desktop links currently logo-only; add anchors inside `.header-links` and `.desktop-nav` for consistency, and ensure both mobile/desktop navs share the same items.

## Testa innan commit
- Manually scroll 0→1000px to confirm hidden header triggers correctly and doesn’t show on mobile widths (<768px).
- Hover each slider panel to verify `.active/.inactive` transitions and that widths return on mouseleave.
- Toggle hamburger (mobile viewport) to ensure checkbox-driven nav opens/closes and doesn’t overlap the logo.
- Confirm both hero and secondary videos autoplay/mute/loop on desktop + mobile (playsinline attribute is critical for iOS).
- Verify fixed social icons and map pin remain clickable after any z-index/layout tweaks.
