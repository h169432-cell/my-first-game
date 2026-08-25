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

## Historical evidence and exhausted recovery paths

Git history proves that the fine-art seven-person grid intended suspect 4 to be Oda Nobunaga:
- `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`: introduced the fine-art mapping with `4: '織田信長'`.
- `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`: retained that mapping and used suspect 4 as the top-right cell in the 4x2 grid.

Corresponding historical data is corrupted:
- `assets/suspects-latest.webp`: 7,503 actual bytes vs 47,914 declared RIFF bytes.
- historical four-part Base64 grid: 56,087 decoded bytes vs 56,088 declared RIFF bytes.
- diagnostic record: `.work/candidates/historical-suspect-grid-diagnostics.txt`.

Independent retained source checks:
- A retained original suspect-sheet image outside the corrupted Git WebP path is viewable and its suspect 4 card is clearly labeled `織田信忠`, not `織田信長`.
- The retained final-card montage contains the same Oda Nobutada suspect 4.
- File Library was searched for `織田信長`, `Oda Nobunaga`, `suspect-4`, historical/fine-art suspect grids, and seven-suspect card sheets. No valid Oda Nobunaga candidate was found.
- File Library only surfaced an older `クルーバージュ：闇の推理盤.png` with a fictional/female suspect 4, a six-suspect gothic sheet, and unrelated evidence assets.
- Commit `382456d76f2e0dcb6e9bc4d89c76412944efa3e7` imported suspects 1,2,3,5,6,7 only; suspect 4 was already withheld.
- Commit `3c53030ca7e6ee6be7b346990c10b14c593e1841` is not an independent artifact source; its workflow only crops the known corrupted `62d5515...` blob.
- Historical Pages run `32730372651` for `41a8257...` was cancelled and has no Actions artifacts.
- Historical Pages run `32745948889` for `923a718c...` was cancelled and has no Actions artifacts.
- Nearby Pages run `32745918921` for `374f98e...` was cancelled.
- Nearby Pages run `32745977792` for `865b21c...` was cancelled.
- Nearby Pages run `32746011152` for `70534df...` succeeded. Its build logs prove the Pages package was a direct archive of repository root `.` with no artwork transformation. It uploaded `github-pages` artifact ID `9527076730`, retention 1 day, size 312,104 bytes, SHA-256 `78324fcadfef387c42523c82551a3b7e2cbc2ce37987cac8b854b8a752e44fc2`. The artifact is now expired (404 / absent from artifact list).
- Because successful Pages run `32746011152` merely archived repository files, it does not constitute an independent regenerated image source; its logged contents include the same historical `new-suspect-grid-part*.js` and `suspects-latest.webp` paths already known to be corrupt.
- Public web search for the old GitHub Pages URL plus Oda Nobunaga / Clue Grid terms found no indexed archived copy containing the missing artwork.
- Repository Releases list is empty.
- Repository metadata reports `forks_count: 0` and `network_count: 0`; no fork/network clone exists to inspect for an independently retained binary.

## Recovery attempts already completed and NOT to repeat

