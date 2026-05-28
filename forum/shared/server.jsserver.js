// ============================================================
// Moderation Assistant – Lokaler Proxy-Server
// ============================================================
// Voraussetzung: Node.js installiert (node --version)
//
// SETUP:
//   1. API-Key unten eintragen (Zeile mit YOUR_API_KEY_HERE)
//   2. Terminal öffnen, in diesen Ordner wechseln
//   3. Starten mit:  node server.js
//   4. moderation-assistant.html im Browser öffnen
//   5. Stoppen mit:  Ctrl+C im Terminal
// ============================================================

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ── API-Key hier eintragen ──────────────────────────────────
const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';
// ───────────────────────────────────────────────────────────

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {

  // CORS-Header für alle Antworten
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // ── Proxy-Endpunkt: POST /api ───────────────────────────
  if (req.method === 'POST' && req.url === '/api') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      const options = {
        hostname: 'api.anthropic.com',
        path: '/v1/messages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
      };

      const proxyReq = https.request(options, (proxyRes) => {
        let data = '';
        proxyRes.on('data', chunk => { data += chunk; });
        proxyRes.on('end', () => {
          res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
          res.end(data);
        });
      });

      proxyReq.on('error', (err) => {
        console.error('Proxy error:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { message: err.message } }));
      });

      proxyReq.write(body);
      proxyReq.end();
    });
    return;
  }

  // ── Statische Dateien (HTML etc.) ───────────────────────
  let filePath = req.url === '/' ? '/moderation-assistant.html' : req.url;
  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Datei nicht gefunden: ' + req.url);
      return;
    }
    const ext = path.extname(filePath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log('');
  console.log('✅ Moderation Assistant Proxy läuft');
  console.log('   → http://localhost:' + PORT);
  console.log('');
  console.log('   Browser öffnen und obige Adresse eingeben.');
  console.log('   Stoppen mit Ctrl+C');
  console.log('');
});
