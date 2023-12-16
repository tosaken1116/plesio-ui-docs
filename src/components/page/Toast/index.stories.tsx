import { Screen as Toast } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
};
