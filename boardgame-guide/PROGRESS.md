# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 73 total, including Clueverge.
- Published the four previously staged titles into `games.html`: On Mars, Weather Machine, Food Chain Magnate, and Horseless Carriage.
- Added a box-visible catalog thumbnail and visible source link for all four new cards.
- Applied only the `strategy` filter tag to the four new cards.
- Updated `games.html` count from 69 to 73.
- Updated the compact TOP button from `全69作品を見る` to `全73作品を見る`; the six featured titles remain unchanged.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and an existing detail page before editing.
- Obtained `games.html` safely by line-range reads before replacing it, preserving all 69 existing cards and appending four new cards.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed the current tail of `games.html` contains links to `games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, and `games/horseless-carriage.html`.
- Confirmed all four cards use `data-tags="strategy"` only.
- Confirmed all four cards include `.thumb-shell` + `.thumb` and retain the shared `object-fit: contain` rule.
- Confirmed all four cards have visible image-source links.
- Confirmed `games.html` retains the closing catalog markup, footer, and filter script after the additions.
- Confirmed TOP remains compact with six featured games and now shows `全73作品を見る`.
- Current official sources checked on 2026-08-28:
  - On Mars: `https://www.eagle-gryphon.com/products/on-mars`
  - Weather Machine: `https://www.eagle-gryphon.com/products/weather-machine`
  - Food Chain Magnate: `https://www.splottershop.com/products/food-chain-magnate`
  - Splotter product catalog containing Horseless Carriage 2nd Edition: `https://www.splottershop.com/collections/all`
- Confirmed CGE currently lists SETI: Search for Extraterrestrial Intelligence as a 1–4 player, age 14+, 40 min/player strategy game and that it is not yet present in this repository.

## Current position
- Published catalog count: 73.
- Staged-but-unlinked detail pages: 0.
- Published detail-image coverage: 73 / 73.
- Published catalog box-thumbnail coverage: 73 / 73.

## Planned next items
1. Start with `SETI: Search for Extraterrestrial Intelligence` as the next unpublished popular title.
2. Use Czech Games Edition official game and press pages as primary factual sources.
3. Confirm and use a clearly box-visible image under the image/copyright policy before adding the catalog card.
4. Create `games/seti-search-for-extraterrestrial-intelligence.html`, then add its card to `games.html` in the same run.
5. Apply only supportable filter tags; `strategy` is supported by CGE, while no other category tag should be added without separate verification.
6. After publication, update count from 73 to 74 and TOP count only after the catalog card is actually linked.

## Unresolved general items
- `games.html` is large, but safe line-range retrieval through the GitHub connector now works. Continue using bounded line reads before full-file replacement to avoid losing existing cards.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
