# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages are now 69 total, including Clueverge.
- Published the previously staged detail pages `games/the-gallerist.html` and `games/vinhos-deluxe.html` into `games.html`.
- Added a catalog card for The Gallerist using the official Eagle-Gryphon Games box-visible product image and visible source link.
- Added a catalog card for Vinhos Deluxe using the official Eagle-Gryphon Games box-visible product image and visible source link.
- Applied only the `strategy` filter tag to both new catalog cards.
- Updated `index.html` total-count button from 67 to 69 while keeping the TOP at six featured titles.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and current detail pages before editing.
- Reconstructed `games.html` from complete line-range reads before replacing it, avoiding the prior truncation risk.
- Verified `games.html` now displays `69作品` and contains both new catalog cards.
- Verified both new cards use box-visible official Eagle-Gryphon Games images, visible source links, and existing `object-fit: contain` thumbnail styling.
- Verified both catalog cards link to `games/the-gallerist.html` and `games/vinhos-deluxe.html` respectively.
- Verified both detail pages link back to `../index.html`.
- Verified `index.html` displays `全69作品を見る` and retains six featured titles.

## Current position
- Published catalog count: 69.
- Staged-but-unlinked detail pages: 0.
- Published detail-image coverage: 69 / 69.
- Published catalog box-thumbnail coverage: 69 / 69.

## Planned next items
1. Continue normal expansion with `On Mars`.
2. Verify current official publisher/product specifications, rules overview, and a legally supportable image source before publishing.
3. Add the completed page to `games.html` with a box-visible thumbnail and only supportable filter tags.
4. Keep TOP at six featured titles; update only the total-count button when the catalog count changes.

## Unresolved general items
- `games.html` is large enough that direct full-file reads can be truncated. Continue using complete line-range retrieval before any whole-file update.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
