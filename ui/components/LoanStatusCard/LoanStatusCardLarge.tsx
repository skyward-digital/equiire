import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { LoanSteps } from '../LoanSteps';
import { LoanStatusCardProps } from './LoanStatusCard';
import ClockImage from '../../../public/images/clock.png';

export const LoanStatusCardLarge = ({
  _id,
  amount,
  loanStatus,
  steps,
  startDate,
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
          <Badge type={badgeStatus} dot>
            {loanStatus === 'IN_PROGRESS' ? 'Processing' : loanStatus}
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Button href={`/loans/${_id}`} variant="secondary" size="sm">
            View Loan Details
          </Button>
          {loanStatus !== 'REJECTED' && loanStatus !== 'PENDING' ? (
            <Button href="#" variant="primary" size="sm">
              Make Payment Early
            </Button>
          ) : null}
        </div>
      </div>

      <div className="flex min-h-[16rem] justify-between gap-8 p-8">
        <div className="w-1/2">
          <h2 className="font-brand mb-1.5 text-7xl">
            Loan of{' '}
            <strong className="text-brand">
              {amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </strong>
            <br />
            in <strong className="text-brand">{startDate}</strong>
          </h2>
          {loanStatus === 'IN_PROGRESS' && (
            <p className="font-brand text-lg text-gray-500 dark:text-gray-200">
              Your loan is good to go, we're just setting a few things up
            </p>
          )}
        </div>

        {/* if account details aren't completed */}
        <div className="w-2/5 space-y-4">
          {loanStatus === 'PENDING' && (
            <LoanSteps steps={steps} variant="link" />
          )}
          {loanStatus === 'IN_PROGRESS' && (
            <Image src={ClockImage} alt="clock" width={448} height={289} />
          )}
        </div>
      </div>
    </div>
  );
};
