# Board Game Guide — Work Plan

## Goal
Build a Japanese introduction page for many popular commercially available board games while keeping the site easy to browse as the catalog grows.

## Working scope
- Work only under `boardgame-guide/`.
- Do not modify the existing game app at repository root.
- Use Git as the durable source of project state. Chat history is not the source of truth.

## Site structure
- `index.html`: compact TOP/landing page only. Keep a small curated set of featured games and entry points for browsing. Do not append every new game here.
- `games.html`: complete catalog. Every published game must be added here.
- `games/*.html`: one detailed introduction page per game.
- TOP category entry points currently cover: 2-player, 30 minutes or less, beginner-friendly, party, strategy, and all games.
- `games.html` filters use the corresponding category tags. Add tags only when the classification is supportable from the verified game information; do not guess.

## Image / copyright policy
- Prefer images whose reuse terms are explicit and compatible with the site: CC0, Public Domain, CC BY, CC BY-SA, or another clearly documented reusable license.
- Do not assume that an image is reusable merely because it appears on a publisher, retailer, review, social-media, or BoardGameGeek page.
- Do not rely on quotation/fair-use reasoning for decorative images when a clearly licensed alternative is available.
- For CC BY / CC BY-SA material, display the creator, source/file page, license name/link, and whether the image was modified directly below the image.
- For CC0 / Public Domain material, still show the source and status for transparency.
- Link the displayed image to its source/license page when practical.
- Do not crop, edit, or otherwise transform licensed images unless the license permits it and the attribution notes the modification.
- If a title has no image with sufficiently clear reuse terms, leave the page without a game image (or use only a neutral placeholder/source link) rather than copying an uncertain image.
- Logos may be used only when their copyright status/reuse basis is explicit; trademark rights can remain separate from copyright and should be noted where relevant.

## Per-run procedure
1. Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and at least one current detail page.
2. Continue from the exact next-start point in `HANDOFF.md`.
3. Research several not-yet-published popular board games using reliable current sources, prioritizing official publisher/product pages and established board-game references.
4. For each game, create a Japanese introduction page under `boardgame-guide/games/` with at least: title, game image/visual reference where legally appropriate, overview, player count, play time, age, core rules/how to play, and appeal/characteristics.
5. Verify facts before publishing. Do not guess missing rules or specs.
6. Avoid copying long copyrighted text. Paraphrase rules and descriptions. Do not copy rulebooks verbatim. Apply the image/copyright policy above to every image.
7. Add every completed game to `games.html`, including only verified/appropriate filter tags.
8. Keep `index.html` compact. Do not add each new title to TOP. Change featured titles only when intentionally curating the landing page.
9. Check TOP → catalog, catalog → detail, and detail → TOP relative links plus basic HTML validity.
10. Update `PROGRESS.md` and `HANDOFF.md` with completed items, current position, files changed, next start point, and unresolved issues.
11. Commit all changes.

## Page conventions
- Japanese language.
- Mobile-friendly one-page detail layout consistent with the existing Clueverge page.
- Keep common navigation back to TOP.
- Prefer concise explanations useful to someone deciding whether to play/buy the game.
- Do not invent ratings, rankings, prices, availability, or unsupported category labels.

## Current next-start point
Continue from the game recorded in `HANDOFF.md` (currently Great Western Trail: Second Edition).
