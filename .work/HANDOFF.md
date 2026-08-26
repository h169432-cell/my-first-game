# Handoff

Last updated: 2026-08-26

## Current position

The direct-file card artwork migration and legacy image-system cleanup remain complete.

A live defect was reported: several cards display completely black while others display normally.

Production now loads:
- `game.js?v=20260826-2212`
- `assets/card-ui.js?v=20260826-2212`
- `window.CardUI.installDirectCardUI()`

`assets/card-ui.js` now applies `CARD_ASSET_VERSION = '20260826-2212'` to every one of the 14 JPG URLs, for example:
- `assets/cards/motive.jpg?v=20260826-2212`
- `assets/cards/suspect-4.jpg?v=20260826-2212`
- `assets/cards/alibi-horizontal.jpg?v=20260826-2212`

This explicitly bypasses previously cached card-image responses in the browser/CDN while preserving the simple direct-file architecture.

All 14 expected JPG files remain present under `assets/cards/`.

Cache-bust implementation commits:
- `d70a0a2ce3cb7867ca4fa0aa35843bc9ada575d2` — version every card image URL in `assets/card-ui.js`.
- `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f` — refresh `index.html` runtime cache version.

GitHub Pages run `32973957602` for commit `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f` completed successfully.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Treat the user's black-card report as the active defect until the user confirms the new deployment is clean.
3. If the user reports that black cards are gone, record the defect as resolved and return to waiting for the next explicit objective.
4. If any black cards remain, obtain or infer the exact affected card names/numbers and inspect/replace only those corresponding JPGs in `assets/cards/`.
5. Do not reintroduce Base64 split images, Blob reconstruction, sprite sheets, or legacy image runtime files.
6. Continue updating `PROGRESS.md` and `HANDOFF.md` after each run.

## Next safe batch

After user retest:

- If resolved: record successful cache-fix verification.
- If unresolved: identify exact black card(s), verify those JPGs independently, regenerate/replace only affected image files, bump `CARD_ASSET_VERSION` again, deploy, and re-check.

## Unresolved items

- Live interactive board/private/accusation rendering cannot be directly exercised in the current tool environment.
- User-side retest is required after Pages run `32973957602`.
- It is not yet proven whether the original black cards were entirely cache-related or whether one or more JPGs contain bad visual content.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
Direct-only runtime switch: `60d630550a85313c1a4e8839118aaed89e821de9`
First legacy cleanup: `c4e31433f55d2753e6a9e6421466e30c24e17ac6`
Full obsolete-asset cleanup: `43fad683cc842859d5e07fbe415843deea3e10b9`
Card-image cache-bust commit: `d70a0a2ce3cb7867ca4fa0aa35843bc9ada575d2`
Runtime cache refresh commit: `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f`
Successful cache-fix Pages run: `32973957602`
