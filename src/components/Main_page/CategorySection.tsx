import Link from "next/link";
import type { Post } from "@/lib/types";
import { PostCard } from "@/components/PostCard/PostCard";
import { ArrowRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  slug: string;
  posts: Post[];
}

export function CategorySection({ title, slug, posts }: CategorySectionProps) {
  if (!posts.length) return null;

  return (
    <section className="py-10">
      <div className="base-width">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[var(--color-foreground)]">{title}</h2>
          <Link
            href={`/category/${slug}`}
            className="flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline"
          >
            Visa alla <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
