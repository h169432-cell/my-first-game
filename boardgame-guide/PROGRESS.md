# Board Game Guide — Progress

Last updated: 2026-08-27

## Completed
- Published guide pages remain at 30 total, including Clueverge.
- Site structure remains: compact `index.html` TOP + complete `games.html` catalog + individual `games/*.html` detail pages.
- Added rights-explicit images/visuals to 24 of the 30 existing detail pages during the image-rights pass.
- Every newly added image uses a reuse basis that was explicitly stated by the source (CC0, Public Domain, CC BY, or CC BY-SA).
- CC BY / CC BY-SA images now show creator, source file/page, license link, and modification status directly beneath the image. CC0/Public Domain visuals also show their source/status.
- Image links point back to the relevant Wikimedia Commons source page.
- Updated `WORK_PLAN.md` with a durable image/copyright policy so future game additions follow the same standard.
- No files outside `boardgame-guide/` were intentionally modified.

## Image pages updated in this pass
- 7 Wonders Duel
- 7 Wonders
- CATAN
- Azul
- Carcassonne
- Ticket to Ride
- Dominion Second Edition
- Wingspan
- Pandemic
- Codenames
- Patchwork
- Everdell
- Scythe
- Root
- The Mind
- Terraforming Mars
- Splendor
- Dixit
- Cascadia
- Love Letter
- King of Tokyo
- Sushi Go Party!
- Kingdomino
- Viticulture Essential Edition

## Verification performed
- Re-fetched updated CATAN after writing and confirmed the image, Wikimedia Commons source link, CC BY-SA 4.0 attribution, and `../index.html` navigation are present in Git.
- Reuse conditions were checked on the relevant source/file pages before publishing the images.
- The image policy deliberately does not treat an ordinary publisher/retailer/review image as reusable merely because it is publicly viewable.

## Current position
- Published guide pages: 30 total, including Clueverge.
- 24 pages have newly verified rights-explicit images/visuals from this pass.
- 6 titles remain unresolved for image publication under the current safety standard.

## Unresolved image items
1. The Quacks of Quedlinburg
   - A suitable Wikimedia Commons image by Honza F. is verified as CC0 1.0.
   - The attempted GitHub file update was blocked by the tool's safety check, so the page remains unchanged for now.
2. Clueverge
   - The existing page already embeds a Medium-hosted image, but its reuse terms have not been verified under the new policy.
   - The page content also appears encoding-corrupted/mojibaked when fetched from GitHub. Do not perform a broad rewrite during an image-only task without reconstructing/validating the page first.
3. Ark Nova
   - BoardGameGeek exposes license filters and at least one image page indicates no rights reserved, but a stable direct embeddable image URL with verified attribution was not established in this pass.
   - Official publisher product images are all-rights-reserved unless separately permitted; do not copy them by default.
4. Jaipur
   - Official product images were found, but no explicit reuse permission was verified. Leave without an added image rather than copy them.
5. The Crew: Mission Deep Sea
   - Official product/demo imagery exists, but no explicit reusable license was verified. A sampled BoardGameGeek image was all-rights-reserved.
6. Heat: Pedal to the Metal
   - Wikimedia Commons has a dedicated category and several files, but the individual file-license details were not successfully verified in this pass. Do not assume the category page's own license applies to the image files.

## Planned next items
1. Continue normal catalog expansion from Agricola when expansion work resumes.
2. For any new game page, search for an explicitly reusable image before publication and include visible attribution/license details where required.
3. If revisiting unresolved images, resolve the exact file license/source first; never substitute an unlicensed product image.
4. Keep TOP compact and add new titles to `games.html`, not the landing page.

## Unresolved general items
- Image reuse rights are game- and file-specific; even a Creative Commons photograph can contain third-party game artwork, so do not describe the site as carrying a universal legal guarantee.
- Preserve the existing compact navigation structure.
- All work must remain under `boardgame-guide/`.
