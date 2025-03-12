import type { Config } from "postcss-load-config";

export default {
  plugins: {
    tailwindcss: {
      config: "./config/tailwind/tailwind.config.ts",
    },
    autoprefixer: {},
  },
} satisfies Config;
