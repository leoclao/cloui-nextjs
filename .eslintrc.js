module.export = {
  root: true,
  parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint', 'react', 'react-hooks',],
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'next',
    // 'next/core-web-vitals',
    // 'plugin:prettier/recommended'
    'prettier',
    // 'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Rule
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  parserOptions: {
    // parserOptions
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
