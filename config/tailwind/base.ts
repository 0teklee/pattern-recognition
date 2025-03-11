import type { Config } from "tailwindcss";

export default {
  content: [
    "../../algorithms/site/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../uiux/site/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
