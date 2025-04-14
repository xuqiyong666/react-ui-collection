import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-constant-condition": "off",
      "no-constant-binary-expression": "off",
      "no-unsafe-optional-chaining": "off",
      "no-prototype-builtins": "off",
      "no-extra-boolean-cast": "off",
      "no-unreachable": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unknown-property": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
]);