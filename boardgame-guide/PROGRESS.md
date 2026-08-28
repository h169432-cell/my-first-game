# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 67 total, including Clueverge.
- Added `games/kanban-ev.html` and `games/lisboa-deluxe-edition.html`.
- Added both titles to `games.html` with `strategy` tags.
- Kanban EV catalog card uses the official Eagle-Gryphon Games box image with a visible source link.
- Lisboa Deluxe Edition catalog card uses the official Eagle-Gryphon Games box image with a visible source link.
- Updated the `games.html` visible count from 65 to 67.
- Updated the TOP button from `全65作品を見る` to `全67作品を見る` without changing the six featured games.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and `games/trickerion-legends-of-illusion.html` before editing.
- Kanban EV: confirmed the Japanese edition at Arclight as 1–4 players, 60–150 minutes, age 14+; Eagle-Gryphon Games was used for the current product description and official box image.
- Lisboa Deluxe Edition: confirmed the current Eagle-Gryphon Games edition as 1–4 players, about 120 minutes, age 14+, with current product description and official box image; BoardGameGeek was used as a secondary cross-check for the base game's player-count/play-time context.
- Re-fetched the catalog head and tail after publication.
- Confirmed `games.html` displays `67作品`.
- Confirmed both new cards link to their detail pages, use box-visible thumbnails, show source links, and retain `object-fit: contain` through the existing catalog CSS.
- Updated TOP only to change the total count; the six featured game cards remain unchanged.
- Both new detail pages link back to `../index.html` and contain sourced relevant images.

## Current position
- Published catalog count: 67.
- Detail-image coverage: 67 / 67 published pages.
- Catalog box-thumbnail coverage: 67 / 67 published cards.
- No staged-but-unlinked detail pages remain.

## Planned next items
1. Continue expansion with `The Gallerist`.
2. Use Eagle-Gryphon Games / current rule material where available as the primary factual source; verify player count, play time, age, and core gallery-management rules before publication.
3. Create the Japanese detail page with a relevant sourced image, then add a box-visible catalog thumbnail/source link and only supportable filter tags.
4. Update catalog/TOP counts only after the new page and card are both complete.

## Unresolved general items
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
