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
- Every game card in `games.html` must include a thumbnail in which that game's physical box is visibly present. Box-only images and box-plus-components/gameplay images are acceptable; an image that shows only components, board, cards, or gameplay without the box is not acceptable as the catalog thumbnail.
- The catalog thumbnail is independent of the image used inside the detail page. Do not automatically reuse a detail-page image unless the box is clearly visible in it.
- Show the thumbnail's source directly on the card and keep the image fitted with `object-fit: contain` so the box is not cropped out.
- `games/*.html`: one detailed introduction page per game.
- TOP category entry points currently cover: 2-player, 30 minutes or less, beginner-friendly, party, strategy, and all games.
- `games.html` filters use the corresponding category tags. Add tags only when the classification is supportable from verified game information; do not guess.

## Image / copyright policy
- Every published game detail page should contain at least one image or visual that is directly relevant to identifying or explaining that game.
- First preference: images whose reuse terms are explicit and compatible with the site, such as CC0, Public Domain, CC BY, CC BY-SA, or clearly reusable publisher/press assets.
- Second preference: official publisher/product images that are provided for product or media presentation, with a direct source link and visible attribution.
- When no clearly reusable image is practical, a published product/component/gameplay image may be used as a quotation only when it is genuinely necessary to identify or explain the game in the surrounding article.
- Quoted images must be clearly separated from the article, placed next to relevant explanatory text, kept subordinate to the article text, and limited to the minimum necessary amount (normally one image).
- Put `引用画像` and the source name/link directly beneath a quoted image. Make the image itself link to the source page when practical.
- For catalog thumbnails, use one box-visible image per game, keep it subordinate to the title/metadata, and display a visible source link beneath the card content.
- Do not treat “no prohibition is written” as a grant of permission. The publication basis must instead be an explicit reusable license/permission or a defensible quotation context.
- If the source explicitly forbids the relevant use, requires bypassing access controls, or cannot be sourced reliably, do not use that image; find another source.
- For CC BY / CC BY-SA material, display creator, source/file page, license name/link, and whether the image was modified.
- For CC0 / Public Domain material, still show the source and status for transparency.
- Do not crop, edit, or otherwise transform third-party images unless the applicable license permits it and any required modification notice is provided.
- Logos and trademarks can have rights separate from copyright; prefer product/gameplay images unless a logo's use is necessary to identify the product.
- This policy is intended to reduce copyright risk; it is not a blanket legal guarantee for every image or jurisdiction.

## Per-run procedure
1. Read `WORK_PLAN.md`, `PROGRESS.md`, `HANDOFF.md`, `index.html`, `games.html`, and at least one current detail page.
2. Continue from the exact next-start point in `HANDOFF.md`.
3. Research several not-yet-published popular board games using reliable current sources, prioritizing official publisher/product pages and established board-game references.
4. For each game, create a Japanese introduction page under `boardgame-guide/games/` with at least: title, at least one relevant image/visual under the image policy above, overview, player count, play time, age, core rules/how to play, and appeal/characteristics.
5. Verify facts before publishing. Do not guess missing rules or specs.
6. Avoid copying long copyrighted text. Paraphrase rules and descriptions. Do not copy rulebooks verbatim.
7. Add every completed game to `games.html`, including only verified/appropriate filter tags and a box-visible thumbnail with visible source attribution.
8. Keep `index.html` compact. Do not add each new title to TOP. Change featured titles only when intentionally curating the landing page.
9. Check TOP → catalog, catalog → detail, detail → TOP, thumbnail/detail image display, source links, filter behavior, total card count, and basic HTML validity.
10. Update `PROGRESS.md` and `HANDOFF.md` with completed items, current position, files changed, next start point, and unresolved issues.
11. Commit all changes.

## Page conventions
- Japanese language.
- Mobile-friendly one-page detail layout consistent with the existing Clueverge page.
- Keep common navigation back to TOP.
- Prefer concise explanations useful to someone deciding whether to play/buy the game.
- Do not invent ratings, rankings, prices, availability, or unsupported category labels.

## Catalog editing safety
- `games.html` must never be replaced from a partial reconstruction.
- The currently exposed GitHub contents write action replaces the whole file. Before updating `games.html`, obtain and programmatically preserve the complete current blob, apply only the intended transformations, then verify the resulting number of `.card` entries and closing markup before leaving the change committed.
- A 2026-08-29 manual reconstruction attempt dropped existing cards and was immediately reverted. Current good `games.html` blob is `807eac0ca1d393a2b03b76e8e31e785cf272ec19`.

## Current next-start point
The published catalog still contains 78 works. Two verified detail pages are staged but not yet linked from the catalog: `Earth` and `Harmonies`. Begin by safely adding both to the complete `games.html` using a targeted/programmatic transformation that preserves all 78 existing cards. Use `strategy` for Earth and `quick beginner strategy` for Harmonies; do not add `two` to Harmonies merely because two players are permitted. Only after both cards are linked should the catalog and TOP counts change from 78 to 80. Keep the same six featured TOP titles. Do not create another staged game page until this backlog is cleared. Afterward, the next researched candidate is `Wyrmspan`.
