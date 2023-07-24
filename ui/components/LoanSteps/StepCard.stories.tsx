import type { Meta, StoryObj } from '@storybook/react';
import { StepLink } from './StepLink';

const meta: Meta<typeof StepLink> = {
  title: 'Components/LoanSteps/StepCard',
  component: StepLink,
  parameters: {
    docs: {
      description: {
        component: '',
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
