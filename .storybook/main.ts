import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: [
    // '../stories/**/*.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    {
      directory: '../packages/ui/src/styles',
      titlePrefix: 'Styles',
    },
    {
      directory: '../packages/ui/src/components',
      titlePrefix: 'UI',
    },
  ],
  addons: [
    path.dirname(
      require.resolve(path.join('@storybook/addon-links', 'package.json')),
    ),
    path.dirname(
      require.resolve(path.join('@storybook/addon-essentials', 'package.json')),
    ),
    path.dirname(
      require.resolve(
        path.join('@storybook/addon-interactions', 'package.json'),
      ),
    ),
  ],
  framework: '@storybook/react-webpack5',
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  } as any,
};
export default config;
