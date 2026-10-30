# Project memory

## Product intent & audience

- PWA for Mesfin Biru "The Jaguar" boxing training center, branded "LEMAMAR Boxing Center"
- Audience: prospective trainees and boxing enthusiasts (local + international reach)
- Features: responsive nav, training programs, photo gallery, social media integration, floating contact actions, hero slider

## Brand personality & voice

- International, attractive, high-energy boxing brand
- "LEMAMAR" is the central brand name; tagline "BOXING CENTER" beneath it
- Champion boxer persona with gloves; conveys prestige and strength

## Visual design & UX direction

- **Bright/light theme** (converted from original dark): cream/light gray backgrounds, dark ink text, white cards
- Sections alternate: soft cream, light mist gray, white cards — strong readability
- Logo badge: keeps dark interior with gold boxer figure + red gloves; accompanying text is dark on light headers
- Mobile: fixed top header (logo left + "Call Now" button right), white/translucent with dark text; bottom nav white with gray inactive / red active icons
- Desktop: full navbar, white/translucent with dark text
- Hero: dark gradient overlays at bottom of photos kept (lighter overall) so white hero text stays readable
- Cards (Training, Contact): white with light borders, subtle shadows
- Gallery: thumbnails with lighter hover overlays
- Footer: single dark section (dark ink background) for visual grounding; logo in dark variant
- PWA theme color matches light background
- Tech: Vite + React, Tailwind CSS, lucide-react icons, `@/` path alias → `src/`

## Decisions, constraints & rationale

- User explicitly requested: logo visible in mobile header (left), brighter theme, user-movable slider, then full bright/light conversion
- Autoplay pauses after interaction so users stay in control of the slider
- Mobile header hidden on desktop to avoid redundancy with navbar
- Footer kept dark intentionally for visual grounding/contrast against otherwise light page
- Hero overlays kept (but lightened) to ensure white text readability on photos

## Open questions & assumptions

- Brand spelling confirmed as "LEMAMAR" per user request (may relate to Mesfin Biru / The Jaguar)
- No explicit typography or accessibility requirements stated beyond visual attractiveness
- No content/copy provided; sections may use placeholder text needing real content