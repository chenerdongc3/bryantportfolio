import type { Experience, Note, Project } from "@/content/types";
import type { Language } from "./LanguageContext";
import { fullstackRoadmapNoteEnglish } from "./notes/fullstack";

export const pageCopy = {
  zh: {
    home: {
      hero: <>用数据发现<span className="relative inline-block text-primary after:absolute after:inset-x-0 after:bottom-1 after:-z-10 after:h-3 after:-rotate-1 after:bg-highlight sm:after:h-5">问题</span><br />用工程交付答案</>,
      experienceLabel: "Experience / 01—04",
      experienceTitle: <>先看我解决过<br className="hidden sm:block" />什么<span className="text-highlight">问题</span></>,
      experienceIntro: "项目数量不是重点。更重要的是，我如何在增长、前端性能与 Agent 工程中识别问题、拆解链路，并把答案真正交付出来。",
      viewExperience: "先看经历",
      viewProjects: "查看项目",
      fullExperience: "查看完整经历",
      proofLabel: "Selected proof",
      proofTitle: "项目，是经历的落地证据",
      proofIntro: "这里保留少量代表作，用来补充我如何把判断转成产品、代码与可验证结果。",
      viewAll: "查看全部",
      photoAlt: "Bryant 的签名头像",
    },
    about: {
      title: "关于我",
      experienceTitle: "工作与实习经历",
      skills: "技能方向",
      details: "个人信息",
      background: "背景",
      direction: "方向",
      photoAlt: "Bryant 的签名头像",
    },
    projects: {
      title: "项目实践",
      intro: "围绕产品 MVP、AI 对话体验、Agent 编排与前端工程质量的真实项目记录。",
      featured: "01 / 重点项目",
      others: "02 / 更多项目",
    },
    notes: {
      title: "学习笔记",
      intro: "整理语言、Agent、前端工程与人机交互中的学习过程。",
      emptyTitle: "笔记正在整理中",
      emptyDescription: "这里暂时没有已发布内容。你可以先查看我的项目实践，或稍后再来。",
      viewProjects: "查看项目 →",
      viewDirectory: "查看目录 →",
    },
  },
  en: {
    home: {
      hero: <>Find the <span className="relative inline-block text-primary after:absolute after:inset-x-0 after:bottom-1 after:-z-10 after:h-3 after:-rotate-1 after:bg-highlight sm:after:h-5">problem</span> in data.<br />Ship the answer in code.</>,
      experienceLabel: "Experience / 01—04",
      experienceTitle: <>See the <span className="text-highlight">problems</span><br className="hidden sm:block" /> I have solved</>,
      experienceIntro: "The project count is not the point. What matters is how I identify problems across growth, frontend performance, and agent engineering, trace the system, and ship real answers.",
      viewExperience: "See experience",
      viewProjects: "View projects",
      fullExperience: "Full experience",
      proofLabel: "Selected proof",
      proofTitle: "Projects turn experience into evidence",
      proofIntro: "A small set of representative work showing how I turn judgment into products, code, and verifiable outcomes.",
      viewAll: "View all",
      photoAlt: "Bryant's signature avatar",
    },
    about: {
      title: "About me",
      experienceTitle: "Work & internship experience",
      skills: "Focus areas",
      details: "Profile",
      background: "Background",
      direction: "Focus",
      photoAlt: "Bryant's signature avatar",
    },
    projects: {
      title: "Project work",
      intro: "Real projects spanning product MVPs, AI conversations, agent orchestration, and frontend engineering quality.",
      featured: "01 / Featured projects",
      others: "02 / More projects",
    },
    notes: {
      title: "Study notes",
      intro: "Notes from learning languages, agents, frontend engineering, and human-computer interaction.",
      emptyTitle: "Notes are being organized",
      emptyDescription: "Nothing has been published here yet. Browse my projects first, or check back later.",
      viewProjects: "View projects →",
      viewDirectory: "View directory →",
    },
  },
} as const;

