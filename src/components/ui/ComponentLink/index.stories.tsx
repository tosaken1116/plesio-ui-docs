import { ComponentLink } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ComponentLink> = {
  component: ComponentLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComponentLink>;

export const Default: Story = {
  args: {},
};
