# Progress

Last updated: 2026-08-26
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Persistent `.work/` execution state and backup branch created.
- `game.js` deck rules audited: base 15 + exactly one special = 16; vertical/horizontal alibi variants are correct.
- `assets/card-ui.js` provides centralized direct image URL mapping, preload, fallback, and board/private/accusation decorators.
- All 14 required production JPGs exist in `assets/cards/`.
- `alibi-horizontal.jpg` is the required left/right artwork.
- `assets/cards/suspect-4.jpg` is the user-confirmed 容疑者4 / 織田信長 / 肖像 card crop, verified at 28,572 bytes with SHA-256 `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`.
- Production `index.html` loads only `game.js`, `assets/card-ui.js`, and `window.CardUI.installDirectCardUI()`.
- Commit `c4e31433f55d2753e6a9e6421466e30c24e17ac6` removed legacy split-grid/runtime/old artwork UI files.
- Commit `43fad683cc842859d5e07fbe415843deea3e10b9` removed remaining obsolete sprite/data/sheet assets, old rules override file, migration directories, diagnostic staging, and temporary image-rebuild workflows.
- `assets/` now contains only `card-ui.js` and `cards/`.
- `DESIGN.md` technical architecture was updated to match the current direct-file implementation.
- `.work/WORK_PLAN.md` was updated to reflect completed migration phases.

## Current state

The legacy image-system cleanup remains complete. A new live defect was reported on 2026-08-26: several cards still appeared completely black in the deployed game while other cards displayed correctly.

The direct-file architecture remains intact:

- `game.js` — game rules and interaction logic.
- `assets/card-ui.js` — artwork URL mapping, preload, fallback, and board/private/accusation rendering.
- `assets/cards/` — final 14 individual JPG artwork files.
- `index.html` — loads only the stable direct-file runtime.

## Latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Confirmed pre-fix `main` head was `ff528603737ac01c5e482cfee4303ef85e77ba58`.
- Confirmed all 14 expected JPG filenames still exist under `assets/cards/`.
- Identified that `assets/card-ui.js` used stable unversioned JPG URLs even though JS itself was cache-busted.
- Updated `assets/card-ui.js` so every card image URL is versioned with `?v=20260826-2212` via `CARD_ASSET_VERSION`.
- Updated `index.html` runtime/style query strings to `20260826-2212` so browsers fetch the new `card-ui.js` immediately.
- Card image cache-bust commit: `d70a0a2ce3cb7867ca4fa0aa35843bc9ada575d2`.
- Runtime cache refresh commit: `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f`.
- GitHub Pages run `32973957602` for `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f` completed successfully.

## Validation performed

- Current deployed source references only the direct-file card architecture.
- All 14 card image paths are mapped through versioned URLs.
- GitHub Pages successfully deployed the cache-bust fix.
- The underlying image-error fallback remains in place: if an image fails to load, the `<img>` is removed so the card's text/icon fallback can remain visible rather than leaving an unusable image layer.

## Failures / unresolved

- Live interactive mobile/iPad/browser rendering cannot be directly exercised in the current tool environment.
- User retest is still required to determine whether the remaining black cards were stale browser/CDN cache entries or whether specific JPG files themselves contain bad/black image content.
- If black cards remain after this deployment, identify the exact affected card names/numbers and replace or regenerate only those JPG files.

## Active objective

Resolve the newly reported intermittent black-card display defect while preserving the simplified direct-file architecture.
