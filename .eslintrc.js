module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
      'import',
      '@typescript-eslint'
  ],
  env: {
      browser: true,
      es6: true,
      node: true
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  rules: {
      // 'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
      'indent': ["error", 2],
      'import/no-unresolved': 'off',
      'import/no-dynamic-require': 'off',
      'no-await-in-loop': 'off',
      'no-unused-expressions': 'off',
      'no-multi-spaces': 'off',
      'key-spacing': 'off',
      'global-require': 'off',
      '@typescript-eslint/member-delimiter-style': [1, {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }],
  },
  settings: {
      '@typescript-eslint/parser': ['.ts'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
  }
}