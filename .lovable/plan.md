## Update Footer "Search Blueprint™" link

Currently the footer links "Search Blueprint™" to `/services` (same target as "Talent Lens™" and "Hiring Confidence Index™"). I will update the footer so that "Search Blueprint™" under the Methodology column points to the new Atlas Library page `/atlas-library/search-blueprint` instead.

### Technical details
- File to edit: `src/components/site/Footer.tsx`
- Change: set the `to` field of the `Search Blueprint™` link from `/services` to `/atlas-library/search-blueprint`.
- No other spacing, typography, colors, or design tokens will change.
- Verify: build the project and confirm the link navigates to the correct route.