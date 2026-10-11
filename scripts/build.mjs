// Copies site/ to dist/ and stamps the commit, so the live page shows which commit it is.
import { cpSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { execSync } from 'node:child_process'

let sha = process.env.GITHUB_SHA
if (!sha) {
  try { sha = execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() } catch { sha = 'dev' }
}
rmSync('dist', { recursive: true, force: true })
cpSync('site', 'dist', { recursive: true })
const page = readFileSync('dist/index.html', 'utf8').replace('build: dev', `build: ${sha.slice(0, 7)}`)
writeFileSync('dist/index.html', page)
console.log(`built dist/ at ${sha.slice(0, 7)}`)
