import { z } from "zod";
import { notes } from "@/content/notes";
import { projects } from "@/content/projects";

const urlSchema = z.string().url();

const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  summary: z.string().min(1),
  period: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  draft: z.boolean(),
  sections: z.array(z.object({
    title: z.string().min(1),
    paragraphs: z.array(z.string().min(1)).optional(),
    items: z.array(z.string().min(1)).optional(),
  })),
  demoUrl: urlSchema.optional(),
  repositoryUrl: urlSchema.optional(),
});

const noteSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().datetime({ offset: true }),
  updatedAt: z.string().datetime({ offset: true }).optional(),
  category: z.string().min(1),
  tags: z.array(z.string().min(1)),
  draft: z.boolean(),
  noindex: z.boolean(),
  canonical: urlSchema.optional(),
  cover: z.string().min(1).optional(),
  coverAlt: z.string().min(1).optional(),
  body: z.string(),
  outline: z.array(z.object({
    title: z.string().min(1),
    items: z.array(z.object({
      id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      label: z.string().min(1),
    })).min(1),
  })).min(1).optional(),
}).superRefine((note, context) => {
  if (note.cover && !note.coverAlt) {
    context.addIssue({ code: "custom", message: "Note cover requires coverAlt" });
  }

  const outlineIds = note.outline?.flatMap((group) => group.items.map((item) => item.id)) ?? [];
  if (new Set(outlineIds).size !== outlineIds.length) {
    context.addIssue({ code: "custom", message: "Note outline item ids must be unique" });
  }
});

function assertUniqueSlugs(items: Array<{ slug: string }>, label: string) {
  const slugs = new Set<string>();
  for (const item of items) {
    if (slugs.has(item.slug)) throw new Error(`Duplicate ${label} slug: ${item.slug}`);
    slugs.add(item.slug);
  }
}

export function validateContent() {
  projects.forEach((project) => projectSchema.parse(project));
  notes.forEach((note) => noteSchema.parse(note));
  assertUniqueSlugs(projects, "project");
  assertUniqueSlugs(notes, "note");
}
