# Portfolio 重构实施 Prompt（基于当前仓库审计）

> 本文用于指导编码 Agent 直接完成重构。执行时必须以仓库实际代码为准；若本文与代码冲突，先查清数据流和部署约束，再采用改动最小、可验证的方案。不要只输出设计建议或示例代码。

## 1. 已确认的仓库基线

开始编码前先复核以下结论，并在最终汇报中说明是否发生变化：

| 维度 | 当前事实 | 对重构的影响 |
| --- | --- | --- |
| 前端 | Vite 5、React 18、TypeScript、React Router 6、Tailwind CSS 3 | 保留现有技术栈，不迁移 Next.js、Astro 或其他框架 |
| 路由 | 只有 `/` 和兜底 `*` | Projects、Notes、About 都是新增路由，不得描述成已有页面迁移 |
| 数据 | 个人信息和经历硬编码在组件内 | 先抽取内容模型，再重组页面；不要为此增加数据库 |
| 后端/API | 仓库中没有可用后端、API 或数据库实现；`server/`、`nginx/` 仅为空目录 | 本次使用静态内容源，不新增 Express、Prisma、CMS 或管理后台 |
| Storybook | 未配置 | 无 Storybook 组件可复用，不要为本次重构额外搭建 Storybook |
| shadcn/ui | `components.json` 已存在，`src/components/ui/` 已生成大量组件 | 优先复用实际需要的组件；最终清理未使用组件和对应依赖 |
| 主题 | 已安装 `next-themes`，但没有 ThemeProvider；CSS 只有一套偏暗色 Token | 补齐真正可用的 light/dark/system 主题，不再用 JS 分支决定响应式布局 |
| 当前 UI | 桌面端固定 Profile Sidebar，移动端底部 Tab；大量 glass、inline style 和 arbitrary value | 改为顶部导航和内容优先布局，保留个人辨识度但降低视觉噪音 |
| SEO | `index.html` 存在重复 title/description、Lovable 占位 author/Twitter 信息；无 canonical、sitemap、RSS、JSON-LD | 先移除错误信息，再建立单一 Metadata 数据源和静态可抓取输出 |
| 内容 | 有真实个人资料、1 段实习经历、2 个项目描述；没有 Notes 文件、项目封面、完整个人社交地址或站点生产域名 | 不虚构缺失内容；页面和 SEO 产物按真实内容是否存在决定是否启用 |
| 测试 | Vitest 只有占位测试；Playwright 只有模板配置 | 新增与路由、内容、SEO、响应式交互相关的有效测试 |
| 当前工作区 | 审计时仅 `refactor.md` 为未跟踪文件 | 执行前重新检查 `git status --short`，保护之后出现的用户改动 |

当前环境的基线验证结果也要先复核：

- `npm test` 通过，但仅有 1 个无业务价值的占位测试。
- `npm run lint` 当前有 4 个 error、7 个 warning。
- `npm run build` 与 `npx tsc -b` 当前因本地 `node_modules` 缺少 `react-router-dom` 失败；依赖声明和 lockfile 中已有该包，所以应先按统一包管理器重新安装，再判断是否为源码问题。
- 仓库同时提交了 `package-lock.json`、`bun.lock`、`bun.lockb`。先核对 README、CI 和部署实际使用方式，最终只保留一个权威包管理器及其 lockfile。没有其他依据时以 README 对应的 npm 为默认选择。

## 2. 重构目标与优先级

将当前单页履历站重构为“个人作品集 + 学习笔记 / 数字花园”，但以真实内容和可维护性为边界。

优先级如下：

1. **P0：可构建、可访问、可抓取。** 公开页面必须有稳定 URL、正确 HTML、唯一 Metadata 和有效站内链接。
2. **P1：内容模型和信息架构。** 个人信息、经历、项目、笔记分别建模，避免继续把内容硬编码在展示组件中。
3. **P1：统一布局与组件系统。** 全站顶部导航、统一容器、响应式页面、亮暗主题。
4. **P2：阅读和发现体验。** 项目详情、笔记列表、笔记正文、目录、相关推荐。
5. **P2：性能与细节。** 减少首屏 JavaScript、避免 CLS、轻量动画、清理无用依赖。

本次不做：

