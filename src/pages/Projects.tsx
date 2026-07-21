import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { publishedProjects } from "@/content/projects";

export default function Projects() {
  const featured = publishedProjects.filter((project) => project.featured);
  const others = publishedProjects.filter((project) => !project.featured);
  return (
    <PageContainer className="py-16 sm:py-24">
      <header className="relative max-w-4xl"><p className="section-label">Projects</p><h1 className="display-title mt-5 text-5xl font-black sm:text-7xl">项目实践<span className="text-primary">!</span></h1><p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">围绕产品 MVP、AI 对话体验、Agent 编排与前端工程质量的真实项目记录。</p><span className="absolute right-0 top-4 hidden rotate-6 border-2 border-foreground bg-primary px-4 py-2 font-display text-2xl tracking-wide text-primary-foreground shadow-[4px_4px_0_hsl(var(--foreground))] sm:block" aria-hidden="true">BUILD → LEARN</span></header>
      <section className="mt-16" aria-labelledby="featured-heading"><h2 id="featured-heading" className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">01 / 重点项目</h2><div className="grid gap-7 lg:grid-cols-2">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
      {others.length > 0 && <section className="mt-20" aria-labelledby="other-heading"><h2 id="other-heading" className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">02 / 更多项目</h2><div className="grid gap-7 lg:grid-cols-2">{others.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>}
    </PageContainer>
  );
}
