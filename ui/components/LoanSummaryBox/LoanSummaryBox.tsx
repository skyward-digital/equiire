import clsx from 'clsx';
import {
  WalletIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  BanknotesIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { Badge } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { BadgeProps } from '#/ui/components/Badge';
import { PiggyBankIcon, PurseIcon } from '#/ui/assets/icons';
import { SummaryBoxLine } from './SummaryBoxLine';
import { Divider } from './Divider';
import { DatePicker } from '../DatePicker';

type SummaryBoxProps = {
  size: 'sm' | 'lg';
  value: number;
  type: 'credit-builder' | 'standard';
};

export function LoanSummaryBox({ size, value, type }: SummaryBoxProps) {
  const badgeType = {
    'credit-builder': 'warning',
    standard: 'success',
  }[type] as BadgeProps['type'];

  const BadgeIcon = {
    'credit-builder': PiggyBankIcon,
    standard: PurseIcon,
  }[type];

  const loanType = {
    'credit-builder': 'Credit Builder',
    standard: 'Standard',
  }[type];

  return (
    <section
      className={clsx('rounded-lg bg-white dark:bg-black sm:shadow-sm', {
        'max-w-4xl': size === 'lg',
        'max-w-md px-14 py-14': size === 'sm',
      })}
    >
      {/* Title section (large) */}
      {size === 'lg' && (
        <div className="relative">
          <h2 className="font-brand border-gray-200 px-2 pt-3 text-3xl font-semibold tracking-tight text-gray-600 dark:text-gray-100 sm:border-b sm:px-10 sm:pb-8 sm:pt-8 sm:text-5xl">
            Loan{' '}
            <span className="font-normal text-gray-400 dark:text-gray-300">
              Summary
            </span>
          </h2>

          <div className="absolute -bottom-[76px] right-0 flex items-center gap-3 sm:right-10 sm:top-1/2 sm:-translate-y-1/2">
            <BadgeIcon className="stroke-gray-600 dark:stroke-white" />
            <Badge type={badgeType || 'info'}>{loanType}</Badge>
          </div>
        </div>
      )}
      <div
        className={clsx({
          'my-12 flex flex-col gap-10 px-2 sm:flex-row sm:gap-28 sm:px-10':
            size === 'lg',
        })}
      >
        {/* Breakdown */}
        <div className="flex flex-1 flex-col gap-7">
          <h3
            className={clsx(
              'font-brand  font-semibold tracking-tight dark:text-gray-100',
              {
                'text-brand text-2xl': size === 'lg',
                'text-4xl text-gray-600': size === 'sm',
              },
            )}
          >
            Breakdown
          </h3>
          {/* Loan type (small only) */}
          {size == 'sm' && (
            <>
              <SummaryBoxLine Icon={CurrencyDollarIcon} value={loanType}>
                Loan Type
              </SummaryBoxLine>
              <Divider />
            </>
          )}
          {/* Loan Basic Details */}
          <SummaryBoxLine
            Icon={WalletIcon}
            value={value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          >
            Loan Amount
          </SummaryBoxLine>
          <SummaryBoxLine value="22 Months" Icon={CalendarIcon}>
            Loan Length
          </SummaryBoxLine>
          <SummaryBoxLine
            className=""
            value={(500).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
            Icon={CircleStackIcon}
          >
            Monthly Payments
          </SummaryBoxLine>
          <Divider />
          <SummaryBoxLine value="8.95%" Icon={ReceiptPercentIcon}>
            APR
          </SummaryBoxLine>
          <SummaryBoxLine
            value={(10880.01).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            Icon={BanknotesIcon}
          >
            Total Repayable
          </SummaryBoxLine>
          <SummaryBoxLine
            value={(880.01).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            Icon={CurrencyDollarIcon}
          >
            Credit Cost
          </SummaryBoxLine>
          {size === 'sm' && (
            <p className="text-brand text-sm font-semibold">
              Repay early at no additional cost
            </p>
          )}
        </div>
        {/* Loan start */}
        {size === 'lg' && (
          <div className="flex flex-1 flex-col gap-7">
            <div className="flex items-center justify-between gap-5">
              <h3 className="font-brand text-brand text-2xl font-semibold tracking-tight dark:text-gray-100">
                Loan Start
              </h3>
              <DatePicker className="grow" />
            </div>
            <SummaryBoxLine Icon={CalendarIcon} value="06/30/2023">
              First Repayment
            </SummaryBoxLine>
            <SummaryBoxLine Icon={CalendarIcon} value="05/01/2024">
              Loan End
            </SummaryBoxLine>
          </div>
        )}
      </div>
      {/* Button section */}
      <div
        className={clsx('flex', {
          'gap-8 py-8 sm:border-t sm:px-20': size === 'lg',
          'mt-10': size === 'sm',
        })}
      >
        {size === 'lg' && (
          <Button variant="secondary" className="hidden flex-1 sm:flex">
            Go Back
          </Button>
        )}
        <Button variant="primary" className="flex-1">
          Next
        </Button>
      </div>
    </section>
  );
}
