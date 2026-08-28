# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages remain 69 total, including Clueverge.
- Four staged detail pages remain complete: `games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, and `games/horseless-carriage.html`.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and a current detail page before continuing.
- Re-verified the current official Eagle-Gryphon Games product pages for On Mars and Weather Machine; both remain suitable factual sources and their recorded product images visibly show the physical box.
- Re-verified the current Splotter Spellen product page for Food Chain Magnate. The page is currently a pre-order for the 13th print run and states that this print run is identical to previous print runs.
- Re-verified Splotter Spellen's current catalog still lists Horseless Carriage 2nd Edition as currently available.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed `games.html` still reports 69 works and does not yet link On Mars, Weather Machine, Food Chain Magnate, or Horseless Carriage.
- Confirmed TOP remains compact with six featured games and the `全69作品を見る` button.
- Confirmed On Mars detail page links back to `../index.html`, contains a directly relevant box-visible image, and attributes Eagle-Gryphon Games.
- Current official sources checked on 2026-08-28:
  - On Mars: `https://www.eagle-gryphon.com/products/on-mars`
  - Weather Machine: `https://www.eagle-gryphon.com/products/weather-machine`
  - Food Chain Magnate: `https://www.splottershop.com/products/food-chain-magnate`
  - Splotter current-games listing for Horseless Carriage 2nd Edition: `https://www.splottershop.com/pages/games`

## Current position
- Published catalog count: 69.
- Staged-but-unlinked detail pages: 4 (`games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, `games/horseless-carriage.html`).
- Published detail-image coverage: 69 / 69, plus all 4 staged pages have a relevant image or visual.
- Published catalog box-thumbnail coverage: 69 / 69.

## Planned next items
1. Publish the four already-created staged pages into `games.html` before researching more titles.
2. On Mars and Weather Machine: use the official Eagle-Gryphon Games box-visible images recorded in `HANDOFF.md`; apply only `strategy`.
3. Food Chain Magnate: use a stable box-visible image from the current official product presentation if a direct image URL can be safely retrieved; apply only `strategy`.
4. Horseless Carriage: prefer the current official Splotter product presentation for a box-visible thumbnail; otherwise use another verifiable source under `WORK_PLAN.md`; apply only `strategy`.
5. Update catalog count from 69 to 73 and TOP button from `全69作品を見る` to `全73作品を見る` only after all four cards are actually linked.

## Unresolved general items
- `games.html` is large enough that connector reads expose its content only in truncated form, while the available write operation replaces the complete file. Do not risk dropping existing cards. A safe full-file retrieval/edit path is still required before modifying it.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
