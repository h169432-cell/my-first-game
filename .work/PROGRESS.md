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
- GitHub Pages run `32958992876` for cleanup commit `43fad683cc842859d5e07fbe415843deea3e10b9` completed successfully.
- `DESIGN.md` technical architecture was updated to match the current direct-file implementation.
- `.work/WORK_PLAN.md` was updated to reflect completed migration phases.

## Current state

The card-system cleanup is complete at repository/deployment level.

Final runtime architecture:

- `game.js` — game rules and interaction logic.
- `assets/card-ui.js` — artwork URL mapping, preload, fallback, and board/private/accusation rendering.
- `assets/cards/` — final 14 individual JPG artwork files.
- `index.html` — loads only the stable direct-file runtime; no legacy image reconstruction scripts.

No legacy card-image runtime, split-image data, sprite system, migration directory, legacy rule override, or temporary image rebuild workflow remains in the current tree.

## Latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Confirmed current `main` head before this update was `0850bceef582636bb6677749b62dc100bf1f147c`.
- Confirmed latest GitHub Pages run `32966097599` for that head completed with conclusion `success`.
- `HANDOFF.md` still contains no remaining cleanup batch and no new gameplay/UI objective is recorded in Git state.
- No production source files were changed in this run.
- Persistent execution-state files are being refreshed so the next run can resume from Git alone.

## Validation performed

- Current `main` remains consistent with the completed card-system cleanup state.
- Latest Pages deployment for `0850bceef582636bb6677749b62dc100bf1f147c` is successful.
- No new repository/deployment blocker was identified.

## Failures / unresolved

- Live interactive click testing of revealed board cards, private inspection, accusation UI, and mobile/iPad Safari cannot be directly exercised in the current tool environment.
- No repository or deployment blocker remains for the card-system cleanup.

## Active objective

Card-system cleanup: COMPLETE.

Future work should start only from a new explicit gameplay/UI objective or a newly observed defect, while preserving the direct-file image architecture unless requirements change.
