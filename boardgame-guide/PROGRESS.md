# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 78 total, including Clueverge.
- Added `The White Castle` and `Forest Shuffle` as complete Japanese detail pages.
- Added both games to `games.html` with clearly box-visible thumbnails and visible source links.
- Applied only supportable filters: `The White Castle` = `strategy`; `Forest Shuffle` = no current category filter.
- Updated `games.html` count from 76 to 78.
- Updated the compact TOP button from `全76作品を見る` to `全78作品を見る`; the six featured titles remain unchanged.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and an existing detail page before editing.
- Reconstructed `games.html` from the current Git content and preserved the existing 76 cards, footer, filter script, responsive layout, and `object-fit: contain` thumbnail behavior before adding the two new cards.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed `games.html` contains `games/the-white-castle.html` and `games/forest-shuffle.html`.
- Confirmed The White Castle uses `data-tags="strategy"` only; Forest Shuffle does not receive an unsupported filter label.
- Confirmed both new cards use `.thumb-shell` + `.thumb`, with the shared `object-fit: contain` rule preserved.
- Confirmed both thumbnails visibly show the physical game box and have visible source links.
- Confirmed both detail pages link back to `../index.html` and include overview, player count, play time, age, basic rules, appeal, image attribution, and reliable sources.
- Confirmed `games.html` retains the closing catalog markup, footer, and filter script after the additions.
- Confirmed TOP remains compact with six featured games and now shows `全78作品を見る`.
- Current The White Castle sources checked on 2026-08-28:
  - Devir official product page: `https://devirgames.com/the-white-castle`
  - Devir official presentation: `https://devirgames.com/presentation-the-white-castle`
  - Zulu's Games product page for the box-visible image: `https://zulusgames.com/collections/board-games-strategy/products/the-white-castle`
- Current Forest Shuffle sources checked on 2026-08-28:
  - Asmodee USA / Lookout Games product page: `https://store.asmodee.com/products/forest-shuffle`
  - BoardGameGeek reference page: `https://boardgamegeek.com/boardgame/391163/forest-shuffle`

## Current position
- Published catalog count: 78.
- Staged-but-unlinked detail pages: 0.
- Published detail-image coverage: 78 / 78.
- Published catalog box-thumbnail coverage: 78 / 78.

## Planned next items
1. Start with `Earth` as the next candidate unpublished popular title.
2. Confirm it is still absent from the repository before editing.
3. Verify current specifications, gameplay facts, and image source from the publisher or another reliable current source.
4. Confirm a box-visible image that satisfies the image/copyright policy before publication.
5. Create the detail page and catalog card in the same run, then update counts only after the card is actually linked.

## Unresolved general items
- `games.html` is large, but safe retrieval through the GitHub connector works. Continue preserving all existing cards before full-file replacement.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
