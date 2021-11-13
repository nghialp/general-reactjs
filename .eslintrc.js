module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    radix: 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'import/no-named-as-default': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': 'off',
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
    'react/no-find-dom-node': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.stories.js', '*.test.js', '*.mock.js'],
      rules: {
        'no-console': 'off',
        'no-alert': 'off',
        'no-unused-expressions': 'off',
      },
    },
  ],
};
