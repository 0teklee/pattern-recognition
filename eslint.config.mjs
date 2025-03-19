import eslintPluginAstro from "eslint-plugin-astro";
import jsdoc from "eslint-plugin-jsdoc";
import * as mdx from "eslint-plugin-mdx";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false,
    }),
  },
  {
    plugins: jsdoc,
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
    },
    files: ["**/*.astro", "**/*.d.ts"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
    files: ["**/types/*.ts", "**/*.d.ts", "**/*.mdx", "*.mdx"],
  },
];
