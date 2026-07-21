import type { Note } from "../types";

export const notes: Note[] = [
  {
    slug: "german",
    title: "德语学习笔记",
    description: "按词法与句法整理德语语法知识，建立便于持续补充和回顾的学习目录。",
    publishedAt: "2026-07-21T00:00:00+08:00",
    updatedAt: "2026-07-22T00:00:00+08:00",
    category: "语言学习",
    tags: ["德语", "语法"],
    draft: false,
    noindex: false,
    body: "",
    outline: [
      {
        title: "第一部分 词法",
        items: [
          { id: "articles", label: "1.1 冠词 Articles" },
          { id: "nouns", label: "1.2 名词 Nouns" },
          { id: "pronouns", label: "1.3 代词 Pronouns" },
          { id: "prepositions", label: "1.4 介词 Prepositions" },
          { id: "verbs", label: "1.5 动词 Verbs" },
          { id: "adjective", label: "1.6 形容词 Adjective" },
          { id: "adverbs", label: "1.7 副词 Adverbs" },
        ],
      },
      {
        title: "第二部分 句法",
        items: [
          { id: "present-tense", label: "2.1 现在时 Present Tense" },
          { id: "past-tense", label: "2.2 过去时 Past Tense" },
          { id: "future-tense", label: "2.3 将来时 Future Tense" },
          { id: "subjunctive", label: "2.4 虚拟语态 Subjunctive" },
          { id: "passive", label: "2.5 被动语态 Passive" },
          { id: "linker", label: "2.6 从句 Linker" },
        ],
      },
    ],
    lessons: [
      {
        id: "articles",
        eyebrow: "1.1 · 词法",
        title: "冠词 Articles",
        summary: "冠词放在名词前，用来标记名词的性、数、格和是否特指。",
        formula: "冠词 +（形容词）+ 名词",
        points: ["定冠词：der / die / das，相当于“这个、那个”。", "不定冠词：ein / eine，相当于“一个”。", "冠词词尾会随名词的格变化。"],
        examples: [
          { source: "Der Mann kommt.", translation: "这个男人来了。" },
          { source: "Ich sehe einen Mann.", translation: "我看见一个男人。" },
        ],
        tip: "背名词时连同冠词一起背：der Tisch，而不只背 Tisch。",
      },
      {
        id: "nouns",
        eyebrow: "1.2 · 词法",
        title: "名词 Nouns",
        summary: "德语名词首字母永远大写，并有阳性、阴性、中性三种性。",
        formula: "冠词 + 首字母大写的名词",
        points: ["阳性用 der，阴性用 die，中性用 das。", "复数统一使用定冠词 die。", "复数形式没有唯一规则，需要和单数一起记。"],
        examples: [
          { source: "das Buch → die Bücher", translation: "书 → 多本书" },
          { source: "Die Sprache ist schön.", translation: "这门语言很美。" },
        ],
        tip: "用“冠词 + 单数 + 复数”记忆：das Buch, die Bücher。",
      },
      {
        id: "pronouns",
        eyebrow: "1.3 · 词法",
        title: "代词 Pronouns",
        summary: "代词代替名词；最常用的是人称代词，形式会随格变化。",
        formula: "ich / du / er·sie·es / wir / ihr / sie·Sie",
        points: ["主格作主语：ich, du, er。", "宾格作直接宾语：mich, dich, ihn。", "与格作间接宾语：mir, dir, ihm。"],
        examples: [
          { source: "Ich liebe dich.", translation: "我爱你。" },
          { source: "Er hilft mir.", translation: "他帮助我。" },
        ],
        tip: "先判断代词在句中做什么，再选择主格、宾格或与格。",
      },
      {
        id: "prepositions",
        eyebrow: "1.4 · 词法",
        title: "介词 Prepositions",
        summary: "介词表示时间、位置或方向，并决定它后面的名词使用哪一个格。",
        formula: "介词 + 冠词变格 + 名词",
        points: ["宾格介词：durch, für, gegen, ohne, um。", "与格介词：aus, bei, mit, nach, seit, von, zu。", "双向介词：静态位置用与格，移动方向用宾格。"],
        examples: [
          { source: "Ich bin in der Schule.", translation: "我在学校里。（位置）" },
          { source: "Ich gehe in die Schule.", translation: "我去学校。（方向）" },
        ],
        tip: "把介词和它支配的格作为一个整体记忆。",
      },
      {
        id: "verbs",
        eyebrow: "1.5 · 词法",
        title: "动词 Verbs",
        summary: "动词随主语变位；在普通陈述句中，变位动词固定在第二位。",
        formula: "位置 1 + 变位动词 + 其他信息",
        points: ["规则动词去掉 -en，再添加人称词尾。", "可分动词的前缀通常放到句末。", "情态动词变位，主要动词原形放句末。"],
        examples: [
          { source: "Heute lerne ich Deutsch.", translation: "今天我学德语。" },
          { source: "Ich stehe um sieben Uhr auf.", translation: "我七点起床。" },
        ],
        tip: "找句子骨架时，先找第二位的变位动词。",
      },
      {
        id: "adjective",
        eyebrow: "1.6 · 词法",
        title: "形容词 Adjective",
        summary: "形容词作表语时不变；放在名词前时，要根据冠词、性数格加词尾。",
        formula: "冠词 + 形容词词尾 + 名词",
        points: ["作表语：Das Buch ist gut。gut 不变。", "作定语：ein gutes Buch。gut 需要词尾。", "比较级常加 -er，最高级常用 am ...-sten。"],
        examples: [
          { source: "Das ist ein gutes Buch.", translation: "这是一本好书。" },
          { source: "Anna ist größer als Mia.", translation: "安娜比米娅高。" },
        ],
        tip: "看到形容词后紧跟名词，才需要考虑词尾变化。",
      },
      {
        id: "adverbs",
        eyebrow: "1.7 · 词法",
        title: "副词 Adverbs",
        summary: "副词修饰动词、形容词或整个句子，本身通常不发生词尾变化。",
        formula: "时间 → 原因 → 方式 → 地点（TeKaMoLo）",
        points: ["时间：heute, oft, jetzt。", "方式：gern, schnell, zusammen。", "地点：hier, draußen, links。"],
        examples: [
          { source: "Ich lerne heute gern zu Hause.", translation: "我今天喜欢在家学习。" },
          { source: "Sie spricht sehr schnell.", translation: "她说得非常快。" },
        ],
        tip: "多个状语并列时，可先用“时间—原因—方式—地点”排序。",
      },
      {
        id: "present-tense",
        eyebrow: "2.1 · 句法",
        title: "现在时 Present Tense",
        summary: "现在时表达当下、习惯和已安排的未来，是德语最常用的时态。",
        formula: "主语 + 现在时变位动词 + 其他信息",
        points: ["规则词尾：-e, -st, -t, -en, -t, -en。", "sein、haben 和情态动词需要单独记变位。", "加未来时间词时，现在时也能表达未来。"],
        examples: [
          { source: "Ich lerne jeden Tag Deutsch.", translation: "我每天学德语。" },
          { source: "Morgen fahre ich nach Berlin.", translation: "明天我去柏林。" },
        ],
        tip: "日常表达优先用现在时，不必为“将来”过早切换时态。",
      },
      {
        id: "past-tense",
        eyebrow: "2.2 · 句法",
        title: "过去时 Past Tense",
        summary: "口语多用现在完成时 Perfekt，书面叙述多用一般过去时 Präteritum。",
        formula: "haben / sein + ... + 第二分词",
        points: ["多数动词用 haben。", "表示位置移动或状态变化的动词常用 sein。", "规则动词第二分词常为 ge-词干-t。"],
        examples: [
          { source: "Ich habe Deutsch gelernt.", translation: "我学过德语。" },
          { source: "Wir sind nach Hause gegangen.", translation: "我们回家了。" },
        ],
        tip: "口语先掌握 Perfekt；sein 和 haben 的过去时 war、hatte 也很常用。",
      },
      {
        id: "future-tense",
        eyebrow: "2.3 · 句法",
        title: "将来时 Future Tense",
        summary: "将来时用 werden 表达计划或推测，但明确语境下常直接用现在时。",
        formula: "werden 变位 + ... + 动词原形",
        points: ["werden 占第二位并随主语变位。", "主要动词原形放在句末。", "表示推测时，可理解为“大概、可能”。"],
        examples: [
          { source: "Ich werde morgen arbeiten.", translation: "我明天会工作。" },
          { source: "Er wird schon zu Hause sein.", translation: "他大概已经在家了。" },
        ],
        tip: "有 morgen、nächste Woche 等明确时间时，现在时通常更自然。",
      },
      {
        id: "subjunctive",
        eyebrow: "2.4 · 句法",
        title: "虚拟语气 Subjunctive",
        summary: "第二虚拟式 Konjunktiv II 表达愿望、假设和礼貌请求。",
        formula: "würde 变位 + ... + 动词原形",
        points: ["非真实条件常用 wenn 引导。", "würde + 原形适用于大多数动词。", "常用特殊形式：wäre, hätte, könnte, müsste。"],
        examples: [
          { source: "Ich würde gern nach Berlin reisen.", translation: "我很想去柏林旅行。" },
          { source: "Könnten Sie mir helfen?", translation: "您能帮我吗？" },
        ],
        tip: "先掌握 würde、wäre、hätte、könnte，就能覆盖大多数日常场景。",
      },
      {
        id: "passive",
        eyebrow: "2.5 · 句法",
        title: "被动语态 Passive",
        summary: "过程被动强调动作本身，执行者不重要或未知。",
        formula: "werden 变位 + ... + 第二分词",
        points: ["主动句的宾语变为被动句主语。", "执行者可用 von + 与格补充。", "完成时：sein + 第二分词 + worden。"],
        examples: [
          { source: "Das Essen wird gekocht.", translation: "饭正在被做。" },
          { source: "Das Buch wurde von Kafka geschrieben.", translation: "这本书由卡夫卡所写。" },
        ],
        tip: "不要和状态被动混淆：ist geöffnet 表示“开着”，wird geöffnet 表示“正在被打开”。",
      },
      {
        id: "linker",
        eyebrow: "2.6 · 句法",
        title: "从句 Linker",
        summary: "从属连词引导从句，并把变位动词推到从句末尾。",
        formula: "连词 + 主语 + 其他信息 + 变位动词",
        points: ["常见连词：weil, dass, wenn, obwohl。", "从句在前时，后面的主句仍以变位动词开头。", "并列连词 und、aber、oder 不改变正常语序。"],
        examples: [
          { source: "Ich bleibe zu Hause, weil ich krank bin.", translation: "我待在家，因为我病了。" },
          { source: "Wenn ich Zeit habe, lerne ich Deutsch.", translation: "如果我有时间，我就学德语。" },
        ],
        tip: "看到从属连词，先把从句的变位动词放到最后。",
      },
    ],
  },
];
export const publishedNotes = notes.filter((note) => !note.draft && !note.noindex);

export function getNote(slug: string) {
  return publishedNotes.find((note) => note.slug === slug);
}

export function getNoteLesson(noteSlug: string, lessonId: string) {
  return getNote(noteSlug)?.lessons?.find((lesson) => lesson.id === lessonId);
}
