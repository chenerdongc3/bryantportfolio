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
      formula: "理解原理 → 完成最小练习 → 做进项目 → 复盘与重构",
      points: [
        "先选择一条主栈：TypeScript + React + Node.js + PostgreSQL，减少频繁切换语言和框架带来的认知成本。",
        "每个阶段都产出可运行成果；学习时间建议按“30% 输入、70% 编码与调试”分配。",
        "用 Git 提交、README、测试与线上地址记录证据，避免只看教程却无法独立实现。",
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
      formula: "URL → DNS → 连接与 TLS → HTTP 请求 → 服务端响应 → 浏览器渲染",
      points: [
        "掌握 URL、请求方法、状态码、Header、Cookie、缓存和 CORS，能够用浏览器 Network 面板解释一次请求。",
        "理解 HTTP 是无状态协议；会区分客户端错误、服务端错误、网络失败和业务失败。",
        "使用 curl 或 API 客户端独立验证接口，不把所有问题都归因于前端页面。",
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
      formula: "语义结构 + 响应式布局 + 可访问交互 = 稳定界面",
      points: [
        "熟悉语义化标签、表单、图片替代文本和标题层级，让键盘、读屏器与搜索引擎都能理解页面。",
        "掌握盒模型、层叠、Flexbox、Grid、定位和媒体查询，优先用布局系统解决问题。",
        "验证 320px 到桌面宽度、键盘焦点、颜色对比度与 reduced-motion，而不只检查自己的设备。",
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
      formula: "输入校验 → 类型收窄 → 纯函数处理 → 明确副作用",
      points: [
        "掌握作用域、闭包、原型、模块、事件循环、Promise、async/await 与错误传播。",
        "使用联合类型、泛型、类型守卫和 unknown 表达真实约束，避免用 any 隐藏设计问题。",
        "区分编译期类型和运行时数据，对 API、表单与环境变量使用 Schema 校验。",
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
      formula: "UI = f(props, state)；组合优先于页面特化",
      points: [
        "理解渲染、事件、Effect、受控表单与组件生命周期，避免用 Effect 同步可直接计算的状态。",
        "先复用项目组件库和基础组件，再抽取领域组件；让组件 API 表达业务意图。",
        "保持单向数据流，将数据获取、业务状态和展示组件分层，但不过早建立复杂抽象。",
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
      formula: "Server State + URL State + Form State + UI State",
      points: [
        "列表、缓存和重新验证属于 Server State；筛选、分页和可分享视图优先进入 URL。",
        "表单需要字段校验、提交状态和服务端错误映射；弹窗开关等短生命周期状态保留在组件附近。",
        "路由承担页面边界、权限入口和数据加载策略，并处理 loading、empty、error 与 not-found 状态。",
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
      formula: "加载 → 解析 → 执行 → 布局 → 绘制 → 交互",
      points: [
        "理解 DOM、CSSOM、渲染流水线、存储和缓存，并能使用 Performance、Network 与 Lighthouse 定位瓶颈。",
        "围绕 LCP、INP、CLS 优化关键资源、代码分割、图片尺寸、长任务和布局稳定性。",
        "根据内容与交互需求选择 CSR、SSR、SSG，不为追求框架功能而增加运行时复杂度。",
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
      formula: "请求解析 → 认证 → 校验 → 业务服务 → 数据访问 → 稳定响应",
      points: [
        "掌握 Node.js 运行时、路由、中间件、依赖注入、错误处理、配置管理与结构化日志。",
        "按资源和用例设计 REST API，统一分页、错误、幂等性和版本策略，并先复用现有接口。",
        "把业务规则放在可测试的服务层，避免散落在路由处理器、ORM 回调和前端组件中。",
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
      formula: "业务实体 + 关系 + 约束 + 索引 + 事务",
      points: [
        "掌握表、主键、外键、唯一约束、范式、Join、聚合、索引和 EXPLAIN。",
        "用事务保护必须共同成功的写入，通过迁移管理 Schema 演进，避免直接修改生产结构。",
        "先以 PostgreSQL 建立可靠主数据，再按真实瓶颈引入 Redis、搜索或对象存储。",
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
      formula: "身份认证 + 资源授权 + 输入校验 + 最小权限 + 审计",
      points: [
        "理解 Session、Cookie、Token、OAuth、密码哈希与密钥管理，优先采用成熟认证方案。",
        "防范 XSS、CSRF、SQL 注入、SSRF、暴力尝试和敏感信息泄漏，并设置安全响应头和速率限制。",
        "按资源所有者和角色执行服务端授权；前端隐藏按钮只是体验优化，不是安全措施。",
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
      formula: "静态检查 + 单元测试 + 集成测试 + E2E + 日志/指标/追踪",
      points: [
        "测试关键业务规则、API 与核心用户旅程，减少对内部实现和脆弱快照的依赖。",
        "在 CI 中运行 lint、typecheck、test 和 build，并让失败能够稳定复现。",
        "使用带请求 ID 的结构化日志、核心指标、错误追踪和告警，避免只靠 console.log 排查生产问题。",
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
      formula: "代码 → CI → 构建产物 → 迁移 → 部署 → 健康检查 → 监控与回滚",
      points: [
        "理解环境变量、Docker、反向代理、域名、TLS、数据库迁移、备份和零停机部署的基本流程。",
        "毕业项目至少包含认证、CRUD、搜索或筛选、权限、持久化、测试、日志与线上部署。",
        "用 README 说明架构、取舍、运行方式和验证证据；用 Issue 拆任务，并在完成后复盘技术债。",
      ],
      examples: [
        { source: "团队任务管理平台", translation: "成员与角色、任务状态、评论、活动日志、筛选、通知和权限控制。" },
        { source: "AI 知识库应用", translation: "文档上传、异步处理、检索问答、引用、用量限制、失败恢复与评测。" },
      ],
      tip: "毕业项目只选一个主线问题，先交付端到端薄切片，再逐层补可靠性与体验。",
    },
  ],
};
