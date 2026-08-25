# Handoff

Last updated: 2026-08-25 23:34 JST

## Current position

Eight verified JPGs are now committed under `assets/cards/`: suspects 1, 2, 3, 5, 6, 7 plus `motive.jpg` and `clue.jpg`. `suspect-4.jpg` is intentionally absent because the available candidate says `織田信忠`, while the required identity is `織田信長`.

Five evidence JPGs remain to be committed. `assets/card-ui.js` is still intentionally not loaded by `index.html`, so the live game remains on the legacy image runtime.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` for external changes.
3. Re-list `assets/cards/`; expect suspects 1, 2, 3, 5, 6, 7 plus `motive.jpg`, `clue.jpg`, and `README.txt`.
4. Continue the proven direct-per-file Git blob method for: `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.
5. Verify each committed file is non-zero and remains a JPEG; preserve the confirmed left/right identity of `alibi-horizontal.jpg`.
6. Do not commit the known wrong suspect-4 candidate (`織田信忠`). Only create `assets/cards/suspect-4.jpg` from correct Oda Nobunaga (`織田信長`) artwork.
7. Do not load `card-ui.js`, change `index.html`, or remove the legacy runtime until all 14 required JPGs exist.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## Proven migration method

- Use the local final JPEG source file.
- Base64-encode that single JPEG only for Git API `create_blob` transport with `encoding: base64`.
- Add the resulting blob SHA to `assets/cards/<name>.jpg` through a Git tree.
- Commit and fast-forward `main`.
- No Base64 data is stored or executed in the production runtime.

Do not retry the failed archive/reconstruction paths.

## Required final artwork set

Present:
- `assets/cards/suspect-1.jpg`
- `assets/cards/suspect-2.jpg`
- `assets/cards/suspect-3.jpg`
- `assets/cards/suspect-5.jpg`
- `assets/cards/suspect-6.jpg`
- `assets/cards/suspect-7.jpg`
- `assets/cards/motive.jpg`
- `assets/cards/clue.jpg`

Missing:
- `assets/cards/suspect-4.jpg` — must be Oda Nobunaga
- `assets/cards/weapon.jpg`
- `assets/cards/false-testimony.jpg`
- `assets/cards/alibi-vertical.jpg`
- `assets/cards/alibi-horizontal.jpg`
- `assets/cards/twist.jpg`

## Next safe batch

Commit the five remaining evidence JPEGs by direct Git blobs, verify them on `main`, then update this handoff. Do not activate the direct-image UI unless correct suspect-4 artwork is also available and the complete 14-file set is verified.

## Unresolved items

- Correct Oda Nobunaga suspect-4 artwork remains the only identity blocker.
- Five evidence JPEGs remain to be inserted.
- UI activation, `index.html` simplification, and legacy deletion remain later phases.

## Recovery

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
