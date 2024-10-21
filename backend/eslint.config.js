import pluginJs from "@eslint/js";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: path.join(__dirname, "./tsconfig.json"),
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-duplicate-imports": "warn",
    },
  },
];
