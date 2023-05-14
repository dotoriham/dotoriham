import { css } from '@emotion/react';
import { Meta, StoryObj } from '@storybook/react';
import { useDotorihamTheme, DotorihamColors } from '@dotoriham/styles';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const wrapper = css`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

/**
 * 기본
 */
export const Base: Story = {
  render: () => <Button>Base</Button>,
};
/**
 * 버튼 종류 (기본, 아웃라인, 텍스트)
 */
export const Variant: Story = {
  render: () => {
    const {
      theme: { colors },
    } = useDotorihamTheme();

    const colorArray = Object.keys(colors) as DotorihamColors[];

    return (
      <>
        {colorArray.map((color, i) => (
          <div css={wrapper} key={i}>
            <Button variant="filled" color={color}>
              filled
            </Button>
            <Button variant="light" color={color}>
              light
            </Button>
            <Button variant="outlined" color={color}>
              outlined
            </Button>
            <Button variant="text" color={color}>
              text
            </Button>
          </div>
        ))}
      </>
    );
  },
};

/**
 * 버튼 사이즈
 */
export const Size: Story = {
  render: () => (
    <div css={wrapper}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

/**
 * 버튼 색상
 */
export const Color: Story = {
  render: () => (
    <div css={wrapper}>
      <Button color="dark">Dark</Button>
      <Button color="gray">Gray</Button>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="lime">Green</Button>
    </div>
  ),
};

/**
 * 버튼 로딩
 */
export const Loading: Story = {
  render: () => <Button loading>버튼</Button>,
};

/**
 * 버튼 비활성화
 */
export const Disabled: Story = {
  render: () => (
    <div css={wrapper}>
      <Button color="dark" disabled>
        Dark
      </Button>
      <Button color="gray" disabled>
        Gray
      </Button>
      <Button color="green" disabled>
        Green
      </Button>
      <Button color="red" disabled>
        Red
      </Button>
      <Button color="lime" disabled>
        Green
      </Button>
    </div>
  ),
};

/**
 * 버튼 컴팩트
 */
export const Campact: Story = {
  render: () => (
    <div css={wrapper}>
      <Button size="xs" compact>
        Extra Small
      </Button>
      <Button size="sm" compact>
        Small
      </Button>
      <Button size="md" compact>
        Medium
      </Button>
      <Button size="lg" compact>
        Large
      </Button>
      <Button size="xl" compact>
        Extra Large
      </Button>
    </div>
  ),
};

/**
 * 버튼 Full Width
 */
export const FullWidth: Story = {
  render: () => <Button fullWidth>Base</Button>,
};

/**
 * TODO 버튼 아이콘 (leftIcon, rightIcon)
 */
// export const Icon: Story = {
// 	args: {},
// };
