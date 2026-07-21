import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    organization: "Noumi",
    role: "Agent 开发工程师",
    period: "2026.02 — 至今",
    summary:
      "负责智能 Agent 工作平台的运行时、编排与可靠性建设，覆盖多环境部署、多智能体协作、能力资产管理与定时任务全链路。",
    tags: ["TypeScript", "Claude Agent SDK", "MCP", "PostgreSQL", "Kubernetes"],
    highlights: [
      "落地“平台控制面 + 每用户有状态 Runtime”架构，将鉴权、计费与 Agent 会话、文件、产物解耦，以统一接口适配 Docker、Swarm、Kubernetes、ECI、Local Process 5 类环境，解决多环境部署差异与用户数据隔离问题。",
      "构建 Main Agent、Topic Agent、SubAgent 协作链路，以受控 CLI、Dispatch Bridge 和稳定消息 ID 完成跨 Project 路由与委派，打通子任务进度、结果及产物回流，使多 Agent 执行过程可追踪。",
      "完善 Agent 任务状态机，支持 Topic 内串行、跨 Topic 并发、取消、后台子任务与 Watchdog 恢复；通过 SSE 事件重放和 AskUserQuestion、工具授权、计划审批，解决刷新断连后的状态丢失及关键操作失控。",
      "统一 Skill、Plugin、CLI、MCP、Connector 5 类能力资产，建立 Workspace / Project / Team 三级策略，通过摘要校验、原子物化和 OAuth 凭据隔离，降低配置漂移、半完成安装与凭据串用风险。",
      "设计基于 PostgreSQL 的可靠定时任务链路，统一管理 Cron、IANA 时区、Lease 与运行日志，结合幂等回报、退避重试、Outbox 和异常 Run 对账，降低多实例下的重复执行、重复通知及结果遗漏。",
    ],
  },
  {
    organization: "FWD Technology",
    role: "前端开发实习生",
    period: "2025.10 — 2026.02",
    summary:
      "参与保险及金融类中后台系统前端开发，围绕金融产品配置、业务规则管理、多语言支持及可视化模块建设进行功能迭代与工程优化。",
    tags: ["Micro Frontend", "React", "Vue", "React Flow"],
    highlights: [
      "参与金融业务系统微前端体系建设，基于 qiankun 管理 React / Vue 子应用，实现子应用独立构建与运行隔离，并承担子系统内具体业务功能的开发与维护。",
      "配合推进国际化改造，基于 react-i18next 完成中英文双语切换能力接入，覆盖金融产品配置与权限管理等核心页面。",
      "在 Monorepo 架构下沉淀通用业务组件，封装搜索筛选区、分页表格、历史记录面板等模块，支持跨业务模块复用及主题样式切换。",
      "参与性能优化方案设计，通过代码分包、资源压缩与按需加载分析关键渲染路径，调整构建配置后使核心页面 LCP P90 渲染耗时降低约 1.6 秒。",
      "参与金融业务规则可视化模块实现，调研对比 G6 等方案，最终落地基于 React Flow 的规则关系渲染能力。",
    ],
  },
  {
    organization: "哈啰",
    role: "海外用户增长运营实习生",
    summary:
      "围绕 TikTok 内容矩阵、垂直 KOL 合作与转化追踪搭建海外获客链路，并通过分地区、账号、达人和素材的数据分析持续调整资源投入。",
    tags: ["Growth Analytics", "TikTok", "KOL", "ROI"],
    highlights: [
      "按地区、账号、达人和素材拆解增长数据，使核心获客成本由 4 美元降至 3.5 美元，下降 12.5%。",
      "拆解内容触达、落地页、注册与支付漏斗，定位支付链路流失环节，推动东南亚市场 ROI 由 0.2 提升至 0.4。",
      "建立内容表现与最终转化结果之间的分析机制，减少仅依赖播放量、互动量等表层指标做增长决策。",
    ],
  },
  {
    organization: "KuCoin",
    role: "前端开发实习生 · Web3",
    summary:
      "参与 Web3 业务前端重构与性能治理，推动重复页面逻辑、公共组件和开发流程向组件化、标准化收敛。",
    tags: ["Next.js", "SSR", "Core Web Vitals", "AI Skill"],
    highlights: [
      "基于团队 AI Skill 工作流完成代码生成、规范检查与重复性改造，将标准化开发流程沉淀为可复用能力。",
      "基于 Next.js 为关键页面落地服务端渲染，优化首屏请求、缓存策略与 HTML 输出链路，使生产环境 P75 TTFB 由 1,200 ms 降至 700 ms，降低约 42%。",
      "使用 Kunlun 性能监控平台分析请求瀑布、静态资源加载与主线程耗时，通过资源压缩、加载优先级调整及请求链路优化，使页面 P75 LCP 由 3.6 秒降至 2.4 秒，降低约 33%。",
    ],
  },
];
