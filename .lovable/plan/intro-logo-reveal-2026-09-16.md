# Intro logo reveal

## What will change
- Add a full-screen white opening view with the FABRIQUE logo centered at a large, responsive size.
- Keep the logo visible for two seconds, then fade it smoothly into the white background.
- Reveal the homepage underneath with a soft blur-to-sharp transition.
- Stagger the first section’s image, headline, supporting line, and buttons so they enter in sequence after the opening view.
- Preserve the existing scroll-written text effects for the rest of the page and respect reduced-motion settings.

## Technical details
- Add a focused intro component with timed phases and cleanup.
- Delay the homepage text observer until the intro has cleared so its writing effect is visible rather than finishing behind the opening screen.
- Add semantic animation classes and keyframes to the existing global design system, using the existing white background and color tokens.
- Verify the opening sequence and final layout in the browser at desktop and mobile sizes.
