import type { Meta, StoryObj } from '@storybook/react';
import { StepCard } from './StepCard';

const meta: Meta<typeof StepCard> = {
  title: 'Components/LoanSteps/StepCard',
  component: StepCard,
  parameters: {
    docs: {
      description: {
        component:
          'The StepCard component displays a single step within the loan process. It is a more visually identifiable version of the step component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StepCard>;

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
