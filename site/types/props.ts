import type { HTMLAttributes } from "astro/types";

// Inject meta title/description in @site/pages
export interface MetaTagProps extends Omit<HTMLAttributes<"meta">, "dir"> {
  title?: string;
  description?: string;
}
