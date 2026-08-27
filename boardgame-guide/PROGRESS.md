# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 55 total, including Clueverge.
- Finished publishing the previously staged `games/coimbra.html` by adding Coimbra to `games.html` with a `strategy` tag, a box-visible thumbnail, and a visible image-source link.
- Added `games/the-voyages-of-marco-polo.html` and published it in `games.html` with `two strategy` tags, a box-visible thumbnail, and a visible image-source link.
- Updated the catalog count and TOP count from 53 to 55 while keeping the TOP featured grid at six games.
- The Voyages of Marco Polo detail page includes a sourced box visual, Japanese overview, 2–4 players / about 75 minutes / age 12+ specifications, basic rules, appeal, and source links.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, `games/coimbra.html`, and an existing published detail page were read before editing.
- The updated tail of `games.html` was re-fetched after writing and contains Grand Austria Hotel, Lorenzo il Magnifico, Coimbra, and The Voyages of Marco Polo before the closing catalog/script markup.
- Coimbra's catalog thumbnail clearly shows its physical box and uses the Mechanical Keyboards product page as the visible source.
- The Voyages of Marco Polo catalog thumbnail clearly shows its physical box and uses the Leisure Games product page as the visible source.
- Shared catalog CSS still uses `object-fit: contain`, so box artwork is fitted rather than cropped.
- TOP remains compact and now displays `全55作品を見る`.
- The Voyages of Marco Polo facts were checked against Leisure Games' Z-Man Games listing and Yucata's rule reference: 2–4 players, age 12+, about 75 minutes, five rounds, five personal dice, contracts, resource actions, travel, city trading posts, and end-game scoring.
- Both Coimbra and The Voyages of Marco Polo detail navigation use `../index.html`.

## Current position
- Published catalog count: 55.
- Staged detail pages not yet linked from `games.html`: 0.
- Detail image coverage for published catalog: 55 / 55.
- Catalog box-thumbnail coverage: 55 / 55 published cards.

## Planned next items
1. Continue normal catalog expansion with Marco Polo II: In the Service of the Khan.
2. Every future new game page must include at least one relevant detail-page visual.
3. Every future `games.html` card must include a thumbnail where the physical box is clearly visible, with a visible source link.
4. Continue adding new titles to `games.html`, not the TOP featured grid.

## Unresolved general items
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Image/copyright assessment remains source- and context-specific; follow `WORK_PLAN.md` for every future thumbnail and detail image.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
