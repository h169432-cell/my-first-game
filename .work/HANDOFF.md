# Handoff

Last updated: 2026-08-26 01:19 JST

## Current position

`assets/cards/` now has 13 of the 14 required verified production JPGs.

Present:
- `suspect-1.jpg`
- `suspect-2.jpg`
- `suspect-3.jpg`
- `suspect-5.jpg`
- `suspect-6.jpg`
- `suspect-7.jpg`
- `motive.jpg`
- `clue.jpg`
- `weapon.jpg`
- `false-testimony.jpg`
- `alibi-vertical.jpg`
- `alibi-horizontal.jpg`
- `twist.jpg`

Missing:
- `suspect-4.jpg` — must be Oda Nobunaga (`織田信長`)

The known candidate labeled Oda Nobutada (`織田信忠`) remains rejected and must not be used.

`assets/card-ui.js` is still intentionally not loaded by `index.html`; the live game still uses the legacy image runtime. Production loading and game rules were not modified.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` and confirm the 13 verified JPGs remain present.
3. Find/obtain the exact correct Oda Nobunaga artwork intended for `assets/cards/suspect-4.jpg`.
4. Do not use the known Oda Nobutada candidate and do not invent/substitute artwork without a verified source.
5. Verify `suspect-4.jpg` before accepting it.
6. Only when all 14 JPGs are verified, begin Phase 2 by connecting `assets/card-ui.js` to the existing UI with the minimum required changes.
7. Validate direct-image rendering in board, private-card modal, and accusation selection before removing any legacy files.
8. Remove legacy image systems and temporary migration tooling only after the direct-image replacement is confirmed working.
9. Update `PROGRESS.md` and `HANDOFF.md` before ending the next run.

## Verified evidence transfer facts

The three previously missing evidence images are now complete:
- `alibi-vertical.jpg`: 7,154 bytes; SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: 20,408 bytes; SHA-256 `fadb23b8d690f307a970b628424953d6904d4610c87fae52b9577cf3055a9749`; left/right-arrow artwork.
- `twist.jpg`: 7,145 bytes; SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.

GitHub Actions run `32871193668` verified all three by exact size, SHA-256, JPEG SOI and JPEG EOI. Its commit step succeeded. Horizontal alibi was newly committed as `b9b54bd` (`Add verified staged card images`); vertical alibi and twist were already present and matched exactly.

## Migration lessons / do not repeat

- Do not use one-shot long Base64 transfers for binary assets.
- A large text payload can be silently truncated or mutated; file length alone is not sufficient validation.
- Use small chunks and exact hashes when binary transfer through text is unavoidable.
- Do not relax or bypass byte/hash validation to make a migration succeed.

## Next safe batch

The next safe work batch is intentionally limited by source identity:
1. Resolve the correct Oda Nobunaga `suspect-4.jpg` source.
2. Verify and commit it.
3. If and only if the full 14-file set is then complete, proceed to the direct-image UI switch and validation.

## Unresolved items

- Correct Oda Nobunaga `suspect-4.jpg` source is not present in the repository and remains the only artwork blocker.
- UI activation, `index.html` simplification, and legacy deletion are later phases and must not start before the 14th image is verified.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` are temporary migration artifacts and should be removed during later cleanup after they are no longer needed.

## Recovery / important commits

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Invalid evidence upload attempt: `93bb784fc333216b37bbc8ff49c3bd887a577ea8`
Recovery removal commit: `7f54aad7e63795cccd1b725a31a0bc9efbe7823b`
Final safe-chunk workflow configuration commit: `7f66db256c522e8ad821c4298e8b0b94d9b2f33e`
Verified horizontal-alibi image commit: `b9b54bd`
