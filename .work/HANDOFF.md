# Handoff

Last updated: 2026-08-26

## Current position

`assets/cards/` has all 14 verified production JPGs.

Production `index.html` now loads only:
- `game.js?v=20260826-2200`
- `assets/card-ui.js?v=20260826-2200`
- `window.CardUI.installDirectCardUI()`

The legacy split suspect/evidence scripts, `assets/card-image-runtime.js`, `assets/suspect-ui.js`, and `assets/evidence-ui.js` are no longer referenced by production HTML. Runtime-switch commit: `60d630550a85313c1a4e8839118aaed89e821de9`.

Dependency audit result:
- `suspect-ui.js`: legacy suspect sheet-crop artwork decorator only.
- `evidence-ui.js`: legacy evidence sheet / horizontal-alibi artwork decorator only.
- `card-image-runtime.js`: split Base64 to WebP data-URL reconstruction only.
- Game rules, pawn markers, modal behavior, accusation submission, and turn flow remain in `game.js`.
- Direct board/private/accusation artwork mapping is in `assets/card-ui.js`.

GitHub Pages run `32956113351` for the runtime-switch commit completed successfully.

The legacy files themselves remain in the repository for rollback until the next repository-wide reference check confirms they are safe to delete.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has the direct-only `index.html` and all 14 JPGs.
3. Fetch the live GitHub Pages `index.html` and confirm no legacy script tags are served; confirm direct card image URLs resolve.
4. Perform repository-wide reference searches for every legacy file/directory listed for deletion in `WORK_PLAN.md`.
5. Delete only files proven unreferenced, beginning with:
   - `assets/card-image-runtime.js`
   - `assets/new-suspect-grid-part1.js` … `part4.js`
   - `assets/new-evidence-grid-part1.js` … `part4.js`
   - `assets/suspect-ui.js`
   - `assets/evidence-ui.js`
6. Continue with obsolete suspect/evidence sheet/sprite/data/map assets and directories only after checking references.
7. Revalidate `index.html`, `game.js`, and `card-ui.js`; confirm the subsequent Pages deployment succeeds.
8. Remove temporary `.work/staging/` files and `.github/workflows/reconstruct-staged-card.yml` only after no reconstruction path is needed.
9. Update `.work/PROGRESS.md` and `.work/HANDOFF.md` before ending.

## Next safe batch

Live served-source validation → repository-wide reference check → delete only proven-unreferenced legacy artwork/reconstruction files → deploy and verify again.

## Unresolved items

- Live interactive click testing of revealed board/private inspection/accusation cannot be directly performed in the current tool environment.
- Legacy files are unreferenced by `index.html` but still physically present.
- Temporary migration staging/workflow artifacts remain.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
Initial direct UI activation: `fd82a784e26f869c75037d7281f16d4201a802fc`
Direct-only runtime switch: `60d630550a85313c1a4e8839118aaed89e821de9`
Successful Pages run for runtime switch: `32956113351`
Progress-state commit after deployment verification: `aad7df175539ffe1525b67861e022a10a1511d5c`
