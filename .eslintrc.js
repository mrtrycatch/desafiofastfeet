module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-method-use-this': 'off',
    'no-param-ressign': 'off',
    'camel-case': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
