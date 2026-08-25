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

## Latest run: nearby successful Pages snapshot / independent GitHub storage search

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order and re-synced latest `main` before continuing.
- Kept production unchanged because Phase 1 remains blocked at 13/14 images.
- Investigated nearby Pages commits after the cancelled Oda-Nobunaga mapping runs rather than repeating the already exhausted target runs.
- Commit `374f98ee359aaae4e4b9862c1d3b4b89873dd46f` has Pages run `32745918921`; it was cancelled.
- Commit `865b21c09fcac9b413a29caf6b43e1b095d6ab71` has Pages run `32745977792`; it was cancelled.
- Commit `70534df28c64315e420075b37f970ae641967a1f` has successful Pages run `32746011152`.
- Build-job logs for successful run `32746011152` prove `actions/upload-pages-artifact@v3` archived the repository root directly (`path: .`) with no card-image transformation. The archive included the same historical `assets/new-suspect-grid-part*.js` and `assets/suspects-latest.webp` paths already known to be corrupted in Git.
- The historical Pages artifact was named `github-pages`, artifact ID `9527076730`, retention 1 day, size 312,104 bytes, SHA-256 `78324fcadfef387c42523c82551a3b7e2cbc2ce37987cac8b854b8a752e44fc2`.
- Current artifact listing is empty and direct retrieval of artifact ID `9527076730` returns 404, consistent with expiration. Because the logged build archived the repository unchanged, even a retained copy would not represent an independent transformed image source.
- Checked another independent GitHub storage class: repository Releases list is empty.
- Repository metadata reports `forks_count: 0` and `network_count: 0`, so there is no fork/network clone to inspect for an independently retained binary.
- No `suspect-4.jpg` candidate was accepted or committed.

## Previous historical deployment / source search facts

- Commit `41a8257ceaf17b90f06cb57a9a330a285b9fd71b` has Pages workflow run `32730372651`; the run concluded `cancelled` and its artifact list is empty.
- Commit `923a718c386dfebf9c3753bb6cf6e5d686eb7e18` has Pages workflow run `32745948889`; the run concluded `cancelled` and its artifact list is empty.
- Public web search for the historical GitHub Pages site plus `織田信長` / Clue Grid terms returned no archived/indexed copy containing the missing artwork.

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
13. Public web search for the historical GitHub Pages URL and Oda Nobunaga / Clue Grid terms produced no indexed missing-artwork source.
14. Nearby Pages runs `32745918921` (`374f98e...`) and `32745977792` (`865b21c...`) are also cancelled; do not retry them.
15. Successful Pages run `32746011152` (`70534df...`) did upload artifact `9527076730`, but the artifact expired (404). Its logs prove it was a direct tar of the repository root, so it contained the same Git paths rather than an independently regenerated suspect image. Do not repeat retrieval of that artifact.
16. Repository Releases are empty and repository metadata reports zero forks/network clones; these GitHub storage classes contain no independent candidate.

## Current active objective

Phase 1 remains at 13/14 images.

Next objective is to resolve the exact intended Oda Nobunaga artwork from a genuinely independent, identity-verifiable source outside the exhausted Git blobs, current File Library results, historical Pages snapshots checked so far, Releases, and forks.

Do not activate `card-ui.js`, change production `index.html`, or remove the legacy image files until all 14 production JPGs are verified.

After `suspect-4.jpg` is verified: proceed to Phase 2, connect direct-image UI, validate board/private/accusation rendering, then remove legacy image systems only after the replacement is proven working.

## Blockers / unresolved items

- Missing exact verified `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- The independently retained suspect sheet and montage contain Oda Nobutada, proving those candidates are unusable.
- File Library contains no valid independent Oda Nobunaga suspect-4 candidate from the searches already performed.
- Historical intended grid is corrupted and not recoverable by the tested repair methods or by extracting commit `62d5515...`.
- Historical Pages targets and the nearby successful Pages snapshot do not provide a recoverable independent binary.
- Releases and forks/network clones provide no source.
- Direct-image UI activation and destructive legacy cleanup remain blocked by the 14th image.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` are temporary migration artifacts to remove during later cleanup after image transfer is fully closed.
