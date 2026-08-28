# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 61; there are no staged-but-unlinked detail pages.
4. Resume normal catalog expansion by researching Nucleum first.
5. Verify player count, play time, age, core rules, and image/source information from reliable current sources before creating the page.
6. Create the detail page and add its `games.html` card in the same run when all required information is verified.
7. Every catalog card must show the physical game box, display the thumbnail source, use `object-fit: contain`, and carry only verified filter tags.
8. Keep `index.html` compact: do not expand the six-card featured grid; update only the total catalog count when needed.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
10. Update `PROGRESS.md`, this file, and the current next-start point in `WORK_PLAN.md` before ending.

## Exact next start point
- Next research target: Nucleum.
- Current published catalog count: 61 total, including Clueverge.
- Staged but not catalog-linked pages: 0.
- Current detail-image coverage: 61 / 61.
- Current box-thumbnail coverage in `games.html`: 61 / 61.

## Completed in latest run
- Read the required planning/state files, TOP, full catalog in safe small ranges, and an existing detail page before editing.
- Published Underwater Cities into `games.html` with `strategy`, a box-visible Morat Games thumbnail, visible source attribution, and a working detail link.
- Published Carnegie into `games.html` with `strategy`, a box-visible Lelekan thumbnail, visible source attribution, and a working detail link.
- Updated `games.html` from 59 to 61 works.
- Updated TOP from `全59作品を見る` to `全61作品を見る` without changing the six featured titles.
- Re-fetched the catalog head and tail after writing and confirmed both new cards and the 61-count state.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- Underwater Cities catalog thumbnail and detail image use the verified Morat Games box image and source page.
- Carnegie catalog thumbnail and detail image use the verified Lelekan box thumbnail and source page.
- Carnegie's image is small but clearly box-visible; a larger verifiably sourced replacement remains desirable when practical.
- Both new detail pages link back to `../index.html`.
- TOP remains intentionally compact at six featured games.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
