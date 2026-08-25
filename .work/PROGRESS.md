# Progress

Last updated: 2026-08-25 23:24 JST
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created a backup branch from the pre-persistence state.
- Added `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, and `.work/HANDOFF.md`.
- Scheduled continuation now runs alternately at minute 00 and minute 30, so Git-backed continuation occurs every 30 minutes.
- Audited `game.js`: required 15-card base deck + exactly one special card = 16 cards; vertical and horizontal alibi variants are already correct.
- Audited the legacy image stack and prepared `assets/card-ui.js` with centralized 14-path image mapping, direct `<img>` rendering, preload, fallback, and board/private/accusation decorators.
- Confirmed the available candidate `suspect-4.jpg` artwork is labeled Oda Nobutada (`織田信忠`), not the required Oda Nobunaga (`織田信長`); it was intentionally rejected rather than committed under the wrong identity.
- Visually confirmed the available `alibi-horizontal.jpg` is the required left/right-arrow artwork.
- Investigated two failed temporary bulk-import attempts. The first failed because the API-fetched temporary payload was not a valid gzip stream. The second proved the staged temporary blob itself was not gzip data. The temporary importer and invalid staged archive were removed after root-cause isolation.
- Switched migration to direct Git blob insertion, avoiding reconstruction, Canvas, runtime Base64, and monkeypatching.
- Committed six verified suspect JPEGs directly into `assets/cards/`: `suspect-1.jpg`, `suspect-2.jpg`, `suspect-3.jpg`, `suspect-5.jpg`, `suspect-6.jpg`, and `suspect-7.jpg`.

## Current repository state

The final simplified card architecture is NOT yet active. `assets/card-ui.js` remains intentionally disconnected from `index.html` until all 14 required JPGs are present.

`assets/cards/` now contains six real suspect JPEGs plus the old `README.txt`. `suspect-4.jpg` is intentionally absent because the available candidate has the wrong person identity. The seven evidence JPGs are not yet committed.

Current runtime remains the legacy path: split suspect/evidence parts -> `card-image-runtime.js` -> `game.js` -> `suspect-ui.js` / `evidence-ui.js`.

## Changes in this run

- Read the four persistent state files in the required order and resumed from the Git handoff.
- Audited current `main` and `assets/cards/`.
- Verified local artwork identities before committing.
- Diagnosed and removed the failed one-shot importer and invalid temporary archive.
- Added six verified suspect JPEGs through direct Git blobs in commit `382456d76f2e0dcb6e9bc4d89c76412944efa3e7`.
- Removed the failed temporary importer/archive in commit `8e85180ca07d7f40a21b29341e3411b4aff7cc66`.
- Did not modify `index.html`, `game.js`, or production image loading.

## Validation performed

- Verified `assets/cards/` on `main` contains the six committed suspect files with non-zero sizes.
- Local source JPEGs were checked as valid JPEG files before direct blob insertion.
- Confirmed `suspect-4` source identity mismatch and did not commit it.
- Confirmed horizontal alibi source has left/right arrows.
- Confirmed production runtime remains unchanged, so partial asset migration cannot affect the live game.

## Recent failures worth preserving

Old reconstruction attempts:
1. Base64 reconstruction: `Incorrect padding`.
2. Normalized retry: Pillow could not decode a valid WebP.

This run's temporary archive attempts:
3. API retrieval/decode produced a file that was not gzip.
4. Directly staged temporary blob was also not gzip; the source temporary blob content was wrong.

Do not retry these archive/reconstruction paths. Direct per-file Git blob insertion is proven to work.

## Current active objective

Continue Phase 1 by directly committing the seven verified evidence JPEGs. `suspect-4.jpg` remains a separate blocker until correct Oda Nobunaga artwork is available. Do not activate `card-ui.js` until all 14 final files are present.

## Blockers / unresolved items

- Missing correct `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- Evidence assets still need direct Git commits: `motive.jpg`, `clue.jpg`, `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.
- Direct-image UI activation and legacy cleanup remain blocked until the full 14-file set is complete.
