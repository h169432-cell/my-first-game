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
- Reconfirmed `assets/cards/` still contains the same 13 production JPGs and no `suspect-4.jpg`.
- Investigated a materially new source class: GitHub Pages build-job logs and the transient Pages artifact created for historical commit `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`.
- Corrected an earlier assumption: workflow run `32730372651` was cancelled at deployment, but its `build` job succeeded and completed `Upload artifact`.
- Build log proves `github-pages.zip` was created as Artifact ID `9521143272`, size `287788` bytes, SHA-256 `4eb6d0972ec62ee648025fafb67307ba2bb83a0f5ad3683dd0df29b35a861afd`.
- Artifact retention was explicitly `1` day. Current artifact listing is empty, and direct artifact download by ID returns 404; the binary is no longer retrievable through GitHub Actions.
- The archived file list shows it was a direct repository snapshot containing the historical split-image files; no independent `suspect-4.jpg` existed in that archive.
- No candidate image was accepted or committed. Production code was not changed.

## Exhausted / do not repeat without new evidence

- Corrupted historical WebP and split Base64 repair attempts.
- Commit `62d5515...` as an intact source; it is already truncated.
- Rebuild attempt `1344806...`; failed.
- Artifact-crop path `3c53030...`; depends on corrupted source.
- Retained suspect sheet/montage; both show Oda Nobutada.
- Existing File Library searches for Oda Nobunaga / suspect-4 / fine-art suspect grids.
- Historical Pages runs `32745948889`, `32745918921`, `32745977792`.
- Pages run `32730372651`: build artifact did exist (`9521143272`) but had 1-day retention and is now deleted/404; archived contents were a direct repository snapshot, not an independent image source.
- Pages artifact `9527076730` from run `32746011152`; expired and was only a direct repository archive.
- Releases and fork/network clone checks; empty/zero.
- Same-account public repository search; only this repository exists.
- `has_wiki: true` alone is not evidence of a usable Wiki binary; no page/attachment was surfaced through accessible/indexed paths.
- GitHub Issues/PR attachment path; repository has no Issues or PRs and no attachment URL references in code.
- Public search-engine/cache/Wayback-index discovery for the repository/GitHub Pages and historical artwork names; no usable result.
- Repository-recorded Cloudflare/Pages deployment URL search; no deployment URL reference exists.

## Active objective

Resolve the exact intended Oda Nobunaga `suspect-4.jpg` from a genuinely independent, identity-verifiable source. Only after all 14 JPGs are verified should Phase 2 begin.

## Blockers

- Exact Oda Nobunaga artwork remains unavailable.
- All known historical Git binaries corresponding to the intended fine-art grid are corrupted.
- Accessible independent retained images are Oda Nobutada, not Oda Nobunaga.
- The historical Pages artifact for the exact Oda Nobunaga mapping commit was ephemeral, is now deleted, and only mirrored repository contents.
- No usable source has been found in File Library, Pages artifacts/logs, Releases, forks, same-account public repositories, accessible/indexed Wiki paths, Issues/PR attachments, public web caches, or repository-recorded external deployment URLs.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.
