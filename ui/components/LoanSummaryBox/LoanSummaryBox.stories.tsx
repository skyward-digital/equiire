import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoanSummaryBox, LoanSummaryBoxProps } from '.';
import { LoanDetails } from '#/app/(login)/loan-application/LoanApplication';

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

// This mocks the state of the component
function StoryRender(
  props: Omit<LoanSummaryBoxProps, 'loanDetails' | 'setLoanDetails'>,
) {
  const loanDetails: LoanDetails = {
    type: 'CREDIT_BUILDER',
    amount: 10000,
    fee: 300,
    length: 48,
    monthlyPayment: 275,
    interestType: 'FIXED',
    apr: 12.74,
    totalRepayable: 13200,
    creditCost: 300,
    // static date so it doesn't change every time the story is loaded
    startDate: new Date(2023, 0, 24),
  };

  return (
    <LoanSummaryBox
      {...props}
      loanDetails={loanDetails}
      setStartDate={() => {}}
    />
  );
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
