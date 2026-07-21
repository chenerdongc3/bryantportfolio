import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";
import { getNote, getNoteLesson } from "@/content/notes";
import type { Note } from "@/content/types";
import { cn } from "@/lib/utils";
import NotFound from "./NotFound";

function LessonDirectory({ note, activeId }: { note: Note; activeId: string }) {
  return (
    <nav aria-label={`${note.title}目录`}>
      <Link className="creative-link inline-flex items-center gap-2" to={`/notes/${note.slug}`}>
        <ArrowLeft className="size-4" aria-hidden="true" /> 返回总目录
      </Link>
      <div className="mt-7 space-y-7">
        {note.outline?.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-xl tracking-wide">{group.title}</h2>
            <ul className="mt-3 space-y-1 border-l-2 border-foreground pl-3">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    aria-current={item.id === activeId ? "page" : undefined}
                    className={cn(
                      "block rounded-sm px-3 py-2 font-mono text-sm font-bold leading-5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      item.id === activeId && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                    )}
                    to={`/notes/${note.slug}/${item.id}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </nav>
  );
}

function LessonDetail({ note, lessonId }: { note: Note; lessonId: string }) {
  const lesson = getNoteLesson(note.slug, lessonId);
  if (!lesson) return <NotFound />;

  const lessons = note.lessons ?? [];
  const currentIndex = lessons.findIndex((item) => item.id === lesson.id);
  const previous = lessons[currentIndex - 1];
  const next = lessons[currentIndex + 1];

  return (
    <article>
      <PageContainer className="py-10 sm:py-14">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-muted-foreground" aria-label="面包屑">
          <Link to="/">首页</Link><span aria-hidden="true">/</span><Link to="/notes">笔记</Link><span aria-hidden="true">/</span><Link to={`/notes/${note.slug}`}>{note.title}</Link><span aria-hidden="true">/</span><span aria-current="page">{lesson.title}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
          <aside className="creative-panel mb-8 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto p-6 lg:sticky lg:top-28 lg:block">
            <LessonDirectory note={note} activeId={lesson.id} />
          </aside>

          <details className="creative-panel mb-8 p-5 lg:hidden">
            <summary className="cursor-pointer font-mono text-sm font-bold text-primary">查看学习目录</summary>
            <div className="mt-5"><LessonDirectory note={note} activeId={lesson.id} /></div>
          </details>

          <div className="min-w-0 max-w-3xl">
            <header className="border-b-2 border-foreground pb-8">
              <p className="section-label">{lesson.eyebrow}</p>
              <h1 className="display-title mt-6 text-5xl font-black sm:text-7xl">{lesson.title}</h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{lesson.summary}</p>
            </header>

            <section className="mt-9" aria-labelledby="lesson-formula">
              <h2 id="lesson-formula" className="font-display text-3xl tracking-wide">一句公式</h2>
              <div className="mt-4 border-2 border-foreground bg-highlight px-5 py-4 font-mono text-base font-bold text-highlight-foreground shadow-[4px_4px_0_hsl(var(--foreground))] sm:text-lg">
                {lesson.formula}
              </div>
            </section>

            <section className="mt-10" aria-labelledby="lesson-points">
              <h2 id="lesson-points" className="font-display text-3xl tracking-wide">三个要点</h2>
              <ol className="mt-5 space-y-3">
                {lesson.points.map((point, index) => (
                  <li className="flex gap-4 border-b border-foreground/20 pb-3 leading-7" key={point}>
                    <span className="font-mono font-bold text-primary">0{index + 1}</span><span>{point}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10" aria-labelledby="lesson-examples">
              <h2 id="lesson-examples" className="font-display text-3xl tracking-wide">最小例句</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {lesson.examples.map((example) => (
                  <figure className="creative-panel p-5" key={example.source}>
                    <blockquote className="font-mono text-lg font-bold text-primary">{example.source}</blockquote>
                    <figcaption className="mt-3 text-sm text-muted-foreground">{example.translation}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <aside className="mt-10 border-l-4 border-primary bg-muted p-5" aria-label="记忆提示">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">记忆提示</p>
              <p className="mt-2 leading-7">{lesson.tip}</p>
            </aside>

            <nav className="mt-12 grid gap-4 border-t-2 border-foreground pt-7 sm:grid-cols-2" aria-label="上一篇和下一篇">
              {previous ? <Link className="creative-link inline-flex items-center gap-2" to={`/notes/${note.slug}/${previous.id}`}><ArrowLeft className="size-4" aria-hidden="true" />{previous.title}</Link> : <span />}
              {next && <Link className="creative-link inline-flex items-center justify-end gap-2 text-right" to={`/notes/${note.slug}/${next.id}`}>{next.title}<ArrowRight className="size-4" aria-hidden="true" /></Link>}
            </nav>
          </div>
        </div>
      </PageContainer>
    </article>
  );
}

export default function NoteDetail() {
  const { slug = "", lessonId } = useParams();
  const note = getNote(slug);
  if (!note) return <NotFound />;
  if (lessonId) return <LessonDetail note={note} lessonId={lessonId} />;

  return (
    <article>
      <PageContainer className="py-12 sm:py-16">
        <nav className="mb-10 flex gap-2 text-sm text-muted-foreground" aria-label="面包屑">
          <Link to="/">首页</Link><span aria-hidden="true">/</span><Link to="/notes">笔记</Link><span aria-hidden="true">/</span><span aria-current="page">{note.title}</span>
        </nav>
        <header className="mx-auto max-w-3xl border-b-2 border-foreground pb-10">
          <h1 className="display-title text-5xl font-black sm:text-7xl">{note.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{note.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="border-2 border-foreground bg-highlight px-2 py-1 font-bold text-highlight-foreground">{note.category}</span>
            <time dateTime={note.publishedAt}>{note.publishedAt.slice(0, 10)}</time>
          </div>
        </header>
        {note.outline && (
          <nav className="creative-panel mx-auto mt-10 max-w-3xl p-7 sm:p-10" aria-label={`${note.title}目录`}>
            <div className="space-y-12">
              {note.outline.map((group) => (
                <section key={group.title} aria-labelledby={`outline-${group.title}`}>
                  <h2 id={`outline-${group.title}`} className="display-title text-3xl font-black sm:text-4xl">{group.title}</h2>
                  <ul className="mt-6 space-y-3 pl-7 text-lg marker:text-foreground sm:text-xl">
                    {group.items.map((item) => (
                      <li id={item.id} className="scroll-mt-24 pl-1 target:bg-highlight/30" key={item.id}>
                        <Link className="creative-link text-lg sm:text-xl" to={`/notes/${note.slug}/${item.id}`}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </nav>
        )}
        {note.body && (
          <div className="mx-auto mt-10 max-w-3xl space-y-6 leading-8 text-muted-foreground">
            {note.body.split(/\n\n+/).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        )}
      </PageContainer>
    </article>
  );
}
