import { NextRequest, NextResponse } from "next/server";
import { wpGraphQLCached } from "@/lib/WpCachedResponse";
import type { Post } from "@/lib/types";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query?.trim()) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const graphqlQuery = `
      query SearchPosts($search: String!) {
        posts(where: { search: $search }, first: 20) {
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
            author {
              node {
                name
                slug
              }
            }
          }
        }
      }
    `;

    const data = await wpGraphQLCached<{ posts: { nodes: Post[] } }>(
      graphqlQuery,
      { search: query },
      60
    );

    return NextResponse.json({ posts: data.posts.nodes });
  } catch (error) {
    console.error("API search error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
