import { notesEnglish, profileEnglish, projectsEnglish } from "./content";
import type { Language } from "./LanguageContext";
import type { PageMetadata } from "@/lib/seo";

const siteName = "Bryant";

export function localizeMetadata(metadata: PageMetadata, pathname: string, language: Language): PageMetadata {
  if (language === "zh") return metadata;

  if (pathname === "/") {
    return {
      ...metadata,
      title: "Bryant | Full-stack Development & AI Product Engineering",
      description: profileEnglish.bio,
    };
  }
  if (pathname === "/projects") {
    return {
      ...metadata,
      title: `Projects | ${siteName}`,
      description: "Real product MVP, AI conversation, agent orchestration, and frontend engineering work by Bryant.",
    };
  }
  if (pathname.startsWith("/projects/")) {
    const project = projectsEnglish.find((item) => pathname.endsWith(`/${item.slug}`));
    if (project) return { ...metadata, title: `${project.title} | Projects | ${siteName}`, description: project.summary };
  }
  if (pathname === "/about") {
    return {
      ...metadata,
      title: `About | ${siteName}`,
      description: "Bryant's experience and focus areas across growth, frontend, and AI product engineering.",
    };
  }
  if (pathname === "/notes") {
    return {
      ...metadata,
      title: `Notes | ${siteName}`,
      description: "Study notes on languages, agents, frontend engineering, and human-computer interaction.",
    };
  }
  if (pathname.startsWith("/notes/")) {
    const [, , noteSlug, lessonId] = pathname.split("/");
    const note = notesEnglish.find((item) => item.slug === noteSlug);
    const lesson = note?.lessons?.find((item) => item.id === lessonId);
    if (note) {
      return {
        ...metadata,
        title: `${lesson ? `${lesson.title} | ` : ""}${note.title} | Notes | ${siteName}`,
        description: lesson?.summary ?? note.description,
      };
    }
  }
  return {
    ...metadata,
    title: `Page not found | ${siteName}`,
    description: "This page does not exist or has moved.",
  };
}
