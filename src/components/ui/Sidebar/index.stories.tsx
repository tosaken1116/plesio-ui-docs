import { Sidebar } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {},
};
