import eslintPluginAstro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs["flat/base"],
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
      ignoreYAML: true,
    }),
  },
  {
    files: ["**/*.mdx"],
    rules: {
      "@typescript-eslint/no-unresolved": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
