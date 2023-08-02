import Link from 'next/link';
import { Badge } from '#/ui/components/Badge';
import { CheckIcon } from '@heroicons/react/24/outline';
import { LoanStatusCardProps } from './LoanStatusCard';

export const LoanStatusCardSmall = ({
  _id,
  amount,
  loanStatus,
  startDate,
  endDate,
  badgeStatus,
}: LoanStatusCardProps) => {
  return (
    <div className="w-full rounded-xl border bg-white shadow-sm dark:border-gray-600 dark:bg-black">
      <div className="flex w-full justify-between gap-4 border-b px-8 py-4 dark:border-gray-600">
        <div className="flex items-center gap-4">
          <Link href={`/loans/${_id}`}>
            <p className="font-brand -mb-1 text-xl font-semibold text-gray-400 dark:text-gray-200">
              #{_id}
            </p>
          </Link>
          <Badge type={badgeStatus} Icon={CheckIcon}>
            {loanStatus === 'IN_PROGRESS' ? 'Processing' : loanStatus}
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`/loans/${_id}`}
            className="hover:text-brand focus:text-brand font-semibold text-gray-600 duration-200"
          >
            View
          </Link>
        </div>
      </div>

      <div className="flex w-full flex-col p-8">
        <h3 className="font-brand mb-1.5 text-3xl">
          Loan of{' '}
          <strong className="text-brand">
            {amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </strong>{' '}
          in <strong className="text-brand">{startDate}</strong>
        </h3>
        {loanStatus === 'COMPLETED' && endDate && (
          <p className="font-brand text-gray-400 dark:text-gray-200">
            Final payment made on {endDate}
          </p>
        )}
      </div>
    </div>
  );
};
