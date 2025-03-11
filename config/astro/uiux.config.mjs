import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { baseConfig } from "./base.config";

export default defineConfig({
  ...baseConfig,
  integrations: [...(baseConfig.integrations || []), react(), vue()],
  outDir: "./dist/uiux",
  build: {
    format: "directory",
  },
});
