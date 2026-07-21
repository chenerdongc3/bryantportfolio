import { renderToReadableStream } from "react-dom/server.browser";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import { validateContent } from "./lib/content/validate";
import { publishedNotes } from "./content/notes";
import { getIndexableRoutes, getPublicRoutes } from "./lib/content/routes";
import { getMetadataForPath } from "./lib/seo";
import { routerBasename, withBasePath } from "./config/site";

validateContent();

export { getIndexableRoutes, getPublicRoutes };
export const getPublishedNotes = () => publishedNotes;

export async function render(url: string): Promise<{ html: string; status: number; metadata: ReturnType<typeof getMetadataForPath> }> {
  let didError = false;
  const pathname = new URL(url, "https://render.local").pathname;
  const metadata = getMetadataForPath(pathname);
  const stream = await renderToReadableStream(
    <StaticRouter basename={routerBasename} location={withBasePath(pathname)}><AppRoutes /></StaticRouter>,
    { onError(error) { didError = true; console.error(error); } },
  );
  await stream.allReady;
  return {
    html: await new Response(stream).text(),
    status: didError || metadata.noindex && pathname !== "/notes" ? 404 : 200,
    metadata,
  };
}
