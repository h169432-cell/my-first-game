# Progress

Last updated: 2026-08-26
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created the persistent `.work/` execution, plan, progress, and handoff system and a pre-cleanup backup branch.
- Audited `game.js`: required 15-card base deck + exactly one special card = 16 cards; vertical and horizontal alibi variants are correct.
- Prepared `assets/card-ui.js` with centralized 14-path mapping, direct `<img>` rendering, preload, fallback, and board/private/accusation decorators. It remains intentionally disconnected.
- Committed 13 verified production JPGs: suspects 1,2,3,5,6,7 plus all seven evidence images.
- Rejected the available Oda Nobutada (`織田信忠`) image; suspect 4 must be Oda Nobunaga (`織田信長`).
- Verified `alibi-horizontal.jpg` is the required left/right-arrow artwork.

## Current repository state

`assets/cards/` contains 13 of 14 required verified production JPGs. The only missing production file is `assets/cards/suspect-4.jpg` for Oda Nobunaga.

The final simplified architecture is NOT active. Live production still uses the legacy split-data image runtime. `index.html`, `game.js`, and production image loading were not switched in this run.

## Latest run: historical deployment / Actions artifact source search

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Kept production unchanged because Phase 1 remains blocked at 13/14 images.
- Investigated a genuinely new source class: historical GitHub Pages / Actions deployment artifacts for commits that carried the intended Oda Nobunaga mapping.
- Commit `41a8257ceaf17b90f06cb57a9a330a285b9fd71b` has Pages workflow run `32730372651`; the run concluded `cancelled` and its artifact list is empty.
- Commit `923a718c386dfebf9c3753bb6cf6e5d686eb7e18` has Pages workflow run `32745948889`; the run concluded `cancelled` and its artifact list is empty.
- Public web search for the historical GitHub Pages site plus `織田信長` / Clue Grid terms returned no archived/indexed copy containing the missing artwork.
- No `suspect-4.jpg` candidate was accepted or committed.

## Validation facts retained

- `alibi-vertical.jpg`: 7,154 bytes; SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: 20,408 bytes; SHA-256 `fadb23b8d690f307a970b628424953d6904d4610c87fae52b9577cf3055a9749`.
- `twist.jpg`: 7,145 bytes; SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.
- GitHub Actions run `32871193668` verified the above reconstructed evidence assets by byte size, SHA-256, JPEG SOI, and JPEG EOI.

## Failure knowledge / do not repeat

1. Legacy Base64 reconstruction failed with `Incorrect padding`.
2. Normalized legacy WebP reconstruction was not decodable.
3. Historical `suspects-latest.webp` is severely truncated (7,503 vs declared 47,914 bytes).
4. Historical four-part fine-art grid is one decoded byte short (56,087 vs declared 56,088) but no appended byte value repairs it.
5. Inserting any Base64 character at the obvious part1 boundary also does not repair the fine-art grid.
6. Large single-message Base64 transport can silently truncate or mutate data; use small chunks plus exact hashes if text transfer is unavoidable.
7. Do not retry commit `62d5515...` as an intact source: full-history `git show` proves that commit already contains the same 7,503-byte truncated WebP.
8. Commit `1344806...` did not generate a valid replacement; its rebuild workflow failed.
9. Do not use the retained visible suspect sheet or montage as suspect 4: both clearly show `織田信忠`, not the required `織田信長`.
10. Commit `3c53030...` is not a new independent artifact source; it only crops the already-corrupted `62d5515...` blob.
11. File Library searches for `織田信長`, `Oda Nobunaga`, `suspect-4`, historical/fine-art seven-suspect sheets, and equivalent Japanese queries found no valid independent Oda Nobunaga source. Do not repeat the same File Library search unless new uploads appear.
12. Historical Pages runs for `41a8257...` and `923a718c...` are cancelled and expose no Actions artifacts; do not repeat artifact retrieval for runs `32730372651` or `32745948889`.
13. Public web search for the historical GitHub Pages URL and Oda Nobunaga / Clue Grid terms produced no indexed missing-artwork source in this run.

## Current active objective

Phase 1 remains at 13/14 images.

Next objective is to resolve the exact intended Oda Nobunaga artwork from a genuinely independent, identity-verifiable source. Git history proves the intended label but currently contains no recoverable intact binary for suspect 4.

Do not activate `card-ui.js`, change production `index.html`, or remove the legacy image files until all 14 production JPGs are verified.

After `suspect-4.jpg` is verified: proceed to Phase 2, connect direct-image UI, validate board/private/accusation rendering, then remove legacy image systems only after the replacement is proven working.

## Blockers / unresolved items

- Missing exact verified `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- The independently retained suspect sheet and montage contain Oda Nobutada, proving those candidates are unusable.
- File Library contains no valid independent Oda Nobunaga suspect-4 candidate from the searches already performed.
- Historical intended grid is corrupted and not recoverable by the tested repair methods or by extracting commit `62d5515...`.
- Historical Pages runs checked in this run contain no recoverable Actions artifact.
- Direct-image UI activation and destructive legacy cleanup remain blocked by the 14th image.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` are temporary migration artifacts to remove during later cleanup after image transfer is fully closed.
