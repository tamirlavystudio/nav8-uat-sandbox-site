// Serves site/ on http://localhost:5180 with no dependencies.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const types = { '.html': 'text/html', '.css': 'text/css' }
const port = 5180

createServer(async (req, res) => {
  const path = normalize(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '') || 'index.html'
  try {
    const body = await readFile(join('site', path))
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404).end('not found')
  }
}).listen(port, () => console.log(`dev server: http://localhost:${port}/`))
