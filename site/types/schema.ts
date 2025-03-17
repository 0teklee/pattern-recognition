import type { RouteKeys } from "@site/types/routes.ts";

/**@type {BaseSchema}**/
interface BaseContentSchema<T extends RouteKeys> {
  title: string;
  createdAt: string;
  tags: string[];
  description?: string;
  path: [T, ...string[]];
}

/**@type {AlgoSchema}**/
type AlgorithmContentSchema = BaseContentSchema<"algorithms">;

/** @type {UISchema}**/
type UIUXContentSchema = BaseContentSchema<"uiux">;

export type { BaseContentSchema, AlgorithmContentSchema, UIUXContentSchema };
