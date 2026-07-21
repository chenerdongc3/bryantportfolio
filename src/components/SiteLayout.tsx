import { Outlet } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[linear-gradient(hsl(var(--foreground)/0.035)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.035)_1px,transparent_1px)] bg-[size:32px_32px]">
      <a className="skip-link" href="#main-content">跳到主要内容</a>
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
