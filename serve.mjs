// Tiny static server for local viewing. No dependencies, no build step —
// same as the rest of this repo. Node only (there is no Python on this box).
//   node serve.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname);
const PORT = Number(process.argv[2] || 8731);
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',   '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2', '.pdf': 'application/pdf',
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.resolve(path.join(ROOT, rel));

  // path.join normalises away any ../ before this check, so it also blocks traversal.
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end(`404 ${rel}`);
  }
  res.writeHead(200, {
    'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store',   // always see the file you just edited
  });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`Comedy Workshop -> http://127.0.0.1:${PORT}/`);
});
