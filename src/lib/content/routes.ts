import { publishedNotes } from "@/content/notes";
import { publishedProjects } from "@/content/projects";

export function getPublicRoutes() {
  return [
    "/",
    "/projects",
    ...publishedProjects.map((project) => `/projects/${project.slug}`),
    "/about",
    "/notes",
    ...publishedNotes.filter((note) => !note.noindex).flatMap((note) => [
      `/notes/${note.slug}`,
      ...(note.lessons?.map((lesson) => `/notes/${note.slug}/${lesson.id}`) ?? []),
    ]),
  ];
}

export function getIndexableRoutes() {
  return [
    "/",
    "/projects",
    ...publishedProjects.map((project) => `/projects/${project.slug}`),
    "/about",
    ...(publishedNotes.length ? [
      "/notes",
      ...publishedNotes.flatMap((note) => [
        `/notes/${note.slug}`,
        ...(note.lessons?.map((lesson) => `/notes/${note.slug}/${lesson.id}`) ?? []),
      ]),
    ] : []),
  ];
}
