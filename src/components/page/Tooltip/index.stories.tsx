import { Screen as Tooltip } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
};
