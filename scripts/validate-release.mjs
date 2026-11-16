import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const read = file => fs.readFileSync(path.join(root, file))
const manifest = JSON.parse(read('scripts/release-manifest.json'))
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(dir, entry.name)
  if (entry.isSymbolicLink()) throw new Error('Symbolic links require review')
  return entry.isDirectory() ? walk(file) : [file]
})
const prohibited = file => file.split('/').some(segment => segment.startsWith('.') && segment !== '.gitkeep'
  || /^(legacy|certification|private-project-screenshots|portfolio-ky-private|node_modules|backups?|source-backups?)$/i.test(segment)
  || /_REVIEW\.pdf$/i.test(segment)
  || /^ATS\.pdf$/i.test(segment)
  || /^Kylah_Montealegre_ATS\.pdf$/i.test(segment)
  || /\.(php|pem|key|p12|pfx|bundle|zip|bak|tsbuildinfo)$/i.test(segment)
  || /^(credentials|secrets?|service-account)([.-]|$)/i.test(segment))

// These checks enforce a reviewed inventory and common leakage patterns. They
// cannot establish that pixels, PDF contents or factual claims are safe/approved.
export async function validate({ release = false, artifact = path.join(root, 'dist') } = {}) {
  const problems = []
  const fail = (rule, file = '') => problems.push(`${rule}${file ? ': ' + file : ''}`)
  const expected = new Set(manifest.sourceFiles)
  const legacy = new Set(manifest.legacyRemovals)
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 20_000_000 }).split('\0').filter(Boolean)
  const tracked = git(['ls-files', '-z'])
  const candidates = [...new Set([...tracked, ...git(['ls-files', '--others', '--exclude-standard', '-z'])])]
  for (const file of manifest.sourceFiles) if (!fs.existsSync(path.join(root, file))) fail('Required source missing', file)
  for (const file of candidates) {
    if (legacy.has(file)) { if (release && tracked.includes(file)) fail('Tracked V1 file requires approved removal', file); continue }
    if (!expected.has(file)) fail('Unexpected source candidate', file)
    if (file !== '.gitignore' && file !== '.gitattributes' && file !== '.env.example' && !file.startsWith('.github/workflows/') && prohibited(file)) fail('Prohibited source path', file)
    if ((/\.(tsx?|mjs|js|json|html|md|ya?ml|txt|css)$/.test(file) || file === '.env.example') && fs.existsSync(path.join(root, file))) {
      const text = read(file).toString('utf8')
      const patterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /gh[pousr]_[A-Za-z0-9]{20,}/, /github_pat_[A-Za-z0-9_]{30,}/, /AKIA[A-Z0-9]{16}/, /(?:password|api[_-]?key|access[_-]?token)\s*[:=]\s*['"][^'"\s]{12,}['"]/i]
      if (patterns.some(pattern => pattern.test(text))) fail('Potential secret; manual review required', file)
    }
  }
  const contact = read('src/main.tsx').toString('utf8').match(/<section id="contact"[\s\S]*?<\/section>/)?.[0]
  if (!contact || !manifest.contactApproval?.approved || hash(Buffer.from(contact)) !== manifest.contactApproval.sha256) fail('Contact information differs from the exact approved source')
  if (manifest.confidentialOriginalsApproved !== false) fail('Confidential originals must remain prohibited')
  if (release && !manifest.publicationApproved) fail('Public asset publication approval not recorded')
  if (release && manifest.publicAssets.some(asset => asset.publicationReviewRequired)) fail('Public asset review remains pending')
  for (const asset of manifest.publicAssets) {
    if (fs.existsSync(path.join(root, asset.file)) && hash(read(asset.file)) !== asset.sha256) fail('Public asset changed since inventory review', asset.file)
  }
  const moduleData = async file => {
    const code = ts.transpileModule(read(file).toString('utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
    return import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'))
  }
  const { projects } = await moduleData('src/data/projects.ts')
  const { archiveProjects } = await moduleData('src/data/archive.ts')
  const { training } = await moduleData('src/data/profile.ts')
  const assetPaths = new Set(manifest.publicAssets.map(asset => asset.file.slice('public/'.length)))
  const certificateFiles = ['authenticity-provenance-ai.png', 'cybersecurity-for-all.png', 'ngpa-irr.png', 'digital-marketing.png', 'ieee-student-summit.png', 'mos-word-associate.png']
  const certificatePaths = certificateFiles.map(file => 'images/certifications/' + file)
  const certificateAssets = manifest.publicAssets.filter(asset => asset.file.startsWith('public/images/certifications/'))
  if (certificateAssets.length !== 6 || new Set(certificateAssets.map(asset => asset.file)).size !== 6
    || certificateAssets.some(asset => !certificatePaths.includes(asset.file.slice('public/'.length)) || asset.publicationReviewRequired || !asset.approvalBasis)) fail('Exact six approved certificate assets required')
  if (training.length !== 6 || new Set(training.map(item => item.preview.filename)).size !== 6) fail('Exact six distinct certificate records required')
  for (const item of training) {
    const file = 'images/certifications/' + item.preview.filename
    if (!item.title || !item.provider || !item.date || !item.type || !/^[a-z0-9-]+\.png$/.test(item.preview.filename)) fail('Invalid certificate metadata')
    if (item.preview.publicationApproved && !assetPaths.has(file)) fail('Approved certificate preview absent from reviewed inventory')
    if (!item.preview.publicationApproved && assetPaths.has(file)) fail('Publication-pending certificate must remain outside public assets')
    if (!item.preview.publicationApproved || !certificatePaths.includes(file)) fail('Certificate record lacks exact public approval')
  }
  for (const project of projects) {
    for (const image of [project.preview, ...(project.caseStudyImages || [])].filter(Boolean)) {
      if (!image.approved || !image.alt || !assetPaths.has('images/projects/' + image.filename)) fail('Unreviewed or invalid project image reference')
    }
  }
  for (const project of archiveProjects) if (!project.alt || !assetPaths.has('images/projects/' + project.image)) fail('Invalid archive image reference')
  const publicFiles = walk(path.join(root, 'public')).map(file => path.relative(path.join(root, 'public'), file).split(path.sep).join('/'))
  for (const file of publicFiles) if (file !== 'images/projects/.gitkeep' && !assetPaths.has(file)) fail('Unexpected public file', file)
  if (!fs.existsSync(artifact)) { fail('Production artifact missing'); return { problems } }
  const outputFiles = walk(artifact).map(file => path.relative(artifact, file).split(path.sep).join('/'))
  for (const file of outputFiles) {
    if (prohibited(file)) fail('Prohibited artifact path', file)
    if (file !== 'index.html' && !assetPaths.has(file) && !/^assets\/index-[A-Za-z0-9_-]+\.(js|css)$/.test(file) && file !== 'images/projects/.gitkeep') fail('Unexpected artifact file', file)
  }
  for (const asset of manifest.publicAssets) {
    const file = asset.file.slice('public/'.length)
    const full = path.join(artifact, file)
    const exactCase = outputFiles.includes(file)
    if (!exactCase) fail('Required artifact asset missing or wrong case', file)
    else if (hash(fs.readFileSync(full)) !== asset.sha256) fail('Artifact asset differs from reviewed source', file)
  }
  const html = fs.readFileSync(path.join(artifact, 'index.html'), 'utf8')
  if (!html.includes('<title>works it all</title>') || !html.includes(manifest.siteUrl) || html.includes('%BASE_URL%')) fail('Production title/canonical/base mismatch')
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const url = match[1]
    if (url.startsWith('https:') || url.startsWith('#')) continue
    if (!url.startsWith(manifest.base)) { fail('Production asset outside repository base'); continue }
    if (!outputFiles.includes(url.slice(manifest.base.length).split('?')[0])) fail('Broken production HTML asset')
  }
  return { problems, sourceCount: expected.size, assetCount: assetPaths.size, legacyCount: tracked.filter(file => legacy.has(file)).length }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await validate({ release: process.argv.includes('--release') })
    for (const problem of result.problems) console.error(problem)
    if (result.problems.length) process.exitCode = 1
    else {
      console.log(`PASS: source allowlist, asset hashes/references, exact-case production inventory (${result.assetCount} assets), metadata/base, pattern checks`)
      if (result.legacyCount) console.log(`Local preflight only: ${result.legacyCount} tracked V1 files await approved removal; --release rejects them.`)
      console.log('Automation is not a privacy guarantee. Exact content approval is recorded; Git publication and deployment require separate authorization.')
    }
  } catch { console.error('Validation could not complete; review inputs locally. No confidential contents logged.'); process.exitCode = 1 }
}
