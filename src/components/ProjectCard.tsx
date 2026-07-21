import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="creative-panel group relative flex h-full flex-col overflow-hidden p-6 transition-[transform,box-shadow] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--primary))] motion-reduce:transform-none">
      <div className="absolute right-0 top-0 size-16 translate-x-8 -translate-y-8 rotate-45 border-2 border-foreground bg-highlight" aria-hidden="true" />
      <div className="mb-5 flex items-center justify-between gap-4 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <time>{project.period}</time>
        {project.featured && <span className="relative z-10 -rotate-2 border-2 border-foreground bg-secondary px-2 py-1 text-secondary-foreground">Featured</span>}
      </div>
      <h2 className="text-2xl font-bold tracking-tight">
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
        查看项目 <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </article>
  );
}
