# Board Game Guide — Progress

Last updated: 2026-08-27

## Completed
- Published guide pages: 51 total, including Clueverge.
- Latest catalog additions are `games/el-grande.html` and `games/five-tribes.html`; both remain linked from `games.html`, and the TOP/catalog count remains 51.
- Detail-page image coverage remains 51 / 51.
- Reworked the complete `games.html` catalog so all 51 game cards now include a thumbnail where the physical game box is visibly present.
- Catalog thumbnails use either a box-only image or an image containing the box plus game contents; component/gameplay-only images are not used as list thumbnails.
- Each catalog card now shows the image source directly beneath the card content.
- Added responsive thumbnail styling with a light image stage and `object-fit: contain` to avoid cropping the box out of the image.
- Preserved all existing category/filter tags, detail links, 51-item count, and compact TOP structure.
- Updated `WORK_PLAN.md` so future catalog additions require a box-visible thumbnail independently from the detail-page image.
- No files outside `boardgame-guide/` were intentionally modified.

## Verification performed
- Re-fetched `games.html` after the thumbnail update and confirmed the new thumbnail/source structure is present at both the beginning and end of the 51-game catalog.
- Confirmed the catalog still displays `51作品` and retains the existing filter script/category keys.
- Confirmed each new thumbnail has descriptive alt text identifying it as an image where the game's box is visible.
- Confirmed each catalog card keeps its existing relative detail-page link.
- Confirmed the final entries, including El Grande and Five Tribes, also have box-visible thumbnails and source links.

## Current position
- Published guide pages: 51 total, including Clueverge.
- Detail image coverage: 51 / 51.
- Catalog box-thumbnail coverage: 51 / 51.
- Latest catalog additions: El Grande and Five Tribes.

## Planned next items
1. Continue normal catalog expansion with Grand Austria Hotel.
2. Every future new game page must include at least one relevant detail-page visual.
3. Every future `games.html` card must also include a separate or reusable thumbnail where the game's physical box is clearly visible, with a visible source link.
4. Continue adding new titles to `games.html`, not the TOP featured grid.
5. Keep TOP compact and preserve current filters/navigation.

## Unresolved general items
- `games/clueverge.html` still has the previously observed encoding/mojibake issue when fetched and an older Medium-hosted detail image. Treat that as a separate cleanup task.
- Remote image hosts can change URLs or block hotlinking; replace broken thumbnails/images with another properly sourced image when discovered.
- Image/copyright assessment remains source- and context-specific; follow `WORK_PLAN.md` for every future thumbnail and detail image.
- Preserve the existing compact navigation structure and work only under `boardgame-guide/`.
