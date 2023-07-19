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
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
