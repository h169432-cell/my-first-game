# Handoff

Last updated: 2026-08-25 22:25 JST

## Current position

First continuation run completed. Persistent Git state was read in the required order. `game.js` deck construction was audited and already matches the fixed 16-card composition. `assets/card-ui.js` now exists with centralized direct-JPG mappings, but the final image binaries are still absent, so the legacy runtime has deliberately not been disconnected.

## Exact next start point

1. Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in that order.
2. Inspect current `main` for external changes.
3. Check whether the 14 required JPGs now exist under `assets/cards/`.
4. If present, validate them, then wire `assets/card-ui.js` into board/private/accusation rendering and update `index.html`.
5. If absent, do not reconstruct old Base64/WebP assets. Continue only safe source-level preparation/audit that does not require image binaries.
6. Do not delete legacy image/runtime files until direct-image rendering is verified.
7. Update `PROGRESS.md` and `HANDOFF.md` before ending.

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

If image assets are available: validate all 14, integrate `card-ui.js`, switch board/private/accusation views, test fallback, then simplify `index.html` only after successful verification.

If image assets remain unavailable: audit the remaining rule override/UI modules and prepare migration details without activating missing image URLs.

## Unresolved items

- Final card JPG binaries are still the blocking dependency for activation of the simplified runtime.

## Recovery

Backup branch: `backup-before-persistent-workflow-20260825`
Backup commit: `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`
