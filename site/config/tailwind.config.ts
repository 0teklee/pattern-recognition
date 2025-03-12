import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "../../algorithms/site/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../uiux/site/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "600px",
        widescreen: "1536px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        theme: "hsl(var(--theme))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          bg: "hsl(var(--secondary-bg))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [],
} satisfies Config;