- 不新增后端、数据库、登录、CMS、评论、点赞或复杂搜索服务。
- 不为了 SEO 直接迁移到 Next.js 或其他框架。
- 不创建虚假的 Notes、项目成果、任职信息、发布日期、评分或社交账号。
- 不为了“组件化”创建大量只包装一层 className 的组件。
- 不为少量项目或空笔记列表实现复杂筛选、分页或 Command Palette。

## 3. 不可违反的实施原则

### 3.1 复用顺序

实现任何能力前按以下顺序检查：

1. 现有业务组件和数据
2. 现有路由或公共能力
3. Storybook（当前没有，复核即可）
4. 已存在的 shadcn/ui
5. 新组件或新依赖

新增组件或依赖时，在最终汇报中给出必要性。不要直接修改 shadcn 原始组件以满足单个页面的特化样式。

### 3.2 数据和状态边界

- **内容数据**：静态内容文件，构建期读取和校验。
- **服务端状态**：当前没有；若最终仍无请求，移除无用途的 React Query Provider 和依赖。
- **URL 状态**：搜索、分类、标签、排序使用 `URLSearchParams`，刷新和分享后状态可恢复。
- **UI 状态**：移动菜单、主题、折叠目录等局部交互状态。
- **表单状态**：只有出现真实表单时才引入表单方案。

不要把布局断点保存到 React State。当前 `useIsMobile` 导致首帧布局与客户端计算结果可能不一致，应使用 Tailwind/CSS 响应式规则；JavaScript 只负责确实需要状态的交互。

### 3.3 真实内容优先

- 保留现有姓名、个人介绍、联系方式、教育信息、实习和项目描述，不擅自改写事实或成果数字。
- 当前 FWD 内容属于 Experience，不要为了凑项目数量自动改成 Project。
- 当前“智能陪练对话平台”和“旅行助手 Agent”可以进入 Projects，但详情页只展示已有事实；缺失 Demo、Repository、封面或结果字段时直接不渲染该区块。
- 当前 GitHub、LinkedIn 链接只是平台首页，不是有效个人主页。隐藏这些链接并排除出 `sameAs`，直到获得真实地址。远程仓库地址只能作为当前站点仓库信息，不能自动推断为个人主页。
- 当前没有 Notes。先建立可维护的内容能力和真实空状态；不得生成伪笔记。没有已发布笔记时，Notes 列表页设为 `noindex`，不进入 sitemap，首页也不展示“最近笔记”空壳。
- “Currently”等没有真实数据的首页区块直接省略，不显示 TODO 占位文案。

## 4. 技术方案

### 4.1 保留 Vite + React Router，增加构建期静态输出

继续使用 Vite、React、TypeScript、React Router。为了满足 SEO，使用与当前栈兼容的构建期 SSG/预渲染方案，为每个公开路由生成包含完整正文和 `<head>` 的 HTML。

选择具体实现前检查维护状态、Vite/React Router 兼容性和部署要求，选择改动最小的一种，并记录理由。无论使用何种库，最终必须满足：

- 直接查看构建产物时，首页、Projects、项目详情、About，以及存在内容时的 Notes 页面，HTML 中已经包含页面 H1、主要正文、title、description、canonical 和 JSON-LD。
- 不能只依赖浏览器执行 JavaScript 后用 Helmet 修改 `<head>`；这种实现不算完成。
- 预渲染路由列表来自统一内容数据，新增公开项目或笔记后无需手动维护第二份 slug 列表。
- 客户端导航和直接访问深层 URL 均可用。
- 不把所有内容和所有路由打进同一个首屏 bundle；页面按路由合理拆分。

只有在确认 Vite 生态方案无法同时满足静态 HTML、动态路由生成和现有部署后，才提出框架迁移，并先停止扩大改动、向用户说明证据和迁移成本。

### 4.2 单一内容源

建议按仓库实际实现调整为：

```text
src/
  config/site.ts
  content/profile.ts
  content/experience.ts
  content/projects.ts
  content/notes/          # Markdown/MDX；当前可以为空
  lib/content/            # 读取、校验、排序、关联、阅读时间
```

约束：

