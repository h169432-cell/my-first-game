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
- Confirmed `assets/cards/` still contains the same 13 production JPGs and no `suspect-4.jpg`.
- Investigated a materially new independent storage class: Git LFS / large-file pointer history.
- Repository code search found no `filter=lfs` or `git-lfs` references.
- Commit-message search found no LFS-related commit.
- No evidence was found that the intended Oda Nobunaga artwork was ever stored outside ordinary Git blobs through Git LFS.
- No candidate image was accepted. Production code and architecture were not changed.

## Exhausted / do not repeat without new evidence

- Corrupted historical WebP and split Base64 repair attempts.
- Commit `62d5515...` as an intact source; it is already truncated.
- Rebuild attempt `1344806...`; failed.
- Artifact-crop path `3c53030...`; depends on corrupted source.
- Retained suspect sheet/montage and current execution-environment local `suspect-4` variants; all show Oda Nobutada.
- Existing File Library searches for Oda Nobunaga / suspect-4 / fine-art suspect grids.
- Prior-conversation/personal-context search for Oda Nobunaga / suspect-4 / fine-art grid source clues; no retained source information found.
- Historical Pages runs `32745948889`, `32745918921`, `32745977792`.
- Pages run `32730372651`: build artifact did exist (`9521143272`) but had 1-day retention and is now deleted/404; archived contents were a direct repository snapshot, not an independent image source.
- Pages artifact `9527076730` from run `32746011152`; expired and was only a direct repository archive.
- Releases and fork/network clone checks; empty/zero.
- Same-account public repository search; only this repository exists.
- `has_wiki: true` alone is not evidence of a usable Wiki binary; no page/attachment was surfaced through accessible/indexed paths.
- GitHub Issues/PR attachment path; repository has no Issues or PRs and no attachment URL references in code.
- Public search-engine/cache/Wayback-index discovery for the repository/GitHub Pages and historical artwork names; no usable result.
- Repository-recorded Cloudflare/Pages deployment URL search; no deployment URL reference exists.
- Same-account GitHub Gist / indexed public code-snippet search for `h169432-cell` + Oda Nobunaga / suspect-4; no usable source or source identifier found.
- Historical fine-art mapping commit inspection for original prompt/source metadata; none is recorded.
- Commit-level comments/metadata and exact-commit public indexing: no accessible source identifier or mirrored image was found; direct commit-comments REST is blocked by the connector.
- Transient `.work/staging/` and automation-created `Add verified staged card images` commits as a suspect-4 source; they contain evidence-card migration data only.
- Earlier generated-character suspect sheet (`6d40ef0...`) as the intended fine-art source; it is the unrelated Resident Evil six-character artwork.
- Non-Pages GitHub Actions / custom workflow artifact path for exact mapping commit `41a8257...`; the commit has only the already-known Pages run and no other Actions run.
- GitHub Actions cache/storage path through the current connector; no cache API is exposed and direct `actions/caches` REST access is blocked by the connector allowlist.
- Commit-message searches for `織田信長` / `Nobunaga`; no additional source-bearing commit was found.
- GitHub Deployments/Environments through the current connector; no deployment retrieval action is exposed and direct REST deployment access is blocked.
- Public GitHub CDN-cache discovery (including jsDelivr-style mirrors) for the historical target asset; no indexed usable copy found, and direct CDN network retrieval is unavailable in the execution environment.
- Connected Gmail attachment search remains unavailable in this execution context because the connector requires interactive user input even on a user-initiated run.
- GitHub tag-list/reference probing through direct REST is blocked by the connector allowlist; do not retry unless the connector exposes tag/ref listing directly.
- Generic/public-domain Oda Nobunaga portrait repositories as an exact-source substitute: authentic portraits exist, but no surviving evidence ties any one of them to the intended historical grid, so they cannot be used as the exact artwork without changing the requirement.
- Git LFS / large-file storage as an independent source: no LFS pointer configuration, code reference, or LFS-related commit was found.

## Active objective

Resolve the exact intended Oda Nobunaga `suspect-4.jpg` from a genuinely independent, identity-verifiable source. Only after all 14 JPGs are verified should Phase 2 begin.

## Blockers

- Exact Oda Nobunaga artwork remains unavailable.
- All known historical Git binaries corresponding to the intended fine-art grid are corrupted.
- Accessible independent retained images are Oda Nobutada, not Oda Nobunaga.
- Authentic public-domain Oda Nobunaga portraits can be independently sourced, but the exact intended portrait cannot be determined from surviving metadata.
- The historical Pages artifact for the exact Oda Nobunaga mapping commit was ephemeral, is now deleted, and only mirrored repository contents.
- No usable source has been found in File Library, prior-conversation context, Pages artifacts/logs, Releases, forks, same-account public repositories, accessible/indexed Wiki paths, Issues/PR attachments, public web caches, repository-recorded external deployment URLs, same-account GitHub Gists/public snippets, transient staging/automation commits, non-Pages Actions/custom workflow artifacts, commit metadata/diffs, commit-level comment/index paths, Deployments/Environments, public GitHub CDN-cache discovery, current execution-environment temporary image storage, Gmail, accessible historical refs/tags, Git LFS, or public-domain portrait repositories with exact-source proof.
- Actions cache storage and deployment storage are not inspectable with the currently available GitHub connector.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.
