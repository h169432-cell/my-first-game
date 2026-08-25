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
3. Do not repeat exhausted Git blob repairs, File Library searches, checked Pages runs/artifact, Releases, forks, retained Oda Nobutada assets, same-account repository search, Wiki/index checks, Issue/PR attachment checks, public cache/index searches, or repository Cloudflare URL searches unless new evidence appears.
4. Continue only with a materially new independent source class capable of containing the original Oda Nobunaga binary independently of corrupted Git blobs/direct repository snapshots.
5. If a candidate is found, verify identity first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
6. Only after all 14 JPGs are verified, begin Phase 2 and connect `assets/card-ui.js` with minimum changes.
7. Validate board reveal, private inspection, and accusation rendering before deleting any legacy image system.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## New findings from latest run

- `assets/cards/` was reconfirmed at 13/14; `suspect-4.jpg` is absent.
- Repository has no open or closed Issues and no PRs, so GitHub Issue/PR attachment storage provides no candidate.
- Repository code contains no surfaced `private-user-images` / `user-images` attachment URL matching the missing artwork.
- Public search/cache indexing for the repo, GitHub Pages URL, historical WebP names, `suspect-4.jpg`, Oda Nobunaga, and `織田信長` produced no usable archived binary/URL.
- No Cloudflare Pages / `pages.dev` / `workers.dev` deployment URL is recorded in repository code.
- No production changes were made.

## Next safe batch

Source-resolution work only. Use a genuinely new independent source or a newly surfaced direct binary/attachment/deployment reference. Do not activate the new UI or perform destructive cleanup while the 14th image is unresolved.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` remains unavailable.
- Historical intended image data is corrupted and tested repair paths failed.
- Accessible retained suspect assets show Oda Nobutada and are unusable.
- Existing File Library, Pages, Releases, forks/network, same-account repositories, accessible/indexed Wiki paths, Issues/PR attachments, public cache/index paths, and repository-recorded external deployment references have not produced the required binary.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Historical fine-art mapping: `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`
Historical grid alignment: `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`
Historical direct WebP add: `62d55158365a1ee44f8af46651f4a46568464009` (truncated)
Historical rebuild attempt: `1344806fdd512a666012c41ed6ec80edbd4336e1` (failed)
Direct image import: `382456d76f2e0dcb6e9bc4d89c76412944efa3e7` (suspect 4 absent)
Successful nearby Pages run: `32746011152` / artifact `9527076730` (expired; direct repo archive)
