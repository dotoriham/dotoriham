import { Meta, StoryObj } from '@storybook/react';
import { Box } from './box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Box>;

export const Base: Story = {
  render: () => <Box>Base</Box>,
};

export default meta;
