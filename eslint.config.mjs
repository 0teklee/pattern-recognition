import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslint.configs.recommended
});

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        ignores: ["algorithms/**/*"],
    },
    {
        files: ["uiux/**/*.{js,jsx,ts,tsx,mdx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            "prettier/prettier": "error"
        }
    },
    {
        files: ["algorithms/**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            env: {
                node: true,
                es2022: true
            }
        }
    }
];