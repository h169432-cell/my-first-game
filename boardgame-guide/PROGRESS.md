# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages remain 69 total, including Clueverge.
- Created `games/on-mars.html` with verified official specifications, Japanese rules overview, appeal, sources, and an official Eagle-Gryphon Games box image.
- Created `games/weather-machine.html` with verified official specifications, Japanese rules overview, appeal, sources, and an official Eagle-Gryphon Games box image.
- On Mars specifications use the current Eagle-Gryphon Games product page: 1–4 players, 60–120 minutes, age 14+.
- Weather Machine specifications use the current Eagle-Gryphon Games product page: 2–4 players, 60–150 minutes, age 14+.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and a current detail page before editing.
- Verified On Mars and Weather Machine official product pages and their box-visible product images.
- Verified both new detail pages link back to `../index.html` and contain image source attribution beneath the image.
- Verified the catalog is still at 69 works and TOP still displays `全69作品を見る`.
- Did not replace `games.html` in this run because a complete safe reconstruction was not finished; this avoids accidental loss of existing catalog cards.

## Current position
- Published catalog count: 69.
- Staged-but-unlinked detail pages: 2 (`games/on-mars.html`, `games/weather-machine.html`).
- Published detail-image coverage: 69 / 69, plus 2 staged pages with images.
- Published catalog box-thumbnail coverage: 69 / 69.

## Planned next items
1. Publish the already-created On Mars and Weather Machine pages into `games.html` first.
2. Use the official Eagle-Gryphon Games box-visible images already used on the detail pages for the catalog thumbnails, with visible source links.
3. Apply only the `strategy` filter tag to both cards; do not apply unsupported quick/beginner/party/two tags.
4. Update catalog count from 69 to 71 and TOP button from `全69作品を見る` to `全71作品を見る`.
5. After those two pages are linked and verified, continue research with another not-yet-published popular game.

## Unresolved general items
- `games.html` is large enough that direct full-file reads can be truncated. Continue using complete line-range retrieval before any whole-file update.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
