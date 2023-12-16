import { Screen as Grid } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {},
};
