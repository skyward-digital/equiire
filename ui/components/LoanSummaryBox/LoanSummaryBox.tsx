import clsx from 'clsx';
import { format, add } from 'date-fns';
import {
  WalletIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  BanknotesIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import { LoanDetails } from '#/app/(login)/loan-application/LoanApplication';
import { Badge } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { BadgeProps } from '#/ui/components/Badge';
import { Divider } from '#/ui/components/Divider';
import { DatePicker } from '#/ui/components/DatePicker';
import { PiggyBankIcon, PurseIcon } from '#/ui/assets/icons';
import { SummaryBoxLine } from './SummaryBoxLine';

export type LoanSummaryBoxProps = {
  size: 'sm' | 'lg';
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
  loanDetails: LoanDetails;
  setLoanDetails: React.Dispatch<React.SetStateAction<LoanDetails>>;
};

export function LoanSummaryBox({
  size,
  step,
  setStep,
  className,
  loanDetails,
  setLoanDetails,
}: LoanSummaryBoxProps) {
  const {
    type,
    amount,
    terms,
    repaymentPeriod,
    scheduledPayment,
    //interestType,
    startDate,
  } = loanDetails;

  // These calculations may need to be amended
  const length =
    terms === 'length'
      ? parseInt(repaymentPeriod)
      : parseInt(amount) / parseInt(scheduledPayment);
  const monthlyPayment =
    terms === 'monthly'
      ? parseInt(scheduledPayment)
      : // we round up so they pay off all of the loan, this may need to be amended
        Math.ceil(parseInt(amount) / length);

  const apr = 11;
  const totalRepayable = parseInt(amount) + parseInt(amount) * (apr / 100);
  const creditCost = totalRepayable - parseInt(amount);
  const endDate = add(startDate, {
    months: length,
  });

  const lengthText = length > 1 ? `${length} months` : `${length} month`;
  const apiText = apr + '%';

  const badgeType = {
    CREDIT_BUILDER: 'warning',
    STANDARD: 'success',
  }[type] as BadgeProps['type'];

  const BadgeIcon = {
    CREDIT_BUILDER: PiggyBankIcon,
    STANDARD: PurseIcon,
  }[type];

  const loanTypeText = {
    CREDIT_BUILDER: 'Credit Builder',
    STANDARD: 'Standard',
  }[type];

  return (
    <section
      className={clsx(
        className,
        'grid rounded-lg bg-white dark:bg-black sm:dark:border sm:dark:border-gray-400 md:shadow-sm',
        {
          'max-w-4xl px-6 pt-6 sm:px-0 sm:pt-0': size === 'lg',
          'max-w-lg px-14 py-14': size === 'sm',
        },
      )}
    >
      {/* Title section (large) */}
      {size === 'lg' && (
        <div className="relative">
          <h2 className="font-brand border-gray-200 px-2 pt-3 text-3xl font-semibold tracking-tight text-gray-600 dark:border-gray-400 dark:text-gray-100 sm:border-b sm:px-10 sm:pb-8 sm:pt-8 sm:text-5xl">
            Loan{' '}
            <span className="font-normal text-gray-400 dark:text-gray-300">
              Summary
            </span>
          </h2>

          <div className="absolute -bottom-[76px] right-0 flex items-center gap-3 sm:right-10 sm:top-1/2 sm:-translate-y-1/2">
            <BadgeIcon className="stroke-gray-600 dark:stroke-white" />
            <Badge type={badgeType || 'info'}>{loanTypeText}</Badge>
          </div>
        </div>
      )}
      <div
        className={clsx({
          'my-10 flex flex-col gap-10 px-2 sm:my-12 sm:flex-row sm:gap-28 sm:px-10':
            size === 'lg',
        })}
      >
        {/* Breakdown */}
        <div className="flex flex-1 flex-col gap-7">
          <h3
            className={clsx('font-brand font-semibold tracking-tight ', {
              'text-brand text-2xl': size === 'lg',
              'text-4xl text-gray-600': size === 'sm',
            })}
          >
            Breakdown
          </h3>
          {/* Loan type (small only) */}
          {size == 'sm' && (
            <>
              <SummaryBoxLine Icon={CurrencyDollarIcon} value={loanTypeText}>
                Loan Type
              </SummaryBoxLine>
              <Divider />
            </>
          )}
          {/* Loan Basic Details */}
          <SummaryBoxLine
            Icon={WalletIcon}
            value={parseInt(amount).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          >
            Loan Amount
          </SummaryBoxLine>
          <SummaryBoxLine
            className=""
            value={monthlyPayment.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
            Icon={CircleStackIcon}
          >
            Monthly Payments
          </SummaryBoxLine>

          <SummaryBoxLine value={lengthText} Icon={CalendarIcon}>
            Loan Length
          </SummaryBoxLine>

          <Divider />
          <SummaryBoxLine value={apiText} Icon={ReceiptPercentIcon}>
            APR
          </SummaryBoxLine>
          <SummaryBoxLine
            value={totalRepayable.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            Icon={BanknotesIcon}
          >
            Total Repayable
          </SummaryBoxLine>
          <SummaryBoxLine
            value={creditCost.toLocaleString('en-US', {
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
              <h3 className="font-brand text-brand text-2xl font-semibold tracking-tight">
                Loan Start
              </h3>
              <DatePicker
                value={startDate}
                onValueChange={(value) =>
                  setLoanDetails({ ...loanDetails, startDate: value })
                }
                className="grow"
                disablePast
              />
            </div>
            <SummaryBoxLine
              Icon={CalendarIcon}
              value={format(startDate, 'MM/dd/yyyy')}
            >
              First Repayment
            </SummaryBoxLine>
            <SummaryBoxLine
              Icon={CalendarIcon}
              value={format(endDate, 'MM/dd/yyyy')}
            >
              Loan End
            </SummaryBoxLine>
          </div>
        )}
      </div>
      {/* Button section */}
      <div
        className={clsx('flex', {
          'fixed bottom-0 left-0 right-0 z-20 w-full flex-1 gap-8 border-gray-200 bg-white px-4 py-6 dark:border-gray-400 dark:bg-black sm:static sm:border-t sm:px-8 md:px-20':
            size === 'lg',
          'mt-10 self-end': size === 'sm',
        })}
      >
        {size === 'lg' && (
          <Button
            onClick={() => setStep((step: number) => step - 1)}
            variant="secondary"
            className="hidden flex-1 sm:flex"
          >
            Go Back
          </Button>
        )}
        {step === 0 ? (
          <Button
            variant="primary"
            className="w-full flex-1"
            onClick={() => setStep((step: number) => step + 1)}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="primary"
            className="w-full flex-1"
            href={{
              pathname: '/sign-up',
              query: {
                type,
                amount,
                length,
                monthlyPayment,
                startDate: format(startDate, 'yyyy-MM-dd'),
                // we aren't passing these fields in when signing up, they are calculated automatically
                /* interestType,
                apr,
                totalRepayable,
                creditCost, */
              },
            }}
          >
            Next
          </Button>
        )}
      </div>
    </section>
  );
}
