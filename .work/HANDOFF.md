# Handoff

Last updated: 2026-08-26 00:34 JST

## Current position

`assets/cards/` is back to the safe ten verified JPGs: suspects 1, 2, 3, 5, 6, 7 plus `motive.jpg`, `clue.jpg`, `weapon.jpg`, and `false-testimony.jpg`. `suspect-4.jpg` is intentionally absent because the available candidate says `織田信忠`, while the required identity is `織田信長`.

`alibi-vertical.jpg`, `alibi-horizontal.jpg`, and `twist.jpg` were attempted in commit `93bb784fc333216b37bbc8ff49c3bd887a577ea8`, but post-commit size checks proved the long Base64 transport was corrupted. All three invalid files were removed in recovery commit `7f54aad7e63795cccd1b725a31a0bc9efbe7823b` before any production UI switch.

`assets/card-ui.js` remains intentionally not loaded by `index.html`; the live game still uses the legacy image runtime.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` and re-list `assets/cards/`; expect only the ten verified JPGs plus `README.txt`.
3. Do NOT retry one-shot long Base64 blob creation for the remaining evidence images.
4. Use small Base64 text chunks (recommended <= 6,000 characters each) as temporary Git staging data, then reconstruct the binary JPEG on GitHub-side or through an exact concatenation path.
5. Before accepting each final JPEG, verify exact byte size and SHA-256 against the source facts below. If either differs, delete/reject it immediately.
6. Preserve the confirmed left/right identity of `alibi-horizontal.jpg`.
7. Do not commit the known wrong suspect-4 candidate (`織田信忠`). Only create `assets/cards/suspect-4.jpg` from correct Oda Nobunaga (`織田信長`) artwork.
8. Do not load `card-ui.js`, change `index.html`, or remove the legacy runtime until all 14 required JPGs exist and are verified.
9. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## Source verification facts

- `alibi-vertical.jpg`: 7,154 bytes; SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: 20,408 bytes; confirmed left/right-arrow artwork. Recompute/store SHA-256 before final reconstruction if source is available.
- `twist.jpg`: 7,145 bytes; SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.

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
- `assets/cards/weapon.jpg`
- `assets/cards/false-testimony.jpg`

Missing:
- `assets/cards/suspect-4.jpg` — must be Oda Nobunaga
- `assets/cards/alibi-vertical.jpg`
- `assets/cards/alibi-horizontal.jpg`
- `assets/cards/twist.jpg`

## Next safe batch

1. Establish exact chunked staging for the three remaining evidence JPEGs.
2. Reconstruct/commit one image at a time and verify byte size + SHA-256 immediately.
3. Keep production runtime untouched.
4. Once all three evidence images pass, Phase 1 is blocked only by correct Oda Nobunaga suspect-4 artwork.

## Unresolved items

- Correct Oda Nobunaga suspect-4 artwork remains the identity blocker.
- Three evidence JPEGs still need exact, verified binary transfer.
- UI activation, `index.html` simplification, and legacy deletion remain later phases.

## Recovery / important commits

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Invalid evidence upload attempt: `93bb784fc333216b37bbc8ff49c3bd887a577ea8`
Recovery removal commit: `7f54aad7e63795cccd1b725a31a0bc9efbe7823b`