- 站点名称、默认描述、作者、locale、生产 URL、默认 OG 图和真实社交链接只在 `site.ts` 定义一次。
- Profile、Experience、Project 使用明确 TypeScript 类型；已经安装 Zod 时优先复用它进行构建期内容校验，不重复实现校验器。
- Project 最低字段：`slug`、`title`、`summary`、`period`、`tags`、`featured`、`draft`。背景、角色、难点、方案、结果、复盘、封面、Demo、Repository 均按真实数据设为可选。
- Note 使用轻量 Markdown/MDX 构建链路，不在浏览器运行时解析所有原始 Markdown。
- Note frontmatter：`title`、`description`、`slug`、`publishedAt`、可选 `updatedAt`、`category`、`tags`、可选 `cover/coverAlt`、`draft`、`noindex`、可选 `canonical`。
- 日期、页面显示、排序、Metadata、sitemap、RSS、JSON-LD 必须来自同一数据源。
- 正文只允许一个页面级 H1；Markdown 正文标题从 H2 开始。
- 草稿不进入正式路由清单、列表、推荐、sitemap 或 RSS。
- 阅读时间根据正文计算；不要硬编码。
- slug 冲突、缺少必填字段、无效日期、封面缺少 alt 时在构建或测试阶段明确失败。

### 4.3 路由和索引策略

| 路由 | 内容来源 | 默认索引策略 |
| --- | --- | --- |
| `/` | Profile + Featured Projects + 可选 Recent Notes | index |
| `/projects` | 已发布 Projects | 有真实项目时 index |
| `/projects/:slug` | 单个已发布 Project | index；无效 slug 为真实 404 |
| `/notes` | 已发布 Notes | 有已发布笔记时 index，否则 noindex 且不进 sitemap |
| `/notes/:slug` | 单篇已发布 Note | index；draft/noindex 不出现在公开路由 |
| `/about` | Profile + Experience | index |
| `*` | 404 | noindex，并由生产服务器返回 404 状态 |

暂不增加独立分类、标签、搜索结果或分页路由。筛选参数属于列表页 UI 状态，canonical 指回不带参数的主列表页，避免重复索引。

## 5. 页面与布局要求

### 5.1 全站 App Shell

- 使用语义化 `header`、`nav`、`main`、`footer`。
- Header 吸顶，左侧姓名或简洁 Logo；桌面导航包含 Home、Projects、Notes、About；右侧只显示有效外链和主题切换。
- 当前导航有可见 Active 状态和 `aria-current="page"`。
- 移动端使用现有 shadcn `Sheet`；点击导航后关闭，支持 Escape 和焦点管理。
- 桌面导航不能只存在于移动 Sheet；爬虫和无障碍工具应能通过普通链接发现所有主页面。
- 增加 Skip Link。
- 使用统一 Page Container：全站约 `max-w-7xl`，正文约 `max-w-3xl`；优先 Tailwind 标准断点和间距。
- 不出现横向页面滚动。

### 5.2 首页 `/`

首页快速回答“我是谁、能做什么、做过什么”。按真实内容渲染：

1. Hero：姓名、现有定位和介绍、状态、Projects/Notes 主入口、有效个人链接。
2. Featured Projects：当前真实项目，最多 3–4 个；无封面时使用不误导的排版方案，不用随机占位图。
3. Recent Notes：仅在存在已发布笔记时渲染 4–6 篇。
4. About Preview：简短能力、经历入口和 About 链接。
5. Currently：仅在内容配置中存在真实数据时渲染。

不要把每个 section 都套 Card，不使用粒子、3D、大面积玻璃拟态或与内容无关的动画。

### 5.3 Projects

`/projects`：

- 页面 H1、简介、Featured 与普通项目层级。
- 当前项目数量少，不做筛选器；未来达到足够数量后再由真实需求启用。
- 每个项目使用普通链接进入详情，卡片显示标题、摘要、时间、技术标签和确实存在的外链。

`/projects/:slug`：

- 使用 `article`，呈现 Case Study，而不是后台卡片集合。
- 只渲染真实存在的背景、角色、目标、方案、技术、难点、结果和复盘区块。
- 提供 Breadcrumb、返回列表、相关项目或上一篇/下一篇。
- Demo/Repository 仅在 URL 有效时显示。

### 5.4 Notes

`/notes`：

- 有笔记时显示列表；搜索、分类、标签只在数据量足以产生价值时显示。
- 过滤后的结果仍使用现有公开笔记链接，搜索不是发现内容的唯一方式。
- 移动端筛选使用 Sheet/Dropdown 或紧凑控件，不保留固定侧栏。
- 无笔记时显示真实空状态，不展示虚假分类、标签、日期或阅读时间。

`/notes/:slug`：

