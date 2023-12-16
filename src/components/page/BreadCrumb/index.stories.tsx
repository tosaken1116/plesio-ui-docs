import { Screen as BreadCrumb } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BreadCrumb> = {
  component: BreadCrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {},
};
