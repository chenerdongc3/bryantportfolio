import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/types";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";

export function ProjectCard({ project }: { project: Project }) {
  const { ui } = usePortfolioContent();
  return (
    <article className="creative-panel group relative flex h-full min-w-0 flex-col overflow-hidden p-5 transition-[transform,box-shadow] motion-reduce:transform-none sm:p-6 md:hover:-translate-x-1 md:hover:-translate-y-1 md:hover:shadow-[10px_10px_0_hsl(var(--primary))]">
      <div className="absolute right-0 top-0 size-16 translate-x-8 -translate-y-8 rotate-45 border-2 border-foreground bg-highlight" aria-hidden="true" />
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2 pr-5 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <time>{project.period}</time>
        {project.featured && <span className="relative z-10 -rotate-2 border-2 border-foreground bg-secondary px-2 py-1 text-secondary-foreground">{ui.featured}</span>}
      </div>
      <h2 className="break-words text-2xl font-bold tracking-tight">
        <Link className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" to={`/projects/${project.slug}`}>
          <span className="absolute inset-0" aria-hidden="true" />
          {project.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 leading-7 text-muted-foreground">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => <Badge variant="secondary" key={tag}>{tag}</Badge>)}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 font-mono text-sm font-bold text-primary underline decoration-2 underline-offset-4">
        {ui.viewProject} <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </article>
  );
}
