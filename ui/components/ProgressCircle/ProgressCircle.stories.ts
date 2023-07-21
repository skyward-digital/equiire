import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from '.';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    docs: {
      description: {
        component: 'ProgressCircle component shows the progress of a form',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    progress: 65,
    width: 100,
  },
};
