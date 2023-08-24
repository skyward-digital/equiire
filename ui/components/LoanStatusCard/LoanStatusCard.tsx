import { LoanStatusCardSmall } from './LoanStatusCardSmall';
import { LoanStatusCardLarge } from './LoanStatusCardLarge';
import { BadgeProps } from '#/ui/components/Badge';
import { Loan } from '#/app/api/loans';
import { getDateWithoutTimezone } from '#/lib/getDateWithoutTimezone';

type LoanStatusCardProps = {
  loan: Loan;
  profileCompleted: boolean;
};

export const LoanStatusCard = ({
  loan,
  profileCompleted,
}: LoanStatusCardProps) => {
  // We use these dates when evaluating any date logic
  const startDateWithoutTimezone = getDateWithoutTimezone(
    new Date(loan.startDate),
  );
  const endDateWithoutTimezone = getDateWithoutTimezone(new Date(loan.endDate));
  const todayWithoutTimezone = getDateWithoutTimezone(new Date());

  const {
    _id: id,
    amount: value,
    loanStatus,
    paymentMethod,
    signatureCompleted,
  } = loan;

  const steps = {
    loan: true,
    account: profileCompleted,
    payment: !!paymentMethod,
    signature: signatureCompleted,
  };

  const status = {
    PENDING: 'pending',
    IN_PROGRESS: 'active',
    REJECTED: 'rejected',
    COMPLETED: 'completed',
  }[loanStatus];

  const badgeStatus = {
    PENDING: 'warning',
    IN_PROGRESS: 'success',
    REJECTED: 'error',
    COMPLETED: undefined,
  }[loanStatus] as BadgeProps['type'];

  const startDate = startDateWithoutTimezone.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const endDate = loan.endDate
    ? endDateWithoutTimezone.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : undefined;

  if (
    status === 'completed' ||
    (status === 'pending' && startDateWithoutTimezone < todayWithoutTimezone)
  )
    return (
      <LoanStatusCardSmall
        id={id}
        value={value}
        status={status}
        badgeStatus={badgeStatus}
        startDate={startDate}
        endDate={endDate}
        expiredLoan={startDateWithoutTimezone < todayWithoutTimezone}
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
