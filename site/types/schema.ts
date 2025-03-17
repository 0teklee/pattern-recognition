import type { SearchParam } from "@site/types/query.ts";
import type { RouteKeys } from "@site/types/routes.ts";

/**@type {BaseSchema}**/
interface BaseContentSchema<T extends RouteKeys = "index"> {
  title: string;
  createdAt: string;
  tags: SearchParam<T>;
  description?: string;
  path: [T, ...string[]];
}

/**@type {AlgoSchema}**/
type AlgorithmContentSchema = BaseContentSchema<"algorithms">;

/** @type {UISchema}**/
type UIUXContentSchema = BaseContentSchema<"uiux">;

export type { BaseContentSchema, AlgorithmContentSchema, UIUXContentSchema };
