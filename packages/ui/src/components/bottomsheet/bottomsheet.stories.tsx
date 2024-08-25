import { Meta, StoryObj } from '@storybook/react';
import { Bottomsheet } from './bottomsheet';

const meta: Meta<typeof Bottomsheet> = {
  title: 'Bottomsheet',
  component: Bottomsheet,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof Bottomsheet>;

export const Base: Story = {
  render: () => <Bottomsheet />,
};

export default meta;



