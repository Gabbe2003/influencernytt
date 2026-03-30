import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/graphql_queries/getPost";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = parseInt(searchParams.get("per_page") || "10", 10);

  try {
    const { posts, pageInfo } = await getPosts(perPage);

    return NextResponse.json({
      posts,
      hasMore: pageInfo.hasNextPage,
      page,
    });
  } catch (error) {
    console.error("API getPost error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
