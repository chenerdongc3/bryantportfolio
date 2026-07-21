import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageSeo } from "@/components/PageSeo";
import { SiteLayout } from "@/components/SiteLayout";
import { ThemeProvider } from "@/components/ThemeProvider";
import { routerBasename } from "@/config/site";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const Notes = lazy(() => import("@/pages/Notes"));
const NoteDetail = lazy(() => import("@/pages/NoteDetail"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export function AppRoutes() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PageSeo />
      <Suspense fallback={<div className="min-h-[60vh]" aria-label="页面加载中" />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
            <Route path="/notes/:slug/:lessonId" element={<NoteDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default function App() {
  return <BrowserRouter basename={routerBasename}><AppRoutes /></BrowserRouter>;
}
