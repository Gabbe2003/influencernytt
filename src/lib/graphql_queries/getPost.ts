import { wpGraphQLCached } from "@/lib/WpCachedResponse";
import type { Post, PageInfo } from "@/lib/types";

const POST_FIELDS = `
  id
  databaseId
  title
  slug
  date
  modified
  excerpt
  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
  categories {
    nodes {
      name
      slug
      databaseId
    }
  }
  author {
    node {
      name
      slug
      avatar {
        url
      }
    }
  }
`;

// ─── Get multiple posts ────────────────────────────────────
export async function getPosts(
  first: number = 10,
  after?: string,
  categorySlug?: string
): Promise<{ posts: Post[]; pageInfo: PageInfo }> {
  const where = categorySlug
    ? `where: { categoryName: "${categorySlug}" }`
    : "";

  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, ${where}) {
        nodes {
          ${POST_FIELDS}
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{
    posts: { nodes: Post[]; pageInfo: PageInfo };
  }>(query, { first, after });

  return {
    posts: data.posts.nodes,
    pageInfo: data.posts.pageInfo,
  };
}

// ─── Get single post by slug ──────────────────────────────
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_FIELDS}
        content
        seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
          opengraphImage {
            sourceUrl
          }
          breadcrumbs {
            text
            url
          }
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{ post: Post | null }>(
    query,
    { slug },
    2678400 // 31 days
  );

  return data.post;
}

// ─── Get post slugs for sitemap ───────────────────────────
export async function getPostSlugs(
  first: number = 100,
  after?: string
): Promise<{ slugs: string[]; pageInfo: PageInfo }> {
  const query = `
    query GetPostSlugs($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          slug
          modified
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{
    posts: {
      nodes: Array<{ slug: string; modified: string }>;
      pageInfo: PageInfo;
    };
  }>(query, { first, after }, 3600);

  return {
    slugs: data.posts.nodes.map((n) => n.slug),
    pageInfo: data.posts.pageInfo,
  };
}

// ─── Get posts by category ────────────────────────────────
export async function getPostsByCategory(
  categorySlug: string,
  first: number = 10,
  after?: string
): Promise<{ posts: Post[]; pageInfo: PageInfo }> {
  return getPosts(first, after, categorySlug);
}
