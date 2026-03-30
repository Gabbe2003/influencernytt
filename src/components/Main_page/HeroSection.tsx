import type { Post } from "@/lib/types";
import { PostCard } from "@/components/PostCard/PostCard";

interface HeroSectionProps {
  posts: Post[];
}

export function HeroSection({ posts }: HeroSectionProps) {
  if (!posts.length) return null;

  const [featured, ...rest] = posts;
  const sidePosts = rest.slice(0, 4);

  return (
    <section className="base-width py-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Featured large post */}
        <div className="lg:col-span-3">
          <PostCard post={featured} variant="featured" />
        </div>

        {/* Side posts */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {sidePosts.map((post) => (
            <PostCard key={post.id} post={post} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  );
}
