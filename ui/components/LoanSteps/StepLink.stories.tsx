import type { Meta, StoryObj } from '@storybook/react';
import { StepLink } from './StepLink';

const meta: Meta<typeof StepLink> = {
  title: 'Components/LoanSteps/StepLink',
  component: StepLink,
  parameters: {
    docs: {
      description: {
        component:
          'The StepLink component displays a single step within the loan process. It is a less visually identifiable version of the step component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StepLink>;

export const Completed: Story = {
  args: {
    stage: 'complete',
    href: '#',
    children: 'Add loan details',
  },
};

export const Next: Story = {
  args: {
    stage: 'next',
    href: '#',
    children: 'Add loan details',
  },
};

export const Incomplete: Story = {
  args: {
    stage: 'incomplete',
    href: '#',
    children: 'Add loan details',
  },
};
