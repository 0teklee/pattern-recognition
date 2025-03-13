import type { Config } from "tailwindcss";

/** NOTE
 * 테일윈드 V4는 @config 지시어로 config 파일을 대체합니다.
 * 그러나 웹스톰 TailwindCSS가 업데이트 되지 않아,
 * 설정 파일이 없을 시 tailwind 인텔리센스가 작동하지 않습니다.
 *
 *  TailwindV4 DOES NOT REQUIRE THIS FILE
 *  BUT TO USE TAILWINDCSS INTELLISENSE IN WEBSTORM
 *  I HAD TO INCLUDE THIS FILE IN CONFIG
 * **/

/* TODO
 * 확인할 것: @theme 내부 @variant 네스팅 린트 에러
 * 추후 class 기반 다크 모드에서 @variant로 변경
 * */

export default {
  darkMode: "class",
  content: ["../**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        tablet: "600px",
        widescreen: "1536px",
      },
      borderRadius: {
        lg: "var(--color-radius)",
        md: "calc(var(--color-radius) - 2px)",
        sm: "calc(var(--color-radius) - 4px)",
      },
      colors: {
        theme: "hsl(var(--color-theme))",
        background: "hsl(var(--color-background))",
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          bg: "hsl(var(--color-secondary-bg))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
      },
    },
  },
  plugins: [],
} satisfies Config;
