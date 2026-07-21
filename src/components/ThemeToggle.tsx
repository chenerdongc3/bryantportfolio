import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-full border-2 border-foreground bg-background hover:bg-highlight"
      aria-label={isDark ? "切换到亮色主题" : "切换到暗色主题"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="size-4 rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" aria-hidden="true" />
    </Button>
  );
}
