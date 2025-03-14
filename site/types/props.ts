import type { HTMLAttributes } from "astro/types";
import type { SearchParam } from "./search-params.ts";
import type { Domains, SubRoot } from "./domains";

// Inject meta title/description in @site/pages/*
export interface MetaTagProps extends Omit<HTMLAttributes<"meta">, "dir"> {
  title?: string;
  description?: string;
}

/** Inject & Rendering {title | desc | searchParam}
 *  in @site/pages/{algo | uiux}/index.astro **/
export interface ContentListProps extends MetaTagProps {
  dir: SubRoot;
  searchParam?: SearchParam<SubRoot> | null;
}

export interface ContentMetaDataProps {
  title: string;
  createdAt: string;
  tags: string[];
  dir: [Domains, ...string[]];
}
