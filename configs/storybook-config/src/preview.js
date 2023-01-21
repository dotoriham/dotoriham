module.exports = {
  parameters: {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: "^on.*" },
    themes: { disabled: false },
    options: {
      storySort: {
        // method: 'alphabetical',
      },
    },
  },
};
