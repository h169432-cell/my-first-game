# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. First finish publishing Coimbra: `games/coimbra.html` already exists, but it is not yet linked from `games.html`.
4. Add Coimbra to `boardgame-guide/games.html` with `strategy` tags, a thumbnail where the physical box is clearly visible, and a visible source link; update catalog/TOP count from 53 to 54.
5. Only after Coimbra is fully linked and verified, continue normal catalog expansion with The Voyages of Marco Polo.
6. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
7. Every new detail page must include at least one relevant image/visual before it is considered complete.
8. Every new catalog card must include a thumbnail where the target game's physical box is clearly visible. Box alone or box plus components/gameplay is acceptable; do not use a thumbnail showing only board/components/cards without the box.
9. Put a visible source link directly beneath each catalog thumbnail/card, and follow the image/copyright policy in `WORK_PLAN.md`.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnails, detail images, and source links.
11. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Immediate task: add the already-created Coimbra detail page to the catalog and change counts to 54.
- Next game after that: The Voyages of Marco Polo.
- Current published catalog count: 53 total, including Clueverge.
- Staged but not catalog-linked: Coimbra.
- Current detail-image coverage for published catalog: 53 / 53.
- Current box-thumbnail coverage in `games.html`: 53 / 53.

## Completed in latest run
- Finished publishing Lorenzo il Magnifico in `games.html` with `two strategy` tags.
- Lorenzo's catalog card uses a physical-box image and visible Shopville source link; shared CSS keeps the image contained rather than cropped.
- Updated `games.html` count and TOP count from 52 to 53 without expanding the TOP featured grid.
- Created `games/coimbra.html` with a sourced box visual, Japanese overview, 2–4 players / 75–120 minutes / age 14+ specifications, basic rules, appeal, and source links.
- Coimbra detail facts were checked against Eggertspiele product information surfaced by Miniature Market and the published rulebook structure surfaced by RulesPal.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- Current catalog is 53 and the end of `games.html` was re-fetched after the Lorenzo write.
- Lorenzo detail navigation and Coimbra detail navigation both point to `../index.html`.
- Coimbra's current detail image visibly shows the game box and can also be used as a catalog thumbnail if still reachable next run; verify the remote URL before publishing.
- Remote image URLs may later change or reject hotlinking; replace broken thumbnails with another sourced box-visible image if discovered.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
