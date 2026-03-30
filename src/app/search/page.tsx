"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import type { Post } from "@/lib/types";
import { PostCard } from "@/components/PostCard/PostCard";
import { Loader2, Search } from "lucide-react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (!query.trim()) {
    return (
      <div className="text-center py-16">
        <Search className="w-12 h-12 text-[var(--color-muted)] mx-auto mb-4" />
        <p className="text-[var(--color-muted)]">Ange en s\u00f6kterm f\u00f6r att s\u00f6ka artiklar.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Loader2 className="w-6 h-6 animate-spin text-[var(--color-muted)]" />
      </div>
    );
  }

  return (
    <>
      <p className="text-[var(--color-muted)] mb-8">
        {posts.length} resultat f\u00f6r &ldquo;{query}&rdquo;
      </p>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-[var(--color-muted)]">
            Inga resultat hittades. F\u00f6rs\u00f6k med en annan s\u00f6kterm.
          </p>
        </div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="base-width py-8">
      <h1 className="text-3xl font-bold mb-2">S\u00f6kresultat</h1>
      <Suspense
        fallback={
          <div className="flex justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-[var(--color-muted)]" />
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
