import "server-only";
import { cache } from "react";

const WP_GRAPHQL_URL = process.env.WP_GRAPHQL_URL || "";
const HOST_URL = process.env.HOST_URL || "";

// ─── GraphQL cached fetcher ───────────────────────────────
export async function wpGraphQLCached<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate: number = 300
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data as T;
}

// ─── GraphQL raw (no cache) ───────────────────────────────
export async function wpGraphQLRaw<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data as T;
}

// ─── REST API cached fetcher ──────────────────────────────
export async function wpRestCached<T>(
  endpoint: string,
  revalidate: number = 300
): Promise<T> {
  const url = `${HOST_URL}${endpoint}`;
  const res = await fetch(url, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`REST request failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// ─── Request-level dedup ──────────────────────────────────
export const cachedGraphQL = cache(wpGraphQLCached);
