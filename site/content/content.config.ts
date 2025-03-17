import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/** @see BaseSchema **/
const baseSchema = {
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  path: z.string(),
  tags: z.array(z.string()),
};

/** @see AlgorithmContentSchema **/
const algorithms = defineCollection({
  loader: glob({ base: "./algorithms", pattern: "**/*.mdx" }),
  schema: baseSchema,
});

/** @see UIUXContentSchema **/
const uiux = defineCollection({
  loader: glob({
    base: "./uiux",
    pattern: "**/*.mdx",
  }),
  schema: z.object(baseSchema),
});

export const collections = { algorithms, uiux };
