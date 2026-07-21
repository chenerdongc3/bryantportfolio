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
