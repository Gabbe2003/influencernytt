import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { Calendar, User, ArrowLeft } from "lucide-react";

interface SinglePostProps {
  post: Post;
}

export function SinglePost({ post }: SinglePostProps) {
  const category = post.categories?.nodes?.[0];
  const date = new Date(post.date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="base-width py-8">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Tillbaka till startsidan
      </Link>

      {/* Category */}
      {category && (
        <Link href={`/category/${category.slug}`} className="category-badge mb-4 inline-block">
          {category.name}
        </Link>
      )}

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-bold leading-tight mb-4"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)] mb-8">
        <div className="flex items-center gap-1.5">
          <User className="w-4 h-4" />
          <Link
            href={`/author/${post.author?.node?.slug}`}
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            {post.author?.node?.name}
          </Link>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.date}>{date}</time>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Author box */}
      {post.author?.node && (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-[var(--input)] rounded-xl">
          <div className="flex items-start gap-4">
            {post.author.node.avatar?.url && (
              <Image
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
                width={56}
                height={56}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1">
                Skriven av
              </p>
              <Link
                href={`/author/${post.author.node.slug}`}
                className="text-lg font-semibold hover:text-[var(--color-accent)] transition-colors"
              >
                {post.author.node.name}
              </Link>
              {post.author.node.description && (
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {post.author.node.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
