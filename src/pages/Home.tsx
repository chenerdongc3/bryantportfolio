import { ArrowDownRight, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageContainer } from "@/components/PageContainer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { experiences } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <section className="relative border-b-2 border-foreground bg-primary/10">
        <div className="absolute left-[7%] top-12 hidden size-20 rotate-12 border-2 border-foreground bg-highlight shadow-[5px_5px_0_hsl(var(--foreground))] lg:block" aria-hidden="true" />
        <PageContainer className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-center lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rotate-1 border-2 border-foreground bg-secondary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">{profile.role}</p>
            <h1 className="display-title text-5xl font-black leading-[0.98] sm:text-7xl lg:text-8xl">
              用数据发现<span className="relative inline-block text-primary after:absolute after:inset-x-0 after:bottom-1 after:-z-10 after:h-3 after:-rotate-1 after:bg-highlight sm:after:h-5">问题</span><br />用工程交付答案
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{profile.bio}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#experience">先看经历 <ArrowDownRight className="size-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><Link to="/projects">查看项目 <ArrowRight className="size-4" /></Link></Button>
              <Button asChild size="lg" variant="ghost"><a href={`mailto:${profile.email}`}><Mail className="size-4" />联系我</a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 border-2 border-foreground bg-secondary" aria-hidden="true" />
            <img className="relative aspect-square w-full -rotate-2 border-2 border-foreground object-cover grayscale-[15%] transition-transform duration-300 hover:rotate-0" src={profile.avatar} alt="陈扬的个人照片" width="640" height="640" />
            <p className="relative -mt-4 ml-4 inline-flex rotate-1 items-center gap-2 border-2 border-foreground bg-background px-3 py-2 font-mono text-xs font-bold shadow-[4px_4px_0_hsl(var(--foreground))]"><span className="size-2 rounded-full bg-emerald-500 ring-2 ring-foreground" aria-hidden="true" />{profile.status}</p>
          </div>
        </PageContainer>
      </section>

      <section id="experience" className="scroll-mt-20 border-b-2 border-foreground bg-secondary py-20 text-secondary-foreground sm:py-28" aria-labelledby="experience-heading">
        <PageContainer>
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
            <div>
              <p className="section-label">Experience / 01—04</p>
              <h2 id="experience-heading" className="display-title mt-5 max-w-4xl text-5xl font-black leading-[1.02] sm:text-7xl">
                先看我解决过<br className="hidden sm:block" />什么<span className="text-highlight">问题</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-secondary-foreground/80">
              项目数量不是重点。更重要的是，我如何在增长、前端性能与 Agent 工程中识别问题、拆解链路，并把答案真正交付出来。
            </p>
          </div>
          <ExperienceTimeline experiences={experiences} variant="showcase" />
          <div className="mt-10 flex justify-end">
            <Button asChild size="lg" variant="outline"><Link to="/about">查看完整经历与简历 <ArrowRight className="size-4" /></Link></Button>
          </div>
        </PageContainer>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="featured-projects">
        <PageContainer>
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-label">Selected proof</p>
              <h2 id="featured-projects" className="display-title mt-4 text-4xl font-black sm:text-5xl">项目，是经历的落地证据</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">这里保留少量代表作，用来补充我如何把判断转成产品、代码与可验证结果。</p>
            </div>
            <Link className="creative-link inline-flex items-center gap-1" to="/projects">查看全部 <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">{featuredProjects.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </PageContainer>
      </section>
    </>
  );
}
