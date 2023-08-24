import { BadgeProps } from '#/ui/components/Badge';

export { LoanStatusCard } from './LoanStatusCard';

export type LoanStatusCardProps = {
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
  badgeStatus: BadgeProps['type'];
  expiredLoan?: boolean;
};
