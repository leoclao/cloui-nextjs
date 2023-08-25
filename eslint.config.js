/** @type { import("eslint").Linter.FlatConfig[] } */
import React from "eslint-plugin-react";
import airbnb from "eslint-config-airbnb";
import stylelint from "eslint-config-stylelint";
import reactHooks from "eslint-plugin-react-hooks";
import imports from "eslint-plugin-import";
import markdown from "eslint-plugin-markdown";
import tsEs from "@typescript-eslint/eslint-plugin";
import tsEsParser from "@typescript-eslint/parser";
import * as globals from "globals";
import prettier from "prettier";

export default [
  // Global config
  // js.configs.recommended,
  {
    files: ["src/**/*"], // Global
    plugins: {
      airbnb,
      markdown: markdown,
      react: React,
      reactHooks,
      tsEs,
      prettier,
      stylelint,
    },
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsEsParser,
      parserOptions: {
        sourceType: "module",
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
        project: "./tsconfig.json",
        env: {
          browser: true,
          node: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    ignores: ["node_modules/*", "/build/", "/dist/", "next"],
    rules: {
      semi: ["warn", "always"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": false,
          "ts-ignore": false,
          "ts-nocheck": false,
          "ts-check": false,
        },
      ],
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "{}": false,
            object: false,
            Object: false,
          },
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        2,
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        2,
        {
          functions: false,
          classes: true,
          variables: true,
        },
      ],
      "@typescript-eslint/no-empty-function": [
        2,
        {
          allow: ["arrowFunctions"],
        },
      ],
      "@typescript-eslint/no-empty-interface": [
        2,
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/camelcase": [
        2,
        {
          properties: "never",
        },
      ],
      "@typescript-eslint/ban-ts-ignore": [0],
      "@typescript-eslint/ban-ts-comment": [0],
      "@typescript-eslint/no-non-null-assertion": [0],
      "@typescript-eslint/explicit-member-accessibility": [0],
      "@typescript-eslint/interface-name-prefix": [0],
      "@typescript-eslint/no-inferrable-types": [0],
      "@typescript-eslint/no-empty-function": [0],
      "@typescript-eslint/no-this-alias": [0],
      "@typescript-eslint/no-unused-vars-experimental": [
        2,
        { ignoreArgsIfArgsAfterAreUsed: true },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Markdown config
  {
    files: ["**/*.md"],
    plugins: {
      markdown: markdown,
    },
    processor: "markdown/markdown",
    rules: {
      semi: "error",
    },
    settings: {
      sharedData: "Hello",
    },
  },
];