- 宽屏：左侧相关文章/分类导航，中间正文，右侧 TOC；正文始终是视觉中心。
- 平板：隐藏左栏，保留正文和可用目录。
- 移动端：隐藏两侧栏，目录进入 Collapsible 或 Sheet。
- 两侧栏 sticky，长目录可滚动；当前标题高亮。
- 提供 Breadcrumb、文章元数据、上一篇/下一篇或基于真实标签的相关推荐。
- 正确处理代码、引用、图片、表格、列表；代码和表格局部横向滚动，不能撑开页面。
- 目录来自真实 H2/H3，标题锚点稳定且唯一。

### 5.5 About

- 展示现有个人介绍、Experience 时间线、技能证据、关注方向、联系方式和真实简历入口。
- 不使用技能百分比进度条。
- 不把当前 FWD 实习经历复制成另一份 Projects 数据；复用 Experience 内容源。
- 跨域简历链接使用普通外链语义，不错误添加无效 `download` 属性。

## 6. 组件、样式与主题

组件优先使用当前已有 shadcn/ui：

- Button、Badge、Avatar、Separator
- Sheet、Dropdown Menu、Collapsible
- Breadcrumb、Scroll Area、Tooltip
- Input（确实启用搜索时）
- Card（仅适合卡片语义的项目，不把页面所有区块卡片化）

可按实际需要建立：`SiteHeader`、`MobileNavigation`、`SiteFooter`、`PageContainer`、`ThemeToggle`、`SocialLinks`、`ProjectCard`、`NoteListItem`、`TableOfContents`、`ArticleMetadata`、`EmptyState`。这不是强制创建清单；无独立职责的组件不要新增。

样式要求：

- 仅使用 Tailwind、`cn()`、必要的 `cva()` 和全局语义 Token。
- 补齐成对的 light/dark Token，修正当前 `card` 与 `card-foreground` 对比关系。
- 主题支持 light/dark/system，刷新后保持且避免明显闪烁。
- 删除业务组件中重复的 hsla/hex、复杂 inline style 和无必要 arbitrary value。
- 当前 glass 只在极少数确有层级价值的位置保留，不作为全站默认表面。
- 优先系统字体或本地字体；不要继续用 CSS `@import` 阻塞加载 Google Fonts。
- 动画轻量，服务于状态变化；`prefers-reduced-motion` 下关闭非必要动画。若 Framer Motion 最终只用于入场装饰，改用 CSS 或移除依赖。
- 图片提供真实 `alt`、`width/height` 或固定 aspect ratio；非首屏图片懒加载。
- 亮色和暗色都达到可读对比度，focus ring 清晰可见。

清理要求：

- 删除未使用且含占位文本的 `HeroSection`，或在确实复用时完全改造成真实 Hero。
- 删除未引用的 Vite 模板 `App.css`。
- 新实现稳定后，用导入关系核对 `src/components/ui/`；删除确定未使用的 shadcn 文件和对应 Radix/业务依赖。
- 若没有网络请求或通知场景，移除无用 QueryClient、Toaster Provider 及依赖。
- 不保留两套 Button、Navigation、Card 或 Theme 方案。

## 7. SEO、内容发现与可访问性

SEO 是 P0 验收项，必须与页面实现同步完成，不留到最后补标签。

### 7.1 站点配置和 Metadata

- 从明确的生产环境变量读取站点 URL，并提供 `.env.example` 和说明。
- 生产 URL 未确认时，不得把 localhost、Preview URL、`example.com` 或占位域名写入 canonical、sitemap、OG、RSS、JSON-LD。
- 如果仓库和部署配置都无法确认生产域名，继续完成不依赖域名的工作，并把“生产域名”列为唯一阻塞的 SEO 输入；不要伪造。
- 每个可索引页面具有唯一、真实的 title、description、canonical、Open Graph 和 Twitter Card。
- 动态页面 Metadata 来自同一个 Project/Note 数据对象。
- 清除 `index.html` 中重复 title/description、Lovable author、`@Lovable` 和旧远程分享图。
- 页面只使用一种 head 管理方式，并确保静态构建产物包含最终结果。
- `html lang` 与主要内容一致；当前内容以中文为主时使用 `zh-CN`。
- 默认 OG 图使用本项目内稳定资源，基于真实姓名和定位制作；有真实内容封面时优先内容封面。所有 OG URL 为绝对 URL，并提供尺寸和 alt。

