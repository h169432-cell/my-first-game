# Work Plan

## Objective

Replace the unstable legacy card-image stack with a simple, durable architecture based on individual image files, while preserving the agreed game rules and artwork variants.

## Target architecture

```text
my-first-game/
├─ index.html
├─ style.css
├─ game.js
├─ .work/
│  ├─ EXECUTION_PROTOCOL.md
│  ├─ WORK_PLAN.md
│  ├─ PROGRESS.md
│  └─ HANDOFF.md
└─ assets/
   ├─ card-ui.js
   └─ cards/
      ├─ suspect-1.jpg
      ├─ suspect-2.jpg
      ├─ suspect-3.jpg
      ├─ suspect-4.jpg
      ├─ suspect-5.jpg
      ├─ suspect-6.jpg
      ├─ suspect-7.jpg
      ├─ motive.jpg
      ├─ clue.jpg
      ├─ weapon.jpg
      ├─ false-testimony.jpg
      ├─ alibi-vertical.jpg
      ├─ alibi-horizontal.jpg
      └─ twist.jpg
```

## Design principles

1. **Images are files.** No Base64-part JS, no Blob reconstruction, no sprite-position dependency.
2. **Rules live in one place.** `game.js` owns deck generation, effects, turns, accusation logic, scoring.
3. **Artwork rendering lives in one place.** `assets/card-ui.js` maps card data to image URLs and handles board/private/accusation rendering.
4. **Artwork replacement should not require logic edits.** Replacing `assets/cards/suspect-4.jpg` should be enough to change suspect 4 artwork.
5. **Fallback rendering must remain usable.** If an image fails, text/icon fallback must appear instead of a black card.
6. **Delete old systems only after replacement is verified.**

## Fixed deck specification

Base 15 cards:

- Suspects 1–6: 6
- Motive: 2
- Clue: 2
- Weapon: 2
- Alibi: 2
  - `alibi-vertical`: one card, up/down
  - `alibi-horizontal`: one card, left/right and uses the newly supplied artwork
- False testimony: 1

Add exactly one random special card:

- extra False testimony, OR
- Suspect 7, OR
- Twist

Final deck size: 16.

## Execution phases

### Phase 0 — Safety / persistence
- [x] Create backup branch before persistent-workflow conversion.
- [x] Add `.work/` persistent execution files.

### Phase 1 — Establish final image assets
- [x] Put 14 final JPG files into `assets/cards/`.
- [x] Verify every image is present and non-zero size.
- [x] Verify visual identity: suspect 4 is Oda Nobunaga; horizontal alibi is the newly supplied image.

### Phase 2 — Consolidate artwork UI
- [x] Create `assets/card-ui.js`.
- [x] Centralize `CARD_IMAGES` mapping.
- [x] Render artwork on revealed board cards.
- [x] Render artwork in private inspection modal.
- [x] Render suspect artwork in accusation UI.
- [x] Add preload and image-error fallback.

### Phase 3 — Consolidate rules
- [x] Audit `game.js` against fixed deck specification.
- [x] Remove obsolete rule override after confirming required rules are already in `game.js`.
- [x] Ensure two distinct alibi variants exist and keep their directions.
- [x] Confirm culprit calculation rules remain in `game.js`.

### Phase 4 — Simplify page loading
- [x] Update `index.html` to load only the stable runtime files needed by the final architecture.
- [x] Remove split-image and reconstruction script tags.
- [x] Update runtime cache-busting version for the migration.

### Phase 5 — Remove legacy systems
- [x] Remove legacy card-image runtime.
- [x] Remove suspect/evidence split-grid parts.
- [x] Remove suspect sheet parts and obsolete WebP/sprite assets.
- [x] Remove obsolete evidence data/map/blob-fix files.
- [x] Remove `cards-data/`, `evidence-hq/`, `evidence-pack/`, and `hq-cards/`.
- [x] Remove old `suspect-ui.js` and `evidence-ui.js`.
- [x] Remove obsolete `clueverge-rules-v2.js`.
- [x] Remove temporary cleanup/image-rebuild workflows.

### Phase 6 — Validation
- [x] Deck contains exactly 16 cards every round by static rule audit.
- [x] Base card counts are correct.
- [x] Exactly one of special false testimony / suspect 7 / twist is added.
- [x] Both alibi variants appear exactly once in base deck.
- [x] Board/private/accusation artwork paths are handled by the direct UI module.
- [x] Image failure has text/icon fallback instead of an unusable black card.
- [ ] Live interactive mobile/iPad Safari flow was not directly executable in the current tool environment.
- [x] GitHub Pages post-cleanup deployment completed successfully.

### Phase 7 — Final cleanup
- [x] Remove temporary migration artifacts.
- [x] Update stale technical architecture in `DESIGN.md`.
- [x] Mark repository card-system cleanup complete in persistent work state.