export const profileEnglish = {
  role: "Full-stack Developer / AI Product Engineer",
  status: "Open to collaboration · AI & Modern Web",
  headline: "Data-driven. Product-minded. Engineering-ready.",
  bio: "Focused on AI applications, automated workflows, and modern web products. I identify problems through user behavior, product metrics, and engineering execution, then ship verifiable results.",
  background: "Cross-disciplinary product and user-research background",
  skills: [
    "User Growth / Conversion Funnels",
    "React / Vue 3 / Next.js",
    "TypeScript / SSR",
    "Agent Harness / Tool Calling",
    "Scheduling / Observability",
  ],
} as const;

export const experiencesEnglish: Experience[] = [
  {
    organization: "Enterprise AI Product Team",
    role: "AI Product Engineer",
    summary: "Building runtime, orchestration, and reliability for an intelligent agent workspace across multi-environment deployment, multi-agent collaboration, capability management, and scheduled tasks.",
    tags: ["TypeScript", "Claude Agent SDK", "MCP", "PostgreSQL", "Kubernetes"],
    highlights: [
      "Delivered a control-plane plus per-user stateful runtime architecture, separating auth and billing from agent sessions, files, and artifacts while supporting five container, cluster, and local-process environments through one interface.",
      "Built coordinator, task, and subagent collaboration with controlled command execution and stable message IDs, enabling cross-project delegation with traceable progress, results, and artifacts.",
      "Hardened the agent task state machine with per-topic sequencing, cross-topic concurrency, cancellation, background agents, watchdog recovery, SSE replay, interactive questions, tool permissions, and plan approval.",
      "Unified Skills, Plugins, CLI, MCP, and Connectors under workspace, project, and team policies with digest verification, atomic materialization, and isolated OAuth credentials.",
      "Designed reliable PostgreSQL-backed scheduling with cron, IANA time zones, leases, run logs, idempotent reporting, retries, outbox delivery, and reconciliation.",
    ],
  },
  {
    organization: "Fintech Product Team",
    role: "Frontend Engineer",
    summary: "Developed insurance and financial back-office systems, focusing on product configuration, business rules, localization, visualization, and engineering quality.",
    tags: ["Micro Frontend", "React", "Vue", "React Flow"],
    highlights: [
      "Contributed to a qiankun-based micro-frontend platform for independently built and isolated React and Vue applications.",
      "Implemented Chinese and English localization with react-i18next across financial product configuration and access-control workflows.",
      "Created reusable business modules for filters, paginated tables, and history panels within a monorepo.",
      "Improved critical-page LCP P90 by about 1.6 seconds through code splitting, asset compression, lazy loading, and build configuration changes.",
      "Evaluated graph libraries and delivered business-rule visualization with React Flow.",
    ],
  },
  {
    organization: "Hello",
    role: "International User Growth Intern",
    logo: {
      src: "/brands/hello.png",
      alt: "Hello logo",
    },
    summary: "Built overseas acquisition loops through TikTok content networks, vertical KOL partnerships, conversion tracking, and region-level performance analysis.",
    tags: ["Growth Analytics", "TikTok", "KOL", "ROI"],
    highlights: [
      "Reduced core acquisition cost from $4 to $3.50 by breaking performance down by region, account, creator, and creative.",
      "Mapped the content-to-payment funnel, identified payment drop-off, and helped improve Southeast Asia ROI from 0.2 to 0.4.",
      "Connected content performance to downstream conversion outcomes, reducing reliance on surface metrics such as views and engagement.",
    ],
  },
  {
    organization: "KuCoin",
    role: "Frontend Engineering Intern · Web3",
    logo: {
      src: "/brands/kucoin.svg",
      alt: "KuCoin logo",
    },
    summary: "Worked on Web3 frontend refactoring and performance, consolidating duplicated page logic, shared components, and development workflows.",
    tags: ["Next.js", "SSR", "Core Web Vitals", "AI Skill"],
    highlights: [
      "Used an AI-assisted engineering workflow for code generation, policy checks, and repeatable refactoring.",
      "Introduced SSR for key pages and optimized first-screen requests, caching, and HTML output, reducing production P75 TTFB from 1,200 ms to 700 ms.",
      "Analyzed waterfalls, assets, and main-thread work to reduce production P75 LCP from 3.6 seconds to 2.4 seconds.",
    ],
  },
];

