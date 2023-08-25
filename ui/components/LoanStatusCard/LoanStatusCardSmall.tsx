import Link from 'next/link';
import { Badge } from '#/ui/components/Badge';
import { LoanStatusCardProps } from '.';

export const LoanStatusCardSmall = ({
  id,
  value,
  status,
  startDate,
  endDate,
  badgeStatus,
  expiredLoan,
}: LoanStatusCardProps) => {
  return (
    <div className="w-full rounded-xl border bg-white shadow-sm dark:border-gray-600 dark:bg-black">
      <div className="flex w-full flex-col justify-between gap-2 border-b px-4 py-4 dark:border-gray-600 sm:flex-row sm:gap-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/loans/${id}`}>
            <p className="font-brand -mb-1 text-sm text-gray-400 dark:text-gray-200 sm:text-xl sm:font-semibold">
              #{id}
            </p>
          </Link>
          {expiredLoan ? (
            <Badge type="error" dot>
              Expired
            </Badge>
          ) : (
            <Badge type={badgeStatus} dot>
              {status}
            </Badge>
          )}
        </div>

        {!expiredLoan && (
          <div className="flex items-center gap-4">
            <Link
              href={`/loans/${id}`}
              className="hover:text-brand focus:text-brand ml-auto font-semibold text-gray-600 duration-200 sm:mx-0"
            >
              View
            </Link>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col p-4 sm:p-8">
        <h3 className="font-brand mb-1.5 text-2xl sm:text-3xl">
          Loan of{' '}
          <strong className="text-brand">
            {value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </strong>{' '}
          <br className="sm:hidden" />
          in <strong className="text-brand">{startDate}</strong>
        </h3>
        {status === 'completed' && endDate && (
          <p className="font-brand sm:text-md text-sm text-gray-400 dark:text-gray-200">
            Final payment made on {endDate}
          </p>
        )}
      </div>
    </div>
  );
};
