import { Link } from "react-router-dom";
import { profile } from "@/content/profile";
import { publishedNotes } from "@/content/notes";
import { withBasePath } from "@/config/site";
import { PageContainer } from "./PageContainer";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground py-10 text-background">
      <PageContainer className="flex flex-col gap-6 font-mono text-sm sm:flex-row sm:items-center sm:justify-between">
        <p><span className="font-display text-xl tracking-wide text-highlight">KEEP MAKING.</span><br />© {new Date().getFullYear()} 陈扬。持续构建，也持续记录。</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="页脚导航">
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/projects">项目</Link>
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/notes">笔记</Link>
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/about">关于</Link>
          <a className="underline decoration-2 underline-offset-4 hover:text-highlight" href={`mailto:${profile.email}`}>邮件</a>
          <a className="underline decoration-2 underline-offset-4 hover:text-highlight" href={profile.resumeUrl} target="_blank" rel="noreferrer">简历</a>
          {publishedNotes.length > 0 && <a className="underline decoration-2 underline-offset-4 hover:text-highlight" href={withBasePath("/feed.xml")}>RSS</a>}
        </nav>
      </PageContainer>
    </footer>
  );
}
