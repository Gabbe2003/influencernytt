import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getAuthorBySlug } from "@/lib/graphql_queries/getAuthor";
import { PostCard } from "@/components/PostCard/PostCard";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) return { title: "Skribent hittades inte | TrendRadar" };

  return {
    title: author.seo?.title || `${author.name} | TrendRadar`,
    description: author.seo?.metaDesc || author.description || `Artiklar av ${author.name}`,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug, 12);

  if (!author) notFound();

  return (
    <div className="base-width py-8">
      <div className="flex items-start gap-6 mb-10">
        {author.avatar?.url && (
          <Image
            src={author.avatar.url}
            alt={author.name}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold">{author.name}</h1>
          {author.description && (
            <p className="text-[var(--color-muted)] mt-2 max-w-xl">
              {author.description}
            </p>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">
        Artiklar av {author.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {author.posts.nodes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
