# Guldsaxen Barbershop Website - AI Development Guide

## Project Overview
Single-page barbershop website for Guldsaxen in Umeå, Sweden. Static site hosted on GitHub Pages with Swedish content, featuring video backgrounds, interactive elements, and mobile-responsive design.

## Architecture & Structure

### Core Files (Root Level)
- `index.html` - Single-page site structure (Swedish language, `lang="sv"`)
- `index.css` - All styles in one file using Kanit font family throughout
- `index.js` - jQuery-based interactions for slider and scroll header
- `CNAME` - Custom domain: `xn--guldsaxenume-4cb.se`

### Asset Organization
- `icons/` - Logos and social media icons (barber-logo.png, facebook.png, instagram.png, etc.)
- `pictures/` - Gallery images and slider backgrounds (hår.jpg, Skägg.jpg, produkter.jpg)
- `video-background/` - Hero videos (barbershop-background.mp4, Secondvid.mp4)

## Key Design Patterns

### Responsive Navigation (Desktop vs Mobile)
Two separate navigation systems:
- **Desktop** (>768px): `.desktop-nav` with fixed positioning at `top: 28px`
- **Mobile** (≤767px): Hamburger menu (`#burger` checkbox) revealing overlay nav with white background
- Scroll-triggered header (`.hidden-header`) appears after `700px` scroll on desktop only

### Interactive Slider Component
Located in `.content-container` with `.stage` element:
- jQuery hover interactions add `.active` (widens) and `.inactive` (narrows/fades) classes
- Three slides: `.hair`, `.beard`, `.product` with background images from `pictures/`
- Responsive breakpoints: 900px (large), default (medium), 660px (small)

### Video Handling
Full-viewport hero section (`.video-background`) with:
- `autoplay muted loop playsinline` attributes for mobile compatibility
- `.gradient-overlay` (z-index: 1) and `.overlay-content` (z-index: 2) layering
- Centered image overlay (`.centered-image`) using absolute positioning + transform

### Pricing Display Pattern
`.video-text-container` with flex layout (black background):
- `.name-price-container` uses flexbox with connecting line via `::before` pseudo-element
- `.line` element creates dotted separator between service name and price
- Services: Klippning (279 KR), Student/Barn/Pensionär (229 KR), Skägg (200 KR)

## Critical Conventions

### CSS Organization
- All styles in single `index.css` file (no separate modules)
- Media queries at end of each section: 1000px (tablet), 768px (mobile), 660px (small mobile)
- Brand color: `rgb(218,145,0)` applied via `.Guldsaxen` class for gold accent
- Kanit font family used universally (loaded from Google Fonts)

### Content Language & Business Info
**All user-facing text MUST be in Swedish**. Key details:
- Business name: "Guldsaxen" 
- Address: Skolgatan 58B, 903 27 Umeå
- Phone: 090 - 3409995
- Hours: Mån-Fre 10:00-18:00, Lör 10:00-15:00, Sön Stängt
- Social: Instagram (@guldsaxen_umea), Facebook

### Drop-in Policy
No booking system - all messaging emphasizes walk-in/drop-in service. Scroll banner states: "Hos oss behövs ingen bokning. Drop-in när du har tid."

## Development Workflow

### Local Development
No build process - open `index.html` directly in browser. Test responsive breakpoints at 1000px, 768px, 660px.

### Dependencies
External CDNs (no package.json):
- jQuery 3.5.1: `https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js`
- Font Awesome 5.15.3: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css`
- Google Fonts (Kanit): `https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap`

### Testing Checklist
1. Video autoplay on mobile (iOS Safari requires `playsinline`)
2. Hamburger menu toggle (checkbox state controls nav visibility)
3. Slider hover states (`.active`/`.inactive` transitions)
4. Fixed social icons (`.social-logos`) visible at right edge on scroll
5. Responsive layout shifts at 1000px, 768px, 660px breakpoints

## Common Tasks

### Adding New Service/Price
Edit `.video-text-section` in `index.html`:
```html
<div class="video-text-details">
    <div class="name-price-container">
        <span class="name">Service Name</span>
        <div class="line"></div>
        <span class="price">XXX KR</span>
    </div>
    <span class="description">Swedish description here.</span>
</div>
```

### Updating Gallery Images
Replace files in `pictures/` directory. Gallery uses `.pictures-grid` (4 columns desktop, 1 column mobile). Images auto-scale with `object-fit: cover`.

### Modifying Breakpoints
Search for `@media` queries in `index.css`. Primary breakpoints: 1000px (layout shifts), 768px (nav toggle), 660px (slider sizing).

## Gotchas & Quirks

- **No README**: Project context only in code/comments
- **Hardcoded API Key**: Google Maps iframe has placeholder `DITT_API_NYCKEL` in `index.html`
- **Duplicate Images**: Gallery repeats some images (IMG-20230817-WA0002.jpg, IMG-20230817-WA0006.jpg appear twice)
- **Manual Mobile Detection**: Uses `@media` only, no JS device detection
- **OneDrive Path**: Local workspace path includes "Höglandsförbundet" organization folder
