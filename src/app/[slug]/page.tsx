import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/graphql_queries/getPost";
import { SinglePost } from "./_components/SinglePost";
import { SeoJsonLd } from "@/lib/seo/SeoJsonLd";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Artikel hittades inte | TrendRadar" };

  const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se";

  return {
    title: post.seo?.title || `${post.title} | TrendRadar`,
    description:
      post.seo?.metaDesc || post.excerpt?.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: post.seo?.opengraphTitle || post.title,
      description: post.seo?.opengraphDescription || post.excerpt?.replace(/<[^>]*>/g, ""),
      url: `https://${hostname}/${post.slug}`,
      type: "article",
      images: post.seo?.opengraphImage?.sourceUrl
        ? [post.seo.opengraphImage.sourceUrl]
        : post.featuredImage?.node?.sourceUrl
          ? [post.featuredImage.node.sourceUrl]
          : [],
    },
    alternates: {
      canonical: post.seo?.canonical || `https://${hostname}/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <SeoJsonLd post={post} />
      <SinglePost post={post} />
    </>
  );
}
