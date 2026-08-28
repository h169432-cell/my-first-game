# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 61.
4. Two detail pages are staged but not catalog-linked: `games/nucleum.html` and `games/tekhenu-obelisk-of-the-sun.html`.
5. First priority: publish both staged pages into `games.html` in the same run.
6. Add `strategy` to both catalog cards. Each card must show the physical game box, use `object-fit: contain`, and display a visible thumbnail source link.
7. Nucleum catalog image/source prepared: `https://www.tanukigamesatx.com/cdn/shop/files/image_1_6f14f82f-b8bc-483e-8833-4c2fc98976b5_200x200.png?v=1690993590` / `https://www.tanukigamesatx.com/products/nucleum`.
8. Tekhenu catalog image/source prepared: `https://www.miniaturemarket.com/media/e8/4b/63/1752140186/bnd0050.jpg` / `https://www.miniaturemarket.com/bnd0050.html`.
9. Update `games.html` count and TOP total from 61 to 63 without changing the six featured games.
10. Check TOP → catalog, catalog → both new details, both details → TOP, thumbnail/detail image display, source links, and counts.
11. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Publish staged Nucleum and Tekhenu catalog cards first.
- Current published catalog count: 61 total, including Clueverge.
- Staged but not catalog-linked pages: 2.
- Current published detail-image coverage: 61 / 61.
- Current published box-thumbnail coverage in `games.html`: 61 / 61.

## Completed in latest run
- Read the required planning/state files, TOP, catalog, and `games/barrage.html` before editing.
- Researched Nucleum from Board&Dice official game/product pages and created `games/nucleum.html`.
- Researched Tekhenu: Obelisk of the Sun from Board&Dice official game/product pages and created `games/tekhenu-obelisk-of-the-sun.html`.
- Added box-visible images and source attribution to both pages.
- Re-fetched both pages after creation and confirmed their navigation back to `../index.html`.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.

## Validation / notes
- Nucleum official specs: 1–4 players, 60–150 min, age 14+.
- Tekhenu official specs: 1–4 players, 60–120 min, age 14+.
- Both should receive only the `strategy` catalog filter tag.
- TOP remains intentionally compact at six featured games.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
