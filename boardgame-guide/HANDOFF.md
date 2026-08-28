# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 67.
4. No staged-but-unlinked detail pages remain.
5. Continue normal catalog expansion with `The Gallerist`.
6. Verify player count, play time, age, and core rules from reliable current sources before publication; do not infer missing specifications.
7. Create the Japanese detail page with at least one relevant sourced image.
8. Add the completed game to `games.html` with a thumbnail where the physical box is clearly visible, `object-fit: contain`, and a visible thumbnail source link.
9. Apply only supportable filter tags, then update catalog/TOP counts while keeping the six featured TOP games unchanged.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Next game: The Gallerist.
- Current published catalog count: 67 total, including Clueverge.
- Current detail-image coverage: 67 / 67.
- Current box-thumbnail coverage in `games.html`: 67 / 67.

## Completed in latest run
- Added and published `Kanban EV`.
- Added and published `Lisboa Deluxe Edition`.
- Both catalog cards use official Eagle-Gryphon Games box-visible thumbnails with visible source links and `strategy` tags.
- Updated `games.html` from 65 to 67 works.
- Updated TOP from `全65作品を見る` to `全67作品を見る` while retaining the same six featured games.
- Re-fetched catalog head/tail after editing to verify the new count and cards.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- Kanban EV: Arclight confirmed 1–4 players, 60–150 minutes, age 14+; Eagle-Gryphon Games supplied current product context and the box image.
- Lisboa Deluxe Edition: Eagle-Gryphon Games confirmed 1–4 players, about 120 minutes, age 14+, core theme, and box image; BoardGameGeek was used as a secondary cross-check.
- Both new detail pages link back to `../index.html`.
- TOP remains intentionally compact at six featured games.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
