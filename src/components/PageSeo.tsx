import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyMetadata, getMetadataForPath } from "@/lib/seo";
import { useLanguage } from "@/i18n/LanguageContext";
import { localizeMetadata } from "@/i18n/seo";

export function PageSeo() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    applyMetadata(localizeMetadata(getMetadataForPath(pathname), pathname, language));
  }, [language, pathname]);

  return null;
}
