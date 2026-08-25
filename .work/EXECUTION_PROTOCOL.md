# Scheduled Execution Protocol

Repository: `h169432-cell/my-first-game`
Primary branch: `main`
Persistent work-state directory: `.work/`

## Mandatory start-of-run sequence

Every scheduled execution MUST begin by reading, in this order:

1. `.work/EXECUTION_PROTOCOL.md`
2. `.work/WORK_PLAN.md`
3. `.work/PROGRESS.md`
4. `.work/HANDOFF.md`

Then inspect the current `main` branch and compare it with the state recorded in the files above. Git is the authoritative source of truth for project state. Chat history is supplemental only and must never be the sole place where work state is stored.

## Execution policy

- Resume from the exact `Next start point` in `HANDOFF.md` unless the repository has materially changed.
- Do not limit a run to one task. Complete as many adjacent, safe tasks as possible in one run.
- Prefer cohesive batches: e.g. add assets + switch references + validate + remove legacy paths.
- Preserve a working game at each meaningful checkpoint.
- Before destructive cleanup, confirm the replacement path exists and is referenced correctly.
- Avoid reintroducing Base64-split images, Blob reconstruction, CSS sprite cropping, or temporary runtime image reconstruction unless explicitly required.
- Keep game rules in `game.js`; keep card artwork mapping/rendering in one UI module; keep actual artwork as image files.
- When uncertain, inspect repository state and current source files before editing.

## Mandatory end-of-run sequence

Before ending every run, update Git with:

1. `.work/PROGRESS.md`
   - completed items
   - current state
   - files changed
   - validation performed
   - blockers / failures
2. `.work/HANDOFF.md`
   - exact next start point
   - next safe batch of work
   - unresolved questions
   - any commands / paths / SHAs needed to resume
3. `.work/WORK_PLAN.md`
   - only if scope, architecture, ordering, or priorities changed

Commit these updates to Git. The next run must be able to continue using Git state alone.

## Completion condition

The current card-system cleanup project is complete only when:

- `assets/cards/` contains the final individual card images.
- Runtime card display uses ordinary image URLs, not reconstructed image data.
- `index.html` no longer loads legacy split-image/runtime reconstruction scripts.
- obsolete image-system files and temporary cleanup workflows are removed.
- the 16-card deck composition and two distinct alibi variants are preserved.
- board reveal, private inspection, accusation UI, and GitHub Pages all display the intended artwork.
- `PROGRESS.md` and `HANDOFF.md` record final verification and no remaining cleanup tasks.
