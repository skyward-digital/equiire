import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoanCalculator, LoanCalculatorProps } from '.';
import { LoanDetails } from '#/app/(login)/loan-application/LoanApplication';

const meta: Meta<typeof LoanCalculator> = {
  title: 'Components/LoanCalculator',
  component: LoanCalculator,
  parameters: {
    docs: {
      description: {
        component:
          'LoanCalculator is a component where the user tailors their loan to them',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

function StoryRender(
  props: Omit<LoanCalculatorProps, 'loanDetails' | 'setLoanDetails'>,
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

  return <LoanCalculator {...props} loanDetails={loanDetails} />;
}

type Story = StoryObj<typeof LoanCalculator>;

export const Default: Story = {
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
