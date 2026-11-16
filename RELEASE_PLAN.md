# Proposed V2 staging manifest

## Current local candidate: résumé LinkedIn correction

The owner-exported `Kylah_Montealegre_ATS.pdf` was verified and installed locally byte-for-byte before the C2PA cleanup described below. Both visible LinkedIn text and its hyperlink use `/in/kymdm/`; the previous URL is absent. All other extracted professional text and link targets match the prior hybrid PDF. A rendered comparison confines pixel changes to the header links row; the remaining page is unchanged. The PDF remains searchable, selectable and one-page A4.


C2PA cleanup: a separate pdf-lib 1.17.1 derivative replaces the local candidate after verified private backup. Embedded credentials, catalog associations and provenance claims are removed. Source SHA-256: `18fff2726aa5a66cd1b50e5141875d2dee25678d7ad209dc07a7e48653f8b13a`. All page content/font streams, extracted text order and four hyperlinks are preserved; rendering comparison shows zero differing pixels at 2000 x 2829. **Owner-approved exact clean PDF (CODEX 33)**; no original Content Credentials signature is claimed for this derivative.

- Approved SHA-256: `3dc0087d8cd48308e676499e9d2aaeb140025602b3fdf1aa44f0318e7d235fc8`.
- Status: **owner-approved for public publication of these exact bytes only**. No staging, commit, push or deployment authorization.
- Previous approved SHA-256: `1d617a987d37804561b79f520895f495cb0d7c07e4dba63a461671ec035d25d4`; its verified private backup remains outside the repository.
- The manifest records this exact approved hash and clears only its pending asset review. Existing strict validation remains unchanged; all previously approved asset records are preserved.
- The other 28 approved public assets are byte-identical. Root export files remain ignored and denied over HTTP.
- No staging, commit, push, PR transition, merge, deployment or settings change is authorized. Earlier statements below record historical versions; the exact current PDF approval is recorded above.

## Current local review: hybrid résumé and credential gallery

The latest authorized work is local implementation only: no staging, commits, pushes, PR changes, merges or deployment. Earlier authorizations below describe completed release history and do not authorize new Git operations.

- The approved `Kylah_Montealegre_ATS_Hybrid_Updated_REVIEW.pdf` replaces the public résumé byte-for-byte. Its current SHA-256 is `1d617a987d37804561b79f520895f495cb0d7c07e4dba63a461671ec035d25d4`. The previous full-width public PDF was hash-verified in private backup before replacement.
- Six certificate documents were inspected. The GPPB document is participation, not completion. The supplied Microsoft image states Word Associate (Office 2019), earned August 9, 2022; issuer verification has not been independently performed.
- The user separately approved all six exact sanitized certificate previews for public inclusion. Copies are integrated locally under `public/images/certifications/`; the manifest records each exact reviewed SHA-256 and explicit approval. Original documents and contact sheets remain outside the repository and served workspace, excluded from the release inventory.
- The gallery loads the approved PNGs directly with the repository base path, preserves complete images with contain fit, and supports responsive cards, keyboard enlargement, fallbacks and Show More/Less. The temporary local-file selection control has been removed. Only the previously reviewed sanitized pixels are public assets; private signatures, codes and verification links remain excluded.
- The source inventory gains `src/components/CertificationsGallery.tsx`; previously approved screenshot, portrait, favicon and contact hashes are unchanged.

The remaining sections preserve earlier baseline and full-width résumé approval history; the hybrid PDF hash above is the current approval.

## Previous approved résumé replacement

The user approved the one-page full-width ATS résumé for replacement of the temporary public PDF. Only `public/resume/Kylah_Montealegre_Resume.pdf` is a release asset; the root review source is ignored. The replaced PDF was backed up privately outside the repository and verified before replacement.

- Approved public PDF SHA-256: `b6b2fac7f7639c9120a23f5f5644e86e79d1807f3985108e59dc285afbb92f88`.
- Internship display: February–June 2025; graduation remains July 2025.
- Approved email, mobile and LinkedIn are preserved, with matching hyperlinks.
- All other public asset hashes and the contact-section approval hash remain unchanged.
- The résumé replacement and factual corrections were reviewed separately. Local staging and one correction commit containing exactly seven modified paths are authorized; no further push, merge, deployment or Pages change is authorized.

The exact reviewed screenshots, portrait/derivative, corrected full-width ATS résumé and approved professional contact information have explicit public-publication approval. The machine-readable record preserves asset hashes and a contact-section hash. Confidential originals remain prohibited. The V2 baseline, including the 49 approved legacy deletions, was committed as `d2e3e9e5f3d518e5e9ab617b33a74047f0301141`; the inventory below records that reviewed baseline. The subsequent correction commit is limited to `.gitignore`, `README.md`, `RELEASE_PLAN.md`, `scripts/release-manifest.json`, `src/data/profile.ts`, `src/main.tsx` and `public/resume/Kylah_Montealegre_Resume.pdf`.

## Reviewed V2 baseline inventory

