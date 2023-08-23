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
  // }
};
