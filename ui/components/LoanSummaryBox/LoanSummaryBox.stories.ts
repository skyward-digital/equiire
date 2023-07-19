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

export const Large: Story = {
  args: {
    size: 'lg',
    type: 'credit-builder',
  },
};

export const LargeStandard: Story = {
  args: {
    size: 'lg',
    type: 'standard',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    type: 'credit-builder',
  },
};

export const SmallStandard: Story = {
  args: {
    size: 'sm',
    type: 'standard',
  },
};
