---
to: "src/components/<%= componentName %>/<%= componentName %>.stories.tsx"
---

import { Meta, StoryObj } from '@storybook/react';
import { <%= PascalCaseComponentName %> } from './<%= componentName %>';

const meta: Meta<typeof <%= PascalCaseComponentName %>> = {
  title: '<%= PascalCaseComponentName %>',
  component: <%= PascalCaseComponentName %>,
  decorators: [(Story) => <Story />],
};

type Story = StoryObj<typeof <%= PascalCaseComponentName %>>;

export const Base: Story = {
  render: () => <<%= PascalCaseComponentName %> />,
};

export default meta;



