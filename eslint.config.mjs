import eslintPluginAstro from "eslint-plugin-astro";
import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
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
    },
    files: ["**/types/*.ts", "**/*.d.ts"],
  },
];
