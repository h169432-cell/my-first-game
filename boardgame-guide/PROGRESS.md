# Board Game Guide — Progress

Last updated: 2026-08-29

## Completed
- Published catalog guide pages remain 78 total, including Clueverge.
- `Earth` and `Harmonies` detail pages remain staged and verified but are not yet linked from the catalog.
- Re-read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, `games/earth.html`, `games/harmonies.html`, and an existing published detail page (`games/catan.html`) before editing.
- Retrieved the complete current `games.html` blob and confirmed the catalog still contains 78 published cards before attempting publication.
- A catalog replacement attempt did not preserve all existing cards. It was immediately reverted at Git level by restoring the exact prior `games.html` blob (`807eac0ca1d393a2b03b76e8e31e785cf272ec19`). Current HEAD again contains the complete 78-card catalog.
- Verified after restoration that `games.html` again shows `78作品` and begins with the original published cards.
- Researched `Wyrmspan` as a future candidate from current Stonemaier Games and BoardGameGeek data: 1–5 players, 90 minutes, age 14+, with an official box-visible product image available. No Wyrmspan page was created in this run because catalog publication must be solved first.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Confirmed current restored `games.html` blob SHA is `807eac0ca1d393a2b03b76e8e31e785cf272ec19`.
- Confirmed current catalog count remains 78.
- Confirmed `Earth` and `Harmonies` detail pages still link back to `../index.html` and contain verified box-visible official images and source links.
- Confirmed TOP remains compact at six featured titles and still shows `全78作品を見る`.
- Current Earth sources:
  - `https://insideupgames.com/our-games/earth-board-game/`
  - `https://insideupgames.com/product/earth-board-game/`
  - `https://store.asmodee.com/products/earth`
- Current Harmonies sources:
  - `https://www.libellud.com/en/our-games/harmonies/`
  - `https://store.asmodee.com/products/harmonies-1`
- Wyrmspan sources checked 2026-08-29:
  - `https://store.stonemaiergames.com/products/wyrmspan`
  - `https://boardgamegeek.com/boardgame/410201/wyrmspan`

## Current position
- Published catalog count: 78.
- Staged-but-unlinked detail pages: 2 (`Earth`, `Harmonies`).
- Published detail-image coverage: 78 / 78; staged pages also each contain a verified relevant image.
- Published catalog box-thumbnail coverage: 78 / 78.

## Planned next items
1. Do not create further staged detail pages until `Earth` and `Harmonies` can be published safely in the complete catalog.
2. Add `Earth` and `Harmonies` to `games.html` only using a method that preserves the full existing file byte-for-byte except for the intended count/card additions.
3. Filters: Earth = `strategy`; Harmonies = `quick beginner strategy`; do not add `two` to Harmonies solely because two players are permitted.
4. Only after both cards are linked, update catalog/TOP counts from 78 to 80 while keeping the same six featured TOP titles.
5. Validate total card count, catalog → detail, detail → TOP, image/source links, filter behavior, and closing catalog markup before committing.
6. After the catalog backlog is cleared, `Wyrmspan` is the next researched candidate.

## Unresolved general items
- The available GitHub contents write action replaces an entire file. `games.html` is large, and an attempted manual full replacement proved unsafe because it dropped existing cards. Do not repeat that approach. Use an editing path that can apply a targeted patch or otherwise programmatically preserve and transform the complete blob.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
