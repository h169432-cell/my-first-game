# Progress

Last updated: 2026-08-26 02:27 JST
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created a backup branch from the pre-persistence state.
- Added `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, and `.work/HANDOFF.md`.
- Scheduled continuation runs alternately at minute 00 and minute 30.
- Audited `game.js`: required 15-card base deck + exactly one special card = 16 cards; vertical and horizontal alibi variants are already correct.
- Prepared `assets/card-ui.js` with centralized 14-path image mapping, direct `<img>` rendering, preload, fallback, and board/private/accusation decorators.
- Confirmed the available candidate `suspect-4.jpg` is Oda Nobutada (`織田信忠`), not required Oda Nobunaga (`織田信長`), and intentionally rejected it.
- Confirmed the available `alibi-horizontal.jpg` is the required left/right-arrow artwork.
- Committed six verified suspect JPEGs: `suspect-1.jpg`, `suspect-2.jpg`, `suspect-3.jpg`, `suspect-5.jpg`, `suspect-6.jpg`, `suspect-7.jpg`.
- Committed seven verified evidence JPEGs: `motive.jpg`, `clue.jpg`, `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.

## Current repository state

The final simplified card architecture is NOT yet active. `assets/card-ui.js` remains intentionally disconnected from `index.html` until all 14 required JPGs are present.

`assets/cards/` contains 13 verified production JPGs plus the old `README.txt`. The only missing production image is `assets/cards/suspect-4.jpg` for Oda Nobunaga.

Current runtime remains the legacy path: split suspect/evidence parts -> `card-image-runtime.js` -> `game.js` -> `suspect-ui.js` / `evidence-ui.js`.

Production `index.html`, `game.js`, and the legacy runtime remain unchanged.

## Changes in the latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, and `.work/HANDOFF.md` in the required order.
- Rechecked `main` and confirmed the same 13 production JPGs remain under `assets/cards/`; `suspect-4.jpg` is still absent.
- Re-searched available uploaded files for `織田信長`, `Oda Nobunaga`, and `suspect-4`.
- The only relevant board screenshot found still depicts the prior fictional/female `容疑者4`, not the required Oda Nobunaga artwork, so it was rejected.
- No verified Oda Nobunaga source was found.
- Did not activate `assets/card-ui.js`, edit `index.html`, modify production game logic, or delete legacy image-system files because Phase 1 remains blocked by source identity.
- No architecture or execution-order change was made; `WORK_PLAN.md` did not require modification.

## Earlier migration work retained

- Introduced temporary migration workflow `.github/workflows/reconstruct-staged-card.yml` to reconstruct Base64 staging chunks into binary JPEGs and reject any result whose byte size, SHA-256, JPEG SOI, or JPEG EOI does not match the source.
- Persisted source data under `.work/staging/` using small Base64 chunks.
- Root-caused and corrected migration-only failures rather than bypassing validation.
- Reconstructed and verified all three previously missing evidence images.
- Final successful workflow run: `32871193668`.
- Final horizontal-alibi commit from the workflow: `b9b54bd` (`Add verified staged card images`).

## Validation performed

Verified source/output facts:
- `alibi-vertical.jpg`: 7,154 bytes; SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: 20,408 bytes; SHA-256 `fadb23b8d690f307a970b628424953d6904d4610c87fae52b9577cf3055a9749`; confirmed left/right-arrow artwork.
- `twist.jpg`: 7,145 bytes; SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.
- GitHub Actions verified all three against exact byte size and SHA-256 and checked JPEG start/end markers before committing.
- Current `assets/cards/` listing confirms the 13 production JPGs remain present and `suspect-4.jpg` is still missing.
- Static source validation confirms `card-ui.js` and `game.js` remain aligned with the target 14-image mapping and fixed 16-card deck specification.
- Latest source search found no verified Oda Nobunaga artwork suitable for `suspect-4.jpg`.

## Recent failures worth preserving

1. Legacy Base64 reconstruction: `Incorrect padding`.
2. Normalized legacy retry: Pillow could not decode a valid WebP.
3. Temporary archive retrieval/decode was not gzip.
4. Directly staged temporary archive blob was also not gzip.
5. Large single-message Base64 transport for remaining JPEGs produced size-mismatched blobs; this path must not be reused.
6. A 6,000-character staging chunk was silently shortened.
7. Two horizontal-alibi chunks were mutated despite near/identical expected length; exact Git-blob/hash comparison isolated them, and smaller replacement halves resolved the issue.

## Current active objective

Phase 1 is complete for all evidence artwork. The repository has 13 of the required 14 final JPGs.

Remaining Phase 1 blocker:
1. Obtain the exact intended Oda Nobunaga (`織田信長`) artwork for `assets/cards/suspect-4.jpg` from a verified source.
2. Verify the file before accepting it.

Do not activate `card-ui.js`, change `index.html`, or remove legacy image files until all 14 final JPGs are verified on `main`.

After `suspect-4.jpg` is verified, proceed to Phase 2: connect the direct-image UI, validate board/private/accusation rendering, then remove the legacy image system only after the replacement is proven working.

## Blockers / unresolved items

- Missing correct `assets/cards/suspect-4.jpg` for Oda Nobunaga. Repository and currently searchable uploaded-file sources contain no verified source.
- Direct-image UI activation and legacy cleanup remain blocked until the full 14-file set is complete.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` are temporary migration artifacts; retain them until the image-transfer phase is fully closed, then remove them during cleanup.
