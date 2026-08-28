# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 78.
4. There are no staged-but-unlinked detail pages.
5. Start the next expansion with `Earth`.
6. First confirm current publisher specifications/rules and secure a box-visible image that satisfies the image policy.
7. Add the detail page and catalog card in the same run.
8. Apply only supportable filters; do not infer category tags from popularity or theme.
9. After Earth is fully linked, update the catalog and TOP counts only after the card is actually published; keep the six featured TOP titles unchanged.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next title: `Earth`.
- Current published catalog count: 78 total, including Clueverge.
- Staged detail pages: 0.
- Current published detail-image coverage: 78 / 78.
- Current published box-thumbnail coverage in `games.html`: 78 / 78.
- Repository search on 2026-08-28 returned no `earth.html` result. Reconfirm before editing.

## Latest validation
- `The White Castle` and `Forest Shuffle` are fully linked from `games.html`.
- The White Castle uses only `strategy`; Forest Shuffle has no unsupported current category filter.
- Both new catalog cards contain clearly box-visible images and visible source links.
- `games.html` now displays 78 works and retains its closing catalog markup, footer, filter script, and shared `object-fit: contain` thumbnail rule.
- TOP still has six featured titles and now shows `全78作品を見る`.
- Current The White Castle sources checked 2026-08-28:
  - `https://devirgames.com/the-white-castle`
  - `https://devirgames.com/presentation-the-white-castle`
  - `https://zulusgames.com/collections/board-games-strategy/products/the-white-castle`
- Current Forest Shuffle sources checked 2026-08-28:
  - `https://store.asmodee.com/products/forest-shuffle`
  - `https://boardgamegeek.com/boardgame/391163/forest-shuffle`

## Catalog editing method
- `games.html` can be fetched safely through the GitHub connector.
- Before replacing the complete large file, retrieve enough current content to reconstruct it exactly and confirm the current base commit/tree.
- Do not submit a partial reconstruction.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
