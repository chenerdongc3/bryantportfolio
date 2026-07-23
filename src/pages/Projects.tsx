import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";

export default function Projects() {
  const { copy, projects } = usePortfolioContent();
  const content = copy.projects;
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  return (
    <PageContainer className="py-16 sm:py-24">
      <header className="relative max-w-4xl"><p className="section-label">Projects</p><h1 className="display-title mt-5 text-5xl font-black sm:text-7xl">{content.title}<span className="text-primary">!</span></h1><p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{content.intro}</p><span className="absolute right-0 top-4 hidden rotate-6 border-2 border-foreground bg-primary px-4 py-2 font-display text-2xl tracking-wide text-primary-foreground shadow-[4px_4px_0_hsl(var(--foreground))] sm:block" aria-hidden="true">BUILD → LEARN</span></header>
      <section className="mt-16" aria-labelledby="featured-heading"><h2 id="featured-heading" className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.featured}</h2><div className="grid gap-7 lg:grid-cols-2">{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
      {others.length > 0 && <section className="mt-20" aria-labelledby="other-heading"><h2 id="other-heading" className="mb-7 font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary">{content.others}</h2><div className="grid gap-7 lg:grid-cols-2">{others.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>}
    </PageContainer>
  );
}
