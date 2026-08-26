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
- Legacy dependency audit completed for `assets/suspect-ui.js`, `assets/evidence-ui.js`, and `assets/card-image-runtime.js`; no required non-artwork game behavior was found in them.
- Production `index.html` was simplified in commit `60d630550a85313c1a4e8839118aaed89e821de9` to load only `game.js` and `assets/card-ui.js`; all split-grid, reconstruction runtime, `suspect-ui.js`, and `evidence-ui.js` script tags were removed.
- GitHub Pages run `32956113351` for the direct-only runtime completed successfully.

## Current state

`assets/cards/` is complete at 14/14 required JPGs. Production now uses the direct-file artwork runtime only, and that runtime has been successfully built and deployed by GitHub Pages.

Legacy files still exist in the repository but are no longer referenced by `index.html`. They have intentionally not yet been deleted; the next cleanup batch must first perform a repository-wide reference check.

## Latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Confirmed all 14 production JPGs remain present, including `suspect-4.jpg`.
- Confirmed `card-ui.js` maps all 14 image paths and decorates revealed board cards, private inspection cards, and accusation suspect buttons.
- Compared legacy runtime/UI scripts against `game.js` and `card-ui.js`; found no required non-artwork game behavior in the legacy scripts.
- Removed all legacy split-image/runtime/UI script references from `index.html` while leaving the legacy files themselves intact.
- Bumped the production JS cache query to `v=20260826-2200`.
- Confirmed Pages run `32956113351` completed with conclusion `success`.

## Validation performed

- `assets/cards/` directory contains all 14 required JPGs.
- `game.js` independently creates pawn markers and owns board/modal/accusation game behavior.
- `card-ui.js` leaves the existing game DOM and pawn markers intact and prepends direct `<img>` artwork with image-error removal fallback.
- `suspect-ui.js` and `evidence-ui.js` are artwork decorators rather than rule providers.
- `card-image-runtime.js` is reconstruction-only.
- Direct-only runtime commit: `60d630550a85313c1a4e8839118aaed89e821de9`.
- Pages run `32956113351`: completed / success.

## Failures / unresolved

- Live interaction rendering cannot be directly clicked/exercised in the current tool environment.
- Legacy asset files and temporary migration staging/workflow files remain.
- Before deletion, repository-wide references to each legacy asset must be checked.
- Do not repeat large Base64 staging transfers; the previous large-chunk path truncated data.

## Active objective

Verify the live served page and direct card image URLs, then remove obsolete legacy image-system files and temporary migration artifacts in a controlled cleanup batch.

## Remaining items

- Verify live served `index.html` contains only the simplified runtime references and required card JPG URLs resolve.
- Perform repository-wide reference checks for every planned legacy deletion.
- Remove obsolete split-grid/reconstruction/legacy artwork UI files that are proven unreferenced.
- Remove `.work/staging/` and `.github/workflows/reconstruct-staged-card.yml` after confirming reconstruction is no longer needed.
- Update README/DESIGN only if their architecture description is stale.
