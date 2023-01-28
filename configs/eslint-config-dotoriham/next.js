const reactConfig = require("./react.js");
module.exports = {
  ...reactConfig,
  extends: ["next", "next/core-web-vitals", ...reactConfig.extends],
  rules: {
    ...reactConfig.rules,
    "@next/next/no-html-link-for-pages": 0,
  },
};
