import eslint from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true,
        },
      },
    },
  },
  eslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  prettier,
];