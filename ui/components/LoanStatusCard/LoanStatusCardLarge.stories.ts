import type { Meta, StoryObj } from '@storybook/react';
import { LoanStatusCardLarge } from './LoanStatusCardLarge';

const meta: Meta<typeof LoanStatusCardLarge> = {
  title: 'Components/LoanStatusCard/Large',
  component: LoanStatusCardLarge,
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

type Story = StoryObj<typeof LoanStatusCardLarge>;

const args = {
  id: '123456',
  status: 'approved',
  value: 100000,
  startDate: 'January 2021',
};

export const Default: Story = {
  args,
};

export const Pending: Story = {
  args: {
    ...args,
    status: 'pending',
    steps: {
      loan: true,
      account: true,
      payment: false,
      signature: false,
    },
  },
};

export const Processing: Story = {
  args: {
    ...args,
    status: 'processing',
  },
};

export const Rejected: Story = {
  args: {
    ...args,
    status: 'rejected',
  },
};
