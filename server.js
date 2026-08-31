// TEKNOTECH SERVICES - Creadores y Dueños de este Software

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.heic': 'image/heic',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    // Support range requests for video
    if (ext === '.mp4' && req.headers.range) {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
      const stat = fs.statSync(filePath);
      const range = req.headers.range;
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunksize = end - start + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
        'Content-Type': contentType,
      });

      fs.createReadStream(filePath, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
// TeknoTech Services - Creadores y Dueños. Prohibido vender o modificar sin autorizacion.
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
