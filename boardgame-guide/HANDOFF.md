# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 73.
4. There are no staged-but-unlinked detail pages.
5. Start the next expansion with `SETI: Search for Extraterrestrial Intelligence`.
6. Use Czech Games Edition official game/press pages as primary factual sources.
7. Add a clearly box-visible thumbnail and visible source link when publishing the catalog card.
8. Apply only supportable filters; CGE explicitly describes SETI as a strategy game, so `strategy` is supportable. Do not add other filter tags without separate verification.
9. After SETI is fully linked, update the catalog count from 73 to 74 and change only the TOP total-count button from `全73作品を見る` to `全74作品を見る`; keep the six featured titles unchanged.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next title: `SETI: Search for Extraterrestrial Intelligence`.
- Current published catalog count: 73 total, including Clueverge.
- Staged detail pages: 0.
- Current published detail-image coverage: 73 / 73.
- Current published box-thumbnail coverage in `games.html`: 73 / 73.
- Repository search on 2026-08-28 returned no existing SETI page/card.

## Latest validation
- On Mars, Weather Machine, Food Chain Magnate, and Horseless Carriage are now linked from `games.html`.
- All four new cards use only `strategy` and have visible image-source links.
- `games.html` now displays 73 works and its tail/footer/filter script remain present.
- TOP still has six featured titles and now shows `全73作品を見る`.
- Current official source for SETI: `https://www.czechgames.com/games/seti-search-for-extraterrestrial-intelligence`.
- CGE currently states SETI is for 1–4 players, age 14+, with a length of 40 minutes per player, and classifies it as a strategy game.
- CGE press page: `https://www.czechgames.com/for-press-games/seti-search-for-extraterrestrial-intelligence`.

## Catalog editing method
- The previous blocker is resolved: `games.html` can be fetched safely in bounded line ranges with the GitHub connector.
- Before replacing the complete large file, retrieve all ranges needed to reconstruct the exact current file and confirm the current blob SHA.
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
