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
  path: z.tuple([z.literal("algorithms")]).rest(z.string()),
  tags: z.record(z.unknown()),
});

/** @see UISchema **/
const UIUXZodSchema = baseSchema.extend({
  path: z.tuple([z.literal("uiux")]).rest(z.string()),
  tags: z.record(z.unknown()),
});

/** @see AlgorithmContentSchema **/
const algorithms = defineCollection({
  loader: glob({ base: "/algorithms", pattern: "**/*.mdx" }),
  schema: AlgorithmsZodSchema,
});

/** @see UIUXContentSchema **/
const uiux = defineCollection({
  loader: glob({
    base: "./uiux",
    pattern: "**/*.mdx",
  }),
  schema: UIUXZodSchema,
});

export const collections = { algorithms, uiux };
