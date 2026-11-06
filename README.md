# Nexus – Responsive Landing Page

**Week 1 Frontend Internship Task**  
Responsive Landing Page Development

---

## Project Overview

This is a fully responsive landing page built with **semantic HTML5**, **modern CSS** (Flexbox + Grid + media queries), and **vanilla JavaScript**.

The design is a clean, modern interpretation of a standard SaaS / product landing page and includes:

- Sticky header with logo and navigation
- Mobile hamburger menu with smooth toggle
- Hero section with dual CTAs
- Feature highlights (6 cards)
- “How it works” steps
- Testimonials
- Final call-to-action section
- Comprehensive footer

The page adapts smoothly from mobile phones to large desktop screens.

---

## File Structure

```
nexus-landing/
├── index.html          # Main HTML file (semantic structure)
├── css/
│   └── styles.css      # All styles + responsive media queries
├── js/
│   └── script.js       # Mobile menu toggle & UX enhancements
├── images/             # (empty – ready for future assets)
└── README.md           # This file
```

---

## How to Run Locally

1. Download / unzip the project.
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).
3. No build step or server required – it works by simply opening the file.

---

## Design Decisions & Features

- **Mobile-first CSS** – base styles target small screens, then enhance with media queries.
- **CSS Custom Properties** – easy theming and consistent spacing/colors.
- **Flexbox & Grid** – used for all major layouts (header, hero, feature cards, steps, footer).
- **Accessible** – proper ARIA attributes on the hamburger button, semantic landmarks, good contrast.
- **Performance** – no external frameworks, minimal JavaScript, system font stack + Inter.
- **Smooth UX** – sticky header, hover effects, smooth scrolling, menu closes on link click and resize.

### Breakpoints
- Mobile: default (< 768px)
- Tablet: ≥ 768px
- Desktop: ≥ 1024px

---

## Browser Support

Works on all modern browsers (last 2 versions of Chrome, Firefox, Safari, Edge).

---

## Author

Created as part of the Frontend Internship – Week 1 Task.

---

## License

Free to use for learning and portfolio purposes.
