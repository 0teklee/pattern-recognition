import react from "@astrojs/react";
import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import { baseConfig } from "./base.config.ts";

/**
 * @type {Object}
 * @define property를 제외한 나머지는 base config 유지
 * @property {string} outDir - "../dist/uiux"
 * @property {Array} integrations - 프레임워크 통합 플러그인 배열
 * @description build:uiux 시 @/site/uiux/templates의 변경 사항만 빌드.
 * @see base.config.mjs - 기본 설정
 * **/
const uiuxConfig = {
  ...baseConfig,
  integrations: [...(baseConfig.integrations || []), react()],
  outDir: "dist/dev/build-uiux",
  build: {
    format: "directory",
    assets: "asset",
  },
} satisfies AstroUserConfig;

export default defineConfig(uiuxConfig);
