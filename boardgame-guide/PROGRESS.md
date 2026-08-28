# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 76 total, including Clueverge.
- Added `Arcs` and `Sky Team` as complete Japanese detail pages.
- Added both games to `games.html` with clearly box-visible thumbnails and visible source links.
- Applied only verified filters: `Arcs` = `strategy`; `Sky Team` = `two quick`.
- Updated `games.html` count from 74 to 76.
- Updated the compact TOP button from `全74作品を見る` to `全76作品を見る`; the six featured titles remain unchanged.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and an existing detail page before editing.
- Reconstructed `games.html` from bounded line-range reads before replacement and preserved the existing catalog cards, footer, and filter script.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed `games.html` contains `games/arcs.html` and `games/sky-team.html`.
- Confirmed Arcs uses `data-tags="strategy"` only.
- Confirmed Sky Team uses `data-tags="two quick"` only.
- Confirmed both new cards use `.thumb-shell` + `.thumb`, with the shared `object-fit: contain` rule preserved.
- Confirmed both thumbnails visibly show the physical game box and have visible source links.
- Confirmed both detail pages link back to `../index.html` and include overview, player count, play time, age, basic rules, appeal, image attribution, and reliable sources.
- Confirmed `games.html` retains the closing catalog markup, footer, and filter script after the additions.
- Confirmed TOP remains compact with six featured games and now shows `全76作品を見る`.
- Current Arcs sources checked on 2026-08-28:
  - Asmodee UK / Leder Games distribution page: `https://www.asmodee.co.uk/products/led06000-arcs`
  - Leder Games official development kit: `https://ledergames.com/blogs/news/arcs-the-official-development-kit`
- Current Sky Team sources checked on 2026-08-28:
  - Scorpion Masqué official game page: `https://www.scorpionmasque.com/en/sky-team`
  - Scorpion Masqué official rulebook: `https://www.scorpionmasque.com/sites/scorpionmasque.com/files/st_rules01_en_06jun2023.pdf`
  - Scorpion Masqué official store: `https://shop.scorpionmasque.com/products/sky-team`

## Current position
- Published catalog count: 76.
- Staged-but-unlinked detail pages: 0.
- Published detail-image coverage: 76 / 76.
- Published catalog box-thumbnail coverage: 76 / 76.

## Planned next items
1. Start with `The White Castle` as the next unpublished popular title.
2. Use Devir's current official product page as the primary factual and image source.
3. Current Devir information supports 1–4 players, about 60 minutes, age 12+, and worker/dice placement with resource management.
4. Confirm a box-visible image that satisfies the image/copyright policy before publication.
5. Create `games/the-white-castle.html`, then add its card to `games.html` in the same run.
6. Apply only supportable filter tags after checking the existing category convention and current sources.
7. After publication, update count from 76 to 77 and TOP count only after the catalog card is actually linked.

## Unresolved general items
- `games.html` is large, but safe line-range retrieval through the GitHub connector works. Continue using bounded line reads before full-file replacement to avoid losing existing cards.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