export const projectsEnglish: Project[] = [
  {
    slug: "adhd-companion-alarm",
    title: "ADHD Companion Alarm",
    summary: "A product concept and demo-ready MVP for ADHD users who struggle with waking routines, time awareness, and emotional support, backed by a complete product narrative and pitch.",
    period: "Sheniciest Hackathon",
    tags: ["Product Design", "MVP", "User Research", "Pitch"],
    featured: true,
    draft: false,
    sections: [
      { title: "Problem definition", paragraphs: ["Mapped the core waking, time-awareness, and emotional-support scenarios using behavioral and applied-psychology perspectives, then translated them into product requirements."] },
      { title: "MVP and product story", items: ["Built a demo-ready emotional companion alarm MVP combining alarm utilities with supportive interactions.", "Owned the product IP, narrative, and pitch across user pain, differentiation, and business direction."] },
    ],
  },
  {
    slug: "ai-conversation-practice",
    title: "AI Conversation Practice",
    summary: "An AI conversation frontend for language and speaking practice with voice and text input, multi-turn memory, streaming responses, session history, and expression feedback.",
    period: "2025.01 — 2025.08",
    tags: ["Vue 3", "Vite", "Pinia", "SSE", "Virtual List"],
    featured: true,
    draft: false,
    sections: [
      { title: "Background", paragraphs: ["Built for language learning and speaking practice, the app supports voice and text input, multi-turn context, streamed output, session history, and expression feedback."] },
      { title: "Engineering work", items: ["Separated conversation state and rendering with Composition API and composable hooks.", "Parsed SSE with fetch, ReadableStream, and TextDecoder for token streaming, scroll following, and cancellation.", "Standardized messages and interactions through core components including Main, SideBar, and MarkdownRenderer.", "Used vue-virtual-scroller to reduce DOM cost in long, frequently updating conversations.", "Combined defineAsyncComponent, Suspense, and Vite chunking to improve initial loading."] },
    ],
  },
  {
    slug: "travel-assistant-agent",
    title: "Travel Assistant Agent",
    summary: "A LangGraph travel-planning agent built around structured output, long-context compression, multi-agent collaboration, RAG retrieval, and recoverable runtime state.",
    period: "2025.01",
    tags: ["Python", "LangGraph", "Qdrant", "Claude API", "RAG"],
    featured: true,
    draft: false,
    sections: [
      { title: "Structured output and stability", paragraphs: ["Used Pydantic schemas, JSON Mode, custom validators, and exponential-backoff retries to keep downstream map APIs and PDF exports reliable."] },
      { title: "Context and cost", paragraphs: ["Designed dynamic context compression with an asynchronous summarizer and cleaned tool outputs, reducing token use by more than 30% while preserving short- and long-term memory."] },
      { title: "Agent orchestration", paragraphs: ["Combined DAG pipelines, state-machine loops for itinerary editing, and a Supervisor Pattern for multi-agent coordination."] },
      { title: "RAG retrieval", paragraphs: ["Built a Qdrant knowledge base with hybrid search and reranking to improve recall and reduce planning hallucinations."] },
      { title: "Reliability and persistence", paragraphs: ["Serialized runtime checkpoints so interrupted planning tasks could resume consistently after network or process failures."] },
    ],
  },
];

const noteEnglishBase: Omit<Note, "lessons"> & { lessons: NonNullable<Note["lessons"]> } = {
  slug: "german",
  title: "German Study Notes",
  description: "A growing German grammar reference organized by morphology and syntax for easy review.",
  publishedAt: "2026-07-21T00:00:00+08:00",
  updatedAt: "2026-07-22T00:00:00+08:00",
  category: "Language Learning",
  tags: ["German", "Grammar"],
  draft: false,
  noindex: false,
  body: "",
  outline: [
    { title: "Part I · Morphology", items: [
      { id: "articles", label: "1.1 Articles" }, { id: "nouns", label: "1.2 Nouns" }, { id: "pronouns", label: "1.3 Pronouns" },
      { id: "prepositions", label: "1.4 Prepositions" }, { id: "verbs", label: "1.5 Verbs" }, { id: "adjective", label: "1.6 Adjectives" }, { id: "adverbs", label: "1.7 Adverbs" },
    ] },
    { title: "Part II · Syntax", items: [
      { id: "present-tense", label: "2.1 Present Tense" }, { id: "past-tense", label: "2.2 Past Tense" }, { id: "future-tense", label: "2.3 Future Tense" },
      { id: "subjunctive", label: "2.4 Subjunctive" }, { id: "passive", label: "2.5 Passive" }, { id: "linker", label: "2.6 Subordinate Clauses" },
    ] },
  ],
  lessons: [],
};

