import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, publishedProjects } from "@/content/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const index = publishedProjects.findIndex((item) => item.slug === project.slug);
  const previous = publishedProjects[index - 1];
  const next = publishedProjects[index + 1];

  return (
    <article>
      <PageContainer className="py-12 sm:py-16">
        <nav className="mb-10 flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-muted-foreground" aria-label="面包屑">
          <Link className="hover:text-primary hover:underline" to="/">首页</Link><span aria-hidden="true">/</span>
          <Link className="hover:text-primary hover:underline" to="/projects">项目</Link><span aria-hidden="true">/</span>
          <span className="text-foreground" aria-current="page">{project.title}</span>
        </nav>
        <header className="max-w-5xl border-b-2 border-foreground pb-12">
          <time className="inline-block -rotate-1 border-2 border-foreground bg-highlight px-2.5 py-1 font-mono text-xs font-bold text-highlight-foreground shadow-[3px_3px_0_hsl(var(--foreground))]">{project.period}</time>
          <h1 className="display-title mt-6 text-5xl font-black sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge variant="secondary" key={tag}>{tag}</Badge>)}</div>
          {(project.demoUrl || project.repositoryUrl) && <div className="mt-8 flex flex-wrap gap-3">
            {project.demoUrl && <Button asChild><a href={project.demoUrl} target="_blank" rel="noreferrer">在线演示 <ExternalLink className="size-4" /></a></Button>}
            {project.repositoryUrl && <Button asChild variant="outline"><a href={project.repositoryUrl} target="_blank" rel="noreferrer">代码仓库 <ExternalLink className="size-4" /></a></Button>}
          </div>}
        </header>

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {project.sections.map((section) => (
            <section className="creative-panel p-6 sm:p-8" key={section.title} aria-labelledby={`section-${section.title}`}>
              <h2 id={`section-${section.title}`} className="display-title text-3xl font-black"><span className="mr-2 text-primary">#</span>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p className="mt-5 text-pretty leading-8 text-muted-foreground" key={paragraph}>{paragraph}</p>)}
              {section.items && <ul className="mt-5 space-y-4 text-muted-foreground">{section.items.map((item) => <li className="relative pl-6 leading-8 before:absolute before:left-0 before:top-3 before:size-1.5 before:rounded-full before:bg-primary" key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </div>

        <nav className="mx-auto mt-16 grid max-w-3xl gap-5 border-t-2 border-foreground pt-8 sm:grid-cols-2" aria-label="项目翻页">
          {previous ? <Link className="creative-panel p-4 transition-transform hover:-translate-y-1" to={`/projects/${previous.slug}`}><span className="flex items-center gap-1 font-mono text-xs font-bold text-primary"><ArrowLeft className="size-3" /> 上一个项目</span><strong className="mt-2 block">{previous.title}</strong></Link> : <span />}
          {next && <Link className="creative-panel p-4 text-right transition-transform hover:-translate-y-1" to={`/projects/${next.slug}`}><span className="flex items-center justify-end gap-1 font-mono text-xs font-bold text-primary">下一个项目 <ArrowRight className="size-3" /></span><strong className="mt-2 block">{next.title}</strong></Link>}
        </nav>
      </PageContainer>
    </article>
  );
}
