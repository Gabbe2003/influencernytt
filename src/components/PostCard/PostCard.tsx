import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
  variant?: "default" | "horizontal" | "featured";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  const category = post.categories?.nodes?.[0];
  const imageUrl = post.featuredImage?.node?.sourceUrl;
  const date = new Date(post.date).toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (variant === "featured") {
    return (
      <Link href={`/${post.slug}`} className="block post-card group">
        <div className="relative aspect-[16/9] overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {category && (
              <span className="category-badge mb-3 inline-block">{category.name}</span>
            )}
            <h2
              className="text-xl md:text-2xl font-bold text-white leading-tight mb-2"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span>{post.author?.node?.name}</span>
              <span>&middot;</span>
              <time dateTime={post.date}>{date}</time>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/${post.slug}`} className="flex gap-4 group">
        <div className="relative w-28 h-20 md:w-36 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.featuredImage?.node?.altText || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="144px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
          )}
        </div>
        <div className="flex flex-col justify-center min-w-0">
          {category && (
            <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-1">
              {category.name}
            </span>
          )}
          <h3
            className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <time className="text-xs text-[var(--color-muted)] mt-1" dateTime={post.date}>
            {date}
          </time>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/${post.slug}`} className="block post-card group">
      <div className="relative aspect-[16/10] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.featuredImage?.node?.altText || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
        )}
      </div>
      <div className="p-4">
        {category && (
          <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">
            {category.name}
          </span>
        )}
        <h3
          className="text-base font-semibold leading-snug mt-1 mb-2 line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div
          className="text-sm text-[var(--color-muted)] line-clamp-2 mb-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <span>{post.author?.node?.name}</span>
          <span>&middot;</span>
          <time dateTime={post.date}>{date}</time>
        </div>
      </div>
    </Link>
  );
}
