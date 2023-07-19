import { LoanStatusCardSmall } from './LoanStatusCardSmall';
import { LoanStatusCardLarge } from './LoanStatusCardLarge';
import { BadgeProps } from '#/ui/components/Badge';

export type LoanProps = {
  id: string;
  status: string;
  value: number;
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

export const LoanStatusCard = ({ loan }: { loan: LoanProps }) => {
  const { id, value, status, steps } = loan;
  if (!status) return null;

  const badgeStatus = {
    pending: 'warning',
    processing: 'info',
    approved: 'success',
    rejected: 'error',
    completed: undefined,
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
