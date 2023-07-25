import { Badge, BadgeProps } from '#/ui/components/Badge';
import { Button } from '#/ui/components/Button';
import { LoanSteps } from '#/ui/components/LoanSteps';
import { ProgressCircle } from '#/ui/components/ProgressCircle';
import { TabHeading, TabLink } from '#/ui/components/TabHeading';
import { TransactionAccordion } from '#/ui/components/TransactionAccordion';
import { TransactionCard } from '#/ui/components/TransactionCard';
import { Divider } from '#/ui/components/Divider';
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
    steps,
  } = loan;

  const badgeStatus = {
    pending: 'warning',
    processing: 'info',
    approved: 'success',
    rejected: 'error',
    completed: undefined,
  }[loan.status] as BadgeProps['type'];

  const paidTransactions = transactions.filter((t) => t.status === 'paid');
  const scheduledTransactions = transactions.filter(
    (t) => t.status === 'scheduled',
  );

  return (
    <>
      <TabHeading>
        <TabLink
          href="#details"
          title="Loan Details"
          Icon={CircleStackIcon}
          active
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
          <div className="mb-6 flex">
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
            <ProgressCircle progress={(paidTransactions.length / 24) * 100} />
          </div>

          {/* Loan details */}
          <div className="space-y-6">
            <LoanDetailRow
              Icon={BuildingLibraryIcon}
              label="Loan type"
              value={type}
            />
            <LoanDetailRow Icon={HashtagIcon} label="Loan ID" value={id} />

            <Divider className="col-span-2" />

            <LoanDetailRow
              Icon={WalletIcon}
              label="Loan Amount"
              value={value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            />
            <LoanDetailRow
              Icon={ClipboardDocumentCheckIcon}
              label="Loan Length"
              value={transactions.length}
            />
            <LoanDetailRow
              Icon={CircleStackIcon}
              label="Monthly Payments"
              value={transactions[0].value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            />

            <Divider className="col-span-2" />

            <LoanDetailRow
              Icon={ReceiptPercentIcon}
              label="APR"
              value={`${apr}%`}
            />
            <LoanDetailRow
              Icon={BanknotesIcon}
              label="Total Repayable"
              value={(value + interestValue).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            />
            <LoanDetailRow
              Icon={CurrencyDollarIcon}
              label="Credit Cost"
              value={interestValue.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            />

            <Divider className="col-span-2" />

            <LoanDetailRow
              Icon={CalendarIcon}
              label="First Repayment Date"
              value={new Date(startDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            />
            <LoanDetailRow
              Icon={CalendarDaysIcon}
              label="Loan Deposited"
              value={
                endDate
                  ? new Date(endDate).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })
                  : 'Pending'
              }
            />

            <Divider className="col-span-2" />

            <div className="flex flex-col items-start gap-4">
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

        {transactions.length ? (
          <div className="col-span-3 flex flex-col gap-6">
            <TransactionCard transaction={transactions[0] as any} />
            <TransactionAccordion
              transactions={
                paidTransactions.slice(1, paidTransactions.length) as any
              }
            />
            <TransactionCard
              transaction={
                transactions.filter((t) => t.status === 'overdue')[0] as any
              }
            />
            <TransactionCard
              transaction={
                transactions.filter((t) => t.status === 'scheduled')[0] as any
              }
            />
            <TransactionAccordion
              transactions={
                scheduledTransactions.slice(
                  0,
                  scheduledTransactions.length - 1,
                ) as any
              }
            />
            <TransactionCard
              transaction={transactions[transactions.length - 1] as any}
            />
          </div>
        ) : (
          <div className="col-span-3 flex flex-col gap-6">
            <LoanSteps steps={steps} variant="card" />
          </div>
        )}
      </div>
    </>
  );
}

const LoanDetailRow = ({
  label,
  Icon,
  value,
}: {
  label: string;
  Icon: any;
  value: string | number;
}) => {
  return (
    <div className="grid grid-cols-2 justify-between gap-x-8 text-sm font-semibold text-gray-600 dark:text-gray-300">
      <p className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {label}
      </p>
      <p className="text-right">{value}</p>
    </div>
  );
};

const loan = {
  id: '123456',
  status: 'approved',
  type: 'Standard',
  value: 10000,
  interestValue: 880.15,
  apr: 8.95,
  startDate: '2021-01-01',
  endDate: '2023-01-01',
  steps: {
    loan: true,
    account: true,
    payment: false,
    signature: false,
  },
  transactions: [
    {
      id: 4235324986234986,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-01-01',
      paymentDate: '2021-01-01',
      paymentMethod: 'Credit Card',
      transactionCount: 1,
      transactionTotal: 24,
    },
    {
      id: 4235324986234987,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-02-01',
      paymentDate: '2021-02-01',
      paymentMethod: 'Credit Card',
      transactionCount: 2,
      transactionTotal: 24,
    },
    {
      id: 4235324986234988,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-03-01',
      paymentDate: '2021-03-01',
      paymentMethod: 'Credit Card',
      transactionCount: 3,
      transactionTotal: 24,
    },
    {
      id: 4235324986234989,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-04-01',
      paymentDate: '2021-04-01',
      paymentMethod: 'Credit Card',
      transactionCount: 4,
      transactionTotal: 24,
    },
    {
      id: 4235324986234990,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-05-01',
      paymentDate: '2021-05-01',
      paymentMethod: 'Credit Card',
      transactionCount: 5,
      transactionTotal: 24,
    },
    {
      id: 4235324986234991,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-06-01',
      paymentDate: '2021-06-01',
      paymentMethod: 'Credit Card',
      transactionCount: 6,
      transactionTotal: 24,
    },
    {
      id: 4235324986234992,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-07-01',
      paymentDate: '2021-07-01',
      paymentMethod: 'Credit Card',
      transactionCount: 7,
      transactionTotal: 24,
    },
    {
      id: 4235324986234993,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-08-01',
      paymentDate: '2021-08-01',
      paymentMethod: 'Credit Card',
      transactionCount: 8,
      transactionTotal: 24,
    },
    {
      id: 4235324986234994,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-09-01',
      paymentDate: '2021-09-01',
      paymentMethod: 'Credit Card',
      transactionCount: 9,
      transactionTotal: 24,
    },
    {
      id: 4235324986234995,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-10-01',
      paymentDate: '2021-10-01',
      paymentMethod: 'Credit Card',
      transactionCount: 10,
      transactionTotal: 24,
    },
    {
      id: 4235324986234996,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',

      scheduledDate: '2021-11-01',
      paymentDate: '2021-11-01',
      paymentMethod: 'Credit Card',
      transactionCount: 11,
      transactionTotal: 24,
    },
    {
      id: 4235324986234997,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2021-12-01',
      paymentDate: '2021-12-01',
      paymentMethod: 'Credit Card',
      transactionCount: 12,
      transactionTotal: 24,
    },
    {
      id: 4235324986234998,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-01-01',
      paymentDate: '2022-01-01',
      paymentMethod: 'Credit Card',
      transactionCount: 13,
      transactionTotal: 24,
    },
    {
      id: 4235324986234999,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-02-01',
      paymentDate: '2022-02-01',
      paymentMethod: 'Credit Card',
      transactionCount: 14,
      transactionTotal: 24,
    },
    {
      id: 4235324986235000,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-03-01',
      paymentDate: '2022-03-01',
      paymentMethod: 'Credit Card',
      transactionCount: 15,
      transactionTotal: 24,
    },
    {
      id: 4235324986235001,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-04-01',
      paymentDate: '2022-04-01',
      paymentMethod: 'Credit Card',
      transactionCount: 16,
      transactionTotal: 24,
    },
    {
      id: 4235324986235002,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-05-01',
      paymentDate: '2022-05-01',
      paymentMethod: 'Credit Card',
      transactionCount: 17,
      transactionTotal: 24,
    },
    {
      id: 4235324986235003,
      title: 'Transaction Card',
      value: 500,
      status: 'paid',
      scheduledDate: '2022-06-01',
      paymentDate: '2022-06-01',
      paymentMethod: 'Credit Card',
      transactionCount: 18,
      transactionTotal: 24,
    },
    {
      id: 4235324986235004,
      title: 'Transaction Card',
      value: 500,
      status: 'overdue',
      scheduledDate: '2022-07-01',
      paymentDate: '2022-07-01',
      paymentMethod: 'Credit Card',
      transactionCount: 19,
      transactionTotal: 24,
    },
    {
      id: 4235324986235005,
      title: 'Transaction Card',
      value: 500,
      status: 'upcoming',
      scheduledDate: '2022-08-01',
      paymentDate: '2022-08-01',
      paymentMethod: 'Credit Card',
      transactionCount: 20,
      transactionTotal: 24,
    },
    {
      id: 4235324986235006,
      title: 'Transaction Card',
      value: 500,
      status: 'scheduled',
      scheduledDate: '2022-09-01',
      paymentDate: '2022-09-01',
      paymentMethod: 'Credit Card',
      transactionCount: 21,
      transactionTotal: 24,
    },
    {
      id: 4235324986235007,
      title: 'Transaction Card',
      value: 500,
      status: 'scheduled',
      scheduledDate: '2022-10-01',
      paymentDate: undefined,
      paymentMethod: undefined,
      transactionCount: 22,
      transactionTotal: 24,
    },
    {
      id: 4235324986235008,
      title: 'Transaction Card',
      value: 500,
      status: 'scheduled',
      scheduledDate: '2022-11-01',
      paymentDate: undefined,
      paymentMethod: undefined,
      transactionCount: 23,
      transactionTotal: 24,
    },
    {
      id: 4235324986235009,
      title: 'Transaction Card',
      value: 500,
      status: 'scheduled',
      scheduledDate: '2022-12-01',
      paymentDate: undefined,
      paymentMethod: undefined,
      transactionCount: 24,
      transactionTotal: 24,
    },
  ],
};
