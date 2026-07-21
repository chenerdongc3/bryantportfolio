# 陈扬的个人作品集

基于 Vite、React、TypeScript、React Router 和 Tailwind CSS 构建的静态作品集。内容来自仓库内统一的类型化数据源，构建时为公开路由生成完整 HTML。

## 本地开发

```sh
npm ci
npm run dev
```

## 生产配置

复制 `.env.example` 为 `.env.production`，并将 `VITE_SITE_URL` 设置为最终生产域名。未配置生产域名时，构建仍会成功，但会主动省略 canonical、绝对 Open Graph URL 和 sitemap，避免发布占位地址。

```sh
cp .env.example .env.production
npm run build
```

`dist/` 会包含首页、项目、About、Notes 和 404 的预渲染 HTML。生产静态服务器应优先返回匹配目录下的 `index.html`，并在路径不存在时返回 `404.html` 和 HTTP 404 状态。

## GitHub Pages

仓库已通过 `.github/workflows/deploy-pages.yml` 配置项目 Pages。推送到 `main` 后，GitHub Actions 会使用以下公开地址构建并发布 `dist/`：

```text
https://chenerdongc3.github.io/bryantportfolio/
```

首次发布前，在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。本地开发仍使用根路径 `/`，无需额外配置。

## 内容维护

- 站点信息：`src/config/site.ts`
- 个人资料：`src/content/profile.ts`
- 经历：`src/content/experience.ts`
- 项目：`src/content/projects.ts`
- 笔记入口：`src/content/notes/index.ts`

项目和笔记 slug、必填字段、日期、链接和封面 alt 会在构建期校验。没有已发布笔记时，Notes 页面保持真实空状态并设置 `noindex`。

## 验证

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```
