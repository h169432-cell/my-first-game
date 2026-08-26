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
3. Do not repeat exhausted Git blob repairs, File Library searches, prior-conversation searches, Pages artifacts/logs, Releases, forks, retained Oda Nobutada assets, same-account repo/Wiki/Issue/PR/Discussion/Package searches, public cache/index searches, Gist/public-snippet searches, Actions-cache/deployment/CDN probing, Gmail, tag/ref probing, Git LFS probing, generic public-domain portrait substitution, repository-local source URL/hash residue searches, or per-file revision-history checks unless new evidence materially changes the result.
4. Continue only with a materially new independent source class capable of containing the original Oda Nobunaga binary or a verifiable source identifier independently of corrupted Git blobs/direct repository snapshots.
5. If a candidate is found, verify identity and exact-source linkage first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
6. Only after all 14 JPGs are verified, begin Phase 2 and connect `assets/card-ui.js` with minimum changes.
7. Validate board reveal, private inspection, and accusation rendering before deleting any legacy image system.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## New findings from latest run

- `assets/cards/` remains 13/14 and `suspect-4.jpg` is still absent.
- Repository-local searches found no cache manifest, source URL, attachment URL, image hash, GitHub user-image reference, `oaidalle`, `imagegen`, or OpenAI-hosted source reference for the intended suspect 4 image.
- Per-file history was checked for alternate intact revisions:
  - `assets/new-suspect-grid-part1.js` has only its introducing commit `2b80b4e687029a037333ce9922179165aa552387`.
  - `assets/suspects-latest.webp` has only its introducing commit `62d55158365a1ee44f8af46651f4a46568464009`.
- Therefore no alternate historical revision of those known paths exists to recover a clean copy.
- Production code and architecture remain unchanged.

## Next safe batch

Source-resolution work only. Use a genuinely new independent source or newly surfaced direct binary/source identifier. Do not activate `card-ui.js` or perform destructive cleanup while the 14th image is unresolved.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` remains unavailable.
- Historical intended image data is corrupted and tested repair paths failed.
- Accessible retained/current-runtime suspect assets show Oda Nobutada and are unusable.
- Authentic public-domain Oda Nobunaga portraits exist, but exact-source identity cannot be established from surviving project metadata.
- No alternate intact revision exists for the known split suspect-grid data or `suspects-latest.webp` file paths.
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
