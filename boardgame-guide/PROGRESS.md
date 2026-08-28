# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 78 total, including Clueverge.
- Added staged Japanese detail pages for `Earth` and `Harmonies` with verified specifications, rules summaries, image attribution, and reliable sources.
- `Earth` uses an official Inside Up Games box-visible image. Current specifications were verified from Inside Up Games and Asmodee USA: 1–5 players, 45–90 minutes, age 14+.
- `Harmonies` uses an official Asmodee USA / Libellud box-visible image. Current specifications were verified from Asmodee USA: 1–4 players, about 30 minutes, age 10+; core gameplay was cross-checked against Libellud's official game page.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and an existing detail page before editing.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed `Earth` and `Harmonies` were absent before creating their detail pages.
- Confirmed both new pages link back to `../index.html` and include overview, player count, play time, age, basic rules, appeal, image attribution, and sources.
- Confirmed both detail-page images clearly show the physical game box and link to the cited source page.
- Confirmed current TOP remains compact at six featured titles and still shows `全78作品を見る` because the two staged pages are not yet linked from `games.html`.
- Current Earth sources checked on 2026-08-28:
  - Inside Up Games official game page: `https://insideupgames.com/our-games/earth-board-game/`
  - Inside Up Games official product page: `https://insideupgames.com/product/earth-board-game/`
  - Asmodee USA product page: `https://store.asmodee.com/products/earth`
- Current Harmonies sources checked on 2026-08-28:
  - Libellud official game page: `https://www.libellud.com/en/our-games/harmonies/`
  - Asmodee USA product page: `https://store.asmodee.com/products/harmonies-1`

## Current position
- Published catalog count: 78.
- Staged-but-unlinked detail pages: 2 (`Earth`, `Harmonies`).
- Published detail-image coverage: 78 / 78; staged pages also each contain a verified relevant image.
- Published catalog box-thumbnail coverage: 78 / 78.

## Planned next items
1. Start by adding `Earth` and `Harmonies` to `games.html` with their verified box-visible official images and visible source links.
2. Apply only supportable filters. Planned supportable tags: Earth = `strategy`; Harmonies = `quick beginner strategy`. Do not add `two` solely because Harmonies supports two players.
3. After both cards are actually linked, update catalog/TOP counts from 78 to 80 while keeping the same six featured TOP titles.
4. Validate catalog → detail, detail → TOP, image/source links, filter behavior, and closing catalog markup.
5. Only after the two staged pages are fully published, research the next unpublished popular title.

## Unresolved general items
- `games.html` is large. The GitHub connector can retrieve targeted line ranges safely, but a complete replacement requires preserving the full current file. Do not submit a partial reconstruction. This run therefore staged the two detail pages rather than risking loss of existing cards.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
