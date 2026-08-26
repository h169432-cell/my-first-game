# Handoff

Last updated: 2026-08-26

## Current position

The direct-file card artwork migration is functionally complete in the repository.

Production `index.html` loads only:
- `game.js?v=20260826-2200`
- `assets/card-ui.js?v=20260826-2200`
- `window.CardUI.installDirectCardUI()`

`assets/` now contains only:
- `assets/card-ui.js`
- `assets/cards/`

All 14 required JPGs remain in `assets/cards/`, including the verified `suspect-4.jpg` for 織田信長.

Legacy split-image/runtime/UI files were removed in commit `c4e31433f55d2753e6a9e6421466e30c24e17ac6`.
Remaining obsolete sprite/data/sheet assets, legacy rules override, migration directories, diagnostic staging, and temporary image-rebuild workflows were removed in commit `43fad683cc842859d5e07fbe415843deea3e10b9`.

GitHub Pages run `32958992876` was triggered for `43fad683cc842859d5e07fbe415843deea3e10b9`; the last observed state during this run was `in_progress`.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has direct-only `index.html`, `assets/card-ui.js`, and all 14 JPGs.
3. Check the newest GitHub Pages run for `main`; require `completed / success` before declaring the cleanup complete.
4. If Pages succeeds, inspect README/DESIGN only if present and only update them if they still describe the removed legacy image architecture.
5. Keep the fixed 16-card deck composition and two alibi variants unchanged.
6. Update `PROGRESS.md` and `HANDOFF.md` with final verification.
7. Mark the card-system cleanup complete once repository state and deployment are both verified.

## Next safe batch

Pages deployment verification → stale documentation check if applicable → final completion-state update.

## Unresolved items

- Post-cleanup Pages deployment had not yet completed at the last check.
- Live interactive click testing of revealed board/private inspection/accusation cannot be directly exercised in the current tool environment.
- Direct live-site HTTP fetch from the execution container failed because of DNS resolution; GitHub API validation remained available.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
Direct-only runtime switch: `60d630550a85313c1a4e8839118aaed89e821de9`
First legacy cleanup: `c4e31433f55d2753e6a9e6421466e30c24e17ac6`
Full obsolete-asset cleanup: `43fad683cc842859d5e07fbe415843deea3e10b9`
Post-cleanup Pages run: `32958992876`
