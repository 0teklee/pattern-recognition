import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
