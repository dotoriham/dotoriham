/** @type { import("@storybook/core-common").StorybookConfig } */
const config = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
};

module.exports = config;
