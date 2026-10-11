// Fails on the mistakes an agent editing copy is likely to make.
import { readFileSync } from 'node:fs'

const html = readFileSync('site/index.html', 'utf8')
const problems = []
for (const id of ['headline', 'tagline', 'menu', 'faq', 'build']) {
  if (!html.includes(`id="${id}"`)) problems.push(`missing element #${id}`)
}
if (!/<title>[^<]+<\/title>/.test(html)) problems.push('missing <title>')
if (/TODO|lorem ipsum/i.test(html)) problems.push('placeholder text left in')

if (problems.length) {
  console.error('lint failed:\n- ' + problems.join('\n- '))
  process.exit(1)
}
console.log('lint passed')
