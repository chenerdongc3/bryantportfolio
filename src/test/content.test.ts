import { describe, expect, it } from "vitest";
import { experiences } from "@/content/experience";
import { publishedNotes } from "@/content/notes";
import { publishedProjects } from "@/content/projects";
import { getIndexableRoutes, getPublicRoutes } from "@/lib/content/routes";
import { validateContent } from "@/lib/content/validate";
import { experiencesEnglish, notesEnglish, projectsEnglish } from "@/i18n/content";

describe("content model", () => {
  it("validates all content and unique slugs", () => {
    expect(() => validateContent()).not.toThrow();
  });

  it("derives detail routes from published content", () => {
    const routes = getPublicRoutes();
    publishedProjects.forEach((project) => expect(routes).toContain(`/projects/${project.slug}`));
    publishedNotes.forEach((note) => expect(routes).toContain(`/notes/${note.slug}`));
  });

  it("includes the approved branded experience and project content without placeholders", () => {
    expect(experiences.map((experience) => experience.organization)).toEqual(
      expect.arrayContaining(["哈啰", "KuCoin"]),
    );
    expect(experiences.filter((experience) => experience.logo)).toHaveLength(2);
    expect(publishedProjects[0]?.slug).toBe("adhd-companion-alarm");
    expect(JSON.stringify({ experiences, publishedProjects })).not.toMatch(/待补充|X%|X 人日|X 小时|X 天/);
  });

  it("publishes the German study-note outline", () => {
    const germanNote = publishedNotes.find((note) => note.slug === "german");
    expect(germanNote?.outline).toHaveLength(2);
    expect(germanNote?.outline?.flatMap((group) => group.items)).toHaveLength(13);
    expect(germanNote?.lessons).toHaveLength(13);
    expect(getIndexableRoutes()).toEqual(expect.arrayContaining(["/notes", "/notes/german", "/notes/german/articles"]));
  });

  it("publishes the full-stack roadmap as an aligned learning path", () => {
    const roadmap = publishedNotes.find((note) => note.slug === "fullstack-roadmap");
    const outlineItems = roadmap?.outline?.flatMap((group) => group.items) ?? [];
    expect(roadmap?.outline).toHaveLength(4);
    expect(outlineItems).toHaveLength(12);
    expect(roadmap?.lessons).toHaveLength(12);
    expect(roadmap?.lessons?.map((lesson) => lesson.id)).toEqual(
      outlineItems.map((item) => item.id),
    );
    roadmap?.lessons?.forEach((lesson) => {
      expect(lesson.duration).toBeTruthy();
      expect(lesson.prerequisites?.length).toBeGreaterThanOrEqual(2);
      expect(lesson.objectives?.length).toBeGreaterThanOrEqual(3);
      expect(lesson.practice?.length).toBeGreaterThanOrEqual(3);
      expect(lesson.deliverables?.length).toBeGreaterThanOrEqual(2);
      expect(lesson.acceptanceCriteria?.length).toBeGreaterThanOrEqual(3);
    });
    expect(getIndexableRoutes()).toEqual(expect.arrayContaining([
      "/notes/fullstack-roadmap",
      "/notes/fullstack-roadmap/delivery-capstone",
    ]));
  });

  it("keeps English content aligned with every localized portfolio entry", () => {
    expect(experiencesEnglish).toHaveLength(experiences.length);
    expect(projectsEnglish.map((project) => project.slug)).toEqual(
      publishedProjects.map((project) => project.slug),
    );
    expect(notesEnglish.map((note) => note.slug)).toEqual(
      publishedNotes.map((note) => note.slug),
    );
    publishedNotes.forEach((note, index) => {
      expect(notesEnglish[index]?.lessons?.map((lesson) => lesson.id)).toEqual(
        note.lessons?.map((lesson) => lesson.id),
      );
    });
  });
});
