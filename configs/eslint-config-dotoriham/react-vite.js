const reactConfig = require('./react.js');

module.exports = {
  ...reactConfig,
  rules: {
    ...reactConfig.rules,
    'import/default': 0,
    'import/namespace': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
  },
  settings: {
    ...reactConfig.settings,
    'import/resolver': {
      typescript: {},
    },
  },
};
