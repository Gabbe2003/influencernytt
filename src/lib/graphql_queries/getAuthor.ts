import { wpGraphQLCached } from "@/lib/WpCachedResponse";
import type { Author } from "@/lib/types";

export async function getAuthorBySlug(
  slug: string,
  first: number = 10,
  after?: string
): Promise<Author | null> {
  const query = `
    query GetAuthorBySlug($slug: String!, $first: Int!, $after: String) {
      user(id: $slug, idType: SLUG) {
        name
        slug
        description
        avatar {
          url
        }
        seo {
          title
          metaDesc
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
              }
            }
            categories {
              nodes {
                name
                slug
                databaseId
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

  const data = await wpGraphQLCached<{ user: Author | null }>(
    query,
    { slug, first, after },
    300
  );

  return data.user;
}
