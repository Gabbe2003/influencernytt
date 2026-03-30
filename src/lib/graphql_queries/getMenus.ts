import { wpGraphQLCached } from "@/lib/WpCachedResponse";
import type { MenuItem } from "@/lib/types";

export async function getMenuItems(
  location: string = "PRIMARY"
): Promise<MenuItem[]> {
  const query = `
    query GetMenu($location: MenuLocationEnum!) {
      menuItems(where: { location: $location }, first: 50) {
        nodes {
          id
          label
          url
          path
          parentId
          childItems {
            nodes {
              id
              label
              url
              path
              parentId
            }
          }
        }
      }
    }
  `;

  const data = await wpGraphQLCached<{
    menuItems: { nodes: MenuItem[] };
  }>(query, { location }, 600);

  return data.menuItems.nodes;
}
