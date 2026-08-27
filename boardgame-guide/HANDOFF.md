# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Continue normal catalog expansion with Marco Polo II: In the Service of the Khan.
4. Add every completed new game to `boardgame-guide/games.html` in the same run with verified filter tags only.
5. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
6. Every new detail page must include at least one relevant image/visual before it is considered complete.
7. Every new catalog card must include a thumbnail where the target game's physical box is clearly visible. Box alone or box plus components/gameplay is acceptable; do not use a thumbnail showing only board/components/cards without the box.
8. Put a visible source link directly beneath each catalog thumbnail/card, and follow the image/copyright policy in `WORK_PLAN.md`.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnails, detail images, and source links.
10. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Next game: Marco Polo II: In the Service of the Khan.
- Current published catalog count: 55 total, including Clueverge.
- Staged but not catalog-linked: none.
- Current detail-image coverage for published catalog: 55 / 55.
- Current box-thumbnail coverage in `games.html`: 55 / 55.

## Completed in latest run
- Finished publishing Coimbra in `games.html` with a `strategy` tag.
- Coimbra's catalog card uses a physical-box image and visible Mechanical Keyboards source link.
- Created and published `games/the-voyages-of-marco-polo.html`.
- The Voyages of Marco Polo detail page records 2–4 players, about 75 minutes, age 12+, five rounds, dice placement, resource acquisition, contracts, travel, city trading posts, and final scoring based on verified references.
- Its catalog card uses a physical-box image and visible Leisure Games source link and is tagged `two strategy`.
- Updated `games.html` and TOP count from 53 to 55 without expanding the TOP featured grid.
- Re-fetched the catalog tail and TOP count after writing.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- Current catalog is 55 and the end of `games.html` was re-fetched after the latest write.
- Coimbra and The Voyages of Marco Polo detail navigation point to `../index.html`.
- `games.html` still uses `object-fit: contain` for catalog thumbnails.
- Remote image URLs may later change or reject hotlinking; replace broken thumbnails with another sourced box-visible image if discovered.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
