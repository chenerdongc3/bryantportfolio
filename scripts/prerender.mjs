import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const template = readFileSync(join(root, "dist/index.html"), "utf8");
const serverEntry = await import(pathToFileURL(join(root, "dist-ssr/entry-server.js")).href);

const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, "");
const absolute = (pathname) => siteUrl ? new URL(pathname.replace(/^\/+/, ""), `${siteUrl}/`).toString() : undefined;

function renderHead(metadata) {
  const canonical = absolute(metadata.pathname);
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}">`,
    `<meta name="robots" content="${metadata.noindex ? "noindex, nofollow" : "index, follow"}">`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}">`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}">`,
    `<meta property="og:type" content="${metadata.type ?? "website"}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ];
  if (canonical) tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}">`, `<meta property="og:url" content="${escapeHtml(canonical)}">`);
  if (siteUrl && serverEntry.getPublishedNotes().length) tags.push(`<link rel="alternate" type="application/rss+xml" title="陈扬的学习笔记" href="${escapeHtml(absolute("/feed.xml"))}">`);
  if (siteUrl && existsSync(join(root, "dist/og-experience.png"))) {
    const ogImage = absolute("/og-experience.png");
    tags.push(`<meta property="og:image" content="${escapeHtml(ogImage)}">`, `<meta property="og:image:alt" content="陈扬的增长、前端与 Agent 工程经历作品集">`, `<meta name="twitter:image" content="${escapeHtml(ogImage)}">`);
  }
  metadata.jsonLd.forEach((value) => tags.push(`<script type="application/ld+json" data-site-jsonld>${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`));
  return tags.join("\n    ");
}

async function writeRoute(pathname, target) {
  const { html, metadata } = await serverEntry.render(pathname);
  const output = template.replace("<!--app-head-->", renderHead(metadata)).replace("<!--app-html-->", html);
  const outputPath = join(root, "dist", target ?? (pathname === "/" ? "index.html" : `${pathname.slice(1)}/index.html`));
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, output);
}

for (const pathname of serverEntry.getPublicRoutes()) await writeRoute(pathname);
await writeRoute("/404", "404.html");

const publicRoutes = serverEntry.getIndexableRoutes();
if (siteUrl) {
  const urls = publicRoutes.map((route) => `  <url><loc>${escapeHtml(absolute(route))}</loc></url>`).join("\n");
  writeFileSync(join(root, "dist/sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  writeFileSync(join(root, "dist/robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${absolute("/sitemap.xml")}\n`);
  const notes = serverEntry.getPublishedNotes();
  if (notes.length) {
    const escapeXml = (value) => escapeHtml(String(value)).replace(/'/g, "&apos;");
    const items = notes.map((note) => `    <item>\n      <title>${escapeXml(note.title)}</title>\n      <link>${escapeXml(absolute(`/notes/${note.slug}`))}</link>\n      <guid isPermaLink="true">${escapeXml(absolute(`/notes/${note.slug}`))}</guid>\n      <description>${escapeXml(note.description)}</description>\n      <pubDate>${new Date(note.publishedAt).toUTCString()}</pubDate>\n${note.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")}\n    </item>`).join("\n");
    writeFileSync(join(root, "dist/feed.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>陈扬的学习笔记</title>\n    <link>${escapeXml(absolute("/notes"))}</link>\n    <description>关于语言、Agent、前端工程与人机交互的学习笔记。</description>\n    <language>zh-CN</language>\n${items}\n  </channel>\n</rss>\n`);
  }
} else {
  writeFileSync(join(root, "dist/robots.txt"), "User-agent: *\nAllow: /\n");
}
