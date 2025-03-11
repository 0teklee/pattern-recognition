import { defineConfig } from "astro/config";
import { baseConfig } from "./base.config";

export default defineConfig({
  ...baseConfig,
  outDir: "./dist/algorithms",
  build: {
    format: "directory",
  },
});
