import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/content/types";
import { cn } from "@/lib/utils";

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
  if (variant === "showcase") {
    return (
      <ol className="grid gap-5" aria-label="工作与实习经历">
        {experiences.map((experience, index) => (
          <li key={`${experience.organization}-${experience.role}`}>
            <article
              className={cn(
                "creative-panel group relative grid overflow-hidden p-6 transition-[transform,box-shadow] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--foreground))] motion-reduce:transform-none sm:p-8 lg:grid-cols-[8rem_minmax(0,0.8fr)_minmax(0,1.25fr)] lg:gap-8",
                showcaseColors[index % showcaseColors.length],
              )}
            >
              <div className="mb-6 flex items-start justify-between gap-4 lg:mb-0 lg:block">
                <span className="font-display text-5xl leading-none tracking-wide" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block h-2 w-16 border-2 border-foreground bg-secondary lg:mt-5" aria-hidden="true" />
              </div>

              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                  {experience.period ?? "Internship"}
                </p>
                <h3 className="display-title mt-2 text-3xl font-black leading-tight sm:text-4xl">
                  {experience.organization}
                </h3>
                <p className="mt-2 text-base font-bold">{experience.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.tags.slice(0, 4).map((tag) => (
                    <Badge className="bg-background text-foreground" variant="outline" key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t-2 border-current/35 pt-6 lg:mt-0 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0">
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
    <ol className="space-y-8 border-l-2 border-foreground pl-7" aria-label="工作与实习经历">
      {experiences.map((experience) => (
        <li key={`${experience.organization}-${experience.role}`}>
          <article className="creative-panel relative p-6">
            <span className="absolute -left-[2.3rem] top-7 size-4 rotate-45 border-2 border-foreground bg-primary" aria-hidden="true" />
            {experience.period && <time className="font-mono text-xs font-bold uppercase tracking-wide text-primary">{experience.period}</time>}
            <h3 className={cn("text-xl font-bold", experience.period && "mt-2")}>{experience.organization} · {experience.role}</h3>
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
