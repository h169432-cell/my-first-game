# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, `games/earth.html`, `games/harmonies.html`, and at least one current published detail page before editing.
3. Current published catalog count is 78.
4. Two staged-but-unlinked detail pages exist: `games/earth.html` and `games/harmonies.html`.
5. Start by publishing those two staged pages into the complete `games.html`; do not research or create another title first.
6. Do not use a manually reconstructed partial/full replacement of `games.html`. One such attempt dropped existing cards and had to be reverted. Current `games.html` has been restored exactly to blob `807eac0ca1d393a2b03b76e8e31e785cf272ec19`.
7. Use a targeted patch/programmatic transformation method that preserves all existing catalog content, then verify card count before committing.
8. Use the already verified box-visible official images and visible source links below.
9. Filters: Earth = `strategy`; Harmonies = `quick beginner strategy`; do not add `two` solely because Harmonies permits two players.
10. After both cards are linked, update `games.html` and TOP counts from 78 to 80; keep the same six featured TOP titles.
11. Check TOP → catalog, catalog → both new details, detail → TOP, thumbnail/detail image display, source links, filter behavior, and total card count.
12. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate task: safely add `Earth` and `Harmonies` cards to the complete `games.html` without losing any of the existing 78 cards.
- Current published catalog count: 78 total, including Clueverge.
- Staged detail pages: 2.
- `Earth`: `boardgame-guide/games/earth.html`.
- `Harmonies`: `boardgame-guide/games/harmonies.html`.
- Current restored `games.html` blob: `807eac0ca1d393a2b03b76e8e31e785cf272ec19`.
- Current published detail-image coverage: 78 / 78; both staged pages also have images.
- Current published box-thumbnail coverage in `games.html`: 78 / 78.

## Verified publication data
### Earth
- Players: 1–5.
- Time: 45–90 minutes.
- Age: 14+.
- Filter: `strategy`.
- Box image: `https://insideupgames.com/wp-content/uploads/2022/01/Earth-mockup2-900x788.png`
- Image/source page: `https://insideupgames.com/our-games/earth-board-game/`
- Official references:
  - `https://insideupgames.com/our-games/earth-board-game/`
  - `https://insideupgames.com/product/earth-board-game/`
  - `https://store.asmodee.com/products/earth`

### Harmonies
- Players: 1–4.
- Time: about 30 minutes.
- Age: 10+.
- Filters: `quick beginner strategy`; do not add `two` merely from the player range.
- Box image: `https://store.asmodee.com/cdn/shop/files/LIBTL01ML1-image0_2000_535x.jpg?v=1732028567`
- Image/source page: `https://store.asmodee.com/products/harmonies-1`
- Official references:
  - `https://www.libellud.com/en/our-games/harmonies/`
  - `https://store.asmodee.com/products/harmonies-1`

## Next researched candidate after backlog is cleared
### Wyrmspan
- Players: 1–5.
- Time: 90 minutes.
- Age: 14+ (BoardGameGeek; official Stonemaier store confirms players/time and product identity).
- Official product page: `https://store.stonemaiergames.com/products/wyrmspan`
- Trusted reference: `https://boardgamegeek.com/boardgame/410201/wyrmspan`
- Official box-visible image available from the Stonemaier product page; re-resolve the current image URL when publishing.
- Do not create/publish Wyrmspan before Earth and Harmonies are fully in the catalog.

## Catalog editing warning
- `games.html` is large and the GitHub contents API exposed here performs complete-file replacement.
- A manual reconstruction attempt in the 2026-08-29 run lost existing cards; it was reverted immediately using the prior Git blob.
- Never repeat a replacement unless the complete source has been programmatically preserved and transformed, and verify the resulting card count before leaving the commit on `main`.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
