# Progress

Last updated: 2026-08-25 23:34 JST
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
- Abandoned failed archive/Base64 reconstruction paths after root-cause investigation; direct per-file Git blob insertion is the proven migration path.
- Committed six verified suspect JPEGs: `suspect-1.jpg`, `suspect-2.jpg`, `suspect-3.jpg`, `suspect-5.jpg`, `suspect-6.jpg`, `suspect-7.jpg`.
- Committed two verified evidence JPEGs: `motive.jpg` and `clue.jpg` in commit `820f5d65af6313fd53019f13dc003217d09ae181`.

## Current repository state

The final simplified card architecture is NOT yet active. `assets/card-ui.js` remains intentionally disconnected from `index.html` until all 14 required JPGs are present.

`assets/cards/` now contains eight real JPGs: six suspects plus `motive.jpg` and `clue.jpg`, along with the old `README.txt`.

Current runtime remains the legacy path: split suspect/evidence parts -> `card-image-runtime.js` -> `game.js` -> `suspect-ui.js` / `evidence-ui.js`.

## Changes in this run

- Read the four persistent state files in the required order.
- Confirmed current `main` and `assets/cards/` matched the handoff state.
- Revalidated all seven local evidence source files as valid non-zero JPEGs.
- Added `assets/cards/motive.jpg` and `assets/cards/clue.jpg` through direct Git blobs.
- Verified both files exist on `main` with sizes 7,567 bytes and 7,412 bytes respectively.
- Did not modify `index.html`, `game.js`, or production image loading.

## Validation performed

- `motive.jpg`: valid source JPEG; repository size 7,567 bytes.
- `clue.jpg`: valid source JPEG; repository size 7,412 bytes.
- Remaining local evidence sources were also revalidated as JPEGs before stopping this batch.
- Production runtime remains unchanged, so partial migration does not affect the live game.

## Recent failures worth preserving

1. Base64 reconstruction: `Incorrect padding`.
2. Normalized retry: Pillow could not decode a valid WebP.
3. Temporary archive retrieval/decode was not gzip.
4. Directly staged temporary archive blob was also not gzip.

Do not retry these reconstruction/archive paths.

## Current active objective

Continue Phase 1 using direct Git blobs for the remaining five evidence images: `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.

`suspect-4.jpg` remains blocked until correct Oda Nobunaga artwork is available. Do not activate `card-ui.js` until all 14 final files are present.

## Blockers / unresolved items

- Missing correct `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- Remaining evidence assets: `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.
- Direct-image UI activation and legacy cleanup remain blocked until the full 14-file set is complete.
