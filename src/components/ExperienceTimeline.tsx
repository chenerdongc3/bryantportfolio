import { Badge } from "@/components/ui/badge";
import { withBasePath } from "@/config/site";
import type { Experience } from "@/content/types";
import { cn } from "@/lib/utils";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";

type ExperienceTimelineProps = {
  experiences: Experience[];
  variant?: "showcase" | "detail";
};

const showcaseColors = [
  "bg-background text-foreground",
  "bg-highlight text-highlight-foreground",
  "bg-primary text-primary-foreground",
  "bg-background text-foreground",
] as const;

export function ExperienceTimeline({ experiences, variant = "detail" }: ExperienceTimelineProps) {
  const { language } = usePortfolioContent();
  const timelineLabel = language === "zh" ? "工作与实习经历" : "Work and internship experience";
  if (variant === "showcase") {
    return (
      <ol className="grid gap-5" aria-label={timelineLabel}>
        {experiences.map((experience, index) => (
          <li key={`${experience.organization}-${experience.role}`}>
            <article
              className={cn(
                "creative-panel group relative grid min-w-0 overflow-hidden p-5 transition-[transform,box-shadow] motion-reduce:transform-none sm:p-8 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-x-7 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[10px_10px_0_hsl(var(--foreground))] xl:grid-cols-[8rem_minmax(0,0.8fr)_minmax(0,1.25fr)] xl:gap-8",
                showcaseColors[index % showcaseColors.length],
              )}
            >
              <div className="mb-5 flex items-start justify-between gap-4 md:mb-0 md:block">
                <span className="font-display text-5xl leading-none tracking-wide" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block h-2 w-16 border-2 border-foreground bg-secondary md:mt-5" aria-hidden="true" />
              </div>

              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                  {experience.period ?? (language === "zh" ? "实习" : "Internship")}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h3 className="display-title text-3xl font-black leading-tight sm:text-4xl">
                    {experience.organization}
                  </h3>
                  {experience.logo && (
                    <span className="inline-flex h-9 items-center rounded-sm border-2 border-foreground bg-foreground px-2.5 shadow-[2px_2px_0_hsl(var(--background))]">
                      <img className="max-h-5 w-auto max-w-24 object-contain" src={withBasePath(experience.logo.src)} alt={experience.logo.alt} />
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base font-bold">{experience.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.slice(0, 4).map((tag) => (
                    <Badge className="bg-background text-foreground" variant="outline" key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t-2 border-current/35 pt-6 md:col-start-2 xl:col-start-auto xl:mt-0 xl:border-l-2 xl:border-t-0 xl:pl-8 xl:pt-0">
                <p className="text-base font-medium leading-7 sm:text-lg sm:leading-8">{experience.summary}</p>
                <ul className="mt-5 space-y-3 text-sm opacity-80 sm:text-base">
                  {experience.highlights.slice(0, 2).map((highlight) => (
                    <li className="relative pl-5 leading-7 before:absolute before:left-0 before:top-2.5 before:size-2 before:rotate-45 before:bg-current" key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="space-y-6 sm:space-y-8 sm:border-l-2 sm:border-foreground sm:pl-7" aria-label={timelineLabel}>
      {experiences.map((experience) => (
        <li key={`${experience.organization}-${experience.role}`}>
          <article className="creative-panel relative min-w-0 p-5 sm:p-6">
            <span className="absolute -left-[2.3rem] top-7 hidden size-4 rotate-45 border-2 border-foreground bg-primary sm:block" aria-hidden="true" />
            {experience.period && <time className="font-mono text-xs font-bold uppercase tracking-wide text-primary">{experience.period}</time>}
            <div className={cn("flex flex-wrap items-center gap-3", experience.period && "mt-2")}>
              <h3 className="break-words text-xl font-bold">{experience.organization} · {experience.role}</h3>
              {experience.logo && (
                <span className="inline-flex h-8 items-center rounded-sm border-2 border-foreground bg-foreground px-2">
                  <img className="max-h-4 w-auto max-w-20 object-contain" src={withBasePath(experience.logo.src)} alt={experience.logo.alt} />
                </span>
              )}
            </div>
            <p className="mt-4 leading-7 text-muted-foreground">{experience.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {experience.highlights.map((highlight) => (
                <li className="relative pl-5 leading-7 before:absolute before:left-0 before:top-2.5 before:size-2 before:rotate-45 before:bg-primary" key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
