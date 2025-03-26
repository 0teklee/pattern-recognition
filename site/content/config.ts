import { RouteKeyMap } from "@site-types/routes.ts";
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

/** @see BaseSchema **/
const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  createdAt: z.string(),
});

/** @see AlgoSchema **/
const AlgorithmsZodSchema = baseSchema.extend({
  path: z.tuple([z.literal(RouteKeyMap.algorithms)]).rest(z.string()),
  tags: z.record(z.unknown()),
});

/** @see UISchema **/
const UIUXZodSchema = baseSchema.extend({
  path: z.tuple([z.literal(RouteKeyMap.uiux)]).rest(z.string()),
  tags: z.record(z.unknown()),
});

/** @see AlgorithmContentSchema **/
export const algorithms = defineCollection({
  loader: glob({ base: "site/content/algorithms", pattern: "**/*.mdx" }),
  schema: AlgorithmsZodSchema,
});

/** @see UIUXContentSchema **/
export const uiux = defineCollection({
  loader: glob({
    base: "site/content/uiux",
    pattern: "**/*.mdx",
  }),
  schema: UIUXZodSchema,
});

export const collections =
  process.env.SCOPE === "algo" ? { algorithms } : { algorithms, uiux };
