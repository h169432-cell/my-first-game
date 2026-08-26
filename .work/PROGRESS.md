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
- All 14 required production JPGs now exist in `assets/cards/`.
- `alibi-horizontal.jpg` is the required left/right artwork.
- `assets/cards/suspect-4.jpg` was created from the user-confirmed reference card for 容疑者4 / 織田信長 / 肖像.
- `suspect-4.jpg` was reconstructed and verified by GitHub Actions at 28,572 bytes, SHA-256 `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`, with valid JPEG SOI/EOI markers. Commit: `60aa248efe05cea2184bf2c970dcb4080002486e`.
- `index.html` now loads `assets/card-ui.js?v=20260826-1844` and calls `window.CardUI.installDirectCardUI()`. Commit: `fd82a784e26f869c75037d7281f16d4201a802fc`.
- GitHub Pages build and deployment for commit `fd82a784e26f869c75037d7281f16d4201a802fc` completed successfully (run `32954561423`).

## Current state

`assets/cards/` is complete at 14/14 required JPGs. Direct-file artwork UI is enabled in production.

Legacy split-image/runtime scripts remain loaded temporarily as a fallback until live interaction validation confirms board reveal, private inspection, and accusation rendering with the direct-file UI. No destructive cleanup has been performed yet.

## Latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Accepted the new user-provided suspect grid as authoritative new evidence for suspect 4 identity.
- Built the exact suspect-4 crop and transferred it through verified Base64 staging.
- Diagnosed repeated truncation of a larger first Base64 staging chunk; split that section into smaller chunks and verified the final reconstructed JPEG by exact size, SHA-256, and JPEG markers before commit.
- Confirmed `assets/cards/suspect-4.jpg` exists on `main` at 28,572 bytes (Git blob `bf10332312cbd708954de6f67ff4690e033c5be5`).
- Enabled `assets/card-ui.js` in `index.html` without removing the legacy image stack.
- Confirmed GitHub Pages build and deploy succeeded.
- Inspected `assets/suspect-ui.js` and `assets/evidence-ui.js`; they are legacy artwork decorators tied to reconstructed sheets, so they must not be removed until direct UI behavior is validated and any non-artwork dependency is ruled out.

## Validation performed

- 14th image exact size: 28,572 bytes.
- 14th image SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`.
- JPEG start/end markers checked by workflow.
- `assets/cards/` directory confirms `suspect-4.jpg` plus the other 13 production JPGs.
- `card-ui.js` maps all 14 image files and includes board/private/accusation decorators plus preload/error fallback.
- GitHub Pages build, status report, and deploy jobs all completed successfully for the direct-UI commit.

## Failures / do not repeat

- Large Base64 staging chunks can lose characters through this connector path. The first suspect-4 chunk repeatedly arrived 4 characters short. Small verified chunks solved it; do not use the failed large-chunk transfer method again.
- Historical corrupted WebP/split Base64 repair and prior source-search routes remain exhausted; they are no longer relevant because the user supplied and confirmed the intended suspect-4 reference.

## Active objective

Validate the direct-file UI on the live game for board reveal, private inspection, and accusation. After that validation, remove only the legacy artwork reconstruction paths proven unnecessary, then clean temporary staging/workflow artifacts.

## Remaining items

- Live interaction validation of board reveal artwork.
- Live interaction validation of private inspection artwork.
- Live interaction validation of accusation artwork.
- Confirm legacy `suspect-ui.js`, `evidence-ui.js`, `card-image-runtime.js`, and split-grid scripts contain no still-required behavior before removal.
- Remove obsolete image-system files only after replacement validation.
- Remove `.work/staging/` and `.github/workflows/reconstruct-staged-card.yml` after migration is stable.
