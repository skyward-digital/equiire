import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'ProgressBar component shows the progress of a form',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    totalSteps: 3,
    currentStep: 1,
  },
};
