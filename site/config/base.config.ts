import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import { getEnv } from "../utils";

/**
 * @description 루트 경로 포함 사이트 전체 설정.
 * @type {Object} baseConfig
 *
 * @property {string} site - 배포될 사이트의 BASE_URL patterns.leetekwoo.com
 * @property {string} srcDir - Astro 프로젝트의 루트 경로 (Astro가 실행되는 기준 디렉토리)
 * @property {string} outputDir - 빌드 결과물이 저장될 디렉토리 (출력 경로)
 * @property {Array} integrations - Astro에서 사용할 통합 플러그인 목록
 *     @property {Function} mdx - MDX(Markdown + Astro) 플러그인
 */

const pathAlias = {
  "@": "/",
  "@scripts": "/.github",
  "@settings": "/",
  "@doc": "/doc",
  "@site": "/site",
  "@site-config": "/site/config",
  "@site-types": "/site/types",
  "@site-ui/layouts": "/site/layouts",
  "@site-ui/components": "/site/components",
  "@content": "/site/content",
  "@content:algo": "/site/content/algorithms",
  "@content:uiux": "/site/content/uiux",
  "@globalStyle": "/site/global.css",
};

const { isPrd } = getEnv();

export const baseConfig = {
  site: "https://patterns.leetekwoo.com",
  srcDir: "./site",
  outDir: isPrd ? "dist/production" : "dist/dev",
  scopedStyleStrategy: "class",
  integrations: [
    mdx({
      smartypants: true,
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula-soft", wrap: true },
      remarkRehype: { footnoteLabel: "Footnotes" },
      gfm: false,
    }),
    ...(isPrd ? [react()] : []),
  ],
  vite: {
    resolve: {
      alias: pathAlias,
    },
    plugins: [tailwindcss()],
  },
} satisfies AstroUserConfig<never, never>;

export default defineConfig(baseConfig);
