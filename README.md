# Crystal Kizor — Landing Page

Live site:https://crystalkizor1.netlify.app

A single-page personal brand hub for Crystal Kizor, built for the Studio COKA Stage 1 web developer assessment.

## Approach
- Concept: The page is organised like an architectural drawing sheet, by scale: Objects (ELEvated), Buildings (Studio COKA), Ideas (The Effective Architect, Speaking, Research) and People (AKO Alliance, Alive and Free). This gives the brands a clear hierarchy and one story.
- Next steps: An "I want to…" section sends each type of visitor to the right brand.
- Design: Designed in Figma, then built from the final frames.

## Tech
- Plain HTML, CSS and a little JavaScript. No framework and no build step, for speed and simplicity.
- `css/style.css` holds the design tokens (`:root`) and all styles.
- `js/main.js` highlights the active scale in the navigation as you scroll.
- Images are the originals from the approved design, in WebP, with width and height set and lazy loading below the fold.
- Responsive layout, with a sticky scale index on mobile, and keyboard focus styles and a skip link for accessibility.

## Notes
- Buttons marked `data-todo` are placeholders until the brand URLs are confirmed.
- Email and social links are pending confirmation.
