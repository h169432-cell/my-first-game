# Handoff

Last updated: 2026-08-26

## Current position

`assets/cards/` now has all 14 verified production JPGs.

`assets/cards/suspect-4.jpg` is the user-confirmed 容疑者4 / 織田信長 / 肖像 card crop. Verification:
- size: 28,572 bytes
- SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
- Git blob: `bf10332312cbd708954de6f67ff4690e033c5be5`
- image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`

`assets/card-ui.js` is now loaded by `index.html` and installed after the existing game/legacy UI scripts. Direct-UI commit: `fd82a784e26f869c75037d7281f16d4201a802fc`.

GitHub Pages build/deploy for that commit succeeded in run `32954561423`.

Legacy image reconstruction scripts remain loaded intentionally until direct artwork rendering is validated through the live interaction paths.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still contains all 14 JPGs and `index.html` still loads `assets/card-ui.js` and calls `window.CardUI.installDirectCardUI()`.
3. Validate the live game interaction paths in this order: revealed board card artwork, private inspection artwork, accusation suspect artwork.
4. Inspect `assets/suspect-ui.js`, `assets/evidence-ui.js`, and `assets/card-image-runtime.js` together with `game.js`/`index.html` before deleting anything. Determine whether they provide any still-required behavior beyond legacy artwork rendering.
5. Once direct UI is proven sufficient, remove the legacy split suspect/evidence grid scripts and image runtime references from `index.html` in one cohesive change, then validate again.
6. Remove obsolete legacy asset files only after the simplified runtime is confirmed working.
7. Remove temporary `.work/staging/` Base64 files and `.github/workflows/reconstruct-staged-card.yml` after no reconstruction path is needed.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## New findings from latest run

- The previous suspect-4 blocker is resolved by new user-confirmed source evidence.
- All 14 final JPG files are present.
- Direct-file artwork UI has been activated with minimum changes.
- Pages deployment succeeded.
- A large Base64 staging chunk was repeatedly truncated by 4 characters; smaller verified chunks fixed the transfer. Do not repeat the large-chunk method.
- `suspect-ui.js` is clearly a legacy sheet-crop decorator that wraps `renderBoard` and decorates private/accusation UI.
- `evidence-ui.js` is also tied to the reconstructed evidence sheet and contains legacy artwork decoration. Do not remove either until required behavior has been compared with `card-ui.js`.

## Next safe batch

Live direct-UI validation plus dependency audit of the three legacy runtime/UI scripts. If validation passes and no non-artwork dependency remains, simplify `index.html` by removing the legacy image reconstruction stack, then revalidate before deleting files.

## Unresolved items

- Live interaction rendering has not yet been directly exercised in this tool environment.
- Need to prove that removing `suspect-ui.js`, `evidence-ui.js`, `card-image-runtime.js`, and split-grid loaders does not remove any required non-artwork behavior.
- Temporary migration staging/workflow artifacts remain for later cleanup.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Verified suspect-4 image commit: `60aa248efe05cea2184bf2c970dcb4080002486e`
Direct UI activation commit: `fd82a784e26f869c75037d7281f16d4201a802fc`
Pages deployment run: `32954561423`
Suspect-4 SHA-256: `ca91f54930b75071432c21844b3fb7353d2527322d89279559abf01a116de808`
