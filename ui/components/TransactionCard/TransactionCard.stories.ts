import type { Meta, StoryObj } from '@storybook/react';
import { TransactionCard } from '.';
import { TransactionProps } from './TransactionCard';

const meta: Meta<typeof TransactionCard> = {
  title: 'Components/TransactionCard',
  component: TransactionCard,
  parameters: {
    docs: {
      description: {
        component:
          'TransactionCard is a form component that takes a title placeholder & icon (for the default view) and details if available, as well as the form content (children) and form functionality. This provides flexible reuse of the card while creating a standardised approach.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TransactionCard>;

const transaction = {
  id: 4235324986234986,
  amount: 500,
  status: 'paid',
  date: '2021-01-01',
  paymentDate: '2021-01-01',
  paymentMethod: 'Credit Card',
  transactionCount: 5,
} as TransactionProps;

const args = {
  transactionTotal: 48,
  title: 'Transaction Card',
};

export const Default: Story = {
  args: {
    ...args,
    transaction,
  },
};

export const Expanded: Story = {
  args: {
    ...args,
    transaction,
    expandedDefault: true,
  },
};

export const Paid: Story = {
  args: {
    ...args,
    transaction: {
      ...transaction,
      status: 'paid',
    },
  },
};

export const Upcoming: Story = {
  args: {
    ...args,
    transaction: {
      ...transaction,
      status: 'upcoming',
    },
  },
};

export const Scheduled: Story = {
  args: {
    ...args,
    transaction: {
      ...transaction,
      status: 'SCHEDULED',
    },
  },
};

export const Overdue: Story = {
  args: {
    ...args,
    transaction: {
      ...transaction,
      status: 'overdue',
    },
  },
};
