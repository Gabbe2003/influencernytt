import type { Post } from "@/lib/types";

interface SeoJsonLdProps {
  post: Post;
}

export function SeoJsonLd({ post }: SeoJsonLdProps) {
  const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      "@type": "Person",
      name: post.author?.node?.name || "TrendRadar",
    },
    publisher: {
      "@type": "Organization",
      name: "TrendRadar",
      url: `https://${hostname}`,
    },
    image: post.featuredImage?.node?.sourceUrl || "",
    url: `https://${hostname}/${post.slug}`,
    description: post.excerpt?.replace(/<[^>]*>/g, "") || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${hostname}/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
