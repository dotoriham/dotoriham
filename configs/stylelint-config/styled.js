module.exports = {
  ...require("./base"),
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
      rules: {
        "function-no-unknown": null,
        "function-name-case": null,
        "value-keyword-case": null,
        /**
         * 필요한 경우 추가합니다.
         */
        // 'selector-class-pattern': null,
        // 'property-no-vendor-prefix': null,
        // 'function-name-case': null,
        // 'shorthand-property-no-redundant-values': null,
        // 'length-zero-no-unit': null,
        // 'rule-empty-line-before': null,
        // 'comment-empty-line-before': null,
        // 'declaration-empty-line-before': null,
        // 'keyframes-name-pattern': null,
        // 'color-function-notation': null,
        // 'alpha-value-notation': null,
        // 'value-no-vendor-prefix': null,
      },
    },
  ],
};
