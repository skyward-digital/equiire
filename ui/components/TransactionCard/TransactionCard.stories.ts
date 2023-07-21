import type { Meta, StoryObj } from '@storybook/react';
import { TransactionCard } from '.';
import { UserCircleIcon } from '@heroicons/react/24/outline';

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

export const Paid: Story = {
  args: {
    title: 'Transaction Card',
    value: 500,
    status: 'paid',
    date: '2021-01-01',
  },
};

export const Upcoming: Story = {
  args: {
    title: 'Transaction Card',
    value: 500,
    status: 'upcoming',
    date: '2021-01-01',
  },
};

export const Scheduled: Story = {
  args: {
    title: 'Transaction Card',
    value: 500,
    status: 'scheduled',
    date: '2021-01-01',
  },
};

export const Overdue: Story = {
  args: {
    title: 'Transaction Card',
    value: 500,
    status: 'overdue',
    date: '2021-01-01',
  },
};
