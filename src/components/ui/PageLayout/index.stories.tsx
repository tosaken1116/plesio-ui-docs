import { PageLayout } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageLayout>;

export const Default: Story = {
  args: {},
};
