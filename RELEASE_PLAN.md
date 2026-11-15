# Proposed V2 staging manifest

The exact reviewed screenshots, portrait/derivative, temporary resume and approved professional contact information now have explicit public-publication approval. The machine-readable record preserves asset hashes and a contact-section hash. Confidential originals remain prohibited. Only the 49 previously approved legacy deletions are staged; all V2 additions remain unstaged. No commit, push, merge, deployment or Pages change is authorized.

## Proposed additions and modifications

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

## Existing tracked V1 files requiring separately approved removal from the V2 tree

Completed locally under explicit cleanup authorization: exactly these 49 deletions are staged for review. No other paths are staged. Their removal does not rewrite history or change legacy-v1/v1.0-legacy; the bundle remains verified.

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

- Root ATS.pdf; use only the unchanged approved public r?sum? copy.
- legacy/, .qa/, external private originals/backups, node_modules/, caches, dist/, build-info files, environment files, credentials and machine configuration.

## Release authorization gates

- Public approval of the exact reviewed screenshots, portrait/derivative, temporary resume and contact information is recorded. Any changed bytes or information require renewed review. Separate Git commit/push and deployment authorization is still required.
- Confirm Pages source and domain before any cutover.
- Record reviewed asset hashes and explicit publication approval in the manifest only after authorization.
- On GitHub, preconfigure github-pages required reviewers, prevent self-approval where available, and restrict deployment branches to main. Do not enable release variables before this protection is verified.
- Keep PAGES_RELEASE_ENABLED unset/false. After separate authorization, set PAGES_RELEASE_SHA to the exact reviewed full main commit SHA, then enable the variable and manually dispatch that same SHA from main.
- Any source/asset changes require renewed review, commit authorization, and a new authorized SHA.

## CI actions and limitations

Workflow pins are taken from Vite?s official static-deployment reference. Recheck upstream revisions and security advisories during release review. Node 24 is the supported LTS runtime selected for CI. The workflow has no push or PR trigger. Build gets contents:read; deployment gets pages:write and id-token:write. Only dist is uploaded.

Portable validation checks source/asset allowlists, exact-case filenames, reviewed asset hashes, common secret patterns, artifact content and base paths. It cannot guarantee image/PDF privacy, verify factual claims or replace human review. Strict release validation can now pass because exact public-content approvals are recorded and all 49 legacy deletions are staged. The manual workflow remains gated by main, release-enable variables, an authorized exact SHA and environment protection. Passing validation does not grant operational authorization.

Local QA checks are supplemental and ignored; CI does not depend on them. No Pages setting or environment protection is changed by adding this workflow.
