import type { AstroUserConfig } from "astro";
import { defineConfig } from "astro/config";
import { baseConfig } from "./base.config";

/**
 * @define property를 제외한 나머지는 base config 유지
 * @property {string} outDir - "../dist/algorithms"
 * @description build:algo 시 @/site/algorithms/templates의 변경 사항만 빌드. outDir 제외 나머지 baseConfig 유지
 * @see base.config.mjs - 기본 설정 사항 확인
 * **/

const algoConfig = {
  ...baseConfig,
  outDir: "dist/dev/build-algo",
  build: {
    format: "directory",
    assets: "asset",
  },
} satisfies AstroUserConfig;

export default defineConfig(algoConfig);
