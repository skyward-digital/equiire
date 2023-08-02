import { LoanStatusCardSmall } from './LoanStatusCardSmall';
import { LoanStatusCardLarge } from './LoanStatusCardLarge';
import { BadgeProps } from '#/ui/components/Badge';
import { LoanData } from '#/app/api/loans/loans';

export type LoanProps = {
  _id: string;
  loanStatus: string;
  amount: number;
  startDate: string;
  endDate?: string;
  steps?: {
    loan: boolean;
    account: boolean;
    payment: boolean;
    signature: boolean;
  };
};

export interface LoanStatusCardProps extends LoanProps {
  badgeStatus: BadgeProps['type'];
}

export const LoanStatusCard = ({ loan }: { loan: LoanData }) => {
  const { _id, amount, loanStatus } = loan;
  const steps = {
    loan: true,
    account: true,
    payment: !!loan.paymentMethod,
    signature: loan.signatureCompleted,
  };
  if (!loanStatus) return null;

  const badgeStatus = {
    IN_PROGRESS: 'info',
    REJECTED: 'error',
    COMPLETED: 'success',
    // These two statuses are not listed in LoanStatusEnum in Swagger, so I don't know if they exist
    APPROVED: 'success',
    PENDING: 'warning',
  }[loanStatus] as BadgeProps['type'];

  const startDate = new Date(loan.startDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const endDate = loan.endDate
    ? new Date(loan.endDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : undefined;

  if (loanStatus === 'COMPLETED')
    return (
      <LoanStatusCardSmall
        _id={_id}
        amount={amount}
        loanStatus={loanStatus}
        badgeStatus={badgeStatus}
        startDate={startDate}
        endDate={endDate}
      />
    );

  return (
    <LoanStatusCardLarge
      _id={_id}
      amount={amount}
      loanStatus={loanStatus}
      steps={steps}
      badgeStatus={badgeStatus}
      startDate={startDate}
      endDate={endDate}
    />
  );
};
