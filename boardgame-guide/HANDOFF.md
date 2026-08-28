# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 67.
4. Two staged detail pages already exist: `games/the-gallerist.html` and `games/vinhos-deluxe.html`.
5. First publish those two staged pages into `games.html` with box-visible thumbnails and visible source links, then update catalog/TOP counts from 67 to 69.
6. Use the existing official Eagle-Gryphon Games box images already embedded in the staged pages for their catalog cards; keep `object-fit: contain`.
7. Apply only supportable filter tags. `strategy` is appropriate; do not infer other tags.
8. After both staged pages are linked and counts are verified, continue normal expansion with `On Mars`.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
10. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate task: add The Gallerist and Vinhos Deluxe to the catalog.
- Current published catalog count: 67 total, including Clueverge.
- Staged detail pages: 2.
- Current published detail-image coverage: 67 / 67.
- Current published box-thumbnail coverage in `games.html`: 67 / 67.
- Next new research title after catalog sync: On Mars.

## Completed in latest run
- Added `games/the-gallerist.html`.
- Added `games/vinhos-deluxe.html`.
- Both pages use official Eagle-Gryphon Games box-visible product imagery with visible source links.
- The Gallerist specifications were checked against Eagle-Gryphon Games and BoardGameGeek.
- Vinhos Deluxe specifications were checked against Eagle-Gryphon Games and BoardGameGeek.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- The Gallerist official product page lists age 12+ and 120 minutes and supplies the current official box image; BoardGameGeek confirms 1–4 players and 60–150 minutes.
- Vinhos Deluxe official product page lists 1–4 players, 90–180 minutes, age 14+, and the six-year wine-estate structure.
- Both staged pages link back to `../index.html`.
- TOP remains intentionally compact at six featured games and still displays `全67作品を見る` until the staged pages are added to the catalog.
- `games.html` is large and direct full-file responses may be truncated; never replace it from an incomplete payload.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
