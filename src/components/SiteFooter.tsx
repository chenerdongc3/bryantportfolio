import { Link } from "react-router-dom";
import { publishedNotes } from "@/content/notes";
import { withBasePath } from "@/config/site";
import { usePortfolioContent } from "@/i18n/usePortfolioContent";
import { PageContainer } from "./PageContainer";

export function SiteFooter() {
  const { profile, ui } = usePortfolioContent();
  return (
    <footer className="border-t-2 border-foreground bg-foreground py-10 text-background">
      <PageContainer className="flex flex-col gap-6 font-mono text-sm sm:flex-row sm:items-center sm:justify-between">
        <p><span className="font-display text-xl tracking-wide text-highlight">KEEP MAKING.</span><br />© {new Date().getFullYear()} {profile.name}. {ui.footerTagline}</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label={ui.footerNavigation}>
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/projects">{ui.nav.projects}</Link>
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/notes">{ui.nav.notes}</Link>
          <Link className="underline decoration-2 underline-offset-4 hover:text-highlight" to="/about">{ui.nav.about}</Link>
          {publishedNotes.length > 0 && <a className="underline decoration-2 underline-offset-4 hover:text-highlight" href={withBasePath("/feed.xml")}>RSS</a>}
        </nav>
      </PageContainer>
    </footer>
  );
}
