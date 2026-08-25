# Progress

Last updated: 2026-08-25 22:27 JST
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created a backup branch from the pre-persistence state.
- Added `.work/EXECUTION_PROTOCOL.md` to define mandatory scheduled-run behavior.
- Added `.work/WORK_PLAN.md` with target architecture, phases, and completion criteria.
- Added `.work/PROGRESS.md` and `.work/HANDOFF.md` as the persistent Git work state.
- Enabled recurring scheduled execution once per hour.
- Confirmed the current repository still contains the legacy image stack and temporary cleanup workflows.
- First continuation run read all four persistent state files in the required order.
- Audited `game.js` deck construction: it already builds the required 15-card base deck plus exactly one of the three special cards, for 16 cards total; the two alibi variants are vertical up/down and horizontal left/right.
- Added `assets/card-ui.js` with the centralized 14-path `CARD_IMAGES` mapping and direct-file image helpers.
- Second continuation run again read all four persistent state files in the required order.
- Confirmed `assets/cards/` still contains only `README.txt`; none of the 14 required JPG assets is present yet.
- Audited `assets/suspect-ui.js`: it depends on a reconstructed suspect sheet and runtime canvas cropping.
- Audited `assets/evidence-ui.js`: it depends on a reconstructed evidence sheet and also embeds the horizontal alibi as Base64 data.
- Audited `assets/clueverge-rules-v2.js`: its core deck/range logic is already represented in `game.js`; the remaining file also contains legacy artwork/sprite rendering concerns and is not loaded by current `index.html`.
- Expanded `assets/card-ui.js` with centralized suspect names, alt text generation, direct `<img>` creation, prepend helper, preload support, and image-error removal so existing text fallback can remain usable.

## Current repository state

The final simplified card architecture is NOT yet active. The legacy runtime remains intact intentionally because the final JPG binaries are not repository-resident yet.

`assets/card-ui.js` is now prepared for direct-file rendering but is deliberately not loaded by `index.html`. Current `index.html` still loads the split suspect/evidence parts, `card-image-runtime.js`, `game.js`, `suspect-ui.js`, and `evidence-ui.js`.

## Recent failures worth preserving

Two automated image reconstruction attempts failed before the persistent-workflow setup:

1. Base64 reconstruction failed with `Incorrect padding`.
2. A retry with padding normalization produced data Pillow could not decode as a valid WebP (`could not create decoder object`).

Conclusion: do NOT spend additional runs trying to repair the old split-WebP reconstruction pipeline. Move to direct individual JPG assets instead.

## Current active objective

Phase 1 remains blocked on the 14 final individual JPG card assets. Safe Phase 2 source preparation is substantially complete: mapping, suspect metadata, direct image creation, preload, and failure fallback helpers now live in `assets/card-ui.js`.

## Changes in this run

- Updated `assets/card-ui.js` with reusable direct-image rendering helpers and fallback behavior.
- Audited the old suspect/evidence UI dependencies and old rule override module.
- Did not alter `index.html` or remove any legacy files because the replacement image binaries are still unavailable.

## Validation performed

- Read execution protocol, plan, progress, and handoff in order.
- Listed `assets/cards/` and confirmed only `README.txt` exists.
- Inspected `index.html` script loading order.
- Inspected `suspect-ui.js`, `evidence-ui.js`, and `clueverge-rules-v2.js` to identify migration dependencies.
- Confirmed current rule logic needed for the fixed deck already exists in `game.js` from the prior audit.

## Blockers / unresolved items

- The 14 final JPG image files must be committed into `assets/cards/` before direct-image rendering can be safely activated and legacy image systems removed.
- Visual verification of suspect 4 and the horizontal alibi cannot be performed until those final JPG binaries exist.
