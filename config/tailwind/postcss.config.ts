import type { Config } from "postcss-load-config";

export default {
  plugins: {
    tailwindcss: {
      config: "./config/tailwind/base.ts",
    },
    autoprefixer: {},
  },
} satisfies Config;
