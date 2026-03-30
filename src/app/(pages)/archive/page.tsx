"use client";

import { useState, useEffect } from "react";
import type { Post } from "@/lib/types";
import { PostCard } from "@/components/PostCard/PostCard";
import { Loader2 } from "lucide-react";

export default function ArchivePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (pageNum: number, append: boolean = false) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/archive?page=${pageNum}&per_page=12`);
      const data = await res.json();
      if (data.posts?.length) {
        setPosts((prev) => (append ? [...prev, ...data.posts] : data.posts));
        setHasMore(data.hasMore ?? false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch archive:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, true);
  };

  return (
    <div className="base-width py-8">
      <h1 className="text-3xl font-bold mb-2">Arkiv</h1>
      <p className="text-[var(--color-muted)] mb-8">
        Alla publicerade artiklar p\u00e5 TrendRadar.
      </p>

      {posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-[var(--color-muted)]" />
        </div>
      )}

      {!loading && hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Ladda fler
          </button>
        </div>
      )}
    </div>
  );
}
