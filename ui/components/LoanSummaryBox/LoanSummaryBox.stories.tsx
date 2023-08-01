import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoanSummaryBox, LoanSummaryBoxProps } from '.';
import { LoanDetails } from '#/app/(login)/loan-application/page';

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
    <LoanSummaryBox
      {...props}
      loanDetails={loanDetails}
      setLoanDetails={setLoanDetails}
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
