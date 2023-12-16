import { Screen as Progress } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {},
};
