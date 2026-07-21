import { ExternalLink, Mail, MapPin } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageContainer } from "@/components/PageContainer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";

export default function About() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <header className="grid gap-12 lg:grid-cols-[1fr_19rem] lg:items-start">
        <div className="max-w-3xl"><p className="section-label">About</p><h1 className="display-title mt-5 text-5xl font-black sm:text-7xl">关于我<span className="text-primary">.</span></h1><p className="mt-6 text-pretty text-xl leading-9 text-muted-foreground">{profile.bio}</p><p className="mt-6 inline-block -rotate-1 border-2 border-foreground bg-highlight px-3 py-2 font-mono text-sm font-bold text-highlight-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">{profile.headline}</p></div>
        <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0"><div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 border-2 border-foreground bg-primary" aria-hidden="true" /><img className="relative aspect-square w-full -rotate-2 border-2 border-foreground object-cover" src={profile.avatar} alt="陈扬的个人照片" width="480" height="480" /></div>
      </header>

      <Separator className="my-16 h-0.5 bg-foreground" />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
        <div>
          <section aria-labelledby="experience-heading"><p className="section-label">Experience</p><h2 id="experience-heading" className="display-title mt-4 text-4xl font-black">工作与实习经历</h2>
            <div className="mt-10"><ExperienceTimeline experiences={experiences} /></div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="creative-panel bg-highlight p-5 text-highlight-foreground" aria-labelledby="skills-heading"><h2 id="skills-heading" className="font-display text-2xl tracking-wide">技能方向</h2><div className="mt-4 flex flex-wrap gap-2">{profile.skills.map((skill) => <Badge variant="outline" className="bg-background" key={skill}>{skill}</Badge>)}</div></section>
          <section className="creative-panel p-5" aria-labelledby="details-heading"><h2 id="details-heading" className="font-display text-2xl tracking-wide">个人信息</h2><dl className="mt-4 space-y-4 text-sm"><div><dt className="font-mono text-xs font-bold uppercase text-muted-foreground">教育</dt><dd className="mt-1">{profile.education} · {profile.major}</dd></div><div><dt className="font-mono text-xs font-bold uppercase text-muted-foreground">方向</dt><dd className="mt-1">{profile.role}</dd></div><div className="flex items-center gap-2"><MapPin className="size-4 text-primary" aria-hidden="true" /><span>{profile.location}</span></div></dl></section>
          <section className="creative-panel bg-primary p-5 text-primary-foreground" aria-labelledby="contact-heading"><h2 id="contact-heading" className="font-display text-2xl tracking-wide">联系</h2><div className="mt-4 flex flex-col gap-3"><Button asChild variant="outline"><a href={`mailto:${profile.email}`}><Mail className="size-4" />{profile.email}</a></Button><Button asChild variant="outline"><a href={profile.resumeUrl} target="_blank" rel="noreferrer">查看简历 <ExternalLink className="size-4" /></a></Button></div></section>
        </aside>
      </div>
    </PageContainer>
  );
}
