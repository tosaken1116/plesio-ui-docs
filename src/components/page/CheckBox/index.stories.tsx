import { Screen as CheckBox } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {},
};
