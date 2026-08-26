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
3. Do not repeat exhausted Git blob repairs, File Library searches, prior-conversation context searches, checked Pages artifacts/logs, Releases, forks, retained/current-runtime Oda Nobutada assets, same-account repository search, Wiki/index checks, Issue/PR attachment checks, public cache/index searches, repository Cloudflare URL searches, same-account GitHub Gist/public-snippet searches, transient staging/automation commit searches, exact-commit non-Pages Actions searches, Actions-cache probing, Deployments/Environments probing, public GitHub CDN-cache discovery, commit-message searches for Nobunaga, Gmail probing, or direct tag-list REST probing unless access conditions or new evidence materially change.
4. Continue only with a materially new independent source class capable of containing the original Oda Nobunaga binary independently of corrupted Git blobs/direct repository snapshots.
5. If a candidate is found, verify identity first, then JPEG integrity/hash, and commit exactly as `assets/cards/suspect-4.jpg`.
6. Only after all 14 JPGs are verified, begin Phase 2 and connect `assets/card-ui.js` with minimum changes.
7. Validate board reveal, private inspection, and accusation rendering before deleting any legacy image system.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

## New findings from latest run

- Gmail was retried because this execution was user-initiated, but the connector still returned `User input required but current turn is running in a non-interactive mode`; attachment search remains unavailable.
- GitHub tag/reference retrieval was probed as a new source class, but direct tag-list REST access is rejected by the current connector allowlist.
- No candidate image was found or accepted.
- Production code and architecture were not changed.

## Next safe batch

Source-resolution work only. Use a genuinely new independent source or newly surfaced direct binary/attachment/deployment reference. Do not activate the new UI or perform destructive cleanup while the 14th image is unresolved.

## Unresolved items

- Correct exact Oda Nobunaga `suspect-4.jpg` remains unavailable.
- Historical intended image data is corrupted and tested repair paths failed.
- Accessible retained/current-runtime suspect assets show Oda Nobutada and are unusable.
- Exact-commit Pages artifact existed but expired after one day and was only a repository snapshot.
- Exact mapping commit has no non-Pages Actions run that could hold an independent artifact.
- Actions cache storage and deployment storage are not inspectable through the currently available GitHub connector.
- Gmail search remains blocked by the connector's interactive-input requirement in this execution mode.
- Direct GitHub tag-list/reference REST probing is blocked by the connector allowlist.
- Existing File Library, prior-conversation context, Pages artifacts/logs, Releases, forks/network, same-account repositories, accessible/indexed Wiki paths, Issues/PR attachments, public cache/index paths, repository-recorded external deployment references, same-account GitHub Gists/public snippets, transient staging/automation commits, exact-commit non-Pages Actions paths, commit metadata/diffs, Deployments/Environments, public GitHub CDN-cache discovery, and current execution-environment temporary image storage have not produced the required binary.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` remain temporary migration artifacts for later cleanup.

## Important references

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Historical fine-art mapping: `41a8257ceaf17b90f06cb57a9a330a285b9fd71b`
Historical grid alignment: `923a718c386dfebf9c3753bb6cf6e5d686eb7e18`
Historical direct WebP add: `62d55158365a1ee44f8af46651f4a46568464009` (truncated)
Historical rebuild attempt: `1344806fdd512a666012c41ed6ec80edbd4336e1` (failed)
Direct image import: `382456d76f2e0dcb6e9bc4d89c76412944efa3e7` (suspect 4 absent)
Exact-mapping Pages run: `32730372651` / artifact `9521143272` (expired; direct repo archive)
Successful nearby Pages run: `32746011152` / artifact `9527076730` (expired; direct repo archive)
Transient staged evidence commits: `ab05106069a571882564eed764f5128719313b95`, `b9b54bdfea88c6f8ee45fa2891f33b079c59e318`
Older unrelated generated-character art: `6d40ef011ecade85305db904dd76de10c160c131`
