const base = require('./index.js');

module.exports = {
  ...base,
  globals: {
    React: 'readonly',
  },
  extends: [
    ...base.extends,
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // 'react/no-unknown-property': ['error', { ignore: ['css'] }],
  rules: {
    ...base.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
  },
  settings: {
    ...base.settings,
    react: {
      version: 'detect',
    },
  },
};
