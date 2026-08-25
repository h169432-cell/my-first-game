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
- [ ] Put 14 final JPG files into `assets/cards/`.
- [ ] Verify every image is a valid JPEG and non-zero size.
- [ ] Verify visual identity: suspect 4 is Oda Nobunaga; horizontal alibi is the newly supplied image.

### Phase 2 — Consolidate artwork UI
- [ ] Create `assets/card-ui.js`.
- [ ] Centralize `CARD_IMAGES` mapping.
- [ ] Render artwork on revealed board cards.
- [ ] Render artwork in private inspection modal.
- [ ] Render suspect artwork in accusation UI.
- [ ] Add preload and image-error fallback.

### Phase 3 — Consolidate rules
- [ ] Audit `game.js` against fixed deck specification.
- [ ] Move any still-required rule overrides from `assets/clueverge-rules-v2.js` into `game.js`.
- [ ] Ensure two distinct alibi variants exist and keep their directions.
- [ ] Confirm culprit calculation rules remain correct.

### Phase 4 — Simplify page loading
- [ ] Update `index.html` to load only the stable runtime files needed by the final architecture.
- [ ] Remove split-image and reconstruction script tags.
- [ ] Update cache-busting version once after final migration.

### Phase 5 — Remove legacy systems
Delete after replacement verification:

- [ ] `assets/card-image-runtime.js`
- [ ] `assets/new-suspect-grid-part1.js` … `part4.js`
- [ ] `assets/new-evidence-grid-part1.js` … `part4.js`
- [ ] `assets/suspect-sheet-part1.js` … `part6.js`
- [ ] obsolete WebP/sprite assets not used by final UI
- [ ] `assets/evidence-card-data-part1.js`
- [ ] `assets/evidence-card-map.js`
- [ ] `assets/image-blob-fix.js`
- [ ] `assets/cards-data/`
- [ ] `assets/evidence-hq/`
- [ ] `assets/evidence-pack/`
- [ ] `assets/hq-cards/`
- [ ] old `assets/suspect-ui.js` and `assets/evidence-ui.js` after `card-ui.js` replaces them
- [ ] `assets/clueverge-rules-v2.js` after rule consolidation
- [ ] temporary cleanup workflows in `.github/workflows/`

### Phase 6 — Validation
- [ ] Deck contains exactly 16 cards every round.
- [ ] Base card counts are correct.
- [ ] Exactly one of special false testimony / suspect 7 / twist is added.
- [ ] Both alibi variants appear exactly once in base deck.
- [ ] Board reveal shows correct artwork.
- [ ] Private inspection shows correct artwork.
- [ ] Accusation UI shows suspect artwork.
- [ ] Image failure does not produce unusable black cards.
- [ ] Mobile/iPad Safari flow works.
- [ ] GitHub Pages serves current files without 404s.

### Phase 7 — Final cleanup
- [ ] Remove temporary migration artifacts.
- [ ] Update README/DESIGN if architecture description is stale.
- [ ] Mark project cleanup complete in `PROGRESS.md` and `HANDOFF.md`.
