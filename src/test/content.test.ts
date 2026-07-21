import { describe, expect, it } from "vitest";
import { experiences } from "@/content/experience";
import { publishedNotes } from "@/content/notes";
import { publishedProjects } from "@/content/projects";
import { getIndexableRoutes, getPublicRoutes } from "@/lib/content/routes";
import { validateContent } from "@/lib/content/validate";

describe("content model", () => {
  it("validates all content and unique slugs", () => {
    expect(() => validateContent()).not.toThrow();
  });

  it("derives detail routes from published content", () => {
    const routes = getPublicRoutes();
    publishedProjects.forEach((project) => expect(routes).toContain(`/projects/${project.slug}`));
    publishedNotes.forEach((note) => expect(routes).toContain(`/notes/${note.slug}`));
  });

  it("includes the resume experience and project content without placeholders", () => {
    expect(experiences.map((experience) => experience.organization)).toEqual(
      expect.arrayContaining(["哈啰", "KuCoin"]),
    );
    expect(publishedProjects[0]?.slug).toBe("adhd-companion-alarm");
    expect(JSON.stringify({ experiences, publishedProjects })).not.toMatch(/待补充|X%|X 人日|X 小时|X 天/);
  });

  it("publishes the German study-note outline", () => {
    const germanNote = publishedNotes.find((note) => note.slug === "german");
    expect(germanNote?.outline).toHaveLength(2);
    expect(germanNote?.outline?.flatMap((group) => group.items)).toHaveLength(13);
    expect(getIndexableRoutes()).toEqual(expect.arrayContaining(["/notes", "/notes/german"]));
  });
});
