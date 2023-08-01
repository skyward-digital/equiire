import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoanCalculator, LoanCalculatorProps } from '.';
import { LoanDetails } from '#/app/(login)/loan-application/page';

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
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanType: 'credit-builder',
    loanAmount: '10000',
    loanTerms: 'monthly',
    repaymentPeriod: '0',
    scheduledPayment: '500',
    interestType: '',
    // static date so it doesn't change every time the story is loaded
    loanStartDate: new Date(2023, 0, 24),
  });
  return (
    <LoanCalculator
      {...props}
      loanDetails={loanDetails}
      setLoanDetails={setLoanDetails}
    />
  );
}

type Story = StoryObj<typeof LoanCalculator>;

export const Default: Story = {
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
