import { ComponentProvider } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ComponentProvider> = {
  component: ComponentProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComponentProvider>;

export const Default: Story = {
  args: {},
};
