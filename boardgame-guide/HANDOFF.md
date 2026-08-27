# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Continue normal catalog expansion with Race for the Galaxy.
4. Add every completed new game to `boardgame-guide/games.html` in the same run. Do not append every new title to TOP.
5. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
6. For every image, follow the image/copyright policy in `WORK_PLAN.md`: use only rights-explicit reusable material, visibly attribute where required, and leave the image out if reuse terms are unclear.
7. Check TOP → catalog, catalog → detail, and detail → TOP relative links.
8. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Next game for catalog expansion: Race for the Galaxy.
- Current published guide count: 35 total, including Clueverge.

## Completed in this run
- Added `games/power-grid-recharged.html` using Rio Grande Games official information plus a secondary retailer source for the age specification.
- Added Power Grid: Recharged to `games.html` and raised the catalog count to 35.
- Applied only the `strategy` filter to the new title.
- Updated the compact TOP count link from 34 to 35 without adding featured cards.
- Used no new product images because explicit reusable rights were not established.

## Files changed in this run
- `boardgame-guide/games/power-grid-recharged.html` (new)
- `boardgame-guide/games.html`
- `boardgame-guide/index.html`
- `boardgame-guide/PROGRESS.md`
- `boardgame-guide/HANDOFF.md`
- `boardgame-guide/WORK_PLAN.md` (next-start pointer only)

## Verification performed
- Required durable-state files and existing site pages were read before editing.
- New page links back to `../index.html`.
- Catalog entry points to `games/power-grid-recharged.html`.
- Catalog initial count and TOP count are both 35.
- Existing category/filter keys are unchanged.
- TOP still contains only the existing six featured games.
- No intended edits outside `boardgame-guide/`.

## Image-rights unresolved list carried forward
1. `games/the-quacks-of-quedlinburg.html`
   - Verified Wikimedia Commons candidate: `The Quacks of Quedlinburg.jpg`, author Honza F., CC0 1.0.
   - Prior GitHub update attempt was blocked by the tool safety check. Do not bypass that block with lower-level write methods.
2. `games/clueverge.html`
   - Existing Medium-hosted image remains but reuse terms are unverified under the current policy.
   - GitHub fetch has shown mojibake/encoding corruption. Do not broadly rewrite it during an unrelated pass without reconstruction/validation.
3. `games/ark-nova.html`
   - No stable direct embeddable image URL plus complete verified attribution chain has been established.
4. `games/jaipur.html`
   - Official product imagery exists but explicit reuse permission has not been verified.
5. `games/the-crew-mission-deep-sea.html`
   - Official/demo imagery exists but explicit reusable rights have not been verified.
6. `games/heat-pedal-to-the-metal.html`
   - Wikimedia Commons candidates exist, but individual file licenses must be verified before use.

## Rules carried forward
- Work only under `boardgame-guide/`; never modify the unrelated game app at repository root.
- Git files are the source of truth; do not depend on chat history.
- Verify player count, play time, age, rules, publisher/title details from reliable sources; do not guess.
- Paraphrase copyrighted descriptions/rules. Never reproduce rulebooks or long source passages.
- Prefer CC0/Public Domain/CC BY/CC BY-SA images with a clear source page and attribution trail.
- A publicly visible official/retailer/review image is not automatically reusable.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
