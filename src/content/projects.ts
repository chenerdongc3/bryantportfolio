import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "adhd-companion-alarm",
    title: "ADHD 情感陪伴闹钟",
    summary:
      "面向 ADHD 用户在起床执行、时间感知与情绪支持方面的痛点，从零完成产品定义、功能规划与可演示 MVP，并建立完整的 IP 叙事与路演表达。",
    period: "Sheniciest Hackathon",
    tags: ["Product Design", "MVP", "用户研究", "Pitch"],
    featured: true,
    draft: false,
    sections: [
      {
        title: "问题定义",
        paragraphs: [
          "围绕 ADHD 用户在起床执行、时间感知和情绪支持方面的痛点，结合应用心理学中的用户行为与情绪需求分析方法，完成核心场景拆解与功能规划。",
        ],
      },
      {
        title: "MVP 与产品表达",
        items: [
          "从零搭建情感陪伴闹钟 MVP，将传统闹钟与情绪陪伴机制结合，交付可演示产品原型。",
          "负责产品 IP、故事叙事与路演 Pitch，完整组织用户痛点、差异化价值和商业方向的表达。",
        ],
      },
    ],
  },
  {
    slug: "agent-workbench-lab",
    title: "Agent Workbench Lab",
    summary:
      "可切换执行引擎的 Agent 系统研究原型，围绕项目隔离、上下文与长期记忆、多 Agent 调度、工具审批和事件回放，探索可观察、可恢复的任务执行链路。",
    period: "Agent 系统研究原型",
    tags: ["TypeScript", "React", "Agent Harness", "SQLite", "SSE"],
    featured: true,
    draft: false,
    sections: [
      {
        title: "研究问题与项目定位",
        paragraphs: [
          "以可运行的 Web 工作台研究 Agent 从接收任务到交付结果的完整过程：模型如何获得上下文，工具调用如何经过授权，执行进度如何展示，以及中断后如何恢复会话与检查结果。",
          "通过文件编辑器、聊天时间线、Diff 审批和事件检查器，把执行过程中的状态与边界呈现出来。项目定位为研究原型，用于验证架构取舍与交互机制。",
        ],
      },
      {
        title: "执行引擎适配与 Codex 复用",
        items: [
          "抽象统一 RuntimeAdapter，接入 Demo、Codex app-server、OpenAI API 和 Google Gemini API，共用工作台界面、审批交互与事件协议。",
          "Codex 模式复用原生 Agent 执行循环、Thread / Turn / Item 语义与审批请求；工作台实现自己的项目管理、界面和状态投影。",
          "直接调用模型 API 时，由工作台 Runtime 管理工具调用循环、工具结果回传和上下文重建；Demo 模式用于确定性地验证批准、拒绝与文件修订冲突。",
        ],
      },
      {
        title: "上下文与项目长期记忆",
        items: [
          "分离完整对话记录、模型可见上下文和跨会话项目记忆。上下文采用摘要与最近消息窗口，按 Token 预算注入相关记忆；压缩不删除原始记录。",
          "长期记忆记录真实 Thread / Turn / Item 来源，使用 SQLite FTS5 检索，支持失效处理；两阶段管线仅提取用户明确要求记住的内容，再校验来源并更新项目摘要。",
          "以 Project 隔离工作区、会话、记忆、审批与事件，防止切换项目或会话时混用上下文。",
        ],
      },
      {
        title: "多 Agent 调度与共享文件协调",
        items: [
          "将子 Agent 建模为独立 Thread，采用最小上下文、并发额度、FIFO 排队和结果回传；原型限制为 root + 3 个子 Agent，最大委派深度为 1。",
          "子 Agent 默认只读且不参与长期记忆抽取；写任务先申请路径写入租约，再经过审批与文件修订检查，减少并发覆盖。",
          "支持递归取消未结束的子任务，并保留已完成结果；主会话接收生命周期摘要与最终结果。",
        ],
      },
      {
        title: "工具授权与文件写入一致性",
        items: [
          "在工具执行前由宿主判断读取、编辑、记忆或委派意图，再按意图限制工具集合；低置信度请求进入澄清流程。",
          "Agent 修改文件经过变更提议、Diff 审批、修订检查与落盘，实际结果回传给模型。审批期间文件若已变化，则拒绝旧修订覆盖。",
          "文件访问限定在当前项目工作区内；用户手动保存与 Agent 提议修改沿各自授权路径执行，共享文件修订检查。",
        ],
      },
      {
        title: "持久化、事件回放与恢复",
        items: [
          "使用 SQLite 保存会话消息、运行事件、审批与上下文检查点；通过带序号的 SSE 事件更新界面，支持重连回放和去重。",
          "区分文件变化事件与任务完成事件：文件视图根据实际工作区变化刷新，聊天时间线根据执行结果更新。",
          "用幂等键避免重复启动任务；服务重启后恢复已持久化的会话，将中断任务和过期审批显式标记，避免界面误报成功。",
        ],
      },
      {
        title: "原型边界与后续研究",
        paragraphs: [
          "当前意图分类、非 Codex Runtime 的上下文摘要及记忆抽取采用确定性规则。语义记忆抽取、跨会话冲突合并、完整质量评测和多进程调度仍属于后续研究方向。",
          "已启动任务的幂等记录会持久化，但尚未启动的兼容消息队列保存在进程内，服务重启后不会恢复；会话恢复也不代表中断任务会自动继续执行。",
        ],
      },
    ],
  },
  {
    slug: "ai-conversation-practice",
    title: "智能陪练对话平台",
    summary:
      "面向语言学习与口语陪练场景的 AI 对话前端应用，支持语音与文本输入、多轮上下文记忆、流式响应、历史会话与表达反馈。",
    period: "2025.01 — 2025.08",
    tags: ["Vue 3", "Vite", "Pinia", "SSE", "Virtual List"],
    featured: true,
    draft: false,
    sections: [
      {
        title: "项目背景",
        paragraphs: [
          "面向语言学习与口语陪练场景的 AI 对话前端应用，支持语音与文本输入、多轮上下文记忆与流式响应输出，提供历史会话记录与表达反馈能力，用于模拟真实对话训练过程。",
        ],
      },
      {
        title: "项目工作",
        items: [
          "采用 Composition API 拆分对话状态与渲染逻辑，通过高内聚组件与可组合 Hooks 提升代码复用与可维护性。",
          "基于 fetch + ReadableStream + TextDecoder 解析 SSE 数据流，实现逐 token 输出、滚动跟随与中断控制。",
          "抽象 Main、SideBar、MarkdownRenderer 等核心组件，统一消息渲染规范与交互行为，支持自动滚动、防抖输入及语音与文本状态同步。",
          "在长会话场景中引入 vue-virtual-scroller，降低高频更新及大数据量场景下的 DOM 开销。",
          "结合 defineAsyncComponent 与 Suspense 实现组件懒加载，配合 Vite 分包策略优化首屏加载与资源体积。",
        ],
      },
    ],
  },
  {
    slug: "travel-assistant-agent",
    title: "旅行助手 Agent",
    summary:
      "使用 LangGraph 编排的旅行规划 Agent，围绕结构化输出、长上下文压缩、多 Agent 协作、RAG 检索和运行状态恢复构建可靠链路。",
    period: "2025.01",
    tags: ["Python", "LangGraph", "Qdrant", "Claude API", "RAG"],
    featured: true,
    draft: false,
    sections: [
      {
        title: "结构化输出与稳定性",
        paragraphs: [
          "全链路基于 Pydantic 构建 Schema 约束，利用 JSON Mode 配合自定义校验器强制模型输出，并集成 Exponential Backoff 重试机制应对解析异常，确保下游地图 API 及 PDF 导出模块的稳定性。",
        ],
      },
      {
        title: "上下文管理与成本优化",
        paragraphs: [
          "设计动态上下文压缩策略。针对长对话场景，通过 Summarizer Agent 异步摘要历史观测，并清洗 Tool Output 冗余字段，在保持长短期记忆的同时降低 30% 以上的 Token 消耗。",
        ],
      },
      {
        title: "多范式 Agent 编排",
        paragraphs: [
          "利用 DAG 处理线性流水线；构建基于状态机的循环跳转逻辑以支持行程实时编辑；引入 Supervisor Pattern 实现多子 Agent 协同。",
        ],
      },
      {
        title: "RAG 性能优化与知识检索",
        paragraphs: [
          "基于 Qdrant 构建知识库，采用 Hybrid Search 提升关键词召回率，并引入 Rerank 机制过滤检索噪声，减少复杂规划任务中的幻觉。",
        ],
      },
      {
        title: "系统可靠性与状态持久化",
        paragraphs: [
          "实现 Checkpoint 机制进行运行时状态序列化，支持任务断点恢复，保障网络波动或进程重启后行程规划数据的一致性。",
        ],
      },
    ],
  },
];

export const publishedProjects = projects.filter((project) => !project.draft);
export const featuredProjects = publishedProjects.filter((project) => project.featured);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}
