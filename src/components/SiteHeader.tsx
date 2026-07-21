import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PageContainer } from "./PageContainer";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "笔记", href: "/notes" },
  { label: "关于", href: "/about" },
];

function NavigationLink({ href, label, mobile = false, onNavigate }: { href: string; label: string; mobile?: boolean; onNavigate?: () => void }) {
  return (
    <NavLink
      to={href}
      end={href === "/"}
      onClick={onNavigate}
      className={({ isActive }) => cn(
        "rounded-sm border-2 border-transparent font-mono text-sm font-bold text-muted-foreground transition-[transform,background-color,color,border-color] hover:-rotate-1 hover:border-foreground hover:bg-highlight hover:text-highlight-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        mobile ? "block px-3 py-3 text-base" : "px-3 py-2",
        isActive && "border-foreground bg-foreground text-background hover:bg-foreground hover:text-background",
      )}
    >
      {label}
    </NavLink>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <PageContainer className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" className="-rotate-1 rounded-sm border-2 border-foreground bg-primary px-3 py-1.5 font-display text-xl tracking-wide text-primary-foreground shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          陈扬 <span className="font-mono text-xs font-bold uppercase tracking-wider">/ Bryant</span>
        </Link>

        <nav className="hidden items-center md:flex" aria-label="主导航">
          {navigation.map((item) => <NavigationLink key={item.href} {...item} />)}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="打开导航菜单">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(22rem,88vw)] border-l-2 border-foreground bg-background shadow-[-8px_0_0_hsl(var(--primary))]">
              <SheetTitle className="mb-8 font-display text-3xl tracking-wide text-left">NAV / 导航</SheetTitle>
              <nav className="space-y-1" aria-label="移动端主导航">
                {navigation.map((item) => (
                  <NavigationLink key={item.href} {...item} mobile onNavigate={() => setOpen(false)} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </PageContainer>
    </header>
  );
}
