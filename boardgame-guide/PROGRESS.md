# Board Game Guide — Progress

Last updated: 2026-08-27

## Completed
- Published guide pages remain at 30 total, including Clueverge.
- Restructured `boardgame-guide/index.html` so TOP is a compact landing page rather than a full catalog.
- TOP now contains:
  - six featured games only,
  - a prominent link to the complete catalog,
  - category entry points for 2-player, 30 minutes or less, beginner-friendly, party, strategy, and all games.
- Added `boardgame-guide/games.html` as the complete 30-title catalog.
- `games.html` supports the same category filters used by the TOP entry points and preserves direct links to all existing detail pages.
- Removed the prior pattern of appending every published title to TOP.
- Updated `WORK_PLAN.md` so future runs add new games to `games.html`, not to TOP.
- Updated the stored automation prompt to follow the same catalog-based structure; its enabled/disabled state was not changed.
- Existing repository-root game app was not changed.

## Verification performed
- Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, current `index.html`, and the CATAN detail page before restructuring.
- Confirmed existing detail pages use `../index.html` for back-navigation (CATAN checked directly).
- Confirmed uncertain existing filenames for `the-crew-mission-deep-sea.html` and `the-quacks-of-quedlinburg.html` before linking them in the new catalog.
- Re-fetched `games.html` after creation and confirmed all 30 catalog cards are present, including the final Ark Nova entry and the filter script.
- Re-fetched `index.html` after replacement and confirmed the six featured cards, complete-catalog link, and category links are saved.
- TOP category links use `games.html?filter=...`; the catalog reads the query parameter and applies the matching filter.
- No files outside `boardgame-guide/` were intentionally modified.

## Current position
- Published guide pages: 30 total, including Clueverge.
- Information architecture now scales through a separate full catalog page.

## Planned next items
1. Continue with Agricola.
2. Add each new verified game page under `games/` and add it to `games.html` in the same run.
3. Keep TOP limited to the current curated featured set unless intentionally revising the featured selection.
4. Continue adding several verified games per run when safe.
5. Continue using placeholders/source links when image reuse permission is unclear.

## Unresolved
- Image reuse rights remain game-specific; do not copy publisher product images without a reasonable reuse basis.
- Category labels such as beginner-friendly are editorial browsing aids; use them conservatively and do not present them as official publisher classifications unless sourced.
- Preserve the existing Clueverge detail page unless a separately verified issue requires a change.
- All work must remain under `boardgame-guide/`.
