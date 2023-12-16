import { Screen as Switch } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
