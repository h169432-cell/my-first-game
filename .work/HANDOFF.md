# Handoff

Last updated: 2026-08-26

## Current position

`assets/cards/` has 13 of the 14 required verified production JPGs.

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
- `suspect-4.jpg` — must be the exact intended Oda Nobunaga (`織田信長`) artwork.

Known Oda Nobutada (`織田信忠`) and old fictional/female suspect-4 candidates remain rejected.

`assets/card-ui.js` is intentionally not loaded. Production still uses the legacy runtime and production `index.html` / game loading were not changed.

## New historical evidence

Git history proves that the fine-art seven-person grid intended suspect 4 to be Oda Nobunaga:
- `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`: introduced the fine-art mapping with `4: '織田信長'`.
- `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`: retained that mapping and used suspect 4 as the top-right cell in the 4x2 grid.

However, the corresponding historical image data is corrupted:
- `assets/suspects-latest.webp`: 7,503 actual bytes vs 47,914 declared RIFF bytes.
- historical four-part Base64 grid: 56,087 decoded bytes vs 56,088 declared RIFF bytes.
- diagnostic record: `.work/candidates/historical-suspect-grid-diagnostics.txt`.

Recovery attempts already completed and NOT to repeat:
1. Appended every possible final byte value 0-255 to the one-byte-short decoded WebP: zero decodable results.
2. Because part1 has 18,695 Base64 chars and parts2-4 each have 18,696, inserted each of the 64 Base64 alphabet characters at the part1/part2 boundary: zero decodable results.

Therefore the historical source has corruption beyond those simple repairs. The temporary workflows used for these tests were removed.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has the same 13 production JPGs and no `suspect-4.jpg`.
3. Do NOT repeat generic repository searches already exhausted (`織田信長`, `Oda Nobunaga`, `suspect-4`) unless new files/commits have appeared.
4. Do NOT repeat the final-byte brute force or part1-boundary Base64 insertion recovery; both are conclusively recorded as failures.
5. Prefer a new verified source path for the exact intended Oda Nobunaga artwork. If investigating Git history further, only pursue a materially different recovery angle (for example an earlier intact source blob/attachment or an independently verifiable original asset), not variants of the two failed repairs.
6. If a valid source is found, verify identity first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
7. Only after all 14 JPGs are verified, begin Phase 2: connect `assets/card-ui.js` with minimum changes.
8. Validate direct-image rendering on board, private-card modal, and accusation selection.
9. Only after successful replacement validation remove legacy image systems and temporary migration tooling.
10. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## Next safe batch

The next safe batch is source-resolution work only until the 14th image is verified. A productive run should seek a genuinely new source/recovery route; if none exists, preserve the blocker rather than altering production or accepting a substitute image.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` source remains unavailable.
- Historical project code confirms the intended identity, but its corresponding image binary is corrupted.
- UI activation, `index.html` simplification, and legacy deletion remain blocked until the 14th image is verified.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.

## Recovery / important commits

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Historical fine-art mapping: `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`
Historical grid alignment: `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`
Historical diagnostics workflow setup: `8f975fdf0dd547dcfe3c5019a65a2ea0f9ea9897`
Diagnostic record: `.work/candidates/historical-suspect-grid-diagnostics.txt`
Final-byte recovery test setup: `7acb05289a457f50f4652b9a270760d53bbd05c8`
Boundary recovery test setup: `f1cae7120e67cd13072c8d07b1d58803bb96f105`
Verified horizontal-alibi image commit: `b9b54bd`
