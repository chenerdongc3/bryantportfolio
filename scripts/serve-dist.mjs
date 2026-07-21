import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const dist = join(process.cwd(), "dist");
const port = Number(process.env.PORT ?? 4173);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  const relative = pathname.replace(/^\/+/, "");
  let filePath = normalize(join(dist, relative));
  if (!filePath.startsWith(dist)) filePath = join(dist, "404.html");
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, "index.html");
  if (!extname(filePath)) filePath = join(filePath, "index.html");

  let status = 200;
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(dist, "404.html");
    status = 404;
  }
  response.writeHead(status, { "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Static portfolio server listening on http://127.0.0.1:${port}`));
