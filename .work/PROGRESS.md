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
- Confirmed `main` still contains 13 production JPGs and no `assets/cards/suspect-4.jpg`.
- Investigated prior-conversation/personal-context records as a new independent source class for the original Oda Nobunaga artwork; no relevant retained record, filename, generated-image reference, or source clue was available.
- Investigated connected Gmail as a possible independent attachment/source archive using `suspect-4`, `織田信長`, `Nobunaga`, and `織田信忠`; the connector required interactive user input in this execution context, so mailbox contents could not be searched.
- Reconfirmed historical commit `41a8257ceaf17b90f06cb57a9a330a285b9fd71b` explicitly maps suspect 4 to `織田信長` and places it in the top-right cell of the 4×2 fine-art grid; the commit contains no independent image URL/source metadata.
- Inspected current execution-environment temporary image storage as another independent retention path. Four local `suspect-4.jpg` variants and retained montages/sheets exist, but the visible artwork is `織田信忠`, so none was accepted.
- No candidate image was committed. Production code was not changed.

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
- Transient `.work/staging/` and automation-created `Add verified staged card images` commits as a suspect-4 source; they contain evidence-card migration data only.
- Earlier generated-character suspect sheet (`6d40ef0...`) as the intended fine-art source; it is the unrelated Resident Evil six-character artwork.
- Non-Pages GitHub Actions / custom workflow artifact path for exact mapping commit `41a8257...`; the commit has only the already-known Pages run and no other Actions run.
- GitHub Actions cache/storage path through the current connector; no cache API is exposed and direct `actions/caches` REST access is blocked by the connector allowlist.
- Commit-message searches for `織田信長` / `Nobunaga`; no additional source-bearing commit was found.
- GitHub Deployments/Environments through the current connector; no deployment retrieval action is exposed and direct REST deployment access is blocked.
- Public GitHub CDN-cache discovery (including jsDelivr-style mirrors) for the historical target asset; no indexed usable copy found, and direct CDN network retrieval is unavailable in the execution environment.
- Connected Gmail attachment search is currently unavailable in non-interactive execution because the connector requests interactive user input; do not retry automatically unless connector access conditions change.

## Active objective

Resolve the exact intended Oda Nobunaga `suspect-4.jpg` from a genuinely independent, identity-verifiable source. Only after all 14 JPGs are verified should Phase 2 begin.

## Blockers

- Exact Oda Nobunaga artwork remains unavailable.
- All known historical Git binaries corresponding to the intended fine-art grid are corrupted.
- Accessible independent retained images are Oda Nobutada, not Oda Nobunaga.
- The historical Pages artifact for the exact Oda Nobunaga mapping commit was ephemeral, is now deleted, and only mirrored repository contents.
- No usable source has been found in File Library, prior-conversation context, Pages artifacts/logs, Releases, forks, same-account public repositories, accessible/indexed Wiki paths, Issues/PR attachments, public web caches, repository-recorded external deployment URLs, same-account GitHub Gists/public snippets, transient staging/automation commits, non-Pages Actions/custom workflow artifacts, commit metadata/diffs, Deployments/Environments, public GitHub CDN-cache discovery, or current execution-environment temporary image storage.
- Actions cache storage and deployment storage are not inspectable with the currently available GitHub connector.
- Connected Gmail cannot be searched in the current non-interactive execution context because it requires user interaction.
- Direct outbound CDN retrieval is unavailable in the current execution environment.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.
