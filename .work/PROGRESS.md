# Progress

Last updated: 2026-08-26
Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Backup branch: `backup-before-persistent-workflow-20260825`
Backup point: commit `f03124ae3aa5ddb3916cbe3fb6984d7ecec8b72e`

## Completed

- Created the persistent `.work/` execution, plan, progress, and handoff system and a pre-cleanup backup branch.
- Audited `game.js`: required 15-card base deck + exactly one special card = 16 cards; vertical and horizontal alibi variants are correct.
- Prepared `assets/card-ui.js` with centralized 14-path mapping, direct `<img>` rendering, preload, fallback, and board/private/accusation decorators. It remains intentionally disconnected.
- Committed 13 verified production JPGs: suspects 1,2,3,5,6,7 plus all seven evidence images.
- Rejected the available Oda Nobutada (`織田信忠`) image; suspect 4 must be Oda Nobunaga (`織田信長`).
- Verified `alibi-horizontal.jpg` is the required left/right-arrow artwork.

## Current repository state

`assets/cards/` contains 13 of 14 required verified production JPGs. The only missing production file is `assets/cards/suspect-4.jpg` for Oda Nobunaga.

The final simplified architecture is NOT active. Live production still uses the legacy split-data image runtime. `index.html`, `game.js`, and production image loading were not switched in this run.

## Latest run: historical source investigation

- Read `.work/EXECUTION_PROTOCOL.md`, `.work/WORK_PLAN.md`, `.work/PROGRESS.md`, `.work/HANDOFF.md` in the required order.
- Re-searched available uploaded/file sources for `織田信長`, `Oda Nobunaga`, `suspect-4`, and `容疑者4`; no exact verified Oda Nobunaga source was found.
- Found strong Git-history evidence that the intended historical fine-art grid mapped suspect 4 to Oda Nobunaga:
  - commit `41a8257ceaf17b90f06cb57a9a330a285b9fd71b` introduced the fine-art names with `4: '織田信長'`.
  - commit `923a718c386dfebf9c3753bb6cf6e5d686eb7e18` retained `4: '織田信長'` and placed suspect 4 in the top-right cell of a 4x2 grid.
- Investigated the historical grid binary at commit `923a718...`:
  - `assets/suspects-latest.webp` is only 7,503 bytes although its RIFF header declares 47,914 bytes, so that blob is severely truncated and unusable.
  - the four `new-suspect-grid-part*.js` payloads decode to 56,087 bytes while their RIFF header declares 56,088 bytes.
  - exact diagnostic results are persisted at `.work/candidates/historical-suspect-grid-diagnostics.txt`.
- Tried all 256 possible final bytes for the one-byte-short decoded WebP; none produced a decodable image.
- Observed Base64 payload lengths: part1 = 18,695 chars, parts2-4 = 18,696 chars each, total one character short of the expected 74,784 chars.
- Tested all 64 Base64 characters inserted at the part1/part2 boundary; none produced a decodable WebP.
- Conclusion: the historical split data contains corruption beyond a simple missing terminal byte or a single missing character at the obvious part1 boundary. Do not repeat those two recovery attempts.
- Temporary one-shot diagnostic/recovery workflows created for this investigation were removed after completion. Production remained untouched.

## Validation facts retained

- `alibi-vertical.jpg`: 7,154 bytes; SHA-256 `5e03cf0f4919414cdbc393a9f6afe3149f3e04527a64a300f7fb708c0333ae17`.
- `alibi-horizontal.jpg`: 20,408 bytes; SHA-256 `fadb23b8d690f307a970b628424953d6904d4610c87fae52b9577cf3055a9749`.
- `twist.jpg`: 7,145 bytes; SHA-256 `85b2e191667320e4208f674b0930a71fe985a27b3c680a4dfc6cd7db2d60ebbb`.
- GitHub Actions run `32871193668` verified the above reconstructed evidence assets by byte size, SHA-256, JPEG SOI, and JPEG EOI.

## Failure knowledge / do not repeat

1. Legacy Base64 reconstruction failed with `Incorrect padding`.
2. Normalized legacy WebP reconstruction was not decodable.
3. Historical `suspects-latest.webp` is severely truncated (7,503 vs declared 47,914 bytes).
4. Historical four-part fine-art grid is one decoded byte short (56,087 vs declared 56,088) but no appended byte value repairs it.
5. Inserting any Base64 character at the obvious part1 boundary also does not repair the fine-art grid.
6. Large single-message Base64 transport can silently truncate or mutate data; use small chunks plus exact hashes if text transfer is unavoidable.

## Current active objective

Phase 1 remains at 13/14 images.

Next objective is to resolve the exact intended Oda Nobunaga artwork from a source that can be identity-verified. Git history proves the intended label but does not currently provide a recoverable image binary.

Do not activate `card-ui.js`, change production `index.html`, or remove the legacy image files until all 14 production JPGs are verified.

After `suspect-4.jpg` is verified: proceed to Phase 2, connect direct-image UI, validate board/private/accusation rendering, then remove legacy image systems only after the replacement is proven working.

## Blockers / unresolved items

- Missing exact verified `assets/cards/suspect-4.jpg` for Oda Nobunaga.
- Historical intended grid is corrupted and not recoverable by the two narrow repair methods already tested.
- Direct-image UI activation and destructive legacy cleanup remain blocked by the 14th image.
- `.github/workflows/reconstruct-staged-card.yml` and `.work/staging/` are temporary migration artifacts to remove during later cleanup after image transfer is fully closed.
