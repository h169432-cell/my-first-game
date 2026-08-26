# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Continue with Agricola, then identify additional popular commercially available board games from reliable current sources and create as many complete, verified pages as can safely be finished in the run.
4. Add every completed game to `boardgame-guide/games.html` in the same run. Do not append every new title to TOP.
5. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
6. Add catalog filter tags only when appropriate; use editorial labels conservatively and do not invent factual specs.
7. Keep using neutral visual placeholders or source links when image reuse permission is unclear.
8. Check TOP → catalog, catalog → detail, and detail → TOP relative links.
9. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Next game: Agricola.
- Continue selecting established popular titles with reliable official/current sources.

## Completed in previous run
- Reworked TOP from a growing 30-card catalog into a compact landing page.
- Added a separate `games.html` complete catalog containing all 30 currently published games.
- Added category filtering for: 2-player, 30 minutes or less, beginner-friendly, party, and strategy.
- Updated the durable work plan so future expansion happens in `games.html` rather than continuously enlarging TOP.
- Updated the saved automation prompt so future scheduled expansion follows the new structure if/when that automation is enabled.

## Files changed in previous run
- `boardgame-guide/index.html`
- `boardgame-guide/games.html` (new)
- `boardgame-guide/WORK_PLAN.md`
- `boardgame-guide/PROGRESS.md`
- `boardgame-guide/HANDOFF.md`

## Validation performed
- Read the required durable-state files before editing.
- Confirmed CATAN detail navigation returns to `../index.html`.
- Confirmed existing filenames for The Crew: Mission Deep Sea and The Quacks of Quedlinburg before linking them from the catalog.
- Re-fetched `games.html` after creation: all 30 cards and the query-parameter filter script are present.
- Re-fetched `index.html` after replacement: six featured games, the complete-catalog link, and category links are present.
- TOP category URLs match the filter keys implemented by `games.html`.
- No files outside `boardgame-guide/` were intentionally modified.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify player count, play time, age, rules, publisher/title details from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules. Never reproduce rulebooks or long source passages.
- Use images only where their use is reasonably permitted; otherwise use a source link or a neutral placeholder.
- Keep pages Japanese, mobile-friendly, and consistent with the existing one-page presentation.
- New game pages belong in the complete catalog. TOP should remain intentionally small.

## Unresolved
- Image reuse rights remain game-specific and must be checked before adding publisher/product imagery.
- Beginner/party/strategy labels are browsing aids rather than official publisher claims unless explicitly sourced.
- Do not alter the existing Clueverge detail page unless a separate verified issue requires it.
