import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-duplicate-imports": "warn",
    },
  },
];
