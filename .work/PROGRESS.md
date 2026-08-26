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
- Confirmed `main` still has the same 13 production JPGs and no `assets/cards/suspect-4.jpg`.
- Checked a materially new repository-history angle: alternate filenames / alternate placement references for the intended Oda Nobunaga artwork using repository code search terms in English and Japanese.
- Searches for `Nobunaga portrait suspect grid Oda` and `織田信長 容疑者4 画像` returned no repository file matches or source references.
- No candidate was accepted. Production code and architecture were not changed.

## Exhausted / do not repeat without new evidence

- Corrupted historical WebP and split Base64 repair attempts.
- Commit `62d5515...` as an intact source; it is already truncated.
- Rebuild attempt `1344806...`; failed.
- Artifact-crop path `3c53030...`; depends on corrupted source.
- Retained suspect sheet/montage and current execution-environment local `suspect-4` variants; all show Oda Nobutada.
- Existing File Library searches for Oda Nobunaga / suspect-4 / fine-art suspect grids.
- Prior-conversation/personal-context search for Oda Nobunaga / suspect-4 / fine-art grid source clues; no retained source information found.
- Historical Pages runs and expired Pages artifacts already recorded in prior runs.
- Releases, forks/network, same-account public repositories, Wiki/index paths, Issues/PR attachments, Discussions, Packages, public cache/index paths, repository-recorded external deployment references, same-account GitHub Gists/public snippets, transient staging/automation commits, exact-commit non-Pages Actions paths, commit metadata/diffs, commit-level comment/index paths, Deployments/Environments, public GitHub CDN-cache discovery, Gmail, historical refs/tags, Git LFS, and generic public-domain portrait substitution without exact-source proof.
- Repository-local cache/manifest/source-URL/hash residue search; no source identifier found.
- Per-file revision-history search for `assets/new-suspect-grid-part1.js` and `assets/suspects-latest.webp`; each has only one introducing revision and no alternate intact historical revision.
- Exact public search-index queries combining `h169432-cell` / `my-first-game` with `Oda Nobunaga` / `織田信長`; no project-linked source identifier found.
- Internet Archive / Wayback Machine public index search for archived project pages/assets; no usable archived snapshot or source identifier found, and direct CDX retrieval was unavailable through the current access path.
- Image-search-engine cache/thumbnail search for project-linked Oda Nobunaga artwork; returned only unrelated public images and no project-linked candidate.
- Public external source-origin / image-provider search using project-linked Nobunaga terms; no project-linked source page, identifier, digest, or binary found.
- Public external deployment/mirror search, including Cloudflare Pages / `pages.dev` and project-title searches; no project-linked deployment or retained image source found.
- Repository code-index searches for alternate filenames / placement references using English and Japanese Oda Nobunaga suspect-grid terms; no matches found.

## Active objective

Resolve the exact intended Oda Nobunaga `suspect-4.jpg` from a genuinely independent, identity-verifiable source. Only after all 14 JPGs are verified should Phase 2 begin.

## Blockers

- Exact Oda Nobunaga artwork remains unavailable.
- All known historical Git binaries corresponding to the intended fine-art grid are corrupted.
- Accessible independent retained images are Oda Nobutada, not Oda Nobunaga.
- Authentic public-domain Oda Nobunaga portraits can be independently sourced, but the exact intended portrait cannot be determined from surviving metadata.
- No alternate intact revision exists for the known suspect-grid split-data path or `suspects-latest.webp` path.
- Public external source-origin/image-provider search produced no project-linked source record.
- Google Drive is a potentially useful independent source class but is not installed/connected.
- Dropbox is a potentially useful independent source class but is not installed/connected.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.
