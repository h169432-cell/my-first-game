# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 65.
4. No staged-but-unlinked detail pages remain.
5. Continue normal catalog expansion with `Kanban EV`.
6. Verify player count, play time, age, and core rules from reliable current sources before publication; do not infer missing specifications.
7. Create the Japanese detail page with at least one relevant sourced image.
8. Add the completed game to `games.html` with a thumbnail where the physical box is clearly visible, `object-fit: contain`, and a visible thumbnail source link.
9. Apply only supportable filter tags, then update catalog/TOP counts while keeping the six featured TOP games unchanged.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Next game: Kanban EV.
- Current published catalog count: 65 total, including Clueverge.
- Current detail-image coverage: 65 / 65.
- Current box-thumbnail coverage in `games.html`: 65 / 65.

## Completed in latest run
- Added and published `Anachrony: Essential Edition`.
- Added and published `Trickerion: Legends of Illusion`.
- Both catalog cards use box-visible thumbnails with visible source links and `strategy` tags.
- Updated `games.html` from 63 to 65 works.
- Updated TOP from `全63作品を見る` to `全65作品を見る` while retaining the same six featured games.
- Re-fetched catalog head/tail after editing to verify the new count and cards.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- Anachrony detail: Mindclash Games official product/rule information plus BoardGameGeek for play time/age; box image sourced from Lanlalen.
- Trickerion detail: Mindclash Games official rulebook plus BoardGameGeek for player count/play time/age; box image sourced from Mindclash Games' Gamefound project update.
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