### 7.2 Canonical、路由和 404

- 保持已有 `/`，新增路由统一小写、无重复版本，并确定一致的尾斜杠策略。
- 纯搜索、排序、标签和分类查询参数 canonical 到主列表页。
- 无效项目/笔记 slug 不能渲染空 Article，也不能注入 Article JSON-LD。
- 生成自定义 404 页面并设置 `noindex`。
- 生产服务器必须让不存在 URL 返回 HTTP 404，而不是 SPA fallback 的 200。先识别真实部署平台，再提交对应配置；不要因为存在空 `nginx/` 目录就假设使用 Nginx。
- 直接访问每个预渲染深层路由都能返回对应 HTML。

### 7.3 Sitemap、robots 和 RSS

- sitemap 由公开路由和内容数据在构建期生成，使用生产绝对 URL。
- 只包含首页、About、有真实内容的 Projects/Notes 列表和已发布详情页。
- `lastModified` 只使用真实日期；没有依据时省略，不给所有页面伪造同一日期。
- 草稿、noindex、404、测试页、空占位页不进入 sitemap。
- robots.txt 允许正式静态资源和公开内容，并声明 sitemap；它不是权限控制工具。
- 只有存在已发布 Notes 时才生成 RSS。RSS 内容和 URL 复用 Note 数据，且在页面 head/footer 中可发现。

### 7.4 JSON-LD

按真实语义选择最少且准确的类型：

- 首页：`WebSite` + `Person`；确实属于个人资料主页时可增加 `ProfilePage`。
- Projects 列表：`CollectionPage`，有项目时可加 `ItemList`。
- 项目详情：在 `CreativeWork`、`SoftwareApplication`、`SoftwareSourceCode` 中选择最准确的一种，不堆叠类型。
- Notes 列表：存在内容时使用 `CollectionPage` + `ItemList`。
- 笔记详情：`TechArticle` 或 `Article` + `BreadcrumbList`。
- About：`ProfilePage`，通过稳定 `@id` 复用同一个 Person。

JSON-LD 必须与页面可见内容一致，不输出空字段，不虚构 jobTitle、Organization、评分、评论、日期或 `sameAs`。安全序列化 JSON，避免 `</script>` 注入问题。

### 7.5 站内链接和语义

- 首页、Header 和 Footer 使用可抓取的链接连接主页面。
- Projects/Notes 列表直接链接每个公开详情页。
- 详情页提供 Breadcrumb 和真实的上一篇/下一篇或相关推荐。
- 内部导航使用 React Router Link/NavLink，外部地址使用标准 `<a>`；不要用可点击 div 模拟链接。
- 每页一个 H1，标题层级连续。
- 项目和笔记详情使用 `article`，日期使用带 `datetime` 的 `time`。
- 图标按钮有 `aria-label`；内容图片有描述性 alt，装饰图 alt 为空。
- 键盘可操作导航、Sheet、主题、筛选和目录；focus 可见。

### 7.6 Core Web Vitals

- 首屏 HTML 已包含核心内容，避免先空白再依赖 JS 填充。
- 使用 CSS 响应式布局替代首屏 `useIsMobile` 分支，降低 CLS。
- 首屏图片明确尺寸和加载优先级，非首屏懒加载。
- Header sticky 不引起跳动；Skeleton 与最终尺寸一致。
- 路由拆包，避免把 Markdown 解析器、全部笔记和大型动画运行时放进首页 bundle。
- 主题初始化不造成明显闪烁。
- 不以删除有用语义内容换取 Lighthouse 分数。

## 8. 实施顺序

### Phase 0：保护现场和恢复可信基线

1. 检查 `git status --short`、当前分支和已有 diff，禁止覆盖用户改动。
2. 确认唯一包管理器并从 lockfile 做干净安装。
3. 记录 lint、typecheck、test、build 的基线；把历史错误与本次新增错误区分开。
4. 检查实际部署方式和生产域名来源。

### Phase 1：内容和路由基础

1. 抽取 site/profile/experience/projects 内容和类型。
2. 建立 Notes 内容约定、校验和公开内容查询层；没有真实笔记时保持为空。
3. 建立正式路由表和无效 slug 处理。
4. 选定并打通构建期 SSG/预渲染最小闭环：先让 `/` 和一个动态项目详情产出完整 HTML。

