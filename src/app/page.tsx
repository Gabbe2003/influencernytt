import { getPosts, getPostsByCategory } from "@/lib/graphql_queries/getPost";
import { HeroSection } from "@/components/Main_page/HeroSection";
import { CategorySection } from "@/components/Main_page/CategorySection";
import { LatestNewsSection } from "@/components/Main_page/LatestNewsSection";
import { NewsletterSection } from "@/components/Main_page/NewsletterSection";
import type { Post } from "@/lib/types";

// Placeholder data for when WordPress is not yet connected
function getPlaceholderPosts(count: number, categoryName?: string): Post[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `placeholder-${categoryName || "post"}-${i}`,
    databaseId: i + 1,
    title: getPlaceholderTitle(i, categoryName),
    slug: `placeholder-${i}`,
    date: new Date(Date.now() - i * 86400000).toISOString(),
    modified: new Date().toISOString(),
    excerpt:
      "<p>Den h\u00e4r artikeln kommer att fyllas med inneh\u00e5ll n\u00e4r WordPress \u00e4r anslutet. H\u00e5ll utkik efter sp\u00e4nnande nyheter inom teknik och innovation.</p>",
    content: "",
    featuredImage: null,
    categories: {
      nodes: [
        {
          name: categoryName || "Nyheter",
          slug: categoryName?.toLowerCase() || "nyheter",
          databaseId: i + 100,
        },
      ],
    },
    author: {
      node: {
        name: "TrendRadar",
        slug: "trendradar",
      },
    },
  }));
}

function getPlaceholderTitle(index: number, category?: string): string {
  const titles: Record<string, string[]> = {
    Teknik: [
      "Nya genombrott inom kvantdatorer f\u00f6rv\u00e4ntas 2026",
      "S\u00e5 f\u00f6r\u00e4ndrar 6G v\u00e5r uppkopplade v\u00e4rld",
      "De mest lovande tech-startupsen just nu",
    ],
    AI: [
      "AI-agenter tar n\u00e4sta steg mot autonomi",
      "S\u00e5 p\u00e5verkar generativ AI arbetsmarknaden",
      "Maskinl\u00e4rning inom sjukv\u00e5rden: En revolution",
    ],
    Trender: [
      "De 10 hetaste tekniktrenderna f\u00f6r 2026",
      "H\u00e5llbar tech: Trender som f\u00f6r\u00e4ndrar branschen",
      "Framtidens arbetsplats: Vad kan vi f\u00f6rv\u00e4nta oss?",
    ],
    default: [
      "TrendRadar lanseras: Din nya k\u00e4lla f\u00f6r tekniktrender",
      "Varf\u00f6r du b\u00f6r h\u00e5lla koll p\u00e5 teknikutvecklingen",
      "Digital transformation: Status 2026",
      "Framtidens teknik: Vad s\u00e4ger experterna?",
      "Innovation i Sverige: En \u00f6versikt",
      "S\u00e5 navigerar du den digitala framtiden",
    ],
  };

  const list = titles[category || "default"] || titles.default;
  return list[index % list.length];
}

export default async function HomePage() {
  let heroPosts: Post[];
  let teknikPosts: Post[];
  let aiPosts: Post[];
  let latestPosts: Post[];
  let hasMoreLatest = false;

  try {
    const [heroData, teknikData, aiData, latestData] = await Promise.all([
      getPosts(5),
      getPostsByCategory("teknik", 3),
      getPostsByCategory("ai", 3),
      getPosts(6),
    ]);

    heroPosts = heroData.posts;
    teknikPosts = teknikData.posts;
    aiPosts = aiData.posts;
    latestPosts = latestData.posts;
    hasMoreLatest = latestData.pageInfo.hasNextPage;
  } catch {
    // WordPress not connected yet - use placeholder data
    heroPosts = getPlaceholderPosts(5);
    teknikPosts = getPlaceholderPosts(3, "Teknik");
    aiPosts = getPlaceholderPosts(3, "AI");
    latestPosts = getPlaceholderPosts(6);
    hasMoreLatest = false;
  }

  return (
    <>
      <HeroSection posts={heroPosts} />
      <CategorySection title="Teknik" slug="teknik" posts={teknikPosts} />
      <CategorySection
        title="AI & Maskinl\u00e4rning"
        slug="ai"
        posts={aiPosts}
      />
      <NewsletterSection />
      <LatestNewsSection initialPosts={latestPosts} hasMore={hasMoreLatest} />
    </>
  );
}
