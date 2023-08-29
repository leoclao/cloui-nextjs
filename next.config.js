/** @type {import('next').NextConfig} */
import path from "path";
import "dotenv/config";
// const path = require('path');
// require('dotenv').config();

export default {
  experimental: {
    typedRoutes: true,
  },
  // output: 'export',
  // resolve: {
  //   alias: {
  //     '@/': './src',
  //     '@/components': path.join(__dirname, './src/components'),
  //     '@/elements': path.join(__dirname, './src/elements'),
  //     '@/utils': path.join(__dirname, './src/utils'),
  //   },
  // },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    // styledComponents: boolean | {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      // displayName?: boolean,
      // Enabled by default.
      // ssr?: boolean,
      // Enabled by default.
      // fileName?: boolean,
      // Empty by default.
      // topLevelImportPaths?: string[],
      // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // Enabled by default.
      // cssProp?: boolean,
      // Empty by default.
      // namespace?: string,
      // Not supported yet.
      // minify?: boolean,
      // Not supported yet.
      // transpileTemplateLiterals?: boolean,
      // Not supported yet.
      // pure?: boolean,
    // },
    relay: {
      // This should match relay.config.js
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
    },
    reactRemoveProperties: true,
    removeConsole: true,
    // emotion: boolean | {
      // default is true. It will be disabled when build type is production.
      // sourceMap: boolean,
      // default is 'dev-only'.
      // autoLabel?: 'never' | 'dev-only' | 'always',
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-className--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
      // labelFormat?: string,
      // default is undefined.
      // This option allows you to tell the compiler what imports it should
      // look at to determine what it should transform so if you re-export
      // Emotion's exports, you can still use transforms.
      // importMap?: {
      //   [packageName: string]: {
      //     [exportName: string]: {
      //       canonicalImport?: [string, string],
      //       styledBaseImport?: [string, string],
      //     }
      //   }
      // },
    // },
  },
};
