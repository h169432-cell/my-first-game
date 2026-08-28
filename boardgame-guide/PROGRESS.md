# Board Game Guide — Progress

Last updated: 2026-08-28

## Completed
- Published catalog guide pages remain 67 total, including Clueverge.
- Added staged detail pages `games/the-gallerist.html` and `games/vinhos-deluxe.html`.
- Both staged pages include Japanese overview, player count, play time, age, core rules/how to play, appeal, reliable source links, and a sourced box-visible image.
- The Gallerist uses the current Eagle-Gryphon Games Complete Bundle product page/image and BoardGameGeek as a secondary specification cross-check.
- Vinhos Deluxe uses the current Eagle-Gryphon Games product page/image and BoardGameGeek as a secondary specification cross-check.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and `games/lisboa-deluxe-edition.html` before editing.
- The Gallerist: Eagle-Gryphon Games confirms age 12+, a 120-minute product estimate, theme, components, and official product imagery; BoardGameGeek confirms 1–4 players and 60–150 minutes.
- Vinhos Deluxe: Eagle-Gryphon Games confirms 1–4 players, 90–180 minutes, age 14+, six-year winemaking structure, the two included versions, and official product imagery.
- Both new pages link back to `../index.html` and use `object-fit: contain` for the quoted product image.
- `games.html` was inspected at both head and tail before the run; it remains at 67 published cards.

## Current position
- Published catalog count: 67.
- Staged-but-unlinked detail pages: 2 (`The Gallerist`, `Vinhos Deluxe`).
- Published detail-image coverage: 67 / 67.
- Published catalog box-thumbnail coverage: 67 / 67.
- The two staged pages already have box-visible official images ready to reuse for their catalog cards.

## Planned next items
1. First, publish `The Gallerist` and `Vinhos Deluxe` into `games.html` with box-visible thumbnails and visible Eagle-Gryphon Games source links, then update catalog/TOP counts from 67 to 69.
2. Apply only `strategy` unless another current filter tag is independently supportable; do not infer `two`, `quick`, `beginner`, or `party`.
3. After both staged pages are linked and counts verified, continue normal expansion with `On Mars`.
4. Keep TOP at six featured titles; update only the total-count button.

## Unresolved general items
- `games.html` is now large enough that direct full-file reads can be truncated. Do not replace it from an incomplete payload. Reconstruct or retrieve the complete file before any whole-file update.
- Carnegie's current box image is a small verified thumbnail resource. Replace only if a larger verifiably sourced image is found in a dedicated maintenance pass.
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
