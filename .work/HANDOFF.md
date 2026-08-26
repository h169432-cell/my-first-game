# Handoff

Last updated: 2026-08-26

## Current position

The direct-file card artwork migration and legacy image-system cleanup are complete.

Production `index.html` loads only:
- `game.js?v=20260826-2200`
- `assets/card-ui.js?v=20260826-2200`
- `window.CardUI.installDirectCardUI()`

`assets/` contains only:
- `assets/card-ui.js`
- `assets/cards/`

All 14 required JPGs remain in `assets/cards/`, including the verified `suspect-4.jpg` for 織田信長.

Legacy split-image/runtime/UI files were removed in commit `c4e31433f55d2753e6a9e6421466e30c24e17ac6`.
Remaining obsolete sprite/data/sheet assets, legacy rules override, migration directories, diagnostic staging, and temporary image-rebuild workflows were removed in commit `43fad683cc842859d5e07fbe415843deea3e10b9`.

GitHub Pages run `32958992876` for commit `43fad683cc842859d5e07fbe415843deea3e10b9` completed successfully.
Final handoff commit `1c3667c75ff48fa8dca71004be6e0bc0ddbce6f2` also deployed successfully in Pages run `32961265164`.
`DESIGN.md` describes the current direct-file architecture.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Treat the card-system cleanup as complete unless a new defect is reported.
3. For future work, inspect the newest explicit gameplay/UI objective and current `main` before editing.
4. Preserve the fixed 16-card deck composition, two alibi variants, and direct-file artwork architecture unless requirements explicitly change.
5. Continue updating `PROGRESS.md` and `HANDOFF.md` after each future run.

## Next safe batch

No remaining card-system cleanup batch.

Future execution should begin from a new explicit objective or a newly observed defect.

## Unresolved items

- Live interactive click testing of board reveal/private inspection/accusation and mobile/iPad Safari was not directly executable in the current tool environment.
- There is no known repository or deployment blocker.

## Latest verification

- Current completed state was re-read from Git in the mandatory order.
- `main` had no new production-code change requiring follow-up.
- Latest Pages deployment for the final handoff commit was `completed / success`.
- No production files were changed in this run; only persistent execution-state records were refreshed.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
Direct-only runtime switch: `60d630550a85313c1a4e8839118aaed89e821de9`
First legacy cleanup: `c4e31433f55d2753e6a9e6421466e30c24e17ac6`
Full obsolete-asset cleanup: `43fad683cc842859d5e07fbe415843deea3e10b9`
Successful post-cleanup Pages run: `32958992876`
Final technical-design update: `adf337362a083f9fdaacb054da2674787af8fe5d`
Final cleanup handoff commit: `1c3667c75ff48fa8dca71004be6e0bc0ddbce6f2`
Final handoff Pages run: `32961265164`
