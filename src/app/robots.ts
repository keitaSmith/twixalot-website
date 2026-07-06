import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/draft/", "/preview/", "/test/", "/private/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
