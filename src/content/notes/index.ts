import type { Note } from "../types";

export const notes: Note[] = [
  {
    slug: "german",
    title: "德语学习笔记",
    description: "按词法与句法整理德语语法知识，建立便于持续补充和回顾的学习目录。",
    publishedAt: "2026-07-21T00:00:00+08:00",
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
  },
];
export const publishedNotes = notes.filter((note) => !note.draft && !note.noindex);

export function getNote(slug: string) {
  return publishedNotes.find((note) => note.slug === slug);
}
