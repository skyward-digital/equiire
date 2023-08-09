'use client';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TransactionCard, TransactionProps } from '../TransactionCard';

export interface TransactionGroupProps {
  transactions: TransactionProps[];
  expandedDefault?: boolean;
  transactionTotal: number;
}

export const TransactionAccordion = ({
  transactions,
  expandedDefault,
  transactionTotal,
}: TransactionGroupProps) => {
  // All statuses should be the same for all transactions in the group
  const transactionStatus = transactions[0].status;

  const status = {
    paid: 'paid',
    upcoming: 'upcoming',
    overdue: 'overdue',
    SCHEDULED: 'scheduled',
  }[transactionStatus];

  const statusText = {
    paid: transactions.length > 1 ? 'Payments' : 'Payment',
    upcoming:
      transactions.length > 1 ? 'Upcoming Payments' : 'Upcoming Payment',
    scheduled:
      transactions.length > 1 ? 'Scheduled Payments' : 'Scheduled Payment',
    overdue: transactions.length > 1 ? 'Failed Payments' : 'Failed Payment',
  }[status];

  const highlightColor = {
    paid: 'bg-success',
    upcoming: 'bg-warning',
    scheduled: 'bg-gray-500 dark:bg-gray-800',
    overdue: 'bg-error',
  }[status];

  const [expanded, setExpanded] = useState(expandedDefault || false);

  return (
    <div>
      <div
        className={clsx(
          'relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-lg border border-gray-200 bg-white py-4 pl-6 pr-10 shadow-md dark:border-gray-800 dark:bg-black',
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
        <p className="pl-4 font-semibold dark:text-white">
          {transactions.length} {statusText}
        </p>
        <ChevronDownIcon
          className={clsx(
            'h-5 w-5 text-gray-500 duration-300 dark:text-gray-200',
            expanded && 'rotate-180',
          )}
          strokeWidth={1.5}
        />
      </div>

      {expanded && (
        <div className="mt-8 grid gap-4 px-10">
          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction.transactionCount}
              transaction={transaction}
              transactionTotal={transactionTotal}
              title={
                transaction.status === 'SCHEDULED'
                  ? 'Scheduled Payment'
                  : 'Payment'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