### Phase 2：设计系统和全站 Shell

1. 整理 light/dark Token、字体、基础排版和 motion 规则。
2. 实现 Theme Provider、Header、移动 Sheet、Footer、Page Container 和 Skip Link。
3. 用 CSS 响应式重构布局，移除桌面/移动两棵条件渲染树。

### Phase 3：页面与 Metadata 同步实现

1. 首页。
2. Projects 列表和详情。
3. About。
4. Notes 列表、详情、正文样式和 TOC；无真实内容时验证空状态/noindex 分支。
5. 每完成一个路由，同时完成 title、description、canonical、OG、JSON-LD 和站内链接，不留 SEO 尾账。

### Phase 4：抓取产物、清理和回归

1. 生成 sitemap、robots、条件式 RSS、默认 OG 图和 404。
2. 清理旧组件、无用 shadcn 文件、依赖、Provider、模板 CSS 和重复 Metadata。
3. 新增内容校验、路由、SEO 和关键交互测试。
4. 完成全量验证并检查构建产物。

每个 Phase 完成后做窄范围验证，避免最后集中排错。不要在核心路由和内容模型未稳定前批量删除依赖。

## 9. 验收标准

### 9.1 功能与内容

- 全站为顶部导航；移动端使用可访问 Sheet。
- `/`、`/projects`、至少两个已有真实项目详情、`/about` 可直接访问。
- `/notes` 在有内容和无内容两种状态下行为正确；不以假笔记通过验收。
- 现有个人、经历、项目和联系方式内容均有明确去向，无意外丢失或重复。
- 亮色、暗色、system 三种主题可用并持久化。
- 375、768、1024、1440px 下无页面级横向溢出，主内容层级清晰。

### 9.2 SEO

- 每个可索引页面的构建 HTML 含完整主要正文，而不是只有 `<div id="root"></div>`。
- 每页 title、description、canonical、OG 唯一且来自真实内容。
- 不再存在 Lovable 占位 Metadata、重复 title/description 或无效个人社交链接。
- sitemap 与实际公开路由一致，草稿/noindex/空页面被排除。
- robots 正确引用 sitemap；有真实 Notes 时 RSS 可访问。
- JSON-LD 是合法 JSON，类型和字段与页面一致。
- 普通链接无需搜索或筛选即可发现全部公开项目和笔记。
- 无效 slug 和未知路由在生产服务中返回真实 404 且 noindex。

### 9.3 可访问性与性能

- 每页一个 H1，语义和标题层级正确。
- 键盘可操作所有交互，focus 可见，图标按钮有名称。
- 图片有正确 alt 和尺寸；代码块、表格只在自身容器横向滚动。
- `prefers-reduced-motion` 生效。
- 无明显 CLS；首屏不因移动端检测或主题初始化大幅跳动。
- 若可运行 Lighthouse，记录实际 URL、环境和分类结果；不要只报一个脱离环境的分数。

### 9.4 工程质量

统一并补充 package scripts 后，至少执行：

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

要求：

- 不把占位测试通过当成业务验证。
- 本次改动涉及的 lint/type error 全部修复；目标是全仓无 error，并解释仍保留的 warning。
- 检查构建产物中关键路由 HTML、canonical、sitemap、robots、JSON-LD 和站内链接。
- E2E 至少覆盖桌面/移动导航、主题切换、项目深层直达、404、Notes 空状态或真实笔记阅读页。
- 验证生产部署对应的深层路由和 404 行为，不能只验证 Vite 客户端跳转。

## 10. 最终输出格式

完成后按以下顺序汇报，所有结果基于实际 diff 和命令输出：

1. 原结构和主要问题。
2. 关键技术决策，尤其是静态生成/预渲染方式及选择理由。
3. 修改的路由、页面和内容模型。
4. 复用、新增、删除的组件和依赖。
5. SEO 实现：Metadata、canonical、JSON-LD、sitemap、robots、RSS、404。
6. 响应式、主题、可访问性和性能处理。
7. 现有真实内容是否全部保留；哪些缺失内容被隐藏而非虚构。
8. lint、typecheck、test、build、E2E 的逐项结果。
9. 实际检查过的 URL 和构建文件。
10. 未完成项、环境限制，以及仍需用户提供的生产域名、真实社交链接、Notes 或项目素材。

禁止用“已优化 SEO”“已完成响应式”一类笼统结论代替证据。
