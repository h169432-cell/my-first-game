# Handoff

Last updated: 2026-08-25 22:20 JST

## Current position

Persistent Git-based work memory has been initialized and the recurring continuation task is enabled once per hour. The repository is still on the legacy card-image architecture. No destructive cleanup has been performed yet.

## Exact next start point

At the start of the next scheduled run:

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` and confirm no external changes invalidated this handoff.
3. Begin `WORK_PLAN.md` Phase 1: put the 14 final individual JPG card images in `assets/cards/`.
4. Verify the images before changing runtime references.
5. In the same run, if safe, proceed into Phase 2 by creating `assets/card-ui.js` and switching board/private/accusation rendering to direct image URLs.
6. Only after direct-image rendering is verified should legacy scripts be removed.
7. Before ending, update `PROGRESS.md` and `HANDOFF.md`, and update `WORK_PLAN.md` if architecture/scope changed.

## Required final artwork set

- `assets/cards/suspect-1.jpg`
- `assets/cards/suspect-2.jpg`
- `assets/cards/suspect-3.jpg`
- `assets/cards/suspect-4.jpg` — Oda Nobunaga
- `assets/cards/suspect-5.jpg`
- `assets/cards/suspect-6.jpg`
- `assets/cards/suspect-7.jpg`
- `assets/cards/motive.jpg`
- `assets/cards/clue.jpg`
- `assets/cards/weapon.jpg`
- `assets/cards/false-testimony.jpg`
- `assets/cards/alibi-vertical.jpg`
- `assets/cards/alibi-horizontal.jpg` — newly supplied horizontal-alibi artwork
- `assets/cards/twist.jpg`

## Next safe batch

Preferred batch if image assets are available to the run:

- commit all 14 images
- add centralized card image mapping/rendering
- update `index.html` to load the new UI module
- validate board/private/accusation rendering
- record results in `PROGRESS.md`

Do NOT delete legacy files in the same batch unless the direct-image path has been verified.

## If image assets are not available to the run

Do not attempt to reconstruct them from the old split Base64/WebP pipeline again. Instead:

- leave legacy runtime intact
- document the missing asset blocker in `PROGRESS.md`
- perform other safe work that does not require those binaries, such as auditing `game.js` against the fixed deck specification or preparing `card-ui.js` with stable file-path mappings
- update `HANDOFF.md` with the next exact step

## Recurring execution

Current cadence: once per hour.

Each run must process as many safe adjacent tasks as practical rather than artificially stopping after one task.

## Unresolved items

- Final card binaries need to become repository-resident so future scheduled runs can operate from Git alone.

## Recovery

If cleanup work breaks the project, the preserved pre-persistence branch is:

`backup-before-persistent-workflow-20260825`

at commit:

`f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
