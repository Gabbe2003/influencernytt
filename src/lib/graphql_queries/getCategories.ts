import { wpGraphQLCached } from "@/lib/WpCachedResponse";
import type { Category, CategoryWithPosts, Post, PageInfo } from "@/lib/types";

// ─── Get all categories ────────────────────────────────────
export async function getCategories(): Promise<Category[]> {
  const query = `
    query GetCategories {
      categories(first: 50, where: { hideEmpty: true }) {
        nodes {
          name
          slug
          databaseId
          description
          count
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{
    categories: { nodes: Category[] };
  }>(query, {}, 600);

  return data.categories.nodes;
}

// ─── Get category by slug with posts ──────────────────────
export async function getCategoryBySlug(
  slug: string,
  first: number = 10,
  after?: string
): Promise<CategoryWithPosts | null> {
  const query = `
    query GetCategoryBySlug($slug: ID!, $first: Int!, $after: String) {
      category(id: $slug, idType: SLUG) {
        name
        slug
        databaseId
        description
        count
        seo {
          title
          metaDesc
          canonical
          opengraphTitle
          opengraphDescription
        }
        posts(first: $first, after: $after) {
          nodes {
            id
            databaseId
            title
            slug
            date
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
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{
    category: (CategoryWithPosts & { posts: { nodes: Post[]; pageInfo: PageInfo } }) | null;
  }>(query, { slug, first, after }, 300);

  return data.category;
}
