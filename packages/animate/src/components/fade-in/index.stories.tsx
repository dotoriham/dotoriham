import { StoryObj } from '@storybook/react';

import { FadeIn } from '.';

export default {
  title: 'Fade In',
};

type Story = StoryObj<typeof FadeIn>;

export const Default: Story = {
  render: () => {
    return (
      <FadeIn duration={800}>
        <TestContent />
      </FadeIn>
    );
  },
};

function TestContent() {
  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        borderRadius: '8px',
        height: '400px',
        width: '400px',
      }}>
      Content
    </div>
  );
}
