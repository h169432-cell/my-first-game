# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 76.
4. There are no staged-but-unlinked detail pages.
5. Start the next expansion with `The White Castle`.
6. Use Devir's official current product information as the primary factual source.
7. Add a clearly box-visible thumbnail and visible source link when publishing the catalog card.
8. Apply only supportable filters; do not infer category tags from popularity or theme.
9. After The White Castle is fully linked, update the catalog count from 76 to 77 and change only the TOP total-count button from `全76作品を見る` to `全77作品を見る`; keep the six featured titles unchanged.
10. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate next title: `The White Castle`.
- Current published catalog count: 76 total, including Clueverge.
- Staged detail pages: 0.
- Current published detail-image coverage: 76 / 76.
- Current published box-thumbnail coverage in `games.html`: 76 / 76.
- Repository search on 2026-08-28 returned no existing The White Castle page/card.
- Current Devir product information supports 1–4 players, about 60 minutes, age 12+, with resource management, worker placement, and dice placement over three rounds. Reconfirm before publishing.

## Latest validation
- `Arcs` and `Sky Team` are fully linked from `games.html`.
- Arcs uses only `strategy`; Sky Team uses `two quick`.
- Both new catalog cards contain clearly box-visible images and visible source links.
- `games.html` now displays 76 works and retains its closing catalog markup, footer, filter script, and shared `object-fit: contain` thumbnail rule.
- TOP still has six featured titles and now shows `全76作品を見る`.
- Current Arcs sources:
  - `https://www.asmodee.co.uk/products/led06000-arcs`
  - `https://ledergames.com/blogs/news/arcs-the-official-development-kit`
- Current Sky Team sources:
  - `https://www.scorpionmasque.com/en/sky-team`
  - `https://www.scorpionmasque.com/sites/scorpionmasque.com/files/st_rules01_en_06jun2023.pdf`
  - `https://shop.scorpionmasque.com/products/sky-team`

## Catalog editing method
- `games.html` can be fetched safely in bounded line ranges with the GitHub connector.
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
