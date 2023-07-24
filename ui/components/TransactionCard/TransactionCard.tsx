'use client';
import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Badge, type BadgeProps } from '../Badge';

export interface TransactionProps {
  id: number | string;
  title: string;
  value: number;
  status: 'paid' | 'upcoming' | 'scheduled' | 'overdue';
  scheduledDate: Date | string;
  paymentDate?: Date | string;
  paymentMethod?: 'Bank Transfer' | 'Credit Card';
  transactionCount: number;
  transactionTotal: number;
}

export interface TransactionCardProps {
  transaction: TransactionProps;
  expandedDefault?: boolean;
}

export const TransactionCard = ({
  transaction,
  expandedDefault,
}: TransactionCardProps) => {
  const {
    id,
    title,
    value,
    scheduledDate,
    paymentDate,
    status,
    paymentMethod,
    transactionCount,
    transactionTotal,
  } = transaction;

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

  const [expanded, setExpanded] = useState(expandedDefault || false);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-black">
      <div
        className={clsx(
          'relative flex w-full cursor-pointer items-center justify-between overflow-hidden p-6',
        )}
        role="button"
        tabIndex={0}
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setExpanded(!expanded);
          }
          if (e.key === 'Escape') {
            setExpanded(false);
          }
        }}
      >
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
              {new Date(scheduledDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <p className="font-brand -mb-2 text-5xl font-semibold text-gray-800 dark:text-white">
          {value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </div>

      {expanded && (
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 border-t border-dashed border-gray-200 p-6 text-sm text-gray-500 dark:border-gray-800 dark:text-white">
          <p className="col-span-2">Details</p>

          <div className="flex justify-between gap-4">
            <p className="font-semibold text-gray-500 dark:text-gray-200">
              Payment
            </p>
            <p>
              {transactionCount} of {transactionTotal}
            </p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="font-semibold text-gray-500 dark:text-gray-200">
              Payment Method
            </p>
            <p>{paymentMethod}</p>
          </div>

          <div className="flex justify-between gap-4">
            <p className="font-semibold text-gray-500 dark:text-gray-200">
              Paid on
            </p>
            {paymentDate && (
              <p>
                {new Date(paymentDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>

          <div className="flex justify-between gap-4">
            <p className="font-semibold text-gray-500 dark:text-gray-200">
              Payment No.
            </p>
            {id && <p>{id}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
