module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true,
  },
  // parse .vue file
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:json/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser', // to prase .ts file
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'de-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
  },
};
