import { getPosts, getPostsByCategory } from "@/lib/graphql_queries/getPost";
import { HeroSection } from "@/components/Main_page/HeroSection";
import { CategorySection } from "@/components/Main_page/CategorySection";
import { LatestNewsSection } from "@/components/Main_page/LatestNewsSection";
import { NewsletterSection } from "@/components/Main_page/NewsletterSection";
import type { Post } from "@/lib/types";

function getPlaceholderPosts(count: number, categoryName?: string): Post[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `placeholder-${categoryName || "post"}-${i}`,
    databaseId: i + 1,
    title: getPlaceholderTitle(i, categoryName),
    slug: `placeholder-${i}`,
    date: new Date(Date.now() - i * 86400000).toISOString(),
    modified: new Date().toISOString(),
    excerpt:
      "<p>L\u00e4s v\u00e5r senaste analys om de ekonomiska trender som p\u00e5verkar Sverige och v\u00e4rlden. H\u00e5ll dig uppdaterad med TrendRadar.</p>",
    content: "",
    featuredImage: null,
    categories: {
      nodes: [
        {
          name: categoryName || "Ekonomi",
          slug: categoryName?.toLowerCase() || "ekonomi",
          databaseId: i + 100,
        },
      ],
    },
    author: {
      node: {
        name: "TrendRadar Redaktion",
        slug: "redaktion",
      },
    },
  }));
}

function getPlaceholderTitle(index: number, category?: string): string {
  const titles: Record<string, string[]> = {
    Ekonomi: [
      "Sveriges BNP visar ov\u00e4ntat stark tillv\u00e4xt i Q1",
      "Riksbanken signalerar ny r\u00e4ntes\u00e4nkning",
      "Inflationen sjunker snabbare \u00e4n v\u00e4ntat",
    ],
    Marknad: [
      "Stockholmsb\u00f6rsen n\u00e5r nya rekordniv\u00e5er",
      "Tech-sektorn leder b\u00f6rsuppg\u00e5ngen under v\u00e5ren",
      "R\u00e5varupriserna stiger efter geopolitisk oro",
    ],
    Finans: [
      "Storbankerna redovisar rekordvinster 2026",
      "Nya regler f\u00f6r bol\u00e5netak v\u00e4ntas i sommar",
      "Sparkontot vs fonder: S\u00e5 b\u00f6r du t\u00e4nka nu",
    ],
    Politik: [
      "Regeringens v\u00e5rbudget: De viktigaste f\u00f6rslagen",
      "EU:s nya ekonomiska ramverk p\u00e5verkar Sverige",
      "Handelskonflikter hotar global tillv\u00e4xt",
    ],
    default: [
      "Ekonomin 2026: Fem trender du b\u00f6r ha koll p\u00e5",
      "S\u00e5 p\u00e5verkas din pl\u00e5nbok av de senaste besluten",
      "Experterna: H\u00e4r \u00e4r marknadens n\u00e4sta drag",
      "Konjunkturl\u00e4get: Vart \u00e4r Sverige p\u00e5 v\u00e4g?",
      "Digitaliseringen omformar den svenska ekonomin",
      "H\u00e5llbara investeringar forts\u00e4tter v\u00e4xa kraftigt",
    ],
  };

  const list = titles[category || "default"] || titles.default;
  return list[index % list.length];
}

export default async function HomePage() {
  let heroPosts: Post[];
  let ekonomiPosts: Post[];
  let marknadPosts: Post[];
  let latestPosts: Post[];
  let hasMoreLatest = false;

  try {
    const [heroData, ekonomiData, marknadData, latestData] = await Promise.all([
      getPosts(5),
      getPostsByCategory("ekonomi", 3),
      getPostsByCategory("marknad", 3),
      getPosts(6),
    ]);

    heroPosts = heroData.posts;
    ekonomiPosts = ekonomiData.posts;
    marknadPosts = marknadData.posts;
    latestPosts = latestData.posts;
    hasMoreLatest = latestData.pageInfo.hasNextPage;
  } catch {
    heroPosts = getPlaceholderPosts(5);
    ekonomiPosts = getPlaceholderPosts(3, "Ekonomi");
    marknadPosts = getPlaceholderPosts(3, "Marknad");
    latestPosts = getPlaceholderPosts(6);
    hasMoreLatest = false;
  }

  return (
    <>
      <HeroSection posts={heroPosts} />
      <CategorySection title="Ekonomi" slug="ekonomi" posts={ekonomiPosts} />
      <CategorySection title="Marknad & B\u00f6rs" slug="marknad" posts={marknadPosts} />
      <NewsletterSection />
      <LatestNewsSection initialPosts={latestPosts} hasMore={hasMoreLatest} />
    </>
  );
}
