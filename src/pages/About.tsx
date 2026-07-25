import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageContainer } from "@/components/PageContainer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";

export default function About() {
  const { copy, experiences, profile } = usePortfolioContent();
  const content = copy.about;

  return (
    <PageContainer className="py-12 sm:py-20 lg:py-24">
      <header className="grid gap-10 lg:grid-cols-[1fr_19rem] lg:items-start lg:gap-12">
        <div className="min-w-0 max-w-3xl"><p className="section-label">About</p><h1 className="display-title mt-5 text-5xl font-black sm:text-7xl">{content.title}<span className="text-primary">.</span></h1><p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">{profile.bio}</p><p className="mt-6 inline-block max-w-full -rotate-1 break-words border-2 border-foreground bg-highlight px-3 py-2 font-mono text-sm font-bold text-highlight-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">{profile.headline}</p></div>
        <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0"><div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 border-2 border-foreground bg-primary" aria-hidden="true" /><img className="relative aspect-square w-full -rotate-2 border-2 border-foreground object-cover" src={profile.avatar} alt={content.photoAlt} width="480" height="480" /></div>
      </header>

      <Separator className="my-16 h-0.5 bg-foreground" />
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-20">
        <div>
          <section aria-labelledby="experience-heading"><p className="section-label">Experience</p><h2 id="experience-heading" className="display-title mt-4 text-4xl font-black">{content.experienceTitle}</h2>
            <div className="mt-10"><ExperienceTimeline experiences={experiences} /></div>
          </section>
        </div>

        <aside className="grid gap-6 md:grid-cols-2 xl:sticky xl:top-28 xl:self-start xl:grid-cols-1">
          <section className="creative-panel bg-highlight p-5 text-highlight-foreground" aria-labelledby="skills-heading"><h2 id="skills-heading" className="font-display text-2xl tracking-wide">{content.skills}</h2><div className="mt-4 flex flex-wrap gap-2">{profile.skills.map((skill) => <Badge variant="outline" className="bg-background" key={skill}>{skill}</Badge>)}</div></section>
          <section className="creative-panel p-5" aria-labelledby="details-heading"><h2 id="details-heading" className="font-display text-2xl tracking-wide">{content.details}</h2><dl className="mt-4 space-y-4 text-sm"><div><dt className="font-mono text-xs font-bold uppercase text-muted-foreground">{content.background}</dt><dd className="mt-1">{profile.background}</dd></div><div><dt className="font-mono text-xs font-bold uppercase text-muted-foreground">{content.direction}</dt><dd className="mt-1">{profile.role}</dd></div></dl></section>
        </aside>
      </div>
    </PageContainer>
  );
}
