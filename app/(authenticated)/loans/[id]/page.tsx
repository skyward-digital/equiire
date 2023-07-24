import { Badge } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { ProgressCircle } from '#/ui/components/ProgressCircle';
import { TabHeading, TabLink } from '#/ui/components/TabHeading';
import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  DocumentArrowDownIcon,
  HashtagIcon,
  PencilIcon,
  ReceiptPercentIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';

const loan = {
  id: '123456',
  status: 'approved',
  type: 'Standard',
  value: 10000,
  interestValue: 880.15,
  apr: 8.95,
  startDate: '2021-01-01',
  endDate: '2023-01-01',
  //   steps: {
  //     loan: true,
  //     account: true,
  //     payment: false,
  //     signature: false,
  //   },
  transactions: [
    {
      value: 500,
      date: '2021-01-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-02-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-03-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-04-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-05-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-06-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-07-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-08-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-09-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-10-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-11-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2021-12-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-01-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-02-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-03-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-04-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-05-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-06-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-07-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-08-01',
      status: 'paid',
    },
    {
      value: 500,
      date: '2022-09-01',
      status: 'overdue',
    },
    {
      value: 500,
      date: '2022-10-01',
      status: 'upcoming',
    },
    {
      value: 500,
      date: '2022-11-01',
      status: 'scheduled',
    },
    {
      value: 500,
      date: '2022-12-01',
      status: 'scheduled',
    },
  ],
};

export default function Page() {
  const {
    id,
    type,
    value,
    interestValue,
    apr,
    startDate,
    endDate,
    transactions,
  } = loan;

  const badgeStatus = {
    pending: 'warning',
    processing: 'info',
    approved: 'success',
    rejected: 'error',
    completed: undefined,
  }[loan.status] as BadgeProps['type'];

  return (
    <>
      <TabHeading>
        <TabLink
          href="#details"
          title="Loan Details"
          Icon={CircleStackIcon}
          // active={currentSection === 'details'}
        />

        <div className="mb-2 flex w-full items-center justify-end">
          <Badge type={badgeStatus} dot>
            {loan.status}
          </Badge>
        </div>
      </TabHeading>

      <div className="container grid grid-cols-5 gap-24 px-12 py-12">
        <div className="col-span-2">
          {/* Heading */}
          <div className="flex">
            <h1 className="font-brand mb-1.5 text-5xl font-semibold">
              Loan of{' '}
              <strong className="text-brand">
                {value.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                })}
              </strong>
              <br />
              in{' '}
              <strong className="text-brand">
                {new Date(startDate).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </strong>
            </h1>
            <ProgressCircle
              progress={
                (transactions.filter((t) => t.status === 'paid').length / 24) *
                100
              }
            />
          </div>

          {/* Loan details */}
          <div className="grid grid-cols-2 justify-between gap-x-8 gap-y-6 text-sm font-semibold text-gray-300">
            <p className="flex items-center gap-2">
              <BuildingLibraryIcon className="h-4 w-4" />
              Loan type
            </p>
            <p className="text-right">{type}</p>

            <p className="flex items-center gap-2">
              <HashtagIcon className="h-4 w-4" />
              Loan ID
            </p>
            <p className="text-right">{id}</p>

            <div className="col-span-2 border-b border-dashed border-gray-500" />

            <p className="flex items-center gap-2">
              <WalletIcon className="h-4 w-4" />
              Loan Amount
            </p>
            <p className="text-right">
              {value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </p>

            <p className="flex items-center gap-2">
              <ClipboardDocumentCheckIcon className="h-4 w-4" />
              Loan Length
            </p>
            <p className="text-right">{transactions.length} months</p>

            <p className="flex items-center gap-2">
              <CircleStackIcon className="h-4 w-4" />
              Monthly Payments
            </p>
            <p className="text-right">
              {transactions[0].value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </p>

            <div className="col-span-2 border-b border-dashed border-gray-500" />

            <p className="flex items-center gap-2">
              <ReceiptPercentIcon className="h-4 w-4" />
              APR
            </p>
            <p className="text-right">{apr}%</p>

            <p className="flex items-center gap-2">
              <BanknotesIcon className="h-4 w-4" />
              Total Repayable
            </p>
            <p className="text-right">
              {(value + interestValue).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>

            <p className="flex items-center gap-2">
              <CurrencyDollarIcon className="h-4 w-4" />
              Credit Cost
            </p>
            <p className="text-right">
              {interestValue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </p>

            <div className="col-span-2 border-b border-dashed border-gray-500" />

            <p className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              First Repayment Date
            </p>
            <p className="text-right">
              {new Date(startDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>

            <p className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              Loan Deposited
            </p>
            <p className="text-right">
              {endDate
                ? new Date(endDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : undefined}
            </p>

            <div className="col-span-2 border-b border-dashed border-gray-500" />

            <div className="space-y-4">
              <Button variant="secondary" size="sm">
                <DocumentArrowDownIcon className="h-4 w-4" />
                Download Loan Agreement
              </Button>
              <Button variant="secondary" size="sm">
                <PencilIcon className="h-4 w-4" />
                Add note
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-3">The loan transactions</div>
      </div>
    </>
  );
}