- `.gitattributes`
- `.github/workflows/pages.yml`
- `.gitignore`
- `README.md`
- `RELEASE_PLAN.md`
- `index.html`
- `package-lock.json`
- `package.json`
- `public/apple-touch-icon.png`
- `public/favicon-16.png`
- `public/favicon-32.png`
- `public/favicon.svg`
- `public/images/profile-ky-720.jpg`
- `public/images/profile-ky.png`
- `public/images/certifications/authenticity-provenance-ai.png`
- `public/images/certifications/cybersecurity-for-all.png`
- `public/images/certifications/digital-marketing.png`
- `public/images/certifications/ieee-student-summit.png`
- `public/images/certifications/mos-word-associate.png`
- `public/images/certifications/ngpa-irr.png`
- `public/images/projects/.gitkeep`
- `public/images/projects/archive/atm.jpg`
- `public/images/projects/archive/chess.PNG`
- `public/images/projects/archive/cisco.PNG`
- `public/images/projects/archive/hotel.PNG`
- `public/images/projects/archive/maze.PNG`
- `public/images/projects/archive/oga.png`
- `public/images/projects/archive/prod.PNG`
- `public/images/projects/archive/tren.PNG`
- `public/images/projects/capstone/email-alert.png`
- `public/images/projects/capstone/hardware-monitor.png`
- `public/images/projects/capstone/login.png`
- `public/images/projects/capstone/sms-alert.png`
- `public/images/projects/internship/home.png`
- `public/images/projects/internship/supplier-directory.png`
- `public/images/projects/pms/admin-dashboard.png`
- `public/images/projects/pms/dashboard.png`
- `public/resume/Kylah_Montealegre_Resume.pdf`
- `scripts/release-manifest.json`
- `scripts/validate-release.mjs`
- `src/components/CaseStudyGallery.tsx`
- `src/components/CertificationsGallery.tsx`
- `src/components/ProfileImage.tsx`
- `src/components/ProjectArchive.tsx`
- `src/components/ProjectCard.tsx`
- `src/data/archive.ts`
- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/main.tsx`
- `src/styles.css`
- `src/vite-env.d.ts`
- `tsconfig.json`
- `vite.config.ts`

## Historical V1 removals completed in the V2 baseline

Completed under explicit cleanup and baseline commit authorization: exactly these 49 files were removed in the V2 baseline commit. They are not pending deletions in the correction commit. Their removal does not rewrite history or change legacy-v1/v1.0-legacy; the verified recovery bundle remains preserved.

- `css/animate.min.css`
- `css/aos.css`
- `css/bootstrap.css`
- `css/bootstrap.min.css`
- `css/style.css`
- `fonts/glyphicons-halflings-regular.eot`
- `fonts/glyphicons-halflings-regular.svg`
- `fonts/glyphicons-halflings-regular.ttf`
- `fonts/glyphicons-halflings-regular.woff`
- `fonts/glyphicons-halflings-regular.woff2`
- `img/Signature.svg`
- `img/about-img.jpg`
- `img/about.jpg`
- `img/cover.jpg`
- `img/favicon.ico`
- `img/home-bg-2.jpg`
- `img/portfolio/01.jpg`
- `img/portfolio/010.jpg`
- `img/portfolio/02.jpg`
- `img/portfolio/03.jpg`
- `img/portfolio/04.jpg`
- `img/portfolio/05.jpg`
- `img/portfolio/06.jpg`
- `img/portfolio/07.jpg`
- `img/portfolio/08.jpg`
- `img/portfolio/09.jpg`
- `img/portfolio/atm.jpg`
- `img/portfolio/chess.PNG`
- `img/portfolio/cisco.PNG`
- `img/portfolio/film.PNG`
- `img/portfolio/hotel.PNG`
- `img/portfolio/maze.PNG`
- `img/portfolio/oga.png`
- `img/portfolio/prod.PNG`
- `img/portfolio/tren.PNG`
- `ionicons/css/ionicons.min.css`
- `ionicons/fonts/ionicons.eot`
- `ionicons/fonts/ionicons.svg`
- `ionicons/fonts/ionicons.ttf`
- `ionicons/fonts/ionicons.woff`
- `js/aos.js`
- `js/bootstrap.min.js`
- `js/custom.js`
- `js/jquery.form.js`
- `js/jquery.js`
- `js/jquery.stellar.min.js`
- `js/jquery.validate.min.js`
- `js/plugins.js`
- `process.php`

## Never stage

- Root ATS.pdf, Kylah_Montealegre_ATS_FullWidth_Review.pdf, Kylah_Montealegre_ATS_Hybrid_Updated_REVIEW.pdf and Certification/; use only the approved public résumé copy.
- legacy/, .qa/, external private originals/backups, node_modules/, caches, dist/, build-info files, environment files, credentials and machine configuration.

## Release authorization gates

- Public approval of the exact reviewed screenshots, portrait/derivative, corrected full-width ATS résumé and contact information is recorded. Any changed bytes or information require renewed review. One local seven-file correction commit is authorized; a subsequent push and production deployment still require separate authorization.
- Confirm Pages source and domain before any cutover.
- Record reviewed asset hashes and explicit publication approval in the manifest only after authorization.
- On GitHub, preconfigure github-pages required reviewers, prevent self-approval where available, and restrict deployment branches to main. Do not enable release variables before this protection is verified.
- Keep PAGES_RELEASE_ENABLED unset/false. After separate authorization, set PAGES_RELEASE_SHA to the exact reviewed full main commit SHA, then enable the variable and manually dispatch that same SHA from main.
- Any source/asset changes require renewed review, commit authorization, and a new authorized SHA.

## CI actions and limitations

Workflow pins are taken from Vite’s official static-deployment reference. Recheck upstream revisions and security advisories during release review. Node 24 is the supported LTS runtime selected for CI. The workflow has no push or PR trigger. Build gets contents:read; deployment gets pages:write and id-token:write. Only dist is uploaded.

Portable validation checks source/asset allowlists, exact-case filenames, reviewed asset hashes, common secret patterns, artifact content and base paths. It cannot guarantee image/PDF privacy, verify factual claims or replace human review. Strict release validation requires exact public-content approvals and the exclusion of all 49 historical V1 paths from the current V2 tree; their removal is already included in the baseline commit. The manual workflow remains gated by main, release-enable variables, an authorized exact SHA and environment protection. Passing validation does not grant operational authorization.

Local QA checks are supplemental and ignored; CI does not depend on them. No Pages setting or environment protection is changed by adding this workflow.
