# Board Game Guide — Handoff

## Start here next run
1. Read `WORK_PLAN.md`, `PROGRESS.md`, and this file.
2. Read `boardgame-guide/index.html`, `boardgame-guide/games.html`, and at least one current detail page before editing.
3. Continue normal catalog expansion with Terra Mystica.
4. Add every completed new game to `boardgame-guide/games.html` in the same run. Do not append every new title to TOP.
5. Keep `boardgame-guide/index.html` compact: featured games + category entry points + link to the complete catalog.
6. For every image, follow the image/copyright policy in `WORK_PLAN.md`: use only rights-explicit reusable material, visibly attribute where required, and leave the image out if reuse terms are unclear.
7. Check TOP → catalog, catalog → detail, and detail → TOP relative links.
8. Update `PROGRESS.md` and rewrite this file before ending.

## Exact next start point
- Next game for catalog expansion: Terra Mystica.
- Current published guide count: 45 total, including Clueverge.

## Completed in this run
- Added `games/gaia-project.html` using Capstone Games official product information, the Z-Man Games English rulebook, and manufacturer age information from a current retailer listing.
- Added `games/le-havre.html` using BoardGameGeek and a current Lookout Games product listing for specifications and turn-flow verification.
- Added both titles to `games.html` and raised the catalog count to 45.
- Applied `strategy` to both new titles; no unsupported beginner/party/quick/two-player tags were added.
- Updated the compact TOP count link from 43 to 45 without adding featured cards.
- Used no new product images because explicit broadly reusable rights were not established.

## Files changed in this run
- `boardgame-guide/games/gaia-project.html` (new)
- `boardgame-guide/games/le-havre.html` (new)
- `boardgame-guide/games.html`
- `boardgame-guide/index.html`
- `boardgame-guide/PROGRESS.md`
- `boardgame-guide/HANDOFF.md`
- `boardgame-guide/WORK_PLAN.md` (next-start pointer only)

## Verification performed
- Required durable-state files, TOP, catalog, and a current detail page were read before editing.
- Both new pages link back to `../index.html`.
- Catalog entries point to the two new files.
- Catalog initial count and TOP count are both 45.
- Existing category/filter keys are unchanged.
- TOP still contains only the existing six featured games.
- Gaia Project current official information supports 1–4 players, 60–150 minutes and 14 factions; rules were checked against the Z-Man Games English rulebook, and age 14+ was separately corroborated.
- Le Havre reference information supports 1–5 players, 30–150 minutes and age 12+; turn flow was checked against a current Lookout Games product listing.
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
- A publicly visible official/retailer/review/press image is not automatically reusable.
- New game pages belong in the complete catalog. TOP should remain intentionally small.
