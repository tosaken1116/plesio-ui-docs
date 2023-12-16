import { Screen as Tabs } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};
