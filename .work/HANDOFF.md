# Handoff

Last updated: 2026-08-27

## Current position

The direct-file card architecture remains in place and the existing browser game is now also configured as an installable smartphone app prototype.

App-prototype additions:
- `manifest.webmanifest`
- `assets/app-icon.svg`
- mobile/PWA metadata in `index.html`

No game rules or card behavior were changed in this app-prototype run.

The earlier black-card defect is still pending user-side confirmation and must not be considered resolved yet.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Confirm the current `main` head and newest GitHub Pages deployment status.
3. Verify that deployed `index.html` exposes the manifest link and that `manifest.webmanifest` is publicly reachable.
4. If the user reports installation or display problems, fix only the app-shell issue involved; do not change unfinished game rules unless explicitly requested.
5. If black cards remain, continue the existing card-image defect investigation separately and only change the affected artwork/runtime path.
6. Keep `PROGRESS.md` and `HANDOFF.md` updated after each run.

## Next safe batch

- Verify deployment of the app-prototype shell.
- Confirm home-screen installation behavior on the user's phone when they test it.
- Continue normal game development only from explicit user objectives.

## Unresolved items

- The latest app-prototype deployment has not yet been confirmed in this handoff at the time of writing.
- Home-screen installation has not been tested on the user's actual phone.
- User-side confirmation is still required for the previously reported black-card issue.

## Important references

Repository: `h169432-cell/my-first-game`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
Card-image cache-bust commit: `d70a0a2ce3cb7867ca4fa0aa35843bc9ada575d2`
Runtime cache refresh commit: `2a4a3e82a73a732e7e798aad66e0d8b5e42f339f`
App manifest commit: `8a33d844562916a6376ce6c1d296bfe8128826c5`
App icon commit: `78b08eccf4c74d5b7525541601166efabd25f0b1`
App shell index commit: `78602ed40c7f28f7d1d0c3b1595ff9144ae6d02c`
