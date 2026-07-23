import { experiences } from "@/content/experience";
import { publishedNotes } from "@/content/notes";
import { profile } from "@/content/profile";
import { publishedProjects } from "@/content/projects";
import {
  experiencesEnglish,
  getLocalizedCollection,
  notesEnglish,
  pageCopy,
  profileEnglish,
  projectsEnglish,
} from "./content";
import { useLanguage } from "./LanguageContext";
import { ui } from "./ui";

export function usePortfolioContent() {
  const { language } = useLanguage();
  const localizedProfile = language === "en" ? { ...profile, ...profileEnglish } : profile;

  return {
    language,
    copy: pageCopy[language],
    ui: ui[language],
    profile: localizedProfile,
    experiences: getLocalizedCollection(language, experiences, experiencesEnglish),
    projects: getLocalizedCollection(language, publishedProjects, projectsEnglish),
    notes: getLocalizedCollection(language, publishedNotes, notesEnglish),
  };
}
