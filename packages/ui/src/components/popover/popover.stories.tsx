import { Meta, StoryObj } from '@storybook/react';

import { Popover } from './popover';
import { Button } from '../button';

const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [(Story) => <Story />],
  title: 'Popover',
};

type Story = StoryObj<typeof Popover>;

export const Base: Story = {
  render: () => (
    <Popover>
      <Popover.Target>
        <Button>버튼</Button>
      </Popover.Target>

      <Popover.Content>
        <>컨텐츠</>
      </Popover.Content>
    </Popover>
  ),
};

export default meta;
