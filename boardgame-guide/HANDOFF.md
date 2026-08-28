# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Current published catalog count is 78.
4. Two staged-but-unlinked detail pages now exist: `games/earth.html` and `games/harmonies.html`.
5. Start by publishing those two staged pages into `games.html`; do not research another title first.
6. Use the already verified box-visible official images and visible source links recorded below.
7. Apply only supportable filters: Earth = `strategy`; Harmonies = `quick beginner strategy`. Do not add `two` solely because Harmonies permits two players.
8. After both cards are linked, update `games.html` and TOP counts from 78 to 80; keep the six featured TOP titles unchanged.
9. Check TOP → catalog, catalog → both new details, detail → TOP, thumbnail/detail image display, source links, filter behavior, and counts.
10. Update `PROGRESS.md`, this file, and `WORK_PLAN.md` before ending.

## Exact next start point
- Immediate task: add `Earth` and `Harmonies` cards to `games.html`.
- Current published catalog count: 78 total, including Clueverge.
- Staged detail pages: 2.
- `Earth`: `boardgame-guide/games/earth.html`.
- `Harmonies`: `boardgame-guide/games/harmonies.html`.
- Current published detail-image coverage: 78 / 78; both staged pages also have images.
- Current published box-thumbnail coverage in `games.html`: 78 / 78.

## Verified publication data
### Earth
- Players: 1–5.
- Time: 45–90 minutes.
- Age: 14+ (Asmodee USA current product specification).
- Filter: `strategy` is supportable from the official game's engine-building/strategic description.
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
- Filters: `quick beginner strategy` are supportable from the current Asmodee USA specifications and product description; do not add `two` merely from the player range.
- Box image: `https://store.asmodee.com/cdn/shop/files/LIBTL01ML1-image0_2000_535x.jpg?v=1732028567`
- Image/source page: `https://store.asmodee.com/products/harmonies-1`
- Official references:
  - `https://www.libellud.com/en/our-games/harmonies/`
  - `https://store.asmodee.com/products/harmonies-1`

## Catalog editing method
- `games.html` is large and full-file replacement must preserve every existing card, footer, filter script, and responsive CSS.
- Targeted line-range retrieval works through the GitHub connector. Reconstruct the complete current file before replacing it; never submit a partial reconstruction.
- The two new cards should use `.thumb-shell` + `.thumb` so the existing `object-fit: contain` rule keeps the boxes uncropped.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.
- Carnegie currently uses a small but verified box thumbnail; replace only during a dedicated maintenance pass if a better source is found.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
