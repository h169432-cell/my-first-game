# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. First publish the two staged detail pages by adding them to `boardgame-guide/games.html`:
   - `games/marco-polo-ii-in-the-service-of-the-khan.html`
   - `games/troyes.html`
4. Add both catalog cards with verified filter tags only and with box-visible thumbnails plus visible source links.
5. Update the catalog/TOP count from 55 to 57 without expanding the TOP featured grid.
6. After those two staged pages are catalog-linked, continue normal catalog expansion with Teotihuacan: City of Gods.
7. Every new detail page must include at least one relevant image/visual before it is considered complete.
8. Every new catalog card must include a thumbnail where the target game's physical box is clearly visible. Box alone or box plus components/gameplay is acceptable; do not use a thumbnail showing only board/components/cards without the box.
9. Put a visible source link directly beneath each catalog thumbnail/card, and follow the image/copyright policy in `WORK_PLAN.md`.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnails, detail images, and source links.
11. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Immediate task: catalog-link Marco Polo II and Troyes.
- Current published catalog count: 55 total, including Clueverge.
- Staged but not catalog-linked: 2 pages.
- Current detail-image coverage for published catalog: 55 / 55; both staged pages also have visuals.
- Current box-thumbnail coverage in `games.html`: 55 / 55 published cards.
- Next new game after staging is resolved: Teotihuacan: City of Gods.

## Completed in latest run
- Created `games/marco-polo-ii-in-the-service-of-the-khan.html`.
- Verified Marco Polo II against Z-Man Games' official rulebook plus current supporting sources: 2–4 players, 60–120 minutes, age 12+, five rounds, dice placement, travel, contracts, jade, guild seals, trading posts, and standalone status.
- Added a box-visible quoted product image and source link to the Marco Polo II detail page.
- Created `games/troyes.html`.
- Verified Troyes against Pearl Games' official page and rules references: 2–4 players, about 90 minutes, age 12+, military/religious/civil workforce dice, events, activity cards, cathedral construction, and character scoring.
- Added a box-visible quoted product image and source link to the Troyes detail page.
- Both pages link back to `../index.html`.
- Existing `games.html` and `index.html` were intentionally left unchanged to avoid accidentally truncating the 55-card catalog when the execution interface returned the long source content in truncated form.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- The two staged pages exist on the default branch and were created successfully.
- Marco Polo II detail navigation points to `../index.html`.
- Troyes detail navigation points to `../index.html`.
- `games.html` still contains the existing 55 published cards and `object-fit: contain` thumbnail styling.
- Remote image URLs may later change or reject hotlinking; replace broken thumbnails with another sourced box-visible image if discovered.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
