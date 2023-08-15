import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { LoanSteps } from '../LoanSteps';
import { LoanStatusCardProps } from '.';
import ClockImage from '../../../public/images/clock.png';

export const LoanStatusCardLarge = ({
  id,
  value,
  status,
  steps,
  startDate,
  badgeStatus,
}: LoanStatusCardProps) => {
  return (
    <div className="w-full rounded-xl border bg-white shadow-sm dark:border-gray-600 dark:bg-black">
      <div className="flex w-full flex-col justify-between gap-4 border-b px-4 py-4 dark:border-gray-600 sm:flex-row sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/loans/${id}`}>
            <p className="font-brand -mb-1 text-sm text-gray-400 dark:text-gray-200 sm:text-xl sm:font-semibold">
              #{id}
            </p>
          </Link>
          <Badge type={badgeStatus} dot>
            {status}
          </Badge>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            href={`/loans/${id}`}
            variant="secondary"
            size="sm"
            className="w-full py-2 sm:py-1"
          >
            View Loan Details
          </Button>
          {/* {status !== 'rejected' && status !== 'pending' ? (
            <Button href="#" variant="primary" size="sm" className="w-full py-2 sm:py-1">
              Make Payment Early
            </Button>
          ) : null} */}
        </div>
      </div>

      <div className="flex min-h-[16rem] flex-col justify-between gap-8 px-4 py-6 sm:flex-row sm:p-8">
        <div className="sm:w-4/5">
          <h2 className="font-brand mb-1.5 text-5xl md:text-7xl">
            Loan of{' '}
            <strong className="text-brand">
              {value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </strong>{' '}
            <br className="hidden lg:block" />
            in <strong className="text-brand">{startDate}</strong>
          </h2>
          {status === 'processing' && (
            <p className="font-brand text-lg text-gray-500 dark:text-gray-200">
              Your loan is good to go, we're just setting a few things up
            </p>
          )}
        </div>

        {/* if account details aren't completed */}
        <div className="w-full space-y-4 sm:w-2/5">
          {status === 'pending' && (
            <LoanSteps steps={steps} variant="link" loanId={id} />
          )}
          {status === 'processing' && (
            <Image src={ClockImage} alt="clock" width={448} height={289} />
          )}
        </div>
      </div>
    </div>
  );
};
