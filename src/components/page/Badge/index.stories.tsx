import { Screen as Badge } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {},
};
