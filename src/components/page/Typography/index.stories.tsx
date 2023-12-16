import { Screen as Typography } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {},
};
