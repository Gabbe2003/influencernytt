import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/search"],
    },
    sitemap: `https://${hostname}/sitemap.xml`,
  };
}
