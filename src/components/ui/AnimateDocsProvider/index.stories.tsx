import { AnimateDocsProvider } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AnimateDocsProvider> = {
  component: AnimateDocsProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnimateDocsProvider>;

export const Default: Story = {
  args: {},
};
