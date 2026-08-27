# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Continue normal catalog expansion with Grand Austria Hotel.
4. Add every completed new game to `boardgame-guide/games.html` in the same run. Do not append every new title to TOP.
5. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
6. Every new detail page must include at least one relevant image/visual before it is considered complete.
7. Every new catalog card must include a thumbnail where the target game's physical box is clearly visible. Box alone or box plus components/gameplay is acceptable; do not use a thumbnail showing only board/components/cards without the box. The catalog thumbnail may differ from the detail-page image.
8. Put a visible source link directly beneath each catalog thumbnail/card, and follow the image/copyright policy in `WORK_PLAN.md`.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnails, detail images, and source links.
10. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Next game for catalog expansion: Grand Austria Hotel.
- Current published guide count: 51 total, including Clueverge.
- Current detail-image coverage: 51 / 51.
- Current box-thumbnail coverage in `games.html`: 51 / 51.

## Completed in latest catalog-thumbnail pass
- Reworked all 51 cards in `boardgame-guide/games.html` from dark text-only cards to image-led cards.
- Added one box-visible thumbnail per game. Each selected thumbnail visibly contains the physical game box.
- Added visible image-source links beneath all catalog cards.
- Added responsive thumbnail styling and `object-fit: contain` so product boxes remain visible rather than being cropped.
- Preserved existing filter tags, game titles, detail hrefs, and 51-item count.
- Updated `WORK_PLAN.md` to require the same box-thumbnail convention for all future catalog additions.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- `games.html` was re-fetched after the update and the thumbnail/source structure was confirmed at both the beginning and end of the catalog.
- Current catalog count remains 51.
- El Grande and Five Tribes, the latest additions, both have box-visible thumbnails.
- Remote image hosts can later change URLs or reject hotlinking; replace broken thumbnails with another sourced box-visible image if discovered.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
