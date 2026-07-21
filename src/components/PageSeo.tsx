import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyMetadata, getMetadataForPath } from "@/lib/seo";

export function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyMetadata(getMetadataForPath(pathname));
  }, [pathname]);

  return null;
}
