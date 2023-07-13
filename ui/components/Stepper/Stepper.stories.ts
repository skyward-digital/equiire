import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '.';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: 'Stepper component i',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    totalSteps: 3,
    currentStep: 1,
  },
};
