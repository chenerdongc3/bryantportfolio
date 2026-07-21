import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";
import { publishedNotes } from "@/content/notes";

export default function Notes() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <header className="max-w-3xl"><p className="section-label">Notes</p><h1 className="display-title mt-5 text-5xl font-black sm:text-7xl">学习笔记</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">整理语言、Agent、前端工程与人机交互中的学习过程。</p></header>
      {publishedNotes.length === 0 ? (
        <section className="creative-panel relative mt-14 max-w-2xl overflow-hidden p-8 sm:p-10" aria-labelledby="empty-notes">
          <div className="absolute -right-8 -top-8 size-24 rotate-12 border-2 border-foreground bg-highlight" aria-hidden="true" />
          <FileText className="size-9 text-primary" strokeWidth={2.5} aria-hidden="true" />
          <h2 id="empty-notes" className="display-title mt-5 text-3xl font-black">笔记正在整理中</h2>
          <p className="mt-3 leading-7 text-muted-foreground">这里暂时没有已发布内容。你可以先查看我的项目实践，或稍后再来。</p>
          <Link className="creative-link mt-6 inline-flex" to="/projects">查看项目 →</Link>
        </section>
      ) : (
        <div className="mt-14 grid gap-6 sm:grid-cols-2">{publishedNotes.map((note) => <article className="creative-panel group relative overflow-hidden p-6 transition-[transform,box-shadow] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--primary))] motion-reduce:transform-none" key={note.slug}><div className="absolute -right-7 -top-7 size-20 rotate-12 border-2 border-foreground bg-highlight" aria-hidden="true" /><FileText className="size-8 text-primary" strokeWidth={2.5} aria-hidden="true" /><p className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">{note.category}</p><h2 className="display-title mt-2 text-3xl font-black"><Link className="after:absolute after:inset-0 hover:text-primary" to={`/notes/${note.slug}`}>{note.title}</Link></h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{note.description}</p><div className="mt-5 flex items-center justify-between gap-4"><time className="font-mono text-xs text-muted-foreground" dateTime={note.publishedAt}>{note.publishedAt.slice(0, 10)}</time><span className="font-mono text-sm font-bold text-primary" aria-hidden="true">查看目录 →</span></div></article>)}</div>
      )}
    </PageContainer>
  );
}
