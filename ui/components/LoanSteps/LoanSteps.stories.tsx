import type { Meta, StoryObj } from '@storybook/react';
import { LoanSteps } from './LoanSteps';

const meta: Meta<typeof LoanSteps> = {
  title: 'Components/LoanSteps',
  component: LoanSteps,
  parameters: {
    docs: {
      description: {
        component:
          'The LoanSteps component displays incomplete steps within the loan process. This should only display for loans when the user has not completed all their account email which should have been done during the application/signup process.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanSteps>;

export const Card: Story = {
  args: {
    steps: {
      loan: true,
      account: true,
      payment: false,
      signature: false,
    },
    variant: 'card',
  },
};

export const Link: Story = {
  args: {
    steps: {
      loan: true,
      account: true,
      payment: false,
      signature: false,
    },
    variant: 'link',
  },
};
