Two targeted changes, no redesign.

1. Change CTA button text from "Experience the Discovery" to "Contact us"
   - Update header CTA button in `src/components/site/Header.tsx` (desktop + mobile)
   - Update the default `buttonText` in `src/components/site/CTA.tsx` so the final CTA band uses the new label
   - Update inline CTA buttons in `src/routes/index.tsx` (hero, discovery journey, final CTA band)
   - Update matching CTA buttons in `src/routes/services.tsx` and `src/routes/atlas-method.tsx` for consistency

2. Remove the white space above the footer and replace it with a thin turquoise line
   - In `src/components/site/Footer.tsx`:
     - Remove `mt-32` so the footer sits flush with the previous section
     - Change `border-t border-hairline` to `border-t border-turquoise` so the separator is the project's turquoise accent (#06C5E3)

No typography, layout, colors, spacing system, or overall aesthetic changes beyond these two edits.