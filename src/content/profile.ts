import avatar from "@/components/ui/image/avatar.JPG";

export const profile = {
  name: "陈扬",
  englishName: "Bryant Chen",
  role: "用户增长 / 前端 / Agent 工程",
  status: "上海 · 西南交通大学 2026届",
  headline: "Data-driven. Product-minded. Engineering-ready.",
  bio: "具备海外用户增长、Web3 前端开发与 Agent 工程化的交叉实践经验，能从用户行为、数据指标与工程实现三个层面定位并解决问题。",
  phone: "151-0838-5918",
  email: "2607653809@qq.com",
  location: "上海市",
  education: "西南交通大学（26届）",
  major: "应用心理学",
  avatar,
  resumeUrl: "https://www.kdocs.cn/l/criQ5jdbn6VJ",
  skills: [
    "用户增长 / 转化漏斗",
    "React / Vue 3 / Next.js",
    "TypeScript / SSR",
    "Agent Harness / Tool Calling",
    "任务调度 / 可观测性",
  ],
} as const;
