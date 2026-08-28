# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 69.
4. Four staged detail pages exist: `games/on-mars.html`, `games/weather-machine.html`, `games/food-chain-magnate.html`, `games/horseless-carriage.html`.
5. Publish those four staged pages into `games.html` before researching another title.
6. Use a clearly box-visible thumbnail and visible source link for every new catalog card.
7. Apply only the `strategy` filter tag to all four staged titles.
8. After all four catalog cards are published, update the count from 69 to 73 and change only the TOP total-count button from `全69作品を見る` to `全73作品を見る`; keep the six featured titles unchanged.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
10. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next task: obtain a safe complete editable copy of the current `games.html`, then publish On Mars, Weather Machine, Food Chain Magnate, and Horseless Carriage.
- Current published catalog count: 69 total, including Clueverge.
- Staged detail pages: 4.
- Current published detail-image coverage: 69 / 69, plus all four staged pages have a relevant image or visual.
- Current published box-thumbnail coverage in `games.html`: 69 / 69.

## Latest validation
- On Mars official product page remains current: `https://www.eagle-gryphon.com/products/on-mars`.
- Weather Machine official product page remains current: `https://www.eagle-gryphon.com/products/weather-machine`.
- Food Chain Magnate official product page remains current: `https://www.splottershop.com/products/food-chain-magnate`. It is currently presented as a pre-order for the 13th print run, which Splotter states is identical to previous print runs.
- Splotter's current games page still lists Horseless Carriage 2nd Edition as currently available: `https://www.splottershop.com/pages/games`.
- `games.html` still reports 69 works and the four staged pages remain unlinked.
- TOP still has six featured titles and `全69作品を見る`.

## Catalog cards to add next
- On Mars: `games/on-mars.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102253-2_700x700.png?v=1747772607`; source `https://www.eagle-gryphon.com/products/on-mars`.
- Weather Machine: `games/weather-machine.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102357-2_700x700.png?v=1747772838`; source `https://www.eagle-gryphon.com/products/weather-machine`.
- Food Chain Magnate: `games/food-chain-magnate.html`; tag `strategy`; official product source `https://www.splottershop.com/products/food-chain-magnate`; retrieve and verify a direct stable box-visible image URL before catalog publication.
- Horseless Carriage: `games/horseless-carriage.html`; tag `strategy`; prefer a box-visible image from the current official Splotter product presentation; otherwise use another verifiable source permitted by `WORK_PLAN.md`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Blocking implementation detail
- Current GitHub connector reads of `games.html` are truncated because the catalog is large.
- The available file write operation replaces the entire file rather than applying a textual patch.
- Do not submit a partial reconstruction of `games.html`; it could delete existing cards.
- Continue attempting a safe full-file retrieval/edit mechanism before changing the catalog.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
