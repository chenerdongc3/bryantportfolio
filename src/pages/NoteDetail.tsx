import { Link, useParams } from "react-router-dom";
import { PageContainer } from "@/components/PageContainer";
import { getNote } from "@/content/notes";
import NotFound from "./NotFound";

export default function NoteDetail() {
  const { slug = "" } = useParams();
  const note = getNote(slug);
  if (!note) return <NotFound />;

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
                        <a className="creative-link text-lg sm:text-xl" href={`#${item.id}`}>{item.label}</a>
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
