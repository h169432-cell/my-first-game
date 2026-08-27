# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages: 59 total, including Clueverge.
- Added staged detail page `games/underwater-cities.html`.
- Underwater Cities specifications were verified against Delicious Games: 1–4 players, 40 minutes per player, age 12+.
- Underwater Cities flow was checked against the official English rulebook: action-slot + card play, color matching, 10 rounds, and 3 Production phases.
- Added staged detail page `games/carnegie.html`.
- Carnegie specifications were verified against Pegasus Spiele: 1–4 players, 90–120 minutes, age 12+.
- Carnegie structure was checked against Quined Games: 20 rounds, one of four actions chosen by the active player, employee/company development, transport/business investment, and philanthropy.
- Both staged detail pages contain a box-visible quoted product image with a visible source link and use `object-fit: contain`.
- Corrected the Underwater Cities image URL after verifying the exact Morat Games CDN image.
- Corrected the Carnegie image URL after verifying the exact Lelekan image resource.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and `games/barrage.html` before editing.
- Verified Underwater Cities facts against Delicious Games and its official rulebook.
- Verified Carnegie facts against Pegasus Spiele and Quined Games.
- Opened the Morat Games product page and followed its image link to confirm the exact Underwater Cities box-image URL.
- Opened the Lelekan Carnegie product page and followed its product image to confirm the exact box-image URL.
- Both new detail pages link back to `../index.html`.

## Current position
- Published catalog count: 59.
- Staged but not catalog-linked pages: 2 (`Underwater Cities`, `Carnegie`).
- Detail-image coverage for published pages: 59 / 59.
- Catalog box-thumbnail coverage: 59 / 59 published cards.
- `games.html` and TOP count remain 59 because the two new pages are not yet catalog-linked.

## Planned next items
1. Publish Underwater Cities and Carnegie into `games.html` with box-visible thumbnails and visible source links, then update the catalog/TOP count from 59 to 61.
2. Use only verified filter tags; both staged titles are appropriate for `strategy`, and do not add other tags without support.
3. Re-check catalog → detail, detail → TOP, thumbnail image URLs, source links, and count after the catalog write.
4. Resume normal catalog expansion only after the two staged pages are linked.
5. Every future `games.html` card must include a thumbnail where the physical box is clearly visible, with a visible source link.

## Unresolved general items
- `games.html` is large and the connector response is truncated when fetched in broad ranges. Do not reconstruct or overwrite it from incomplete output. Fetch sufficiently small line ranges so the full current file can be reconstructed safely before the next catalog write.
- Carnegie's currently verified direct image is a small thumbnail resource. It is valid and box-visible, but replace it with a larger verifiably sourced image if one is found before catalog publication.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Image/copyright assessment remains source- and context-specific; follow `WORK_PLAN.md` for every future thumbnail and detail image.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
