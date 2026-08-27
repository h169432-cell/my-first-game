# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. First publish the already-created staged pages `games/underwater-cities.html` and `games/carnegie.html` into `games.html`.
4. Do not overwrite `games.html` from a truncated connector response. Fetch the file in small enough line ranges to reconstruct the complete current content before replacing it.
5. Add both catalog cards with a physical box clearly visible, visible source links, and only verified filter tags (`strategy`).
6. Update catalog/TOP count from 59 to 61 without expanding the six-card TOP featured grid.
7. Check TOP → catalog, catalog → both new details, both details → TOP, thumbnails, detail images, and source links.
8. Only after the staged pages are fully published, resume normal catalog expansion with another verified popular commercial title.
9. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- First task: publish Underwater Cities and Carnegie into the catalog.
- Current published catalog count: 59 total, including Clueverge.
- Staged but not catalog-linked pages: 2 (`Underwater Cities`, `Carnegie`).
- Current detail-image coverage for published pages: 59 / 59.
- Current box-thumbnail coverage in `games.html`: 59 / 59 published cards.

## Completed in latest run
- Created `games/underwater-cities.html` with overview, 1–4 players, 40 min/player, age 12+, core flow, appeal, sources, and a verified box-visible image.
- Verified Underwater Cities against Delicious Games and its official English rulebook, including 10 rounds and 3 Production phases.
- Created `games/carnegie.html` with overview, 1–4 players, 90–120 minutes, age 12+, 20-round action-selection structure, appeal, sources, and a verified box-visible image.
- Verified Carnegie against Pegasus Spiele and Quined Games.
- Followed the image links on Morat Games and Lelekan so both staged detail pages now use direct image URLs that were actually resolved rather than guessed.
- Did not change `games.html` or `index.html` because the broad connector fetch of the large catalog was truncated and a full replacement from incomplete content would risk deleting existing cards.
- No intended edits outside `boardgame-guide/`.

## Current image rules
- Detail page: at least one relevant image/visual following `WORK_PLAN.md`.
- Catalog card: must show the game's physical box, independently of what image appears on the detail page.
- Box-only or box + contents/gameplay is valid.
- Components/gameplay-only without the box is invalid for the catalog thumbnail.
- A visible source link must accompany each catalog thumbnail.
- Prefer clearly reusable/official assets; otherwise follow the quotation-aware sourcing policy in `WORK_PLAN.md`.

## Validation / notes
- Underwater Cities detail image resolves to Morat Games' box image and links to the Morat product page.
- Carnegie detail image resolves to a Lelekan box thumbnail and links to the Lelekan product page.
- Carnegie's verified direct image is small; a larger verifiably sourced box image is preferable for the future catalog card if available.
- Both staged detail pages link back to `../index.html`.
- TOP remains at 59 and still contains six featured games only.

## Remaining cleanup
- `games/clueverge.html` still has a previously observed mojibake/encoding issue when fetched and uses an older Medium-hosted detail image. Handle that in a dedicated cleanup pass.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify game facts from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules; never reproduce long rulebook text.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
