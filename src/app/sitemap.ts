import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se";
  const baseUrl = `https://${hostname}`;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];

  // Dynamic posts from WordPress
  // When WP is connected, fetch post slugs here
  // const { slugs } = await getPostSlugs(1000);
  // const postPages = slugs.map(slug => ({
  //   url: `${baseUrl}/${slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: "weekly" as const,
  //   priority: 0.8,
  // }));

  return [...staticPages];
}
