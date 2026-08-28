# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 74 total, including Clueverge.
- Added `SETI: Search for Extraterrestrial Intelligence` as a complete Japanese detail page.
- Added SETI to `games.html` with a clearly box-visible Czech Games Edition official-store thumbnail and visible source link.
- Applied only the verified `strategy` filter tag to SETI.
- Updated `games.html` count from 73 to 74.
- Updated the compact TOP button from `全73作品を見る` to `全74作品を見る`; the six featured titles remain unchanged.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and an existing detail page before editing.
- Reconstructed `games.html` from bounded line-range reads before replacement and preserved the existing catalog cards, footer, and filter script.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed `games.html` contains `games/seti-search-for-extraterrestrial-intelligence.html`.
- Confirmed the SETI catalog card uses `data-tags="strategy"` only.
- Confirmed the SETI card contains `.thumb-shell` + `.thumb`, with the shared `object-fit: contain` rule preserved.
- Confirmed the thumbnail visibly shows the physical SETI box and has a visible Czech Games Edition source link.
- Confirmed the SETI detail page links back to `../index.html` and includes overview, player count, play time, age, basic rules, appeal, image attribution, and reliable sources.
- Confirmed `games.html` retains the closing catalog markup, footer, and filter script after the addition.
- Confirmed TOP remains compact with six featured games and now shows `全74作品を見る`.
- Current SETI sources checked on 2026-08-28:
  - CGE game page: `https://www.czechgames.com/games/seti-search-for-extraterrestrial-intelligence`
  - CGE press page: `https://www.czechgames.com/for-press-games/seti-search-for-extraterrestrial-intelligence`
  - CGE store/image source: `https://store.czechgames.com/products/seti`
- CGE states SETI is a 1–4 player, age 14+, 40 min/player strategy game.

## Current position
- Published catalog count: 74.
- Staged-but-unlinked detail pages: 0.
- Published detail-image coverage: 74 / 74.
- Published catalog box-thumbnail coverage: 74 / 74.

## Planned next items
1. Start with `Arcs` as the next unpublished popular title.
2. Use Leder Games / official distribution information as primary factual sources and BoardGameGeek only as a secondary cross-check where useful.
3. Current verified public information supports 2–4 players, 60–120 minutes, age 14+, and strategy classification.
4. Confirm a box-visible image that satisfies the image/copyright policy before publication.
5. Create `games/arcs.html`, then add its card to `games.html` in the same run.
6. Apply only supportable filter tags; `strategy` is supportable. Do not add `two` solely because the game supports two players unless the existing category convention and source support justify it.
7. After publication, update count from 74 to 75 and TOP count only after the catalog card is actually linked.

## Unresolved general items
- `games.html` is large, but safe line-range retrieval through the GitHub connector works. Continue using bounded line reads before full-file replacement to avoid losing existing cards.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
