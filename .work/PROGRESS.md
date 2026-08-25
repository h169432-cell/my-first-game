# Progress

Last updated: 2026-08-26
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Persistent `.work/` execution state and backup branch created.
- `game.js` deck rules audited: base 15 + exactly one special = 16; vertical/horizontal alibi variants are correct.
- `assets/card-ui.js` prepared with direct image URL mapping, preload, fallback, and board/private/accusation decorators; intentionally not connected yet.
- 13 verified production JPGs are present: suspects 1,2,3,5,6,7 and all seven evidence images.
- `alibi-horizontal.jpg` is the required left/right artwork.
- Available suspect-4 images showing `織田信忠` were rejected; required identity is `織田信長`.

## Current state

`assets/cards/` remains at 13/14 required JPGs. Missing only:
- `assets/cards/suspect-4.jpg` — exact intended Oda Nobunaga (`織田信長`) artwork.

Production remains unchanged and still uses the legacy image runtime. Do not connect `card-ui.js`, simplify `index.html`, or delete legacy assets until the 14th image is verified.

## Latest run

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Reconfirmed `assets/cards/` has the same 13 production JPGs and no `suspect-4.jpg`.
- Repository metadata confirms `has_wiki: true`.
- Available GitHub connector paths do not expose Wiki page content/history, and public indexing/search did not surface any actual Wiki page or attachment containing the missing artwork.
- Searched the GitHub account's public repositories as a new independent storage class. Only `h169432-cell/my-first-game` is exposed; there is no second public repository containing an older copy/source.
- No candidate was accepted or committed. Production code was not changed.

## Exhausted / do not repeat without new evidence

- Corrupted historical WebP and split Base64 repair attempts.
- Commit `62d5515...` as an intact source; it is already truncated.
- Rebuild attempt `1344806...`; failed.
- Artifact-crop path `3c53030...`; depends on corrupted source.
- Retained suspect sheet/montage; both show Oda Nobutada.
- Existing File Library searches for Oda Nobunaga / suspect-4 / fine-art suspect grids.
- Historical Pages runs `32730372651`, `32745948889`, `32745918921`, `32745977792`.
- Pages artifact `9527076730` from run `32746011152`; expired and was only a direct repository archive.
- Releases and fork/network clone checks; empty/zero.
- Same-account public repository search; only this repository exists.
- `has_wiki: true` alone is not evidence of a usable Wiki binary; no page/attachment was surfaced through accessible/indexed paths.

## Active objective

Resolve the exact intended Oda Nobunaga `suspect-4.jpg` from a genuinely independent, identity-verifiable source. Only after all 14 JPGs are verified should Phase 2 begin.

## Blockers

- Exact Oda Nobunaga artwork remains unavailable.
- All known historical Git binaries corresponding to the intended fine-art grid are corrupted.
- Accessible independent retained images are Oda Nobutada, not Oda Nobunaga.
- No usable source has been found in File Library, Pages artifacts, Releases, forks, same-account public repositories, or accessible/indexed Wiki paths.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.
