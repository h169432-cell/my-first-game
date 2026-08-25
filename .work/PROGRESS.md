# Progress

Last updated: 2026-08-25 22:36 JST
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created a backup branch from the pre-persistence state.
- Added `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, and `.work/HANDOFF.md`.
- Enabled recurring scheduled execution once per hour.
- Audited `game.js`: required 15-card base deck + exactly one special card = 16 cards; vertical and horizontal alibi variants are already correct.
- Confirmed the legacy image stack is still active and final `assets/cards/*.jpg` binaries are still absent.
- Audited `assets/suspect-ui.js`, `assets/evidence-ui.js`, and `assets/clueverge-rules-v2.js`; the old UI depends on reconstructed sheets, Canvas cropping, sprite positioning, and embedded Base64 artwork.
- Added `assets/card-ui.js` with centralized 14-path image mapping, suspect names, alt text, direct `<img>` creation, preloading, and image-error fallback.
- Third continuation run read all four persistent state files in the required order and confirmed `main` had no external changes after the previous handoff.
- Rechecked `assets/cards/`; it still contains only `README.txt`.
- Expanded `assets/card-ui.js` with direct-JPG decorators for all three required render surfaces: revealed board cards, private inspection, and accusation choices.
- Added non-invasive `MutationObserver`-based installation support so the future direct-image UI can react to normal game DOM renders without replacing or monkeypatching `game.js` functions.
- Added direct-image CSS classes inside `card-ui.js`; image load failure removes only the image and leaves the existing text/icon fallback intact.

## Current repository state

The final simplified card architecture is NOT yet active. `assets/card-ui.js` now contains the complete direct-image rendering layer, but `index.html` deliberately does not load it yet because the 14 final JPG binaries are missing.

Current runtime remains the legacy path: split suspect/evidence parts -> `card-image-runtime.js` -> `game.js` -> `suspect-ui.js` / `evidence-ui.js`.

## Recent failures worth preserving

Two old reconstruction attempts failed:

1. Base64 reconstruction: `Incorrect padding`.
2. Normalized retry: Pillow could not decode a valid WebP.

Do not retry the old reconstruction pipeline.

## Current active objective

Phase 1 is still blocked on the 14 final JPG assets. Phase 2 source implementation is now effectively prepared but not activated.

## Changes in this run

- Updated `assets/card-ui.js` with board/private/accusation decorators, styling, observers, and `installDirectCardUI()`.
- Did not modify `index.html`, `game.js`, or delete legacy files.

## Validation performed

- Read the four persistent state files in order.
- Checked current `main` commit history and confirmed no external intervening change.
- Re-listed `assets/cards/` and confirmed only `README.txt` exists.
- Re-inspected `game.js` core rule logic and confirmed culprit selection remains: eligible candidates require motive + active weapon + no alibi; no candidate means escape; twist selects the smallest candidate number, otherwise the largest.
- Confirmed `card-ui.js` remains disconnected from production runtime, so this run cannot break the current live game path.

## Blockers / unresolved items

- The 14 final JPG files must be committed into `assets/cards/` before direct-image UI can be activated.
- Suspect 4 and horizontal alibi visual identity cannot be verified until those files exist.
