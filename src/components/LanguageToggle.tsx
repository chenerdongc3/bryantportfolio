import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { ui } from "@/i18n/ui";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const copy = ui[language];
  const nextLanguage = language === "zh" ? "en" : "zh";

  return (
    <Button
      type="button"
      variant="ghost"
      className="h-10 gap-1.5 rounded-full border-2 border-foreground bg-background px-3 font-mono text-xs font-bold hover:bg-highlight"
      aria-label={copy.languageLabel}
      onClick={() => setLanguage(nextLanguage)}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span aria-hidden="true">{copy.languageShort}</span>
    </Button>
  );
}
