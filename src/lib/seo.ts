import { getNote, publishedNotes } from "@/content/notes";
import { getProject, publishedProjects } from "@/content/projects";
import { profile } from "@/content/profile";
import { absoluteUrl, siteConfig } from "@/config/site";

export type PageMetadata = {
  title: string;
  description: string;
  pathname: string;
  noindex?: boolean;
  type?: "website" | "article";
  jsonLd: Record<string, unknown>[];
};

const personId = absoluteUrl("/#person");

function personJsonLd() {
  return {
    "@type": "Person",
    ...(personId && { "@id": personId }),
    name: profile.name,
    alternateName: profile.englishName,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location },
    alumniOf: { "@type": "CollegeOrUniversity", name: "西南交通大学" },
  };
}

export function getMetadataForPath(pathname: string): PageMetadata {
  if (pathname === "/") {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      pathname,
      type: "website",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", ...(absoluteUrl("/") && { "@id": absoluteUrl("/#website"), url: absoluteUrl("/") }), name: siteConfig.title, description: siteConfig.description, inLanguage: siteConfig.locale },
            personJsonLd(),
          ],
        },
      ],
    };
  }

  if (pathname === "/projects") {
    return {
      title: `项目｜${siteConfig.name}`,
      description: "陈扬在产品 MVP、AI 对话、Agent 编排与前端工程方向的真实项目实践。",
      pathname,
      jsonLd: [{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "项目",
        description: "陈扬在产品 MVP、AI 对话、Agent 编排与前端工程方向的真实项目实践。",
        ...(absoluteUrl(pathname) && { url: absoluteUrl(pathname) }),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: publishedProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            ...(absoluteUrl(`/projects/${project.slug}`) && { url: absoluteUrl(`/projects/${project.slug}`) }),
          })),
        },
      }],
    };
  }

  if (pathname.startsWith("/projects/")) {
    const project = getProject(pathname.slice("/projects/".length));
    if (project) {
      return {
        title: `${project.title}｜项目｜${siteConfig.name}`,
        description: project.summary,
        pathname,
        jsonLd: [{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.summary,
          programmingLanguage: project.tags,
          author: personJsonLd(),
          ...(absoluteUrl(pathname) && { url: absoluteUrl(pathname) }),
        }],
      };
    }
  }

  if (pathname === "/about") {
    return {
      title: `关于｜${siteConfig.name}`,
      description: "了解陈扬在用户增长、Web3 前端与 Agent 工程方向的实习经历、技能和联系方式。",
      pathname,
      jsonLd: [{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: `关于 ${profile.name}`,
        mainEntity: personJsonLd(),
        ...(absoluteUrl(pathname) && { url: absoluteUrl(pathname) }),
      }],
    };
  }

  if (pathname === "/notes") {
    return {
      title: `笔记｜${siteConfig.name}`,
      description: publishedNotes.length ? "陈扬关于语言、Agent、前端工程与人机交互的学习笔记。" : "学习笔记正在整理中。",
      pathname,
      noindex: publishedNotes.length === 0,
      jsonLd: publishedNotes.length ? [{ "@context": "https://schema.org", "@type": "CollectionPage", name: "笔记", ...(absoluteUrl(pathname) && { url: absoluteUrl(pathname) }) }] : [],
    };
  }

  if (pathname.startsWith("/notes/")) {
    const note = getNote(pathname.slice("/notes/".length));
    if (note) return {
      title: `${note.title}｜笔记｜${siteConfig.name}`,
      description: note.description,
      pathname,
      noindex: note.noindex,
      type: "article",
      jsonLd: [{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: note.title,
        description: note.description,
        datePublished: note.publishedAt,
        ...(note.updatedAt && { dateModified: note.updatedAt }),
        author: personJsonLd(),
        ...(absoluteUrl(pathname) && { url: absoluteUrl(pathname) }),
      }],
    };
  }

  return {
    title: `页面未找到｜${siteConfig.name}`,
    description: "该页面不存在或已被移动。",
    pathname,
    noindex: true,
    jsonLd: [],
  };
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.dataset.siteMeta = "true";
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
}

export function applyMetadata(metadata: PageMetadata) {
  document.title = metadata.title;
  upsertMeta('meta[name="description"]', { name: "description", content: metadata.description });
  upsertMeta('meta[name="robots"]', { name: "robots", content: metadata.noindex ? "noindex, nofollow" : "index, follow" });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: metadata.title });
  upsertMeta('meta[property="og:description"]', { property: "og:description", content: metadata.description });
  upsertMeta('meta[property="og:type"]', { property: "og:type", content: metadata.type ?? "website" });
  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });

  const ogImage = absoluteUrl("/og-experience.png");
  if (ogImage) {
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: "陈扬的增长、前端与 Agent 工程经历作品集" });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
  }

  const canonical = absoluteUrl(metadata.pathname);
  let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) {
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      canonicalElement.dataset.siteMeta = "true";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical;
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
  } else {
    canonicalElement?.remove();
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }

  document.head.querySelectorAll('script[data-site-jsonld]').forEach((node) => node.remove());
  metadata.jsonLd.forEach((value) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.siteJsonld = "true";
    script.text = JSON.stringify(value).replace(/</g, "\\u003c");
    document.head.appendChild(script);
  });
}
