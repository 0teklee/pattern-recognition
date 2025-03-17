import type { SearchParam } from "@site-types/query";
import type { HTMLAttributes } from "astro/types";
import type { RouteKeys, RouteType, SubRoutes } from "site/types/routes.ts";

// Inject meta title/description in @site/pages
export interface MetaTagProps extends Omit<HTMLAttributes<"meta">, "dir"> {
  title?: string;
  description?: string;
}

/** Inject & Rendering {title | desc | searchParam}
 *  in @site/pages/{algo | uiux}/index.astro **/
export interface ContentListProps extends MetaTagProps {
  path: SubRoutes;
  searchParam?: SearchParam<SubRoutes> | null;
}

/** Inject & Rendering {title | desc | searchParam}
 *  in @site/pages/{algo | uiux}/{path}/index.astro
 *  **/
export interface ContentMetaDataProps<T extends RouteKeys> {
  title: string;
  createdAt: string;
  tags: string[];
  path: [RouteType[T], ...string[]];
}
