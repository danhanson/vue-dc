module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  rules: {
  }
}
