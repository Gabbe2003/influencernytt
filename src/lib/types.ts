// ─── WordPress Post ────────────────────────────────────────
export interface Post {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  date: string;
  modified: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  } | null;
  categories: {
    nodes: CategoryNode[];
  };
  author: {
    node: AuthorNode;
  };
  seo?: SeoBasic;
  commentCount?: number;
}

export interface CategoryNode {
  name: string;
  slug: string;
  databaseId: number;
}

export interface AuthorNode {
  name: string;
  slug: string;
  avatar?: {
    url: string;
  };
  description?: string;
}

// ─── Category ──────────────────────────────────────────────
export interface Category {
  name: string;
  slug: string;
  databaseId: number;
  description: string;
  count: number;
  seo?: SeoBasic;
}

export interface CategoryWithPosts extends Category {
  posts: {
    nodes: Post[];
    pageInfo: PageInfo;
  };
}

// ─── Author ────────────────────────────────────────────────
export interface Author {
  name: string;
  slug: string;
  description: string;
  avatar: {
    url: string;
  };
  posts: {
    nodes: Post[];
    pageInfo: PageInfo;
  };
  seo?: SeoBasic;
}

// ─── Pagination ────────────────────────────────────────────
export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

// ─── SEO ───────────────────────────────────────────────────
export interface SeoBasic {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage?: {
    sourceUrl: string;
  };
  breadcrumbs?: SeoBreadcrumb[];
}

export interface SeoBreadcrumb {
  text: string;
  url: string;
}

// ─── Table of Contents ─────────────────────────────────────
export interface ITOCItem {
  id: string;
  text: string;
  level: number;
}

// ─── Post by Slug Result ───────────────────────────────────
export interface PostBySlugResult {
  post: Post;
  htmlContent: string;
  toc: ITOCItem[];
}

// ─── GraphQL Response ──────────────────────────────────────
export interface WpGraphQLResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
  }>;
}

// ─── Query Options ─────────────────────────────────────────
export interface GetAllPostsOpts {
  first?: number;
  after?: string;
  categorySlug?: string;
  authorSlug?: string;
}

export interface GetPostSlugsOpts {
  first?: number;
  after?: string;
}

// ─── Menu ──────────────────────────────────────────────────
export interface MenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
  parentId: string | null;
  childItems?: {
    nodes: MenuItem[];
  };
}
