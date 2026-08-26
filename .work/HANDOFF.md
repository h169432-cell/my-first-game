# Handoff

Last updated: 2026-08-26

## Current position

`assets/cards/` has 13 of 14 verified production JPGs.

Missing:
- `assets/cards/suspect-4.jpg` — must be the exact intended Oda Nobunaga (`織田信長`) artwork.

Known Oda Nobutada (`織田信忠`) candidates remain rejected.

`assets/card-ui.js` is intentionally not loaded. Production still uses the legacy image runtime.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm `main` still has the same 13 production JPGs and no `suspect-4.jpg`.
3. Do not repeat exhausted Git blob repairs, File Library searches, prior-conversation searches, Pages artifacts/logs, Releases, forks, retained Oda Nobutada assets, same-account repo/Wiki/Issue/PR/Discussion/Package searches, public cache/index searches, exact public search-index queries using `h169432-cell` / `my-first-game` + `Oda Nobunaga` / `織田信長`, Gist/public-snippet searches, Actions-cache/deployment/CDN probing, Gmail, tag/ref probing, Git LFS probing, generic public-domain portrait substitution, repository-local source URL/hash residue searches, per-file revision-history checks, Internet Archive / Wayback public-index searches, image-search-engine cache/thumbnail searches, public external source-origin/image-provider searches, Cloudflare Pages / `pages.dev` / public deployment-mirror searches, or repository code-index searches for alternate Oda Nobunaga filenames/placement references unless new evidence materially changes the result.
4. Google Drive and Dropbox remain known potentially useful independent source classes, but neither is installed/connected. Search either only after it becomes installed/connected; do not assume access.
5. OneDrive, iCloud, and Google Photos were checked as plugin/source candidates in the latest run and were not available in the current environment; do not repeat that availability check unless the plugin catalog changes.
6. Otherwise continue only with another materially new independent source class capable of containing the original Oda Nobunaga binary or a verifiable source identifier independently of corrupted Git blobs/direct repository snapshots.
7. If a candidate is found, verify identity and exact-source linkage first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
8. Only after all 14 JPGs are verified, begin Phase 2 and connect `assets/card-ui.js` with minimum changes.
9. Validate board reveal, private inspection, and accusation rendering before deleting any legacy image system.
10. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## New findings from latest run

- Confirmed `main` still contains 13 verified production JPGs and no `suspect-4.jpg`.
- Google Drive and Dropbox are installable external-storage candidates but remain unconnected, so no search was possible.
- OneDrive, iCloud, and Google Photos were not returned as available source/plugin classes in the current environment.
- No candidate was accepted and production code remains unchanged.

## Next safe batch

Source-resolution work only. If Google Drive or Dropbox becomes installed/connected, search that source for the original fine-art suspect grid / Oda Nobunaga card / suspect-4 source. Otherwise use another genuinely new independent source class. Do not activate `card-ui.js` or perform destructive cleanup while the 14th image is unresolved.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` remains unavailable.
- Historical intended image data is corrupted and tested repair paths failed.
- Accessible retained/current-runtime suspect assets show Oda Nobutada and are unusable.
- Authentic public-domain Oda Nobunaga portraits exist, but exact-source identity cannot be established from surviving project metadata.
- No alternate intact revision exists for the known split suspect-grid data or `suspects-latest.webp` file paths.
- Google Drive could contain an independent retained source but is not installed/connected.
- Dropbox could contain an independent retained source but is not installed/connected.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Historical fine-art mapping: `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`
Historical grid alignment: `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`
Historical split-data introduction: `2b80b4e687029a037333ce9922179165aa552387`
Historical direct WebP add: `62d55158365a1ee44f8af46651f4a46568464009` (truncated; only revision of this path)
Historical rebuild attempt: `1344806fdd512a666012c41ed6ec80edbd4336e1` (failed)
Direct image import: `382456d76f2e0dcb6e9bc4d89c76412944efa3e7` (suspect 4 absent)
