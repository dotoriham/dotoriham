import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './menu';
import { Button } from '../button';

const meta: Meta<typeof Menu> = {
  component: Menu,
  decorators: [(Story) => <Story />],
  title: 'Menu',
};

type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  render: () => (
    <div>
      <h1>Menu 컴포넌트</h1>
      <Menu>
        <Menu.Target>
          <Button>메뉴 트리거 버튼</Button>
        </Menu.Target>

        <Menu.Dropdown>

        </Menu.Dropdown>
      </Menu>
    </div>
  ),
};

export default meta;
