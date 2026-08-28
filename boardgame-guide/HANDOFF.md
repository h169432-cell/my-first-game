# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 69.
4. Two staged detail pages now exist: `games/on-mars.html` and `games/weather-machine.html`.
5. Publish those two staged pages into `games.html` before researching another title.
6. Use each title's official Eagle-Gryphon Games box-visible product image and visible source link in the catalog.
7. Apply only the `strategy` filter tag to both cards.
8. After catalog publication, update the count from 69 to 71 and change only the TOP total-count button from `全69作品を見る` to `全71作品を見る`; keep the six featured titles unchanged.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
10. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next task: publish On Mars and Weather Machine into `games.html`.
- Current published catalog count: 69 total, including Clueverge.
- Staged detail pages: 2.
- Current published detail-image coverage: 69 / 69, plus both staged pages have images.
- Current published box-thumbnail coverage in `games.html`: 69 / 69.

## Completed in latest run
- Created `games/on-mars.html` from current official Eagle-Gryphon Games information and supporting Japanese publisher information.
- On Mars uses 1–4 players, 60–120 minutes, age 14+ from the current Eagle-Gryphon Games product page.
- Created `games/weather-machine.html` from the current official Eagle-Gryphon Games product page.
- Weather Machine uses 2–4 players, 60–150 minutes, age 14+.
- Both pages use official Eagle-Gryphon Games box-visible product images with visible attribution and link back to `../index.html`.
- Catalog and TOP were intentionally not changed because a complete safe reconstruction of the large `games.html` was not finished in this run.
- No intended edits outside `boardgame-guide/`.

## Catalog cards to add next
- On Mars: `games/on-mars.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102253-2_700x700.png?v=1747772607`; source `https://www.eagle-gryphon.com/products/on-mars`.
- Weather Machine: `games/weather-machine.html`; tag `strategy`; image `https://www.eagle-gryphon.com/cdn/shop/files/102357-2_700x700.png?v=1747772838`; source `https://www.eagle-gryphon.com/products/weather-machine`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- Both new official images clearly show the physical game box.
- Both new detail pages link back to `../index.html`.
- TOP remains intentionally compact at six featured games and still displays `全69作品を見る` until the catalog cards are added.
- `games.html` is large and direct full-file responses may be truncated; use complete line-range reads before replacing it.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
