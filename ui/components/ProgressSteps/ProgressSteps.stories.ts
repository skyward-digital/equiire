import type { Meta, StoryObj } from '@storybook/react';
import { ProgressSteps } from '.';

const meta: Meta<typeof ProgressSteps> = {
  title: 'Components/ProgressSteps',
  component: ProgressSteps,
  parameters: {
    docs: {
      description: {
        component:
          'ProgressSteps component shows the progress of the steps of a form',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProgressSteps>;

export const Default: Story = {
  args: {
    totalSteps: 3,
    currentStep: 1,
  },
};
