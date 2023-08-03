// import { useEffect } from 'react';
import { redirect } from 'next/navigation';
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
import {
  getLoan,
  getLoanTransactions,
  updateLoanPaymentMethod,
} from '#/app/api/loans';
import {
  setStripePaymentMethod,
  getStripePaymentMethods,
} from '#/app/api/payments';

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    [key: string]: string | null;
  };
}) {
  const [
    loan,
    // loanTransactions,
    setPaymentMethod,
    paymentMethods,
  ] = await Promise.all([
    getLoan({ id: params.id }),
    // getLoanTransactions({ id: params.id }),
    setStripePaymentMethod({
      returnUrl: `/loans/${params.id}?update-payment-method`,
    }),
    getStripePaymentMethods(),
  ]);

  const openStripePortal = searchParams['open-stripe-portal'];
  const updatePaymentMethod = searchParams['update-payment-method'];

  if (openStripePortal) {
    redirect(setPaymentMethod.url);
  }

  if (updatePaymentMethod) {
    await updateLoanPaymentMethod({
      loanId: params.id,
      paymentMethodId: paymentMethods.docs[0].id,
    });
  }

  console.log({
    loan,
    paymentMethods,
    updatePaymentMethod: updatePaymentMethod ? 'true' : 'false',
  });

  const {
    _id: id,
    type,
    amount: value,
    monthlyPayment,
    creditCost: interestValue,
    totalRepayable,
    apr,
    startDate,
    endDate,
    length: loanLength,
    loanStatus,
    // @ts-ignore
    transactions = [],
  } = loan;

  const steps = {
    account: true, // always true as a user cannot have a loan without an account
    loan: true, // always true as a user cannot view a loan without a loan
    payment: !!loan.paymentMethod,
    signature: loan.signatureCompleted,
  };

  const status = {
    PENDING: 'pending',
    IN_PROGRESS: 'active',
    REJECTED: 'rejected',
    COMPLETED: 'completed',
  }[loanStatus];

  const badgeStatus = {
    PENDING: 'warning',
    IN_PROGRESS: 'info',
    REJECTED: 'error',
    COMPLETED: undefined,
  }[loanStatus] as BadgeProps['type'];

  // const paidTransactions = transactions.filter((t) => t.status === 'paid');
  // const scheduledTransactions = transactions.filter(
  //   (t) => t.status === 'scheduled',
  // );

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
            {status}
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
            {/* <ProgressCircle progress={(paidTransactions.length / 24) * 100} /> */}
          </div>

          {/* Loan details */}
          <div className="space-y-6">
            <LoanDetailRow
              Icon={BuildingLibraryIcon}
              label="Loan type"
              value={
                type === 'CREDIT_BUILDER' ? 'Credit Builder' : 'Standard Loan'
              }
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
              value={`${loanLength} months`}
            />
            <LoanDetailRow
              Icon={CircleStackIcon}
              label="Monthly Payments"
              value={monthlyPayment.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
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
              value={totalRepayable.toLocaleString('en-US', {
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

              {/* <Button variant="secondary" size="sm">
                <PencilIcon className="h-4 w-4" />
                Add note
              </Button> */}
            </div>
          </div>
        </div>

        {transactions.length ? (
          <div className="col-span-3 flex flex-col gap-6">
            Needs re-implementation
            {/* <TransactionCard transaction={transactions[0] as any} />
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
            /> */}
          </div>
        ) : (
          <div className="col-span-3 flex flex-col gap-6">
            <LoanSteps
              steps={steps}
              variant="card"
              loanId={id}
              paymentUrl={setPaymentMethod.url}
            />
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
