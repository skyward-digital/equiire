import type { Meta, StoryObj } from '@storybook/react';
import { LoanSummaryBox } from '.';

const meta: Meta<typeof LoanSummaryBox> = {
  title: 'Components/LoanSummaryBox',
  component: LoanSummaryBox,
  parameters: {
    docs: {
      description: {
        component:
          'LoanSummaryBox is a component that displays loan information in a box.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanSummaryBox>;

const args = {
  value: 10000,
};

export const Large: Story = {
  args: {
    size: 'lg',
    type: 'credit-builder',
    ...args,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    type: 'credit-builder',
    ...args,
  },
};
