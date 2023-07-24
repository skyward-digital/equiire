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
  title: 'Transaction Card',
  value: 500,
  status: 'paid',
  scheduledDate: '2021-01-01',
  paymentDate: '2021-01-01',
  paymentMethod: 'Credit Card',
  transactionCount: 5,
  transactionTotal: 48,
} as TransactionProps;

export const Default: Story = {
  args: {
    transaction,
  },
};

export const Expanded: Story = {
  args: {
    transaction,
    expandedDefault: true,
  },
};

export const Paid: Story = {
  args: {
    transaction: {
      ...transaction,
      status: 'paid',
    },
  },
};

export const Upcoming: Story = {
  args: {
    transaction: {
      ...transaction,
      status: 'upcoming',
    },
  },
};

export const Scheduled: Story = {
  args: {
    transaction: {
      ...transaction,
      status: 'scheduled',
    },
  },
};

export const Overdue: Story = {
  args: {
    transaction: {
      ...transaction,
      status: 'overdue',
    },
  },
};
