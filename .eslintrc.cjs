const ERROR = 2;

const config = {
  root: true,

  env: {
    es6: true,
    browser: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
};

module.exports = config;
