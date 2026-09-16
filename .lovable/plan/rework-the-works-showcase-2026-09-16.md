# Rework the Works showcase

## Outcome
Replace the current bento grid with a cinematic, editorial project showcase inspired by Roof Studio, while preserving The FABRIQUE’s identity and existing project content.

## Changes
- Display projects as large, vertically stacked feature panels with generous spacing and varied editorial alignment.
- Pair every visual with an oversized project title, client/year details, and categories.
- Keep silent Vimeo previews on pointer hover where available, with project images as reliable fallbacks.
- Add refined scroll reveals, media scaling, title motion, and a clear “view project” interaction.
- Adapt the presentation to a clean single-column experience on phones, without hover-dependent information.
- Preserve every existing project page and link.

## Technical details
- Refactor `FeaturedWork.tsx` from its current bento grid into a responsive editorial project list.
- Replace the bento-specific rules in `index.css` with scoped Works layout and motion styles.
- Respect reduced-motion preferences and keep touch interaction accessible.
- Verify desktop and mobile layouts, video/image fallbacks, project navigation, and browser errors.
