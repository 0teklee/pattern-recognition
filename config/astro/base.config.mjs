import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export const baseConfig = {
  site: "https://patterns.leetekwoo.com",
  integrations: [
    mdx(),
    tailwind({
      configFile: "./config/tailwind/base.ts",
      postcssConfig: "./config/tailwind/postcss.config.ts",
    }),
  ],
};

export default defineConfig(baseConfig);
