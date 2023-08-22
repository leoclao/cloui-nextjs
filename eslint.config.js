import React from "eslint-plugin-react";
import js from "@eslint/js";
// import imports from "eslint-plugin-import";
// import a11y from "eslint-plugin-jsx-a11y";
import tsEs from "@typescript-eslint/eslint-plugin";
import tsEsParser from "@typescript-eslint/parser";
import * as globals from "globals";
import prettier from "prettier";
import markdown from "eslint-plugin-markdown";

export default [
  js.configs.recommended,
  {
    // "env": {
    //   "browser": true,
    //   "eslint": true,
    //   "node": true,
    //   "ES2022": true,
    //   "jest": true,
    //   "mocha": true,
    // },
    files: ["**/*.md", "src/**/*.js", "src/**/*.jsx","src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      markdown: markdown,
      typescript: tsEs,
      react: React,
      // "react-hooks",
      prettier,
    },
    // extends: [
      // "next",
      // "plugin:@typescript-eslint/recommended",
      // "plugin:react/recommended",
      // "plugin:react-hooks/recommended",
      // "prettier",
      // "prettier/@typescript-eslint",
      // "prettier/react",
      // "airbnb",
      // "prettier",
      // "plugin:@typescript-eslint/recommended",
      // "airbnb/hooks"
    // ],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      parser: tsEsParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        ...globals.browser
      }
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    ignores: [
      // "**/*.config.js",
      // ".prettierrc.js",
      // "!node_module/",
      "node_modules/*",
      "/build/",
      "/dist/",
      "next",
    ],
    processor: ["markdown/markdown", "prettier/prettier"],
    rules: {
      // strict: "off",
      // "prettier/prettier": [
      //   "error",
      //   // {},
      //   {
      //     usePrettierrc: true
      //   }
      // ],
      semi: "error",
      // "prefer-const": "error",
    },
    settings: {
      // sharedData: "Hello",
      react: {
        version: "detect",
      },
      // "import/parsers": {
      //   "@typescript-eslint/parser": [".ts", ".tsx"],
      // },
      // "import/resolver": {
      //   typescript: {
      //     project: "./tsconfig.eslint.json",
      //   }
      // }
    }
  }
]