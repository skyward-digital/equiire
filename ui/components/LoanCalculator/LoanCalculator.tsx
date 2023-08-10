import { LoanDetails } from '#/app/(login)/loan-application/page';
import { RadioGroup } from '#/ui/components/RadioGroup';
import { Label } from '#/ui/components/Label';
import { SliderGroup } from '#/ui/components/SliderGroup';
import { Select, SelectItem } from '#/ui/components/Select';
import { Button } from '#/ui/components/Button';

export type LoanCalculatorProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  loanDetails: LoanDetails;
  setLoanDetails: React.Dispatch<React.SetStateAction<LoanDetails>>;
};

export function LoanCalculator({
  setStep,
  loanDetails,
  setLoanDetails,
}: LoanCalculatorProps) {
  const {
    type,
    amount,
    terms,
    repaymentPeriod,
    scheduledPayment,
    interestType,
  } = loanDetails;

  const loanTypeTitle = {
    CREDIT_BUILDER: 'Credit Builder',
    STANDARD: 'Standard Loan',
  }[type];

  const loanTypeDescriptionBold = {
    CREDIT_BUILDER: 'Establish or improve your credit history.',
    STANDARD: 'Benefit from lower interest rates and fees.',
  }[type];

  const loanTypeDescription = {
    CREDIT_BUILDER:
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    STANDARD:
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
  }[type];

  const sliderGroupValues = {
    CREDIT_BUILDER: {
      amount: {
        min: 1000,
        max: 20000,
        options: [1000, 10000, 20000],
      },
      repaymentPeriod: {
        min: 12,
        max: 60,
        options: [12, 24, 36, 48, 60],
      },
      scheduledPayment: {
        min: 250,
        max: 1000,
        options: [250, 500, 750, 1000],
      },
    },
    STANDARD: {
      amount: {
        min: 2500,
        max: 100000,
        options: [2500, 5000, 10000, 25000, 50000, 100000],
      },
      repaymentPeriod: {
        min: 6,
        max: 60,
        options: [6, 12, 24, 36, 48, 60],
      },
      scheduledPayment: {
        min: 250,
        max: 10000,
        options: [250, 500, 750, 1000, 2500, 5000, 10000],
      },
    },
  }[type as 'CREDIT_BUILDER' | 'STANDARD'];

  return (
    <section className="dark:border-brand-secondary mb-20 flex max-w-3xl flex-col gap-10 rounded-lg bg-white px-6 pb-8 dark:bg-black sm:mb-0 md:border md:border-gray-100 md:px-8 md:py-16 md:shadow-sm">
      <div className="fixed z-20 w-full bg-white pb-4 pt-6 dark:bg-black sm:static sm:py-0">
        <h2 className="font-brand flex flex-col text-3xl tracking-tight text-gray-400 dark:text-gray-300 sm:block sm:text-4xl">
          <span className="font-semibold text-gray-600 dark:text-gray-100">
            Tailor Your Loan
          </span>{' '}
          to Fit Your Needs
        </h2>
      </div>
      <div className="mt-28 grid gap-8 sm:mt-0">
        {/* Loan type */}
        <div className="flex items-center justify-between">
          <Label
            className="font-brand hidden text-xl font-semibold text-gray-600 dark:text-white sm:block"
            htmlFor="loan-type"
          >
            Loan Type
          </Label>
          <RadioGroup
            options={[
              { label: 'Credit Builder', value: 'CREDIT_BUILDER' },
              { label: 'Standard Loan', value: 'STANDARD' },
            ]}
            id="loan-type"
            value={type}
            onChange={(value) =>
              setLoanDetails({
                ...loanDetails,
                type: value as 'CREDIT_BUILDER' | 'STANDARD',
              })
            }
            ariaLabel="Loan Type"
            className="mx-auto sm:mx-0"
          />
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
          value={amount}
          onChange={(value) =>
            setLoanDetails({ ...loanDetails, amount: value })
          }
        />
      </div>
      <div className="grid gap-8">
        {/* Loan terms */}
        <div className="flex items-center justify-between">
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
        {/* Scheduled payment */}
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
        {/* Repayment Period */}
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
