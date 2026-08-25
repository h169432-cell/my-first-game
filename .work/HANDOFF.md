# Handoff

Last updated: 2026-08-25 22:36 JST

## Current position

Third continuation run completed. `assets/cards/` still has no final JPG binaries, so activation remains blocked. `assets/card-ui.js` now has the full direct-JPG rendering layer prepared for revealed board cards, private inspection, and accusation choices, including preload and image-error fallback. It is still intentionally not loaded by `index.html`, so the current live game continues using the legacy image path.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` for external changes.
3. Check whether all 14 required JPGs exist under `assets/cards/`.
4. If present, validate file presence, non-zero size, and JPEG identity; visually verify suspect 4 and horizontal alibi.
5. Load `assets/card-ui.js` after `game.js` and call `CardUI.installDirectCardUI()`; verify board/private/accusation rendering and failure fallback.
6. Only after successful verification remove the eight split-image scripts, `card-image-runtime.js`, `suspect-ui.js`, and `evidence-ui.js` from `index.html`.
7. Then remove obsolete image/runtime files and temporary cleanup workflows in a later safe checkpoint.
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

- `assets/suspect-ui.js` uses a reconstructed sheet plus Canvas cropping.
- `assets/evidence-ui.js` uses a reconstructed sheet and embeds horizontal alibi artwork as Base64.
- `assets/clueverge-rules-v2.js` duplicates core rule logic already present in `game.js` and also contains legacy artwork rendering; current `index.html` does not load it.
- `assets/card-ui.js` now provides direct file mapping, alt text, preload, image failure fallback, board/private/accusation decorators, styling, and `installDirectCardUI()`.
- The direct UI uses DOM observers rather than replacing `game.js` functions.

## Next safe batch

If image assets are available: validate all 14 -> activate `card-ui.js` -> verify three render surfaces and fallback -> simplify `index.html`.

If image assets remain unavailable: do not retry Base64/WebP reconstruction and do not disconnect the working legacy runtime.

## Unresolved items

- Final card JPG binaries are still the blocking dependency.
- Visual identity checks for suspect 4 and horizontal alibi remain pending.

## Recovery

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
