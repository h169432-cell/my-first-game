# Handoff

Last updated: 2026-08-25 22:27 JST

## Current position

Second continuation run completed. `assets/cards/` still has no final JPG binaries, so activation remains blocked. Safe source preparation progressed: `assets/card-ui.js` now contains the 14-path mapping, suspect names, alt text, direct `<img>` creation, preload support, and image-error fallback behavior. Legacy suspect/evidence UI dependencies were audited and remain connected only because the final JPGs are absent.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` for external changes.
3. Check whether the 14 required JPGs now exist under `assets/cards/`.
4. If present, validate file presence/non-zero size/JPEG identity and visually verify suspect 4 and horizontal alibi.
5. Then integrate `assets/card-ui.js` into board reveal, private inspection, and accusation rendering while keeping text fallback.
6. After direct-image rendering is verified, update `index.html` to remove split-image/runtime reconstruction scripts and old suspect/evidence UI modules.
7. Only after that verification delete the obsolete image/runtime files and temporary cleanup workflows.
8. Update `PROGRESS.md` and `HANDOFF.md` before ending.

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

## Migration findings preserved

- `assets/suspect-ui.js` reconstructs/crops a suspect sheet with Canvas; final direct-JPG UI should replace it completely.
- `assets/evidence-ui.js` depends on the evidence sheet and contains an embedded Base64 horizontal-alibi image; final direct-JPG UI should replace it completely.
- `assets/clueverge-rules-v2.js` duplicates core deck/range logic already present in `game.js` and also contains legacy sprite UI code. Current `index.html` does not load it, so it can remain untouched until final cleanup.
- Current `index.html` still loads eight split-image part scripts plus `card-image-runtime.js`, then `game.js`, `suspect-ui.js`, and `evidence-ui.js`.

## Next safe batch

If image assets are available: validate all 14, wire direct images into the three render surfaces, verify fallback, simplify `index.html`, then remove legacy files in a later verified checkpoint.

If image assets remain unavailable: do not attempt Base64/WebP reconstruction. Limit further work to non-destructive audits/documentation; do not activate missing image URLs.

## Unresolved items

- Final card JPG binaries are still the blocking dependency for activation of the simplified runtime.
- Visual identity checks for suspect 4 and horizontal alibi remain pending until those files exist.

## Recovery

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
