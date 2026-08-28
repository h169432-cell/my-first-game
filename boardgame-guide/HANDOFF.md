# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 69.
4. Four staged detail pages exist: `games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, `games/horseless-carriage.html`.
5. Publish those four staged pages into `games.html` before researching another title.
6. Use a clearly box-visible thumbnail and visible source link for every new catalog card.
7. Apply only the `strategy` filter tag to all four staged titles; do not add unsupported quick/beginner/party/two tags.
8. After all four catalog cards are published, update the count from 69 to 73 and change only the TOP total-count button from `全69作品を見る` to `全73作品を見る`; keep the six featured titles unchanged.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
10. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next task: safely reconstruct/retrieve the complete current `games.html`, then publish On Mars, Weather Machine, Food Chain Magnate, and Horseless Carriage.
- Current published catalog count: 69 total, including Clueverge.
- Staged detail pages: 4.
- Current published detail-image coverage: 69 / 69, plus all four staged pages have a relevant image or visual.
- Current published box-thumbnail coverage in `games.html`: 69 / 69.

## Completed in latest run
- Confirmed the prior Git state first; On Mars and Weather Machine remain staged and unlinked.
- Created `games/food-chain-magnate.html` from the current Splotter Spellen product page plus BoardGameGeek for age information.
- Food Chain Magnate: 2–5 players, 120–240 minutes, age 14+; heavy fast-food-chain economic strategy centered on staff management, marketing, demand and sales.
- Created `games/horseless-carriage.html` from the current Splotter Spellen 2nd Edition product page plus BoardGameGeek for player/time/age specifications.
- Horseless Carriage: 3–5 players, 180–240 minutes, age 14+; heavy automobile-industry strategy with factory layout, technology/specification and market-demand decisions.
- `games.html` and TOP were intentionally not changed because the available GitHub write action replaces the whole file and complete content retrieval is still truncated; existing 69 cards were not put at risk.
- No intended edits outside `boardgame-guide/`.

## Catalog cards to add next
- On Mars: `games/on-mars.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102253-2_700x700.png?v=1747772607`; source `https://www.eagle-gryphon.com/products/on-mars`.
- Weather Machine: `games/weather-machine.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102357-2_700x700.png?v=1747772838`; source `https://www.eagle-gryphon.com/products/weather-machine`.
- Food Chain Magnate: `games/food-chain-magnate.html`; tag `strategy`; verify a stable box-visible catalog thumbnail before publication. Official product source: `https://www.splottershop.com/products/food-chain-magnate`.
- Horseless Carriage: `games/horseless-carriage.html`; tag `strategy`; a box-visible image is currently used on the detail page from `https://www.carousell.sg/p/horseless-carriage-board-game-1258460736/`; re-verify before using it in the catalog.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- On Mars and Weather Machine official Eagle-Gryphon Games images clearly show the physical game box.
- Food Chain Magnate detail page uses an original site-made visual, not a third-party box image; a separate box thumbnail is still required for catalog publication.
- Horseless Carriage detail image visibly shows the physical game box and has an explicit source link.
- All four staged detail pages link back to `../index.html`.
- TOP remains intentionally compact at six featured games and still displays `全69作品を見る` until catalog cards are actually added.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
