import { describe, expect, it } from "vitest";
import { resolveAbsoluteUrl } from "@/config/site";
import { getMetadataForPath } from "@/lib/seo";

describe("route metadata", () => {
  it("uses project content for project metadata", () => {
    const metadata = getMetadataForPath("/projects/travel-assistant-agent");
    expect(metadata.title).toContain("旅行助手 Agent");
    expect(metadata.description).toContain("LangGraph");
    expect(metadata.noindex).not.toBe(true);
  });

  it("indexes published notes and noindexes unknown routes", () => {
    expect(getMetadataForPath("/notes").noindex).toBe(false);
    expect(getMetadataForPath("/notes/german").title).toContain("德语学习笔记");
    expect(getMetadataForPath("/notes/german/articles").title).toContain("冠词 Articles");
    expect(getMetadataForPath("/notes/german/articles").description).toContain("冠词放在名词前");
    expect(getMetadataForPath("/notes/german/unknown").noindex).toBe(true);
    expect(getMetadataForPath("/does-not-exist").noindex).toBe(true);
  });

  it("preserves a GitHub Pages project path in absolute URLs", () => {
    expect(resolveAbsoluteUrl("https://chenerdongc3.github.io/bryantportfolio", "/projects"))
      .toBe("https://chenerdongc3.github.io/bryantportfolio/projects");
    expect(resolveAbsoluteUrl("https://chenerdongc3.github.io/bryantportfolio", "/#person"))
      .toBe("https://chenerdongc3.github.io/bryantportfolio/#person");
  });
});
