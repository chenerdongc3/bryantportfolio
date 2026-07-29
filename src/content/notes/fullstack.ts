import type { Note } from "../types";

export const fullstackRoadmapNote: Note = {
  slug: "fullstack-roadmap",
  title: "Full-Stack 开发学习路线图",
  description: "从 Web 基础、前端与后端，到数据库、安全、测试和部署，用项目驱动的方式建立完整的全栈开发能力。",
  publishedAt: "2026-07-29T00:00:00+08:00",
  updatedAt: "2026-07-29T00:00:00+08:00",
  category: "软件工程",
  tags: ["Full-Stack", "TypeScript", "React", "Node.js", "Roadmap"],
  draft: false,
  noindex: false,
  body: "",
  outline: [
    {
      title: "第一阶段 · Web 基础",
      items: [
        { id: "learning-strategy", label: "1.1 学习策略与路线" },
        { id: "web-and-http", label: "1.2 Web 与 HTTP" },
        { id: "html-css-accessibility", label: "1.3 HTML、CSS 与无障碍" },
        { id: "javascript-typescript", label: "1.4 JavaScript 与 TypeScript" },
      ],
    },
    {
      title: "第二阶段 · 前端开发",
      items: [
        { id: "react-architecture", label: "2.1 React 与组件架构" },
        { id: "frontend-data-flow", label: "2.2 状态、路由与数据流" },
        { id: "browser-performance", label: "2.3 浏览器与性能" },
      ],
    },
    {
      title: "第三阶段 · 后端与数据",
      items: [
        { id: "backend-api", label: "3.1 后端与 API 设计" },
        { id: "database-modeling", label: "3.2 数据库与数据建模" },
        { id: "auth-security", label: "3.3 认证、授权与安全" },
      ],
    },
    {
      title: "第四阶段 · 工程化与交付",
      items: [
        { id: "testing-observability", label: "4.1 测试与可观测性" },
        { id: "delivery-capstone", label: "4.2 部署与毕业项目" },
      ],
    },
  ],
  lessons: [
    {
      id: "learning-strategy",
      eyebrow: "1.1 · Web 基础",
      title: "学习策略与路线",
      summary: "全栈学习的目标不是收集技术名词，而是能独立把一个真实需求交付为可运行、可维护、可验证的产品。",
      duration: "1–2 天建立计划，此后每周复盘",
      prerequisites: [
        "准备一台可安装 Node.js、Git 和编辑器的电脑。",
        "每周预留至少 8–12 小时连续学习时间，并选定一个贯穿路线的项目主题。",
      ],
      objectives: [
        "把路线拆成有依赖关系的阶段，而不是并行追逐多个框架。",
        "建立以交付物和验证证据为核心的学习节奏。",
        "为代码、笔记、问题和复盘建立可持续的记录方式。",
      ],
      formula: "理解原理 → 完成最小练习 → 做进项目 → 复盘与重构",
      points: [
        "先选择一条主栈：TypeScript + React + Node.js + PostgreSQL，减少频繁切换语言和框架带来的认知成本。",
        "每个阶段都产出可运行成果；学习时间建议按“30% 输入、70% 编码与调试”分配。",
        "用 Git 提交、README、测试与线上地址记录证据，避免只看教程却无法独立实现。",
      ],
      practice: [
        "创建学习仓库，写下目标用户、主项目、每周时间预算和 12 个阶段检查点。",
        "为第一阶段建立 Issue 看板，每项任务都包含输入材料、动手任务和可验收结果。",
        "完成一次 45 分钟闭卷练习，再记录卡点、排查过程和下一次改进动作。",
      ],
      deliverables: [
        "一份按阶段拆分、带时间预算和依赖关系的学习计划。",
        "一个含 README、Issue、提交规范和周复盘模板的学习仓库。",
      ],
      acceptanceCriteria: [
        "能解释为什么选择当前主栈，以及暂不学习哪些替代技术。",
        "每个阶段都对应至少一个可运行成果，而不只是课程清单。",
        "连续两周能从提交、测试或线上地址看到实际进展。",
      ],
      examples: [
        { source: "第 1 周：静态个人主页", translation: "练习语义化 HTML、响应式 CSS、表单和 GitHub Pages 部署。" },
        { source: "第 12 周：可登录的全栈应用", translation: "串联 React、API、PostgreSQL、认证、测试与部署。" },
      ],
      tip: "以项目是否真的可用作为学习进度，不以看完多少课程作为进度。",
    },
    {
      id: "web-and-http",
      eyebrow: "1.2 · Web 基础",
      title: "Web 与 HTTP",
      summary: "理解浏览器、服务器、DNS、TCP/TLS 和 HTTP 的协作方式，是排查跨端问题与设计接口的共同基础。",
      duration: "1 周",
      prerequisites: [
        "会使用浏览器开发者工具打开 Network、Console 和 Application 面板。",
        "具备基础命令行能力，能够运行 curl 并阅读 JSON。",
      ],
      objectives: [
        "完整描述从输入 URL 到页面呈现的关键链路。",
        "根据方法、状态码、Header 和响应体判断问题所在层级。",
        "理解缓存、Cookie、CORS 与 TLS 的职责和常见失败方式。",
      ],
      formula: "URL → DNS → 连接与 TLS → HTTP 请求 → 服务端响应 → 浏览器渲染",
      points: [
        "掌握 URL、请求方法、状态码、Header、Cookie、缓存和 CORS，能够用浏览器 Network 面板解释一次请求。",
        "理解 HTTP 是无状态协议；会区分客户端错误、服务端错误、网络失败和业务失败。",
        "使用 curl 或 API 客户端独立验证接口，不把所有问题都归因于前端页面。",
      ],
      practice: [
        "抓取一个真实页面的文档、脚本、样式和 API 请求，标注请求依赖、缓存策略与耗时。",
        "用 Node.js 原生 HTTP 模块实现 GET、POST、404 和统一 JSON 错误响应。",
        "分别制造 401、404、500、CORS 与超时场景，并写出浏览器和 curl 中的诊断证据。",
      ],
      deliverables: [
        "一张包含 DNS、TLS、HTTP 与浏览器渲染的请求链路图。",
        "一个无需框架的最小 HTTP 服务及其 curl 验证脚本。",
      ],
      acceptanceCriteria: [
        "能仅凭 Network 信息区分网络失败、协议失败和业务失败。",
        "能解释强缓存、协商缓存与 no-store 的适用边界。",
        "能说明 CORS 为什么由浏览器执行，以及服务端请求为何不受同样限制。",
      ],
      examples: [
        { source: "GET /api/projects → 200", translation: "读取资源应可缓存，并且不产生业务副作用。" },
        { source: "POST /api/sessions → 201", translation: "创建会话后返回资源标识，失败时提供稳定的错误结构。" },
      ],
      tip: "遇到页面报错时，先看请求是否发出、响应状态和响应体，再检查组件。",
    },
    {
      id: "html-css-accessibility",
      eyebrow: "1.3 · Web 基础",
      title: "HTML、CSS 与无障碍",
      summary: "页面首先是一份有语义、可访问的文档，其次才是视觉界面；布局能力应建立在正常文档流之上。",
      duration: "2 周",
      prerequisites: [
        "了解文件、目录、相对路径和浏览器加载静态资源的方式。",
        "具备基础 Git 提交和浏览器元素检查能力。",
      ],
      objectives: [
        "用语义化 HTML 建立清晰、可抓取的文档结构。",
        "用正常文档流、Flexbox 和 Grid 完成响应式布局。",
        "让键盘、读屏器、缩放与 reduced-motion 用户都能完成核心任务。",
      ],
      formula: "语义结构 + 响应式布局 + 可访问交互 = 稳定界面",
      points: [
        "熟悉语义化标签、表单、图片替代文本和标题层级，让键盘、读屏器与搜索引擎都能理解页面。",
        "掌握盒模型、层叠、Flexbox、Grid、定位和媒体查询，优先用布局系统解决问题。",
        "验证 320px 到桌面宽度、键盘焦点、颜色对比度与 reduced-motion，而不只检查自己的设备。",
      ],
      practice: [
        "不使用 UI 框架实现一页响应式作品集，包含导航、项目列表、表单和页脚。",
        "只用键盘完成全站导航和表单提交，修复焦点顺序、可见焦点与错误提示。",
        "用浏览器无障碍树和自动检查工具审计标题层级、名称、角色、对比度和触控尺寸。",
      ],
      deliverables: [
        "一个在 320px、768px 和 1440px 下稳定工作的静态站点。",
        "一份含问题、修复前后证据和人工键盘验证的无障碍审计记录。",
      ],
      acceptanceCriteria: [
        "页面在 200% 缩放和窄屏下无页面级横向滚动。",
        "所有交互都可通过键盘完成，焦点顺序与视觉顺序一致。",
        "页面只有一个 H1，表单控件有可访问名称，图片替代文本符合语义。",
      ],
      examples: [
        { source: "<button>保存</button>", translation: "原生按钮自带键盘与语义能力，优于可点击的 div。" },
        { source: "grid-template-columns: repeat(auto-fit, minmax(...))", translation: "让内容决定列数，减少页面特化断点。" },
      ],
      tip: "先在不写定位和固定高度的情况下完成布局，再处理确实需要的视觉叠层。",
    },
    {
      id: "javascript-typescript",
      eyebrow: "1.4 · Web 基础",
      title: "JavaScript 与 TypeScript",
      summary: "JavaScript 决定运行时行为，TypeScript 提供开发期约束；两者都要理解，类型不能替代运行时校验。",
      duration: "3 周",
      prerequisites: [
        "能独立编写 HTML/CSS 页面并通过 script 加载模块。",
        "理解变量、条件、循环、函数、数组和对象的基本使用。",
      ],
      objectives: [
        "解释作用域、闭包、原型、事件循环与异步错误传播。",
        "使用 TypeScript 为领域数据、状态转换和函数边界建模。",
        "对 API、表单与环境变量执行运行时校验并输出可处理错误。",
      ],
      formula: "输入校验 → 类型收窄 → 纯函数处理 → 明确副作用",
      points: [
        "掌握作用域、闭包、原型、模块、事件循环、Promise、async/await 与错误传播。",
        "使用联合类型、泛型、类型守卫和 unknown 表达真实约束，避免用 any 隐藏设计问题。",
        "区分编译期类型和运行时数据，对 API、表单与环境变量使用 Schema 校验。",
      ],
      practice: [
        "实现一个支持筛选、排序和本地持久化的任务应用，数据处理使用纯函数。",
        "手写 Promise 队列或并发限制器，观察微任务、定时器与错误传播顺序。",
        "将一组 unknown API 数据通过 Schema 校验转换为判别联合，并覆盖成功和失败测试。",
      ],
      deliverables: [
        "一个启用 strict、无 any 逃逸的 TypeScript 小应用。",
        "一组覆盖数据转换、异步失败和边界输入的单元测试。",
      ],
      acceptanceCriteria: [
        "能预测常见异步代码的执行顺序并解释原因。",
        "外部数据在进入业务逻辑前完成运行时校验。",
        "类型能排除非法状态，编译与测试均无未处理错误。",
      ],
      examples: [
        { source: "Promise.all([profile, projects])", translation: "无依赖请求并行执行；有依赖关系时保持顺序并处理部分失败。" },
        { source: "parse(requestBody): CreateProjectInput", translation: "外部输入先校验，再进入带类型的业务逻辑。" },
      ],
      tip: "当类型写不清楚时，通常说明数据边界或状态模型还没有想清楚。",
    },
    {
      id: "react-architecture",
      eyebrow: "2.1 · 前端开发",
      title: "React 与组件架构",
      summary: "React 的核心是用状态描述界面，并通过组件边界控制复杂度，而不是把页面拆成尽可能多的文件。",
      duration: "3 周",
      prerequisites: [
        "完成 JavaScript/TypeScript 阶段，熟悉模块、数组方法、异步和 DOM 事件。",
        "能用 HTML/CSS 独立实现目标页面，避免把布局问题误判为 React 问题。",
      ],
      objectives: [
        "理解渲染、状态快照、事件、Effect 与组件卸载过程。",
        "区分基础 UI、领域组件和页面组合层的职责。",
        "用组合、明确 Props 和单向数据流控制组件耦合。",
      ],
      formula: "UI = f(props, state)；组合优先于页面特化",
      points: [
        "理解渲染、事件、Effect、受控表单与组件生命周期，避免用 Effect 同步可直接计算的状态。",
        "先复用项目组件库和基础组件，再抽取领域组件；让组件 API 表达业务意图。",
        "保持单向数据流，将数据获取、业务状态和展示组件分层，但不过早建立复杂抽象。",
      ],
      practice: [
        "把上一阶段任务应用迁移到 React，保留已有领域函数和测试。",
        "实现列表、详情、编辑表单和确认对话框，补齐 loading、empty、error 状态。",
        "审查所有 Effect：删除可由 Props/State 派生的同步逻辑，并验证 Strict Mode 下行为。",
      ],
      deliverables: [
        "一个含可复用领域组件、明确页面边界和错误状态的 React 应用。",
        "一份组件职责图，说明状态所有者、事件流和复用边界。",
      ],
      acceptanceCriteria: [
        "组件不直接拼装与自身职责无关的 API 请求或全局状态。",
        "派生数据不重复存入 State，Effect 有明确外部同步对象和清理逻辑。",
        "核心组件可通过交互测试验证，而非依赖实现细节快照。",
      ],
      examples: [
        { source: "<ProjectCard project={project} />", translation: "传递领域对象和明确回调，不让卡片自行拼接后端请求。" },
        { source: "const fullName = `${first} ${last}`", translation: "派生值在渲染中计算，不需要额外 state 与 Effect。" },
      ],
      tip: "只有当一个边界能被独立理解、复用或测试时，拆分组件才真正降低复杂度。",
    },
    {
      id: "frontend-data-flow",
      eyebrow: "2.2 · 前端开发",
      title: "状态、路由与数据流",
      summary: "先识别状态归属，再选择工具；服务器数据、URL、表单和临时 UI 状态不应全部塞进 React State。",
      duration: "2 周",
      prerequisites: [
        "能构建含多个交互状态的 React 页面并理解组件生命周期。",
        "理解 HTTP 请求、异步失败与浏览器历史记录。",
      ],
      objectives: [
        "为 Server、URL、Form 与 UI State 指定唯一权威来源。",
        "设计可刷新、可分享、支持前进后退的路由与筛选体验。",
        "正确处理请求缓存、重新验证、竞态和乐观更新失败。",
      ],
      formula: "Server State + URL State + Form State + UI State",
      points: [
        "列表、缓存和重新验证属于 Server State；筛选、分页和可分享视图优先进入 URL。",
        "表单需要字段校验、提交状态和服务端错误映射；弹窗开关等短生命周期状态保留在组件附近。",
        "路由承担页面边界、权限入口和数据加载策略，并处理 loading、empty、error 与 not-found 状态。",
      ],
      practice: [
        "为项目列表增加 URL 驱动的搜索、标签、排序和分页，刷新后保持相同结果。",
        "接入查询缓存，演示 stale、refetch、失效和并发请求取消。",
        "实现带客户端校验与服务端字段错误映射的编辑表单，并处理重复提交。",
      ],
      deliverables: [
        "一张状态分类表，记录每项状态的权威来源、持久化和失效方式。",
        "一个可深链、可恢复并覆盖所有异步状态的多路由应用。",
      ],
      acceptanceCriteria: [
        "复制当前 URL 到新窗口后能恢复同一筛选与详情视图。",
        "快速切换路由不会让旧响应覆盖新数据。",
        "表单错误能定位到字段或全局原因，提交期间不会产生重复副作用。",
      ],
      examples: [
        { source: "/projects?tag=agent&page=2", translation: "筛选与分页可刷新、可分享，也支持浏览器前进后退。" },
        { source: "queryKey: ['project', projectId]", translation: "缓存身份来自稳定业务键，而不是组件挂载次数。" },
      ],
      tip: "新增状态之前先问：它的权威来源在哪里，刷新后是否应该保留，谁负责使它失效？",
    },
    {
      id: "browser-performance",
      eyebrow: "2.3 · 前端开发",
      title: "浏览器与性能",
      summary: "性能优化应从用户指标和浏览器工作链路出发，先测量瓶颈，再减少网络、主线程和渲染成本。",
      duration: "1–2 周",
      prerequisites: [
        "具备可运行的多路由 React 应用和基础 HTTP 缓存知识。",
        "会使用 Network、Performance、Coverage 和 Lighthouse 面板记录证据。",
      ],
      objectives: [
        "把 LCP、INP、CLS 指标映射到具体资源和渲染行为。",
        "识别请求瀑布、大包、长任务、重复渲染与布局偏移。",
        "根据内容更新频率与交互需求选择 CSR、SSG 或 SSR。",
      ],
      formula: "加载 → 解析 → 执行 → 布局 → 绘制 → 交互",
      points: [
        "理解 DOM、CSSOM、渲染流水线、存储和缓存，并能使用 Performance、Network 与 Lighthouse 定位瓶颈。",
        "围绕 LCP、INP、CLS 优化关键资源、代码分割、图片尺寸、长任务和布局稳定性。",
        "根据内容与交互需求选择 CSR、SSR、SSG，不为追求框架功能而增加运行时复杂度。",
      ],
      practice: [
        "为应用记录移动端基线，包括资源瀑布、包体积、LCP、INP 和 CLS。",
        "实施路由拆包、图片尺寸与格式、字体加载和缓存优化，每次只改一类变量。",
        "制造一个长任务与布局偏移，使用 Performance 轨迹定位并修复根因。",
      ],
      deliverables: [
        "一份包含环境、复现步骤、前后数据和取舍的性能报告。",
        "经过构建分析的生产包，说明每个主要 chunk 的来源和加载时机。",
      ],
      acceptanceCriteria: [
        "每项性能改动都有相同环境下的前后对比证据。",
        "关键页面无未声明尺寸图片造成的布局偏移。",
        "首屏不加载当前路由不需要的大型功能模块。",
      ],
      examples: [
        { source: "首屏路由按需加载", translation: "减少初始 JavaScript，但要避免产生过多串行请求瀑布。" },
        { source: "图片声明 width / height", translation: "浏览器可提前预留空间，降低累计布局偏移。" },
      ],
      tip: "先记录优化前的指标和复现条件；没有基线的“优化”通常只是代码变化。",
    },
    {
      id: "backend-api",
      eyebrow: "3.1 · 后端与数据",
      title: "后端与 API 设计",
      summary: "后端负责可信业务规则、数据边界和资源生命周期；接口应围绕领域能力，而不是迁就某一个页面。",
      duration: "3 周",
      prerequisites: [
        "掌握 TypeScript 异步编程、HTTP 方法、状态码和 JSON。",
        "能用 curl 或 API 客户端脱离前端验证请求与响应。",
      ],
      objectives: [
        "建立路由、应用服务、领域规则与数据访问的清晰边界。",
        "设计一致的资源、错误、分页、幂等与版本契约。",
        "让日志、配置、异常和关闭流程符合生产运行要求。",
      ],
      formula: "请求解析 → 认证 → 校验 → 业务服务 → 数据访问 → 稳定响应",
      points: [
        "掌握 Node.js 运行时、路由、中间件、依赖注入、错误处理、配置管理与结构化日志。",
        "按资源和用例设计 REST API，统一分页、错误、幂等性和版本策略，并先复用现有接口。",
        "把业务规则放在可测试的服务层，避免散落在路由处理器、ORM 回调和前端组件中。",
      ],
      practice: [
        "先写 OpenAPI 或接口契约，再实现项目资源的创建、列表、详情、更新和删除。",
        "实现统一错误结构、游标或页码分页、请求 ID、配置校验与优雅关闭。",
        "为一个创建接口增加幂等键，并通过并发请求证明不会生成重复资源。",
      ],
      deliverables: [
        "一个分层清晰、可独立运行并带接口文档的 Node.js API。",
        "一套 curl/HTTP 示例和覆盖核心业务规则的集成测试。",
      ],
      acceptanceCriteria: [
        "无前端参与时，可通过契约和命令行完成全部核心用例。",
        "校验错误、未认证、无权限、不存在和内部错误具有稳定且不同的响应。",
        "路由处理器不直接承载复杂业务规则，服务层可被独立测试。",
      ],
      examples: [
        { source: "PATCH /api/projects/:id", translation: "只更新请求中出现的字段，同时验证权限与资源版本。" },
        { source: "Idempotency-Key: create-order-123", translation: "对可能重试的创建操作避免产生重复副作用。" },
      ],
      tip: "页面变化不等于接口必须变化；先判断现有 API 是否已经表达了需要的业务能力。",
    },
    {
      id: "database-modeling",
      eyebrow: "3.2 · 后端与数据",
      title: "数据库与数据建模",
      summary: "数据库设计从业务事实、约束和查询模式出发；ORM 能提高效率，但不能替代 SQL 与事务知识。",
      duration: "3 周",
      prerequisites: [
        "已完成一个使用内存数据或简单存储的 CRUD API。",
        "理解业务实体、标识符、关系和常见查询需求。",
      ],
      objectives: [
        "把业务不变量落实为数据库类型、外键、唯一约束和检查约束。",
        "使用事务与迁移安全地演进数据和写入流程。",
        "通过 EXPLAIN 和真实查询模式设计、验证索引。",
      ],
      formula: "业务实体 + 关系 + 约束 + 索引 + 事务",
      points: [
        "掌握表、主键、外键、唯一约束、范式、Join、聚合、索引和 EXPLAIN。",
        "用事务保护必须共同成功的写入，通过迁移管理 Schema 演进，避免直接修改生产结构。",
        "先以 PostgreSQL 建立可靠主数据，再按真实瓶颈引入 Redis、搜索或对象存储。",
      ],
      practice: [
        "为用户、项目、成员和活动日志画 ER 图，并写出五个最重要读写查询。",
        "创建初始迁移、种子数据和回滚策略，用数据库约束阻止重复与孤儿数据。",
        "生成足量测试数据，对慢查询运行 EXPLAIN ANALYZE，再比较加索引前后的计划。",
      ],
      deliverables: [
        "一套可从空库重复执行的 Schema 迁移和种子脚本。",
        "一份 ER 图、关键查询清单与索引选择说明。",
      ],
      acceptanceCriteria: [
        "删除或更新关联数据时的行为由明确外键策略约束。",
        "并发写入不会破坏唯一性或产生部分成功状态。",
        "能说明每个非主键索引服务的查询，以及它带来的写入成本。",
      ],
      examples: [
        { source: "UNIQUE (user_id, project_id)", translation: "用数据库约束确保一个用户不能重复收藏同一项目。" },
        { source: "INDEX (status, created_at)", translation: "索引顺序应匹配常见筛选和排序，而不是给每一列都加索引。" },
      ],
      tip: "先写出最重要的查询，再设计表与索引；数据模型既服务写入，也服务读取。",
    },
    {
      id: "auth-security",
      eyebrow: "3.3 · 后端与数据",
      title: "认证、授权与安全",
      summary: "认证回答“你是谁”，授权回答“你能做什么”；所有外部输入和权限判断都必须在可信后端边界执行。",
      duration: "2–3 周",
      prerequisites: [
        "已有连接 PostgreSQL 的 API，并理解 Cookie、Header、状态码和数据库事务。",
        "能区分用户身份、角色、资源所有权与公开访问。",
      ],
      objectives: [
        "实现安全的注册、登录、登出、会话过期和账户恢复流程。",
        "在每个资源用例中执行所有权或角色授权。",
        "建立威胁模型并对常见 Web 攻击应用分层防护。",
      ],
      formula: "身份认证 + 资源授权 + 输入校验 + 最小权限 + 审计",
      points: [
        "理解 Session、Cookie、Token、OAuth、密码哈希与密钥管理，优先采用成熟认证方案。",
        "防范 XSS、CSRF、SQL 注入、SSRF、暴力尝试和敏感信息泄漏，并设置安全响应头和速率限制。",
        "按资源所有者和角色执行服务端授权；前端隐藏按钮只是体验优化，不是安全措施。",
      ],
      practice: [
        "使用成熟库实现基于安全 Cookie 的会话，覆盖密码哈希、轮换、登出和过期。",
        "建立访客、成员、管理员权限矩阵，并为越权读取与修改编写反向测试。",
        "对应用做一次威胁建模，验证 XSS、CSRF、注入、速率限制和敏感日志处理。",
      ],
      deliverables: [
        "一份身份流程图、资源权限矩阵与主要威胁清单。",
        "覆盖认证生命周期和横向/纵向越权场景的安全测试。",
      ],
      acceptanceCriteria: [
        "任何私有资源访问都在服务端验证身份和资源权限。",
        "密码、会话、密钥和个人数据不会进入代码仓库或普通日志。",
        "认证失败、权限不足和资源不存在的响应不会泄露额外敏感信息。",
      ],
      examples: [
        { source: "project.ownerId === session.userId", translation: "读取或修改私有资源前，在服务端验证所有权。" },
        { source: "HttpOnly + Secure + SameSite", translation: "会话 Cookie 降低脚本读取、明文传输和跨站请求风险。" },
      ],
      tip: "不要自行发明加密或认证协议；安全设计优先选择经过验证的库、托管服务和默认配置。",
    },
    {
      id: "testing-observability",
      eyebrow: "4.1 · 工程化与交付",
      title: "测试与可观测性",
      summary: "测试证明预期行为，可观测性解释真实运行状态；两者共同缩短从故障发生到定位修复的时间。",
      duration: "2 周",
      prerequisites: [
        "已有包含前端、API、数据库和认证的端到端薄切片。",
        "核心业务规则与外部边界已经明确，能够识别高风险失败。",
      ],
      objectives: [
        "按风险在静态、单元、集成和 E2E 层分配测试。",
        "建立可关联请求、用户动作、错误与耗时的观测数据。",
        "让 CI 失败和生产故障都能被稳定复现与定位。",
      ],
      formula: "静态检查 + 单元测试 + 集成测试 + E2E + 日志/指标/追踪",
      points: [
        "测试关键业务规则、API 与核心用户旅程，减少对内部实现和脆弱快照的依赖。",
        "在 CI 中运行 lint、typecheck、test 和 build，并让失败能够稳定复现。",
        "使用带请求 ID 的结构化日志、核心指标、错误追踪和告警，避免只靠 console.log 排查生产问题。",
      ],
      practice: [
        "为一个涉及权限和事务的核心用例分别编写单元、API 集成与 E2E 测试。",
        "在 CI 中加入 lint、typecheck、test、build 和迁移验证，并保存失败产物。",
        "注入一次服务异常和慢查询，用请求 ID 从前端错误追踪到后端日志与数据库耗时。",
      ],
      deliverables: [
        "一套覆盖核心路径、风险边界和回归场景的测试组合。",
        "一个包含结构化日志、错误追踪、核心指标与最小告警的观测面板。",
      ],
      acceptanceCriteria: [
        "新环境可用单条命令运行测试，失败不依赖执行顺序。",
        "核心 E2E 覆盖写入后刷新仍存在、权限生效和失败恢复。",
        "给定一个错误 ID，能定位关联请求、版本、用户范围和失败阶段。",
      ],
      examples: [
        { source: "注册 → 登录 → 创建项目 → 刷新仍存在", translation: "一条 E2E 覆盖最重要的跨层用户价值链路。" },
        { source: "request_id + user_id + duration_ms", translation: "关联一次请求的身份、耗时和错误，但不记录密码或令牌。" },
      ],
      tip: "优先测试一旦出错会损失用户数据、权限或核心收入流程的行为。",
    },
    {
      id: "delivery-capstone",
      eyebrow: "4.2 · 工程化与交付",
      title: "部署与毕业项目",
      summary: "最后阶段要把本地应用变成可持续交付的产品，并通过一个有真实约束的毕业项目整合全部能力。",
      duration: "4–6 周",
      prerequisites: [
        "前 11 节的核心交付物已经完成，并保留测试和复盘证据。",
        "选定一个真实用户问题、明确 MVP 边界，并能访问所需部署平台。",
      ],
      objectives: [
        "建立从提交、检查、迁移到部署、验证和回滚的交付链路。",
        "以端到端薄切片迭代一个包含真实数据与权限的产品。",
        "通过文档、演示、监控和复盘证明系统可运行、可维护。",
      ],
      formula: "代码 → CI → 构建产物 → 迁移 → 部署 → 健康检查 → 监控与回滚",
      points: [
        "理解环境变量、Docker、反向代理、域名、TLS、数据库迁移、备份和零停机部署的基本流程。",
        "毕业项目至少包含认证、CRUD、搜索或筛选、权限、持久化、测试、日志与线上部署。",
        "用 README 说明架构、取舍、运行方式和验证证据；用 Issue 拆任务，并在完成后复盘技术债。",
      ],
      practice: [
        "第 1 周交付注册到核心价值动作的端到端薄切片，不等待所有页面完成。",
        "第 2–4 周补齐权限、失败恢复、搜索、测试、日志、备份和响应式体验。",
        "执行一次生产演练：迁移、部署、健康检查、冒烟测试、故障注入和回滚。",
      ],
      deliverables: [
        "一个拥有生产 URL、持久化数据、认证授权、测试与监控的毕业项目。",
        "完整 README、架构决策记录、API/数据模型、部署手册和演示视频。",
        "一份基于真实反馈、故障与指标的毕业复盘和下一阶段 Backlog。",
      ],
      acceptanceCriteria: [
        "新用户能在生产环境完成核心旅程，刷新或重新登录后数据保持一致。",
        "CI 从干净环境完成检查与构建，生产变更有迁移、验证和回滚路径。",
        "至少邀请 3 位目标用户试用，并把反馈转化为有优先级的改进项。",
        "能够在 10 分钟内从告警定位一次预设故障，并说明影响范围与恢复动作。",
      ],
      examples: [
        { source: "团队任务管理平台", translation: "成员与角色、任务状态、评论、活动日志、筛选、通知和权限控制。" },
        { source: "AI 知识库应用", translation: "文档上传、异步处理、检索问答、引用、用量限制、失败恢复与评测。" },
      ],
      tip: "毕业项目只选一个主线问题，先交付端到端薄切片，再逐层补可靠性与体验。",
    },
  ],
};
