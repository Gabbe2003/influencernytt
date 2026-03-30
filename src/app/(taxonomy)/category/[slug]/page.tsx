import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategoryBySlug } from "@/lib/graphql_queries/getCategories";
import { PostCard } from "@/components/PostCard/PostCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return { title: "Kategori hittades inte | TrendRadar" };

  const hostname = process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se";

  return {
    title: category.seo?.title || `${category.name} | TrendRadar`,
    description: category.seo?.metaDesc || category.description || `Artiklar inom ${category.name}`,
    alternates: {
      canonical: `https://${hostname}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug, 12);

  if (!category) notFound();

  return (
    <div className="base-width py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        {category.description && (
          <p className="text-[var(--color-muted)]">{category.description}</p>
        )}
        <p className="text-sm text-[var(--color-muted)] mt-1">
          {category.count} artiklar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.posts.nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
