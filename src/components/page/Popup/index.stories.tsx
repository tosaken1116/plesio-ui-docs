import { Screen as Popup } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popup> = {
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {},
};
