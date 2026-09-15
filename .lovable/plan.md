# Wedding Services Album Stack

## Build
- Replace the four separate service bands with one cohesive sticky stack on desktop.
- Preserve every approved label, heading, paragraph, “Built for” line, and existing photograph exactly.
- Give each service a numbered album-page tab and subtle depth so the next tier visibly layers over the previous one while scrolling.
- Keep photography full-color and unobstructed beside the copy; do not place text over images.
- Use ordinary vertical cards on mobile and for reduced-motion users so all content stays accessible and predictable.

## Technical details
- Add a focused `WeddingServicesStack` section component and compose it from the existing `services` data.
- Replace the route’s four `ServiceTierSection` instances with the new component.
- Verify desktop stacking, mobile flow, text/image bounds, reduced-motion behavior, and the current build signal.
