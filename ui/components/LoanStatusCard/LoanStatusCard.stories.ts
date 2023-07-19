import type { Meta, StoryObj } from '@storybook/react';
import { LoanStatusCard } from './LoanStatusCard';

const meta: Meta<typeof LoanStatusCard> = {
  title: 'Components/LoanStatusCard',
  component: LoanStatusCard,
  parameters: {
    docs: {
      description: {
        component:
          'The loan status card component that shows an overview of the loan in its current state, usually in progress but occasionally may need to show pending states',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanStatusCard>;

const args = {
  loan: {
    id: '123456',
    status: 'approved',
    value: 100000,
    startDate: '2021-01-01',
  },
};

export const Default: Story = {
  args,
};

export const Pending: Story = {
  args: {
    loan: {
      ...args.loan,
      status: 'pending',
      steps: {
        loan: true,
        account: true,
        payment: false,
        signature: false,
      },
    },
  },
};

export const Processing: Story = {
  args: {
    loan: {
      ...args.loan,
      status: 'processing',
    },
  },
};

export const Rejected: Story = {
  args: {
    loan: {
      ...args.loan,
      status: 'rejected',
    },
  },
};
