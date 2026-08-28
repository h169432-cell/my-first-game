# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages remain 69 total, including Clueverge.
- Previously staged detail pages remain complete: `games/on-mars.html` and `games/weather-machine.html`.
- Added `games/food-chain-magnate.html` with verified specifications, Japanese rules overview, appeal, sources, and an original identification visual.
- Added `games/horseless-carriage.html` with verified specifications, Japanese rules overview, appeal, sources, and a box-visible quoted product image.
- Food Chain Magnate uses Splotter Spellen's current product page for 2–5 players and 2–4 hours; age 14+ is confirmed by BoardGameGeek.
- Horseless Carriage uses the current Splotter Spellen 2nd Edition product page for theme/edition details; 3–5 players, 180–240 minutes, age 14+ are confirmed by BoardGameGeek.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and current detail pages before editing.
- Verified On Mars and Weather Machine remain unlinked from the catalog.
- Verified Food Chain Magnate is not already present in the repository before creating the page.
- Verified official current Splotter product information for Food Chain Magnate and Horseless Carriage, with BoardGameGeek used only for missing specification fields.
- Verified the new detail pages link back to `../index.html` and include image/visual attribution where applicable.
- Catalog remains at 69 works and TOP remains `全69作品を見る`; this run did not replace the large `games.html` because the connector can only replace the whole file and full safe retrieval is still truncated.

## Current position
- Published catalog count: 69.
- Staged-but-unlinked detail pages: 4 (`games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, `games/horseless-carriage.html`).
- Published detail-image coverage: 69 / 69, plus all 4 staged pages have a relevant image or visual.
- Published catalog box-thumbnail coverage: 69 / 69.

## Planned next items
1. Publish the four already-created staged pages into `games.html` before researching more titles.
2. On Mars and Weather Machine: use the official Eagle-Gryphon Games box-visible images already recorded in `HANDOFF.md`; apply only `strategy`.
3. Food Chain Magnate: find and verify a stable box-visible catalog thumbnail source; apply only `strategy`.
4. Horseless Carriage: use a verified box-visible thumbnail source; apply only `strategy`.
5. Update catalog count from 69 to 73 and TOP button from `全69作品を見る` to `全73作品を見る` only after all four cards are actually linked.

## Unresolved general items
- `games.html` is large enough that direct full-file reads are truncated, while the available write action requires complete replacement content. Do not risk dropping existing cards; retrieve/reconstruct the full file safely before updating it.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
