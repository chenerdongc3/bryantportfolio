import avatar from "@/components/ui/image/avatar.JPG";

export const profile = {
  name: "Bryant",
  englishName: "Bryant",
  role: "全栈开发 / AI 产品工程",
  status: "开放合作 · AI 应用与现代 Web",
  headline: "Data-driven. Product-minded. Engineering-ready.",
  bio: "专注于 AI 应用、自动化工作流与现代 Web 产品开发，能从用户行为、数据指标与工程实现三个层面定位问题并交付可验证结果。",
  background: "跨学科产品与用户研究背景",
  avatar,
  skills: [
    "用户增长 / 转化漏斗",
    "React / Vue 3 / Next.js",
    "TypeScript / SSR",
    "Agent Harness / Tool Calling",
    "任务调度 / 可观测性",
  ],
} as const;
