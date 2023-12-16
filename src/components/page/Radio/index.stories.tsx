import { Screen as Radio } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
