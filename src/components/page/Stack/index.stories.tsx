import { Screen as Stack } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {},
};
