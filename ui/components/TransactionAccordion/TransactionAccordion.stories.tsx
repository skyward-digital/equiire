import type { Meta, StoryObj } from '@storybook/react';
import { TransactionAccordion } from '.';
import { TransactionProps } from '../TransactionCard';

const meta: Meta<typeof TransactionAccordion> = {
  title: 'Components/TransactionAccordion',
  component: TransactionAccordion,
  parameters: {
    docs: {
      description: {
        component:
          'TransactionAccordion is a component that displays a group of transactions. These are usually secondary, as they are intended to be hidden so should be used for groups of past or upcoming transactions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TransactionAccordion>;

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
};

const transactions = [
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
  transaction,
];

export const Default: Story = {
  args: {
    ...args,
    transactions,
  },
};

export const Expanded: Story = {
  args: {
    ...args,
    transactions,
    expandedDefault: true,
  },
};
