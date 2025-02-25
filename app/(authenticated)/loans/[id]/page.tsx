import { redirect } from 'next/navigation';
import { Badge, BadgeProps } from '#/ui/components/Badge';
import { LoanSteps } from '#/ui/components/LoanSteps';
import { ProgressCircle } from '#/ui/components/ProgressCircle';
import { TabHeading } from '#/ui/components/TabHeading';
import { TransactionAccordion } from '#/ui/components/TransactionAccordion';
import { TransactionCard } from '#/ui/components/TransactionCard';
import { Divider } from '#/ui/components/Divider';
import {
  SettingsCardLink,
  paymentMethodTitle,
  paymentMethodDetail,
} from '#/ui/components/SettingsCard';
import {
  ArchiveBoxIcon,
  CreditCardIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  DocumentArrowDownIcon,
  HashtagIcon,
  ReceiptPercentIcon,
  WalletIcon,
} from '#/lib/@heroicons/react/24/outline';
import {
  getLoan,
  getLoanTransactions,
  updateLoanPaymentMethod,
  getSignedLoanDoc,
  setPaymentSubscription,
} from '#/app/api/loans';
import {
  setStripePaymentPortal,
  getStripePaymentMethods,
} from '#/app/api/payments';
import { getUser } from '#/app/api/profile';
import Link from 'next/link';
import { userProfileComplete } from '#/lib/userProfileComplete';
import { isExpiredLoan } from '#/lib/isExpiredLoan';
import { getDateWithoutTimezone } from '#/lib/getDateWithoutTimezone';
import { Button } from '#/ui/components/Button';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Loan #${params.id}`,
    description: 'Details of your loan',
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {
    [key: string]: string | null;
  };
}) {
  let [loan, transactions, setPaymentMethod, paymentMethods, user] =
    await Promise.all([
      getLoan({ id: params.id }),
      await getLoanTransactions({ id: params.id }),
      setStripePaymentPortal({
        returnUrl: `/loans/${params.id}?update-payment-method=true`,
      }),
      getStripePaymentMethods(),
      getUser(),
    ]);

  const openStripePortal = searchParams['open-stripe-portal'];
  const updatePaymentMethod = searchParams['update-payment-method'];

  const profileCompleted = userProfileComplete(user);

  // We are changing some of these variables after certain processes have finished
  let paymentStepCompleted = !!loan.paymentMethod;
  let status = loan.loanStatus;

  // If the loan agreement date is in the past, it should fail gracefully
  const expiredLoan = status === 'PENDING' && isExpiredLoan(loan);

  // Completes the loan steps for pending loans
  if (status === 'PENDING' && !expiredLoan) {
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
    if (profileCompleted && paymentStepCompleted && loan.signatureCompleted) {
      // Does a final check for signed loan document
      const signedLoanDoc = await getSignedLoanDoc({ loanId: params.id });

      if (signedLoanDoc.success) {
        const subscribedLoan = await setPaymentSubscription({
          loanId: params.id,
        });
        status = subscribedLoan.loanStatus;
        transactions = await getLoanTransactions({ id: params.id });
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

  const startDateWithoutTimezone = getDateWithoutTimezone(new Date(startDate));
  const endDateWithoutTimezone = getDateWithoutTimezone(new Date(endDate));

  const steps = {
    account: profileCompleted,
    loan: true, // always true as a user cannot view a loan without a loan
    payment: paymentStepCompleted,
    signature: loan.signatureCompleted,
  };

  const statusText = {
    PENDING: 'pending',
    IN_PROGRESS: 'active',
    REJECTED: 'rejected',
    COMPLETED: 'completed',
  }[status];

  const badgeStatus = {
    PENDING: 'warning',
    IN_PROGRESS: 'success',
    REJECTED: 'error',
    COMPLETED: undefined,
  }[status] as BadgeProps['type'];

  return (
    <>
      <TabHeading
        links={[
          {
            id: 'details',
            title: 'Loan Details',
            Icon: CircleStackIcon,
          },
          {
            id: 'transactions',
            title: 'Transactions',
            Icon: ClipboardDocumentCheckIcon,
          },
        ]}
      >
        <div className="mb-2 flex w-full items-center justify-end">
          {expiredLoan ? (
            <Badge type="error" dot>
              Expired
            </Badge>
          ) : (
            <Badge type={badgeStatus} dot>
              {statusText}
            </Badge>
          )}
        </div>
      </TabHeading>

      <div className="container grid gap-8 px-6 py-10 sm:grid-cols-5 sm:gap-10 sm:px-4 sm:py-12 lg:px-12">
        <div className="flex sm:col-span-2">
          {/* Heading */}
          <div className="mb-6 flex items-start">
            <h1 className="font-brand text-4xl font-semibold sm:text-6xl">
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
                {startDateWithoutTimezone.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </strong>
            </h1>
            <ProgressCircle
              progress={
                ((transactions.docs.length -
                  transactions.data.scheduled.length) /
                  transactions.docs.length) *
                100
              }
            />
          </div>
        </div>

        {/* Loan details */}
        <div className="order-3 space-y-6 sm:col-span-2">
          <LoanDetailRow
            Icon={BuildingLibraryIcon}
            label="Loan type"
            value={
              type === 'CREDIT_BUILDER' ? 'Credit Builder' : 'Standard Loan'
            }
          />
          <LoanDetailRow Icon={HashtagIcon} label="Loan Number" value={id} />

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
            value={`${loanLength} Months`}
          />
          <LoanDetailRow
            Icon={CircleStackIcon}
            label="Monthly Payments"
            value={monthlyPayment.toLocaleString('en-US', {
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
            value={startDateWithoutTimezone.toLocaleDateString('en-US', {
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
                ? endDateWithoutTimezone.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Pending'
            }
          />

          <Divider className="col-span-2" />

          <div className="flex flex-col justify-between gap-4 text-xs text-gray-600 dark:text-gray-300 sm:text-sm">
            <p className="flex items-center gap-2 font-semibold capitalize">
              {paymentMethods.docs[0].type === 'card' ? (
                <CreditCardIcon className="h-4 w-4" />
              ) : (
                <BuildingLibraryIcon className="h-4 w-4" />
              )}
              Payment Method
            </p>
            <SettingsCardLink
              title={paymentMethodTitle(paymentMethods.docs[0])}
              detail={paymentMethodDetail(paymentMethods.docs[0])}
              placeholder="0123 4567 8910 1112"
              Icon={
                paymentMethods.docs[0].type === 'card'
                  ? CreditCardIcon
                  : BuildingLibraryIcon
              }
              link={setPaymentMethod?.url}
            />
          </div>

          <Divider className="col-span-2" />

          <div className="flex flex-col justify-between gap-2 text-xs text-gray-600 dark:text-gray-300 sm:text-sm">
            <p className="flex items-center gap-2 font-semibold capitalize">
              <ArchiveBoxIcon className="h-4 w-4" />
              End loan agreement early
            </p>
            <p>
              {`Send us an email to process@equiire.com with the subject 'Cancel
              Loan' and we'll get back to you as soon as we can.`}
            </p>
          </div>

          {loan.signatureCompleted ? (
            <>
              <Divider className="col-span-2" />

              <div className="flex flex-col items-start gap-2 sm:gap-4">
                <Button
                  href={`/api/loans/loan/download-signed-document?id=${id}`}
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <DocumentArrowDownIcon className="h-4 w-4" />
                  Download Loan Agreement
                </Button>

                {/* <Button variant="secondary" size="sm" className="w-full sm:w-auto">
                <PencilIcon className="h-4 w-4" />
                Add note
              </Button> */}
              </div>
            </>
          ) : null}
        </div>

        {transactions.docs.length ? (
          <div className="order-4 flex flex-col gap-2 sm:order-2 sm:col-span-3 sm:row-span-2 sm:gap-6">
            <TransactionCard
              transaction={transactions.data.first}
              transactionTotal={transactions.docs.length}
              title="First Payment"
            />
            {/* Paid transactions */}
            {transactions.data.history.length > 0 && (
              <TransactionAccordion
                transactions={transactions.data.history}
                transactionTotal={transactions.docs.length}
              />
            )}

            {/* Scheduled transactions */}
            {transactions.data.scheduled.length > 0 && (
              <>
                {/* Shows next payment if the "next" payment isn't the first payment */}
                {transactions.data.next.transactionCount !== 1 && (
                  <TransactionCard
                    transaction={transactions.data.next}
                    transactionTotal={transactions.docs.length}
                    title="Next Payment"
                  />
                )}
                <TransactionAccordion
                  transactions={transactions.data.scheduled.slice(
                    1,
                    transactions.data.scheduled.length - 1,
                  )}
                  transactionTotal={transactions.docs.length}
                />
              </>
            )}

            <TransactionCard
              transaction={transactions.data.last}
              transactionTotal={transactions.docs.length}
              title="Last Payment"
            />
          </div> // Needs re-implementation
        ) : (
          <div className="order-2 flex flex-col gap-2 sm:col-span-3 sm:row-span-2 sm:gap-6">
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
  value: React.ReactNode | string | number;
}) => {
  return (
    <div className="flex justify-between gap-8 text-xs text-gray-600 dark:text-gray-300 sm:text-sm">
      <p className="flex items-center gap-2 font-semibold capitalize">
        <Icon className="h-4 w-4" />
        {label}
      </p>
      <p>{value}</p>
    </div>
  );
};
