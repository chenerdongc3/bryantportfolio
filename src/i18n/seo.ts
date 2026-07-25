import { notesEnglish, profileEnglish, projectsEnglish } from "./content";
import type { Language } from "./LanguageContext";
import type { PageMetadata } from "@/lib/seo";

const siteName = "Bryant";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function localizePersonNodes(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(localizePersonNodes);
  if (!isRecord(value)) return value;

  const localized = Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, localizePersonNodes(item)]),
  );
  if (localized["@type"] === "Person") {
    localized.jobTitle = profileEnglish.role;
    localized.description = profileEnglish.bio;
  }
  return localized;
}

function localizeJsonLd(metadata: PageMetadata, pathname: string): PageMetadata["jsonLd"] {
  const jsonLd = localizePersonNodes(metadata.jsonLd) as PageMetadata["jsonLd"];
  const root = jsonLd[0];
  if (!root) return jsonLd;

  if (pathname === "/") {
    const graph = root["@graph"];
    if (Array.isArray(graph)) {
      graph.forEach((item) => {
        if (isRecord(item) && item["@type"] === "WebSite") {
          item.name = "Bryant | Full-stack Development & AI Product Engineering";
          item.description = profileEnglish.bio;
          item.inLanguage = "en";
        }
      });
    }
  } else if (pathname === "/projects") {
    root.name = "Projects";
    root.description = "Real product MVP, AI conversation, agent orchestration, and frontend engineering work by Bryant.";
    const mainEntity = root.mainEntity;
    if (isRecord(mainEntity) && Array.isArray(mainEntity.itemListElement)) {
      mainEntity.itemListElement.forEach((item, index) => {
        if (isRecord(item) && projectsEnglish[index]) item.name = projectsEnglish[index].title;
      });
    }
  } else if (pathname.startsWith("/projects/")) {
    const project = projectsEnglish.find((item) => pathname.endsWith(`/${item.slug}`));
    if (project) {
      root.name = project.title;
      root.description = project.summary;
    }
  } else if (pathname === "/about") {
    root.name = "About Bryant";
  } else if (pathname === "/notes") {
    root.name = "Notes";
  } else if (pathname.startsWith("/notes/")) {
    const [, , noteSlug, lessonId] = pathname.split("/");
    const note = notesEnglish.find((item) => item.slug === noteSlug);
    const lesson = note?.lessons?.find((item) => item.id === lessonId);
    if (note) {
      root.headline = lesson?.title ?? note.title;
      root.description = lesson?.summary ?? note.description;
    }
  }

  return jsonLd;
}

export function localizeMetadata(metadata: PageMetadata, pathname: string, language: Language): PageMetadata {
  if (language === "zh") return metadata;
  const jsonLd = localizeJsonLd(metadata, pathname);

  if (pathname === "/") {
    return {
      ...metadata,
      title: "Bryant | Full-stack Development & AI Product Engineering",
      description: profileEnglish.bio,
      jsonLd,
    };
  }
  if (pathname === "/projects") {
    return {
      ...metadata,
      title: `Projects | ${siteName}`,
      description: "Real product MVP, AI conversation, agent orchestration, and frontend engineering work by Bryant.",
      jsonLd,
    };
  }
  if (pathname.startsWith("/projects/")) {
    const project = projectsEnglish.find((item) => pathname.endsWith(`/${item.slug}`));
    if (project) return { ...metadata, title: `${project.title} | Projects | ${siteName}`, description: project.summary, jsonLd };
  }
  if (pathname === "/about") {
    return {
      ...metadata,
      title: `About | ${siteName}`,
      description: "Bryant's experience and focus areas across growth, frontend, and AI product engineering.",
      jsonLd,
    };
  }
  if (pathname === "/notes") {
    return {
      ...metadata,
      title: `Notes | ${siteName}`,
      description: "Study notes on languages, agents, frontend engineering, and human-computer interaction.",
      jsonLd,
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
        jsonLd,
      };
    }
  }
  return {
    ...metadata,
    title: `Page not found | ${siteName}`,
    description: "This page does not exist or has moved.",
    jsonLd,
  };
}
