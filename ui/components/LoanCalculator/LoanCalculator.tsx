import { LoanDetails } from '#/app/(login)/loan-application/LoanApplication';
import { RadioGroup } from '#/ui/components/RadioGroup';
import { Label } from '#/ui/components/Label';
import { SliderGroup } from '#/ui/components/SliderGroup';
//import { Select, SelectItem } from '#/ui/components/Select';
import { Button } from '#/ui/components/Button';

export type LoanCalculatorProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  loanDetails: LoanDetails;
  setSelectedAmount: React.Dispatch<
    React.SetStateAction<LoanDetails['amount']>
  >;
};

export function LoanCalculator({
  setStep,
  loanDetails,
  setSelectedAmount,
}: LoanCalculatorProps) {
  const {
    type,
    amount,
    fee,
    length,
    monthlyPayment,
    apr,
    totalRepayable,
    creditCost,
    startDate,
    interestType,
  } = loanDetails;

  console.log(loanDetails);

  const loanTypeTitle = {
    CREDIT_BUILDER: 'Credit Builder',
    STANDARD: 'Standard Loan',
  }[type];

  const loanTypeDescriptionBold = {
    CREDIT_BUILDER: 'Establish or improve your credit history.',
    STANDARD: 'Benefit from lower interest rates and fees.',
  }[type];

  const loanTypeDescription = {
    CREDIT_BUILDER: '',
    STANDARD: '',
  }[type];

  const sliderGroupValues = {
    CREDIT_BUILDER: {
      amount: {
        min: 1000,
        max: 25000,
        options: [1000, 2500, 5000, 10000, 15000, 25000],
      },
      // repaymentPeriod: {
      //   min: 12,
      //   max: 60,
      //   options: [12, 24, 36, 48, 60],
      // },
      // scheduledPayment: {
      //   min: 250,
      //   max: 1000,
      //   options: [250, 500, 750, 1000],
      // },
    },
    STANDARD: {
      amount: {
        min: 2500,
        max: 100000,
        options: [2500, 5000, 10000, 25000, 50000, 100000],
      },
      // repaymentPeriod: {
      //   min: 6,
      //   max: 60,
      //   options: [6, 12, 24, 36, 48, 60],
      // },
      // scheduledPayment: {
      //   min: 250,
      //   max: 10000,
      //   options: [250, 500, 750, 1000, 2500, 5000, 10000],
      // },
    },
  }[type as 'CREDIT_BUILDER' | 'STANDARD'];

  return (
    <section className="dark:border-brand-secondary mb-20 flex max-w-3xl flex-col gap-10 rounded-lg bg-white px-6 pb-8 dark:bg-black sm:mb-0 md:border md:border-gray-100 md:px-8 md:py-16 md:shadow-sm">
      <div className="fixed z-20 w-full bg-white pb-4 pt-6 dark:bg-black sm:static md:py-0">
        <h2 className="font-brand flex flex-col text-3xl tracking-tight text-gray-400 dark:text-gray-300 sm:block sm:text-4xl">
          <span className="font-semibold text-gray-600 dark:text-gray-100">
            Tailor Your Loan
          </span>{' '}
          to Fit Your Needs
        </h2>
      </div>
      <div className="mt-36 grid gap-8 sm:mt-0">
        {/* Loan type */}

        <div className="flex items-center justify-between">
          <Label
            className="font-brand hidden text-xl font-semibold text-gray-600 dark:text-white sm:block"
            htmlFor="loan-type"
          >
            Loan Type
          </Label>
          <div className="relative mx-auto sm:mx-0">
            <p className="text-brand font-brand absolute -top-6 right-2 text-xs font-semibold">
              Coming soon
            </p>
            <RadioGroup
              options={[
                { label: 'Credit Builder', value: 'CREDIT_BUILDER' },
                { label: 'Standard Loan', value: 'STANDARD', disabled: true },
              ]}
              id="loan-type"
              value={type}
              onChange={(value) => null}
              //   setLoanDetails({
              //     ...loanDetails,
              //     type: value as 'CREDIT_BUILDER' | 'STANDARD',
              //   })
              // }
              ariaLabel="Loan Type"
            />
          </div>
        </div>
        {/* Loan description */}
        <div className="font-sm border-brand/25 grid gap-1 rounded-lg border p-4 text-gray-500 dark:border-gray-400/50 dark:text-gray-200">
          <p className="text-brand">{loanTypeTitle}</p>
          <p>
            <span className="font-bold text-gray-600 dark:text-white">
              {loanTypeDescriptionBold}
            </span>{' '}
            {loanTypeDescription}
          </p>
        </div>
        {/* Loan amount */}
        <SliderGroup
          label="Loan Amount"
          min={sliderGroupValues.amount.min}
          max={sliderGroupValues.amount.max}
          options={sliderGroupValues.amount.options}
          value={amount.toString()}
          onChange={(value) =>
            setSelectedAmount(Number(value) as LoanDetails['amount'])
          }
        />
      </div>
      <div className="mt-3 grid gap-8">
        <div className="font-brand hidden text-xl font-semibold text-gray-600 dark:text-white sm:block">
          Loan Terms
        </div>
        <div className="flex items-center justify-between">
          <Label
            htmlFor="monthly-payment"
            className="font-brand block flex-1 text-xl text-gray-600 dark:text-white"
          >
            Monthly Payments
          </Label>
          <div
            className="text-lg text-gray-600 dark:text-white"
            id="monthly-payment"
          >
            {monthlyPayment.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            })}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Label
            htmlFor="loan-length"
            className="font-brand block flex-1 text-xl text-gray-600 dark:text-white"
          >
            Loan Length
          </Label>
          <div
            className="text-lg text-gray-600 dark:text-white"
            id="monthly-payment"
          >
            {length} Months
          </div>
        </div>
        {/* Loan terms user selection - to be used later */}
        {/* <div className="flex items-center justify-between">
          <Label
            className="font-brand hidden text-xl font-semibold text-gray-600 dark:text-white sm:block"
            htmlFor="loan-type"
          >
            Loan Terms
          </Label>
          <RadioGroup
            options={[
              { label: 'Monthly Payments', value: 'monthly' },
              { label: 'Loan Length', value: 'length' },
            ]}
            id="loan-terms"
            value={terms}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, terms: value })
            }
            className="mx-auto sm:mx-0"
          />
        </div>
        {terms === 'monthly' && (
          <SliderGroup
            label="Scheduled Payment"
            min={sliderGroupValues.scheduledPayment.min}
            max={sliderGroupValues.scheduledPayment.max}
            options={sliderGroupValues.scheduledPayment.options}
            value={scheduledPayment}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, scheduledPayment: value })
            }
          />
        )}
        {terms === 'length' && (
          <SliderGroup
            label="Repayment Period"
            type="months"
            min={sliderGroupValues.repaymentPeriod.min}
            max={sliderGroupValues.repaymentPeriod.max}
            options={sliderGroupValues.repaymentPeriod.options}
            value={repaymentPeriod}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, repaymentPeriod: value })
            }
          />
        )}
        {type === 'STANDARD' && (
          <div className="flex items-center justify-between ">
            <Label
              htmlFor="interest-type"
              className="font-brand flex-1 text-xl font-normal text-gray-600 dark:text-white sm:font-semibold"
            >
              Type of Interest
            </Label>
            <Select
              id="interest-type"
              className="max-w-xs flex-1"
              value={interestType}
              onValueChange={(value) =>
                setLoanDetails({
                  ...loanDetails,
                  interestType: value as 'FIXED' | 'VARIABLE',
                })
              }
            >
              <SelectItem value="FIXED">Fixed</SelectItem>
              <SelectItem value="VARIABLE">Variable</SelectItem>
            </Select>
          </div>
        )}
         */}
        <div className="fixed bottom-0 left-0 right-0 z-20 w-full bg-white px-4 pb-5 pt-3 dark:bg-black sm:static sm:p-0 lg:hidden">
          <Button
            className="w-full lg:hidden"
            variant="primary"
            onClick={() => setStep((step: number) => step + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
