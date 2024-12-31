import { Meta, StoryObj } from '@storybook/react';

import { Box } from './box';

const meta: Meta<typeof Box> = {
  component: Box,
  decorators: [(Story) => <Story />],
  title: 'Box',
};

type Story = StoryObj<typeof Box>;

export const Base: Story = {
  render: () => <Box>Base</Box>,
};

export default meta;
