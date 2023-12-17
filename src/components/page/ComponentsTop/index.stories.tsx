import { Screen as ComponentsTop } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ComponentsTop> = {
  component: ComponentsTop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComponentsTop>;

export const Default: Story = {
  args: {},
};