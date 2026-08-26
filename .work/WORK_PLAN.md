# Work Plan

## Objective

Maintain the simplified direct-file card architecture and evolve the existing web game into an installable smartphone app prototype without changing the unfinished game rules unnecessarily.

## Target architecture

```text
my-first-game/
├─ index.html
├─ style.css
├─ game.js
├─ manifest.webmanifest
├─ .work/
│  ├─ EXECUTION_PROTOCOL.md
│  ├─ WORK_PLAN.md
│  ├─ PROGRESS.md
│  └─ HANDOFF.md
└─ assets/
   ├─ app-icon.svg
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

1. Images are ordinary files. No Base64 split images, Blob reconstruction, or sprite-position dependency.
2. Rules live in `game.js`.
3. Artwork rendering lives in `assets/card-ui.js`.
4. Artwork replacement should not require logic edits.
5. Image failure must fall back to usable text/icon rendering.
6. App-prototype work must not silently change unfinished game rules.
7. Prefer a lightweight installable web-app shell before native Android/iOS packaging.

## Fixed deck specification

Base 15 cards:

- Suspects 1–6: 6
- Motive: 2
- Clue: 2
- Weapon: 2
- Alibi: 2
  - `alibi-vertical`: one card, up/down
  - `alibi-horizontal`: one card, left/right
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
- [x] Verify suspect 4 and horizontal alibi artwork.

### Phase 2 — Consolidate artwork UI
- [x] Create `assets/card-ui.js`.
- [x] Centralize image mapping and rendering.
- [x] Add preload and fallback.

### Phase 3 — Consolidate rules
- [x] Audit `game.js` against fixed deck specification.
- [x] Preserve two distinct alibi variants.
- [x] Keep culprit calculation in `game.js`.

### Phase 4 — Simplify page loading
- [x] Load only stable runtime files.
- [x] Remove split-image/reconstruction scripts.

### Phase 5 — Remove legacy systems
- [x] Remove obsolete image runtime, sprite/data assets, old overrides, and temporary workflows.

### Phase 6 — Validation
- [x] Static deck-rule audit passed.
- [x] Direct-file artwork paths are wired for board/private/accusation views.
- [x] GitHub Pages post-cleanup deployment completed successfully.
- [ ] Live mobile/browser verification of the previously reported black-card defect remains pending user confirmation.

### Phase 7 — Final cleanup
- [x] Remove temporary migration artifacts.
- [x] Update technical architecture documentation.

### Phase 8 — Installable app prototype
- [x] Add `manifest.webmanifest` with standalone display mode.
- [x] Add `assets/app-icon.svg`.
- [x] Link the manifest/icon and mobile app metadata from `index.html`.
- [x] Preserve existing game logic and card rules unchanged.
- [ ] Verify the newest Pages deployment and home-screen installation on the user's phone.
