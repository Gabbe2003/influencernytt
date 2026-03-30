import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/graphql_queries/getPost";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const perPage = parseInt(searchParams.get("per_page") || "12", 10);

  try {
    const { posts, pageInfo } = await getPosts(perPage);

    return NextResponse.json({
      posts,
      hasMore: pageInfo.hasNextPage,
    });
  } catch (error) {
    console.error("API archive error:", error);
    return NextResponse.json(
      { error: "Failed to fetch archive" },
      { status: 500 }
    );
  }
}
