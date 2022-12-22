const base = require('./react.js');
module.exports = {
  ...base,
  extends: ['next', 'next/core-web-vitals', ...base.extends],
  rules: {
    ...base.rules,
    '@next/next/no-html-link-for-pages': 0,
  },
};
