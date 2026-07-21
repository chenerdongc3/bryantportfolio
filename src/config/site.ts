export const siteConfig = {
  name: "陈扬",
  title: "陈扬｜用户增长、前端与 Agent 工程作品集",
  description:
    "陈扬的个人作品集，记录用户增长、Web3 前端、Agent 工程与产品实践。",
  locale: "zh-CN",
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, ""),
  email: "2607653809@qq.com",
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
