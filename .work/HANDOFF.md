# Handoff

Last updated: 2026-08-26

## Current position

`assets/cards/` has all 14 verified production JPGs.

Production `index.html` now loads only:
- `game.js?v=20260826-2200`
- `assets/card-ui.js?v=20260826-2200`
- `window.CardUI.installDirectCardUI()`

The legacy split suspect/evidence scripts, `assets/card-image-runtime.js`, `assets/suspect-ui.js`, and `assets/evidence-ui.js` are no longer referenced by production HTML. Runtime-switch commit: `60d630550a85313c1a4e8839118aaed89e821de9`.

The legacy files themselves remain in the repository for rollback until simplified-runtime deployment validation is complete.

Dependency audit result:
- `suspect-ui.js`: legacy suspect sheet-crop artwork decorator only.
- `evidence-ui.js`: legacy evidence sheet / horizontal-alibi artwork decorator only.
- `card-image-runtime.js`: split Base64 to WebP data-URL reconstruction only.
- Game rules, pawn markers, modal behavior, accusation submission, and turn flow remain in `game.js`.
- Direct board/private/accusation artwork mapping is in `assets/card-ui.js`.

Pages run for the runtime-switch commit: `32956113351`; it was still in progress at the end of the runtime-switch validation window.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has the direct-only `index.html` and all 14 JPGs.
3. Check Pages run `32956113351` and/or the latest Pages deployment containing commit `60d630550a85313c1a4e8839118aaed89e821de9` for successful completion.
4. Fetch the live GitHub Pages `index.html` and confirm no legacy script tags are served; confirm direct card image URLs resolve.
5. If deployment is healthy, delete the now-unreferenced legacy image stack in a cohesive cleanup batch:
   - `assets/card-image-runtime.js`
   - `assets/new-suspect-grid-part1.js` … `part4.js`
   - `assets/new-evidence-grid-part1.js` … `part4.js`
   - `assets/suspect-ui.js`
   - `assets/evidence-ui.js`
   - old suspect/evidence sheet/sprite/data/map assets and directories listed in `WORK_PLAN.md`, but only after checking they are not referenced anywhere else.
6. Revalidate `index.html`, `game.js`, and `card-ui.js` after deletions; confirm Pages deployment again.
7. Remove temporary `.work/staging/` files and `.github/workflows/reconstruct-staged-card.yml` only after no reconstruction path is needed.
8. Update `.work/PROGRESS.md` and `.work/HANDOFF.md` before ending.

## Next safe batch

Pages/deployed-source validation → repository-wide reference check for every legacy asset → delete only unreferenced legacy artwork/reconstruction files → deploy and verify again.

## Unresolved items

- Live interactive click testing of revealed board/private inspection/accusation cannot be directly performed in the current tool environment.
- Pages run `32956113351` was not yet completed at the last check.
- Legacy files are unreferenced by `index.html` but still physically present pending deployment confirmation.
- Temporary migration staging/workflow artifacts remain.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
Initial direct UI activation: `fd82a784e26f869c75037d7281f16d4201a802fc`
Direct-only runtime switch: `60d630550a85313c1a4e8839118aaed89e821de9`
Pages run for runtime switch: `32956113351`
Progress-state commit after switch: `638d0385b0fcf9ae50b1fa1ac3c3e522225c37e6`
