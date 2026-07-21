import { publishedNotes } from "@/content/notes";
import { publishedProjects } from "@/content/projects";

export function getPublicRoutes() {
  return [
    "/",
    "/projects",
    ...publishedProjects.map((project) => `/projects/${project.slug}`),
    "/about",
    "/notes",
    ...publishedNotes.filter((note) => !note.noindex).map((note) => `/notes/${note.slug}`),
  ];
}

export function getIndexableRoutes() {
  return [
    "/",
    "/projects",
    ...publishedProjects.map((project) => `/projects/${project.slug}`),
    "/about",
    ...(publishedNotes.length ? ["/notes", ...publishedNotes.map((note) => `/notes/${note.slug}`)] : []),
  ];
}