1. Appended every possible final byte value 0-255 to the one-byte-short decoded WebP: zero decodable results.
2. Inserted each of the 64 Base64 alphabet characters at the part1/part2 boundary: zero decodable results.
3. Investigated commit `62d55158365a1ee44f8af46651f4a46568464009` as a supposedly intact direct WebP source. Full-history `git show` proved the blob at that exact commit is already only 7,503 bytes; it was truncated when first committed.
4. Commit `1344806fdd512a666012c41ed6ec80edbd4336e1` attempted automated WebP regeneration, but workflow run `32741907831` failed and produced no valid replacement.
5. Repository issue search for `織田信長` returned no source attachment/content.
6. Do not use the retained suspect sheet or montage: both are Oda Nobutada.
7. Do not treat commit `3c53030...` as a separate source; it depends on the already-corrupted `62d5515...` binary.
8. Do not repeat the same File Library searches unless new uploads appear; no valid Oda Nobunaga source was present in the current library.
9. Do not retry artifacts from Pages runs `32730372651` or `32745948889`; both are cancelled and artifact lists are empty.
10. Do not repeat the same public web search terms for the historical Pages URL unless a new archive/source lead appears.
11. Do not retry nearby Pages runs `32745918921` or `32745977792`; both are cancelled.
12. Do not retry Pages artifact `9527076730` / run `32746011152`; it is expired and the build log proves it was only a direct repository archive.
13. Do not search Releases or forks again unless repository metadata changes; Releases are empty and fork/network counts are zero.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has the same 13 production JPGs and no `suspect-4.jpg`.
3. Do NOT repeat generic repository searches already exhausted (`織田信長`, `Oda Nobunaga`, `suspect-4`) unless new files/commits have appeared.
4. Do NOT repeat the brute-force repair attempts, corrupted Git blob extraction, retained Oda Nobutada assets, current File Library searches, checked Pages runs/artifact, Releases, or fork checks listed above.
5. Continue only with a materially new independent source class that can contain the original Oda Nobunaga binary independently of the known corrupted Git blobs and direct repository snapshots. Highest-priority candidates now: GitHub Wiki history/attachments if any actually exist, an old user attachment not surfaced by current File Library indexing, or another independently retained original file/source reference.
6. If a valid source is found, verify identity first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
7. Only after all 14 JPGs are verified, begin Phase 2: connect `assets/card-ui.js` with minimum changes.
8. Validate direct-image rendering on board, private-card modal, and accusation selection.
9. Only after successful replacement validation remove legacy image systems and temporary migration tooling.
10. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## Next safe batch

Source-resolution work only until the 14th image is verified.

Next productive batch: inspect whether the repository Wiki has any actual page history or image attachments that predate the corrupted Git image path. Treat it as useful only if it contains an independent binary or link/attachment to the intended Oda Nobunaga artwork. If Wiki is empty/unusable, move to another genuinely independent retained user attachment/source rather than retrying exhausted Git/Pages paths.

If no independent source is accessible, preserve the blocker and do not alter production or accept a substitute image.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` source remains unavailable.
- Historical project code confirms the intended identity, but all known corresponding Git image binaries are corrupted.
- Independently retained visible suspect assets are Oda Nobutada and therefore unusable.
- Current File Library searches found no valid Oda Nobunaga suspect-4 candidate.
- Checked historical/nearby Pages paths do not provide an independent recoverable binary; the one successful package is expired and was only a direct repository archive.
- Releases and forks/network clones provide no independent source.
- UI activation, `index.html` simplification, and legacy deletion remain blocked until the 14th image is verified.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.

## Recovery / important commits and runs

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Historical fine-art mapping: `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`
Historical grid alignment: `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`
Historical direct WebP add: `62d55158365a1ee44f8af46651f4a46568464009` (already truncated)
Historical rebuild attempt: `1344806fdd512a666012c41ed6ec80edbd4336e1` (workflow failed)
Historical artifact-crop attempt: `3c53030ca7e6ee6be7b346990c10b14c593e1841` (depends on corrupted `62d5515...`)
Direct image import: `382456d76f2e0dcb6e9bc4d89c76412944efa3e7` (suspect 4 intentionally absent)
Historical diagnostics workflow setup: `8f975fdf0dd547dcfe3c5019a65a2ea0f9ea9897`
Diagnostic record: `.work/candidates/historical-suspect-grid-diagnostics.txt`
Final-byte recovery test setup: `7acb05289a457f50f4652b9a270760d53bbd05c8`
Boundary recovery test setup: `f1cae7120e67cd13072c8d07b1d58803bb96f105`
Verified horizontal-alibi image commit: `b9b54bd`
Historical Pages run for mapping commit: `32730372651` (cancelled, no artifacts)
Historical Pages run for alignment commit: `32745948889` (cancelled, no artifacts)
Nearby Pages run: `32745918921` / commit `374f98e...` (cancelled)
Nearby Pages run: `32745977792` / commit `865b21c...` (cancelled)
Successful nearby Pages run: `32746011152` / commit `70534df...` (direct repo archive; artifact `9527076730` expired)
