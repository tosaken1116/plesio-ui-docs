import { Screen as Card } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
