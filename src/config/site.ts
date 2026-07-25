export const siteConfig = {
  name: "Bryant",
  title: "Bryant｜全栈开发与 AI 产品工程作品集",
  description:
    "Bryant 的作品集，记录 AI 应用、自动化工作流、现代 Web 产品与用户增长实践。",
  locale: "zh-CN",
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, ""),
} as const;

export const routerBasename = import.meta.env.BASE_URL;

export function withBasePath(pathname: string) {
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (routerBasename === "/") return normalizedPathname;
  return `${routerBasename}${normalizedPathname.slice(1)}`;
}

export function resolveAbsoluteUrl(siteUrl: string, pathname: string) {
  return new URL(pathname.replace(/^\/+/, ""), `${siteUrl.replace(/\/$/, "")}/`).toString();
}

export function absoluteUrl(pathname: string) {
  return siteConfig.url ? resolveAbsoluteUrl(siteConfig.url, pathname) : undefined;
}
