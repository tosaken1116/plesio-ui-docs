import { Screen as ShakeAnimation } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShakeAnimation> = {
  component: ShakeAnimation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ShakeAnimation>;

export const Default: Story = {
  args: {},
};