"use client";

import { useState } from "react";
import type { Post } from "@/lib/types";
import { PostCard } from "@/components/PostCard/PostCard";
import { Loader2 } from "lucide-react";

interface LatestNewsSectionProps {
  initialPosts: Post[];
  hasMore: boolean;
}

export function LatestNewsSection({ initialPosts, hasMore: initialHasMore }: LatestNewsSectionProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/getPost?page=${page + 1}&per_page=6`);
      const data = await res.json();
      if (data.posts?.length) {
        setPosts((prev) => [...prev, ...data.posts]);
        setPage((p) => p + 1);
        setHasMore(data.hasMore ?? false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to load more posts:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 section-alt">
      <div className="base-width">
        <h2 className="text-xl font-bold text-[var(--color-foreground)] mb-6">
          Senaste nyheterna
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              disabled={loading}
              className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Laddar..." : "Ladda fler artiklar"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
