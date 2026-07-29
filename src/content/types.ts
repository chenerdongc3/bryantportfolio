export type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  period: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  sections: ContentSection[];
  demoUrl?: string;
  repositoryUrl?: string;
};

export type Experience = {
  organization: string;
  role: string;
  period?: string;
  logo?: {
    src: string;
    alt: string;
  };
  summary: string;
  tags: string[];
  highlights: string[];
};

export type NoteOutlineItem = {
  id: string;
  label: string;
};

export type NoteLessonExample = {
  source: string;
  translation: string;
};

export type NoteLessonPointDetail = {
  title: string;
  explanation: string;
  concepts: string[];
  application: string;
  pitfalls: string[];
};

export type NoteLesson = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  duration?: string;
  prerequisites?: string[];
  objectives?: string[];
  formula: string;
  points: string[];
  pointDetails?: NoteLessonPointDetail[];
  practice?: string[];
  deliverables?: string[];
  acceptanceCriteria?: string[];
  examples: NoteLessonExample[];
  tip: string;
};

export type NoteOutlineGroup = {
  title: string;
  items: NoteOutlineItem[];
};

export type Note = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  draft: boolean;
  noindex: boolean;
  canonical?: string;
  cover?: string;
  coverAlt?: string;
  body: string;
  outline?: NoteOutlineGroup[];
  lessons?: NoteLesson[];
};
