import { Screen as Modal } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};
