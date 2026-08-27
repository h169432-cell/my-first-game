# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 59 total, including Clueverge.
- Added and published `games/teotihuacan-city-of-gods.html`.
- Resolved the Teotihuacan age discrepancy by using the current Board&Dice base-game Web Store listing for the presented specification: 1–4 players, 90–120 minutes, age 12+. The separate Deluxe Master Set page's 14+ listing was not used as the base-game age specification.
- Added and published `games/barrage.html` using current Cranio Creations product information for 1–4 players, about 120 minutes, and age 14+.
- Both new `games.html` cards use box-visible thumbnails with visible source links and retain `object-fit: contain` through the existing catalog styling.
- Both new catalog cards use only the verified browsing tag `strategy`.
- Updated `games.html` count from 57 to 59.
- Updated the TOP catalog button from `全57作品を見る` to `全59作品を見る`; the six featured TOP cards were not expanded.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and `games/troyes.html` before editing.
- Re-fetched `games.html` after writing and confirmed the 59-work count plus the new Teotihuacan and Barrage detail links, box-visible image URLs, source links, and unchanged `object-fit: contain` catalog styling.
- Re-fetched `index.html` after writing and confirmed the TOP remains compact with the existing six featured games and the catalog count updated to 59.
- Re-fetched both new detail pages and confirmed each contains a relevant box image, required game information, source links, and a `../index.html` navigation link back to TOP.
- Teotihuacan is explicitly documented against the current base-game Board&Dice store listing rather than mixing specifications from the separate Deluxe Master Set.
- Barrage specifications were checked against the current Cranio Creations product page.

## Current position
- Published catalog count: 59.
- Staged but not catalog-linked pages: 0.
- Detail-image coverage: 59 / 59 published pages have at least one relevant visual.
- Catalog box-thumbnail coverage: 59 / 59 published cards.

## Planned next items
1. Continue normal catalog expansion with Underwater Cities.
2. Verify current publisher/product specifications before creating the page; do not guess missing values.
3. Create the Underwater Cities detail page with at least one relevant visual and publish its box-visible catalog card in the same run.
4. Every future `games.html` card must include a thumbnail where the physical box is clearly visible, with a visible source link.
5. Continue adding new titles to `games.html`, not the TOP featured grid.

## Unresolved general items
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Image/copyright assessment remains source- and context-specific; follow `WORK_PLAN.md` for every future thumbnail and detail image.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
