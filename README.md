# Portfolio KY V2

React, TypeScript, Vite and Tailwind CSS portfolio maintained on `redevelopment-v2`. Legacy V1 is preserved separately by the local `legacy-v1` branch and annotated `v1.0-legacy` tag; release work must not rewrite them.

## Development and validation

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run validate:release
```

Development URL: http://127.0.0.1:5173/KylahMontealegre.github.io/
Production preview: `npm run preview`, then http://127.0.0.1:4173/KylahMontealegre.github.io/.
Use the actual port printed by Vite if a port is occupied.

## Architecture and content

- `src/main.tsx`: six portfolio sections, responsive navigation, persistent light/dark mode, approved professional contact links, and city-level location.
- `src/components/`: reusable portrait, featured cards, expandable technical case studies, captioned screenshot galleries, and archive controls.
- `src/data/`: project, archive, and training records. PMS maintenance/redevelopment and the original Laravel internship project remain separate. Unverified technologies are excluded; the internship end date is confirmed as June 26, 2025, displayed as June 2025.
- `src/styles.css`: existing editorial layout, theme tokens, focus indicators, responsive behavior, and reduced-motion support.
- `public/images/`: original portrait plus its separate optimized derivative, eight archive images, eight flattened sanitized featured screenshots, and six explicitly approved sanitized certificate previews.
- `public/resume/Kylah_Montealegre_Resume.pdf`: owner-approved, one-page cleaned LinkedIn-corrected hybrid ATS résumé. View Résumé opens a new tab; Download Résumé uses the download attribute. The previous approved PDF is preserved privately.
- `CertificationsGallery`: document-based credentials and training after Education, with responsive cards, Show More/Less, image fallbacks and keyboard-accessible enlargement. Six approved previews load from `public/images/certifications/` using the Vite base path and `object-fit: contain`. The Microsoft classification states what the supplied document says without claiming independent issuer verification.
- `scripts/release-manifest.json`: exact proposed source inventory, reviewed asset hashes, explicit publication-review flags and proposed V1 removals.
- `scripts/validate-release.mjs`: portable source/artifact privacy preflight. `--release` additionally requires recorded public approval and removal of tracked V1 files from the V2 tree.

## Privacy and publication boundary

The current résumé candidate uses the owner-confirmed LinkedIn URL `https://www.linkedin.com/in/kymdm/`. Its approved SHA-256 is `3dc0087d8cd48308e676499e9d2aaeb140025602b3fdf1aa44f0318e7d235fc8`. Embedded Content Credentials and associated references were removed without changing the visible page, selectable text order or hyperlinks. Asset approval does not authorize Git operations or deployment. The other 28 public assets retain their previous approvals and hashes.

The user has explicitly approved public publication of the eight reviewed sanitized screenshots, six reviewed sanitized certificate previews, the graduation portrait and optimized derivative, the owner-approved cleaned LinkedIn-corrected hybrid ATS résumé, and the approved email/mobile/profile links and city-level location. Approval applies only to the exact reviewed bytes and information recorded in the release manifest. Certificate originals and local contact sheets remain private outside the served workspace and release inventory. These content approvals do not authorize staging additions, committing, pushing, merging, deploying, or changing Pages settings.

Private originals remain outside the repository and served workspace. Never copy them into source, public assets or build output. Environment files, credentials, keys, QA artifacts and machine configuration are ignored. The `.env.example` exception is only for a deliberately reviewed, secret-free template; no example file is currently supplied. Vite adds private-path access denial; Git ignore rules alone do not restrict HTTP access.

Only the reviewed `dist/` directory may be uploaded as a Pages artifact. Do not publish the complete checkout or migrate the old PHP form. Exactly 49 approved obsolete V1 files were removed in the V2 baseline commit. V1 remains preserved through its original Git history, legacy branch, annotated tag and recovery bundle. The ignored legacy directory is not a public release asset.

## Inert deployment workflow

`.github/workflows/pages.yml` is manual-only. It requires `main`, an exact authorized commit SHA, and `PAGES_RELEASE_ENABLED=true`; unset variables keep it inactive. Strict validation verifies recorded exact asset/contact approval and rejects tracked V1 remnants or changed asset bytes. Approval metadata is a content record, not deployment authorization. Build and deployment have separate least-privilege permissions. Configure the `github-pages` environment with required reviewers and main-only branch restrictions before enabling anything. The workflow cannot configure those protections itself.

See `RELEASE_PLAN.md` for the exact reviewed inventory and authorization sequence. The current hybrid résumé and certificate-gallery work is local and unstaged; earlier baseline/correction commits are preserved. No new Git publication or deployment is authorized. Portable checks and hash inventories are safeguards, not proof that screenshots, PDF contents or factual claims are safe. Human review remains mandatory.

## Local regression checks

When existing local QA tooling and servers are available, `node .qa/archive.mjs` and `node .qa/privacy-access.mjs` supplement portable checks. These ignored tools and their private inputs are not CI prerequisites and must not be published. Dependency audits should be rerun during final release review; no automatic upgrades are performed.
