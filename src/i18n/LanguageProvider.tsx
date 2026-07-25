import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, LanguageContext, type Language } from "./LanguageContext";

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const hasRestoredLanguage = useRef(false);

  useEffect(() => {
    if (!hasRestoredLanguage.current) {
      hasRestoredLanguage.current = true;
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (savedLanguage === "en" || savedLanguage === "zh") {
        if (savedLanguage !== language) {
          setLanguage(savedLanguage);
          return;
        }
      }
    }
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
