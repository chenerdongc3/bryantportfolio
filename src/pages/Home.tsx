import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";

export default function Home() {
  const { copy, experiences, profile, projects } = usePortfolioContent();
  const content = copy.home;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="relative border-b-2 border-foreground bg-primary/10">
        <div className="absolute left-[7%] top-12 hidden size-20 rotate-12 border-2 border-foreground bg-highlight shadow-[5px_5px_0_hsl(var(--foreground))] lg:block" aria-hidden="true" />
        <PageContainer className="grid gap-11 py-12 sm:gap-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-center lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rotate-1 border-2 border-foreground bg-secondary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">{profile.role}</p>
            <h1 className="display-title text-[2.75rem] font-black leading-[0.98] sm:text-7xl lg:text-8xl">
              {content.hero}
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{profile.bio}</p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto"><a href="#experience">{content.viewExperience} <ArrowDownRight className="size-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><Link to="/projects">{content.viewProjects} <ArrowRight className="size-4" /></Link></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 border-2 border-foreground bg-secondary" aria-hidden="true" />
            <img className="relative aspect-square w-full -rotate-2 border-2 border-foreground object-cover grayscale-[15%] transition-transform duration-300 hover:rotate-0" src={profile.avatar} alt={content.photoAlt} width="640" height="640" />
            <p className="relative -mt-4 ml-4 inline-flex rotate-1 items-center gap-2 border-2 border-foreground bg-background px-3 py-2 font-mono text-xs font-bold shadow-[4px_4px_0_hsl(var(--foreground))]"><span className="size-2 rounded-full bg-emerald-500 ring-2 ring-foreground" aria-hidden="true" />{profile.status}</p>
          </div>
        </PageContainer>
      </section>

      <section id="experience" className="scroll-mt-20 border-b-2 border-foreground bg-secondary py-16 text-secondary-foreground sm:py-24 xl:py-28" aria-labelledby="experience-heading">
        <PageContainer>
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
            <div>
              <p className="section-label">{content.experienceLabel}</p>
              <h2 id="experience-heading" className="display-title mt-5 max-w-4xl text-[2.75rem] font-black leading-[1.02] sm:text-7xl">
                {content.experienceTitle}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-secondary-foreground/80">
              {content.experienceIntro}
            </p>
          </div>
          <ExperienceTimeline experiences={experiences} variant="showcase" />
          <div className="mt-10 flex justify-end">
            <Button asChild size="lg" variant="outline"><Link to="/about">{content.fullExperience} <ArrowRight className="size-4" /></Link></Button>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="featured-projects">
        <PageContainer>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">{content.proofLabel}</p>
              <h2 id="featured-projects" className="display-title mt-4 text-4xl font-black sm:text-5xl">{content.proofTitle}</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{content.proofIntro}</p>
            </div>
            <Link className="creative-link inline-flex items-center gap-1" to="/projects">{content.viewAll} <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">{featuredProjects.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </PageContainer>
      </section>
    </>
  );
}
