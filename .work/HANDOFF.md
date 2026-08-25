# Handoff

Last updated: 2026-08-25 23:24 JST

## Current position

Six verified suspect JPEGs are now committed under `assets/cards/`: 1, 2, 3, 5, 6, and 7. `suspect-4.jpg` is intentionally absent because the available candidate says `織田信忠`, while the required artwork identity is `織田信長`. Seven evidence JPEGs remain to be committed. `assets/card-ui.js` is still intentionally not loaded by `index.html`, so the live game remains on the legacy image runtime and has not been affected by the partial migration.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` for external changes.
3. Re-list `assets/cards/`; expect `suspect-1`, `2`, `3`, `5`, `6`, `7` plus `README.txt`.
4. Continue the proven direct-per-file Git blob method for the seven evidence images: `motive.jpg`, `clue.jpg`, `weapon.jpg`, `false-testimony.jpg`, `alibi-vertical.jpg`, `alibi-horizontal.jpg`, `twist.jpg`.
5. Verify each committed evidence file is non-zero and a JPEG; preserve the confirmed horizontal left/right alibi identity.
6. Do not commit the known wrong suspect-4 candidate (`織田信忠`). Wait for/locate a correct Oda Nobunaga (`織田信長`) source before creating `assets/cards/suspect-4.jpg`.
7. Do not load `card-ui.js`, change `index.html`, or remove the legacy runtime until all 14 required JPGs exist.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## Proven migration method

- Use the local final JPEG source file.
- Base64-encode that single JPEG only for the Git API `create_blob` transport with `encoding: base64`.
- Create/update the repository tree so the resulting blob SHA is stored directly at `assets/cards/<name>.jpg`.
- Commit and fast-forward `main`.
- This is transport only; no Base64 data is stored or executed in the production repository/runtime.

Do not retry the failed temporary archive importer. Its temporary workflow and staged archive were removed in commit `8e85180ca07d7f40a21b29341e3411b4aff7cc66`.

## Required final artwork set

Present:
- `assets/cards/suspect-1.jpg`
- `assets/cards/suspect-2.jpg`
- `assets/cards/suspect-3.jpg`
- `assets/cards/suspect-5.jpg`
- `assets/cards/suspect-6.jpg`
- `assets/cards/suspect-7.jpg`

Missing:
- `assets/cards/suspect-4.jpg` — must be Oda Nobunaga
- `assets/cards/motive.jpg`
- `assets/cards/clue.jpg`
- `assets/cards/weapon.jpg`
- `assets/cards/false-testimony.jpg`
- `assets/cards/alibi-vertical.jpg`
- `assets/cards/alibi-horizontal.jpg` — source already visually confirmed as left/right artwork
- `assets/cards/twist.jpg`

## Next safe batch

Commit all seven evidence JPEGs by direct Git blobs in one batch, verify them on `main`, then update this handoff. Do not activate the direct-image UI yet unless a correct suspect-4 image has also become available and the complete 14-file set is verified.

## Unresolved items

- Correct Oda Nobunaga suspect-4 artwork is the only source-art identity blocker.
- Seven evidence JPEGs still need repository insertion.
- UI activation, `index.html` simplification, and legacy deletion remain later phases.

## Recovery

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
