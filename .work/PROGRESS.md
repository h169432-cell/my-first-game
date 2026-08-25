# Progress

Last updated: 2026-08-26 00:34 JST
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
- Committed four verified evidence JPEGs: `motive.jpg`, `clue.jpg`, `weapon.jpg`, `false-testimony.jpg`.

## Current repository state

The final simplified card architecture is NOT yet active. `assets/card-ui.js` remains intentionally disconnected from `index.html` until all 14 required JPGs are present.

`assets/cards/` contains ten verified JPGs: six suspects plus `motive.jpg`, `clue.jpg`, `weapon.jpg`, and `false-testimony.jpg`, along with the old `README.txt`.

Current runtime remains the legacy path: split suspect/evidence parts -> `card-image-runtime.js` -> `game.js` -> `suspect-ui.js` / `evidence-ui.js`.

## Changes in this run

- Read the four persistent state files in the required order.
- Confirmed `main` and `assets/cards/` matched the recorded handoff state before editing.
- Revalidated local source JPEGs for `alibi-vertical.jpg`, `alibi-horizontal.jpg`, and `twist.jpg`.
- Attempted to add all three through direct Git blobs in commit `93bb784fc333216b37bbc8ff49c3bd887a577ea8`.
- Post-commit verification detected that GitHub blob sizes did not match the local source sizes, proving the long Base64 transport had been truncated/mixed before blob creation.
- Immediately removed all three invalid files in recovery commit `7f54aad7e63795cccd1b725a31a0bc9efbe7823b`; production runtime was never switched to these files.
- Began testing a safer small-chunk staging approach; no staging file has been attached to the repository tree yet.

## Validation performed

Local verified source facts:
- `alibi-vertical.jpg`: JPEG, 7,154 bytes, SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: JPEG, 20,408 bytes; confirmed left/right-arrow artwork.
- `twist.jpg`: JPEG, 7,145 bytes, SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.

Invalid GitHub upload sizes that triggered rollback:
- `alibi-vertical.jpg`: 7,151 bytes (invalid; expected 7,154).
- `alibi-horizontal.jpg`: 7,308 bytes (invalid; expected 20,408).
- `twist.jpg`: 10,247 bytes (invalid; expected 7,145).

After rollback, `assets/cards/` is again at the safe ten-file verified state.

## Recent failures worth preserving

1. Legacy Base64 reconstruction: `Incorrect padding`.
2. Normalized legacy retry: Pillow could not decode a valid WebP.
3. Temporary archive retrieval/decode was not gzip.
4. Directly staged temporary archive blob was also not gzip.
5. Large single-message Base64 transport for the three remaining JPEGs produced size-mismatched blobs; this path must not be retried without chunking and exact hash validation.

## Current active objective

Finish Phase 1 without touching production loading:
1. Persist exact source data for `alibi-vertical.jpg`, `alibi-horizontal.jpg`, and `twist.jpg` using a small-chunk transport that can be verified by source size/SHA-256 before activation.
2. Commit reconstructed binary JPEGs only after exact verification.
3. Obtain correct Oda Nobunaga artwork for `suspect-4.jpg`.

Do not activate `card-ui.js`, change `index.html`, or remove legacy files until all 14 final JPGs are verified on `main`.

## Blockers / unresolved items

- Missing correct `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- Three evidence JPEGs remain uncommitted because the first long Base64 transfer was invalid and rolled back.
- Direct-image UI activation and legacy cleanup remain blocked until the full 14-file set is complete.
