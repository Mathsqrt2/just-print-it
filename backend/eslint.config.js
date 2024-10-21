import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      // TODO: Remove after adding and configuring logging
      // "no-console": "warn",
      "no-unused-vars": "warn",
      "no-duplicate-imports": "warn",
    },
  },
];
