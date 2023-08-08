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
  getSignedLoanDoc,
  setPaymentSubscription,
  type Loan,
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
  const [loan, transactions, setPaymentMethod, paymentMethods] =
    await Promise.all([
      getLoan({ id: params.id }),
      // transactions are currently returning a 500 error in the backend
      null,
      //getLoanTransactions({ id: params.id }),
      setStripePaymentMethod({
        returnUrl: `/loans/${params.id}?update-payment-method=true`,
      }),
      getStripePaymentMethods(),
    ]);

  // We are changing some of these variables after certain processes have finished
  let paymentStepCompleted = !!loan.paymentMethod;
  let loanStatus = loan.loanStatus;
  const loanAgreementSigned = loan.signatureCompleted;

  const openStripePortal = searchParams['open-stripe-portal'];
  const updatePaymentMethod = searchParams['update-payment-method'];

  // Completes the loan steps for pending loans
  if (loan.loanStatus === 'PENDING') {
    if (openStripePortal) {
      redirect(setPaymentMethod.url);
    }

    if (updatePaymentMethod) {
      if (paymentMethods.docs.length > 0) {
        const updatedLoan = await updateLoanPaymentMethod({
          loanId: params.id,
          paymentMethodId: paymentMethods.docs[0].id,
        });
        // Confirms that the payment method was updated on the loan
        paymentStepCompleted = !!updatedLoan.paymentMethod;
      }
    }

    // Subscribes the loan and updates loan status
    if (paymentStepCompleted && loanAgreementSigned) {
      // Does a final check for signed loan document
      const signedLoanDoc = await getSignedLoanDoc({ loanId: params.id });
      if (signedLoanDoc.success) {
        const subscribedLoan = await setPaymentSubscription({
          loanId: params.id,
        });
        loanStatus = subscribedLoan.loanStatus;
      }
    }
  }

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
    // @ts-ignore
  } = loan;

  const steps = {
    account: true, // always true as a user cannot have a loan without an account
    loan: true, // always true as a user cannot view a loan without a loan
    payment: paymentStepCompleted,
    signature: loanAgreementSigned,
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

        {/* Needs reimplementation with transactions.docs.length when transactions are working */}
        {transactions ? (
          <div></div> // Needs re-implementation
        ) : (
          // <div className="col-span-3 flex flex-col gap-6">
          //   <TransactionCard transaction={transactions.data.first} />
          //   <TransactionAccordion
          //     transactions={transactions.data.history.slice(
          //       1,
          //       transactions.data.history.length,
          //     )}
          //   />
          //   {/* <TransactionCard
          //     transaction={
          //       transactions.filter((t) => t.status === 'overdue')[0] as any
          //     }
          //   /> */}
          //   <TransactionCard transaction={transactions.data.next} />
          //   <TransactionAccordion
          //     transactions={
          //       transactions.data.scheduled.slice(
          //         0,
          //         transactions.data.scheduled.length - 1,
          //       ) as any
          //     }
          //   />
          //   <TransactionCard transaction={transactions.data.last} />
          // </div>
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
