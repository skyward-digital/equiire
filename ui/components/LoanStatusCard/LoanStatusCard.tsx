import { LoanStatusCardSmall } from './LoanStatusCardSmall';
import { LoanStatusCardLarge } from './LoanStatusCardLarge';
import { BadgeProps } from '#/ui/components/Badge';
import { Loan } from '#/app/api/loans/loans';

export const LoanStatusCard = ({ loan }: { loan: Loan }) => {
  const {
    _id: id,
    amount: value,
    loanStatus,
    paymentMethod,
    signatureCompleted,
  } = loan;

  const steps = {
    loan: true,
    account: true,
    payment: !!paymentMethod,
    signature: signatureCompleted,
  };

  const status = {
    IN_PROGRESS: 'pending',
    REJECTED: 'rejected',
    COMPLETED: 'completed',
  }[loanStatus];

  const badgeStatus = {
    IN_PROGRESS: 'info',
    REJECTED: 'error',
    COMPLETED: undefined,
  }[status] as BadgeProps['type'];

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

  if (status === 'completed')
    return (
      <LoanStatusCardSmall
        id={id}
        value={value}
        status={status}
        badgeStatus={badgeStatus}
        startDate={startDate}
        endDate={endDate}
      />
    );

  return (
    <LoanStatusCardLarge
      id={id}
      value={value}
      status={status}
      steps={steps}
      badgeStatus={badgeStatus}
      startDate={startDate}
      endDate={endDate}
    />
  );
};
