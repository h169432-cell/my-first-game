# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 57 total, including Clueverge.
- Published the previously staged `games/marco-polo-ii-in-the-service-of-the-khan.html` by adding it to `games.html`.
- Published the previously staged `games/troyes.html` by adding it to `games.html`.
- Both new catalog cards use box-visible thumbnails with visible source links and retain `object-fit: contain` through the existing catalog styling.
- Both new catalog cards use only verified browsing tags: `two strategy`.
- Updated `games.html` count from 55 to 57.
- Updated the TOP catalog button from `全55作品を見る` to `全57作品を見る`; the six featured TOP cards were not expanded.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and the staged Marco Polo II / Troyes detail pages were read before editing.
- The current 55-card `games.html` was recovered safely from its Git blob before replacement, resolving the prior long-file truncation concern.
- Re-fetched the tail of `games.html` after writing and confirmed links/cards for both Marco Polo II and Troyes, including box-visible image URLs and source links.
- Re-fetched `index.html` after writing and confirmed the `全57作品を見る` count while preserving the compact featured grid.
- Existing detail pages continue to link back to `../index.html`.
- Preliminary research for the next title, Teotihuacan: City of Gods, was performed against Board&Dice and BoardGameGeek. Current Board&Dice product information lists 1–4 players and 90–120 minutes. Age information differs across current Board&Dice pages (12+ on the store product page, 14+ on the legacy/our-games page), so the detail page should explicitly resolve which edition/specification is being presented before publication.

## Current position
- Published catalog count: 57.
- Staged but not catalog-linked pages: 0.
- Detail-image coverage: 57 / 57 published pages have at least one relevant visual.
- Catalog box-thumbnail coverage: 57 / 57 published cards.

## Planned next items
1. Continue normal catalog expansion with Teotihuacan: City of Gods.
2. Resolve the current 12+ vs 14+ age discrepancy by choosing and citing a specific current edition/source rather than guessing.
3. Create the Teotihuacan detail page with at least one relevant visual and publish its box-visible catalog card in the same run.
4. Every future `games.html` card must include a thumbnail where the physical box is clearly visible, with a visible source link.
5. Continue adding new titles to `games.html`, not the TOP featured grid.

## Unresolved general items
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Image/copyright assessment remains source- and context-specific; follow `WORK_PLAN.md` for every future thumbnail and detail image.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
