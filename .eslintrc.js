module.export = {
  root: true,
  parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint', 'react', 'react-hooks',],
  plugins: ['@typescript-eslint', 'prettier',],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'next',
    // 'next/core-web-vitals',
    // 'plugin:prettier/recommended'
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    // Rule
  },
  parserOptions: {
    // parserOptions
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}