const lessonEnglish = {
  articles: ["1.1 · Morphology", "Articles", "Articles precede nouns and mark gender, number, case, and definiteness.", "article + (adjective) + noun", ["Definite articles der / die / das refer to a specific noun.", "Indefinite articles ein / eine mean “a” or “an.”", "Article endings change with grammatical case."], ["The man is coming.", "I see a man."], "Learn every noun with its article: der Tisch, not just Tisch."],
  nouns: ["1.2 · Morphology", "Nouns", "German nouns are always capitalized and have masculine, feminine, or neuter gender.", "article + capitalized noun", ["Use der for masculine, die for feminine, and das for neuter.", "All plural nouns use the definite article die.", "Plural forms follow several patterns and should be learned with the singular."], ["book → books", "The language is beautiful."], "Memorize article, singular, and plural together: das Buch, die Bücher."],
  pronouns: ["1.3 · Morphology", "Pronouns", "Pronouns replace nouns; personal pronouns are the most common and change with case.", "ich / du / er·sie·es / wir / ihr / sie·Sie", ["Nominative forms act as subjects: ich, du, er.", "Accusative forms act as direct objects: mich, dich, ihn.", "Dative forms act as indirect objects: mir, dir, ihm."], ["I love you.", "He helps me."], "Identify the pronoun’s role before choosing nominative, accusative, or dative."],
  prepositions: ["1.4 · Morphology", "Prepositions", "Prepositions express time, location, or direction and govern the case that follows.", "preposition + inflected article + noun", ["Accusative: durch, für, gegen, ohne, um.", "Dative: aus, bei, mit, nach, seit, von, zu.", "Two-way prepositions use dative for location and accusative for direction."], ["I am at school. (location)", "I am going to school. (direction)"], "Learn each preposition together with the case it governs."],
  verbs: ["1.5 · Morphology", "Verbs", "Verbs conjugate for the subject; in a main declarative clause, the finite verb occupies position two.", "position 1 + finite verb + other information", ["Regular verbs remove -en and add personal endings.", "Separable prefixes usually move to the end.", "Modal verbs conjugate while the main infinitive moves to the end."], ["Today I study German.", "I get up at seven."], "Find the finite verb in position two to identify the sentence skeleton."],
  adjective: ["1.6 · Morphology", "Adjectives", "Predicate adjectives do not change; attributive adjectives before nouns take endings based on article, gender, number, and case.", "article + adjective ending + noun", ["Predicate: Das Buch ist gut; gut is unchanged.", "Attributive: ein gutes Buch; gut takes an ending.", "Comparatives often add -er; superlatives often use am ...-sten."], ["This is a good book.", "Anna is taller than Mia."], "Only consider adjective endings when the adjective directly precedes a noun."],
  adverbs: ["1.7 · Morphology", "Adverbs", "Adverbs modify verbs, adjectives, or whole clauses and generally do not take endings.", "time → cause → manner → place (TeKaMoLo)", ["Time: heute, oft, jetzt.", "Manner: gern, schnell, zusammen.", "Place: hier, draußen, links."], ["I enjoy studying at home today.", "She speaks very quickly."], "When several adverbials appear, start with time–cause–manner–place."],
  "present-tense": ["2.1 · Syntax", "Present Tense", "The present tense covers current actions, habits, and scheduled future events.", "subject + present finite verb + other information", ["Regular endings are -e, -st, -t, -en, -t, -en.", "sein, haben, and modal verbs have irregular forms.", "With a future time phrase, present tense can express the future."], ["I study German every day.", "Tomorrow I am going to Berlin."], "Prefer present tense in everyday speech when the time context is already clear."],
  "past-tense": ["2.2 · Syntax", "Past Tense", "Spoken German usually uses Perfekt; written narration often uses Präteritum.", "haben / sein + ... + past participle", ["Most verbs use haben.", "Movement or change-of-state verbs often use sein.", "Regular participles often follow ge-stem-t."], ["I studied German.", "We went home."], "Master Perfekt first for speech; war and hatte are also common."],
  "future-tense": ["2.3 · Syntax", "Future Tense", "The future with werden expresses plans or assumptions, though the present is common when timing is clear.", "finite werden + ... + infinitive", ["werden occupies position two and agrees with the subject.", "The main infinitive goes at the end.", "It can also express probability or assumption."], ["I will work tomorrow.", "He is probably already at home."], "With morgen or nächste Woche, present tense often sounds more natural."],
  subjunctive: ["2.4 · Syntax", "Subjunctive", "Konjunktiv II expresses wishes, hypotheticals, and polite requests.", "finite würde + ... + infinitive", ["Unreal conditions often use wenn.", "würde + infinitive works for most verbs.", "Common special forms include wäre, hätte, könnte, müsste."], ["I would like to travel to Berlin.", "Could you help me?"], "würde, wäre, hätte, and könnte cover most everyday situations."],
  passive: ["2.5 · Syntax", "Passive", "The process passive emphasizes the action when the actor is unknown or unimportant.", "finite werden + ... + past participle", ["The active object becomes the passive subject.", "The actor can be added with von + dative.", "Perfect passive uses sein + participle + worden."], ["The food is being cooked.", "The book was written by Kafka."], "Distinguish ist geöffnet (is open) from wird geöffnet (is being opened)."],
  linker: ["2.6 · Syntax", "Subordinate Clauses", "Subordinating conjunctions introduce clauses and move the finite verb to the end.", "conjunction + subject + other information + finite verb", ["Common conjunctions include weil, dass, wenn, obwohl.", "When the subordinate clause comes first, the main clause begins with its finite verb.", "Coordinators und, aber, oder do not change normal word order."], ["I stay home because I am ill.", "If I have time, I study German."], "When you see a subordinating conjunction, move the finite verb to the clause end."],
} as const;

