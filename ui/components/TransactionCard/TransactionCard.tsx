import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Badge, type BadgeProps } from '../Badge';

export interface TransactionCardProps {
  title: string;
  value: number;
  status: 'paid' | 'upcoming' | 'scheduled' | 'overdue';
  date: Date | string;
}

export const TransactionCard = ({
  title,
  value,
  date,
  status,
}: TransactionCardProps) => {
  const badgeStatus = {
    paid: 'success',
    upcoming: 'warning',
    scheduled: undefined,
    overdue: 'error',
  }[status] as BadgeProps['type'];

  const BadgeIcon = {
    paid: CheckIcon,
    upcoming: undefined,
    scheduled: undefined,
    overdue: XMarkIcon,
  }[status];

  const highlightColor = {
    paid: 'bg-success',
    upcoming: 'bg-warning',
    scheduled: 'bg-gray-500 dark:bg-gray-800',
    overdue: 'bg-error',
  }[status];

  return (
    <div className="relative flex w-full items-center justify-between overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-800 dark:bg-black">
      <span className={clsx('absolute left-0 h-full w-2', highlightColor)} />
      <div className="pl-4">
        <p className="font-brand mb-1 text-3xl font-semibold text-gray-800 dark:text-white">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <Badge type={badgeStatus} Icon={BadgeIcon} dot={!BadgeIcon}>
            {status}
          </Badge>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
      <p className="font-brand -mb-2 text-5xl font-semibold text-gray-800 dark:text-white">
        {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </div>
  );
};
