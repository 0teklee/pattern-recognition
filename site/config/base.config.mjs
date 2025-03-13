import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * @description 루트 경로 포함 사이트 전체 설정.
 * @type {Object} baseConfig
 *
 * @property {string} site - 배포될 사이트의 BASE_URL patterns.leetekwoo.com
 * @property {string} srcDir - Astro 프로젝트의 루트 경로 (Astro가 실행되는 기준 디렉토리)
 * @property {string} outputDir - 빌드 결과물이 저장될 디렉토리 (출력 경로)
 * @property {Array} integrations - Astro에서 사용할 통합 플러그인 목록
 *     @property {Function} mdx - MDX(Markdown + Astro) 플러그인
 *     @property {Function} tailwind - TailwindCSS 설정
 *     @property {string} configFile - TailwindCSS 설정 파일 경로
 *     @property {string} postcssConfig - PostCSS 설정 파일 경로
 */
export const baseConfig = {
  site: "https://patterns.leetekwoo.com",
  srcDir: "./site",
  outputDir: "../../dist",
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        node_modules: "../../node_modules",
      },
    },
    plugins: [tailwindcss()],
  },
};

export default defineConfig(baseConfig);