const germanExamples: Record<string, string[]> = {
  articles: ["Der Mann kommt.", "Ich sehe einen Mann."], nouns: ["das Buch → die Bücher", "Die Sprache ist schön."], pronouns: ["Ich liebe dich.", "Er hilft mir."],
  prepositions: ["Ich bin in der Schule.", "Ich gehe in die Schule."], verbs: ["Heute lerne ich Deutsch.", "Ich stehe um sieben Uhr auf."], adjective: ["Das ist ein gutes Buch.", "Anna ist größer als Mia."],
  adverbs: ["Ich lerne heute gern zu Hause.", "Sie spricht sehr schnell."], "present-tense": ["Ich lerne jeden Tag Deutsch.", "Morgen fahre ich nach Berlin."],
  "past-tense": ["Ich habe Deutsch gelernt.", "Wir sind nach Hause gegangen."], "future-tense": ["Ich werde morgen arbeiten.", "Er wird schon zu Hause sein."],
  subjunctive: ["Ich würde gern nach Berlin reisen.", "Könnten Sie mir helfen?"], passive: ["Das Essen wird gekocht.", "Das Buch wurde von Kafka geschrieben."],
  linker: ["Ich bleibe zu Hause, weil ich krank bin.", "Wenn ich Zeit habe, lerne ich Deutsch."],
};

noteEnglishBase.lessons = Object.entries(lessonEnglish).map(([id, value]) => ({
  id,
  eyebrow: value[0],
  title: value[1],
  summary: value[2],
  formula: value[3],
  points: [...value[4]],
  examples: germanExamples[id].map((source, index) => ({ source, translation: value[5][index] })),
  tip: value[6],
}));

export const notesEnglish: Note[] = [fullstackRoadmapNoteEnglish, noteEnglishBase];

export function getLocalizedCollection<T>(language: Language, chinese: T[], english: T[]) {
  return language === "en" ? english : chinese;
}
