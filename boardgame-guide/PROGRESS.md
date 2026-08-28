# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 65 total, including Clueverge.
- Added `games/anachrony-essential-edition.html` and `games/trickerion-legends-of-illusion.html`.
- Added both titles to `games.html` with `strategy` tags.
- Anachrony catalog card uses a box-visible Lanlalen image with a visible source link.
- Trickerion catalog card uses a box-visible Mindclash Games / Gamefound image with a visible source link.
- Updated the `games.html` visible count from 63 to 65.
- Updated the TOP button from `全63作品を見る` to `全65作品を見る` without changing the six featured games.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and `games/nucleum.html` before editing.
- Confirmed Anachrony Essential Edition is the current 2–4 player base game via Mindclash Games; play time 30–120 minutes and age 15+ were cross-checked with BoardGameGeek.
- Confirmed Trickerion: Legends of Illusion rules from the current Mindclash Games rulebook; 2–4 players, 60–180 minutes, age 14+ were cross-checked with BoardGameGeek.
- Re-fetched the catalog head and tail after publication.
- Confirmed `games.html` displays `65作品`.
- Confirmed both new cards link to their detail pages, use box-visible thumbnails, show source links, and retain `object-fit: contain` through the existing catalog CSS.
- Rebuilt TOP only to update the count; the six featured game cards remain unchanged.
- Both new detail pages link back to `../index.html` and contain sourced relevant images.

## Current position
- Published catalog count: 65.
- Detail-image coverage: 65 / 65 published pages.
- Catalog box-thumbnail coverage: 65 / 65 published cards.
- No staged-but-unlinked detail pages remain.

## Planned next items
1. Continue expansion with `Kanban EV`.
2. Use Eagle-Gryphon Games / current rule material where available as the primary factual source; cross-check 1–4 players, 60–180 minutes, and age 14+ before publication.
3. Create the Japanese detail page with a relevant sourced image, then add a box-visible catalog thumbnail/source link and only supportable filter tags.
4. Update catalog/TOP counts only after the new page and card are both complete.

## Unresolved general items
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
