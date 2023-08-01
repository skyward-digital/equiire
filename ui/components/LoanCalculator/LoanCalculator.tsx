import { LoanDetails } from '#/app/(login)/loan-application/page';
import { RadioGroup } from '#/ui/components/RadioGroup';
import { Label } from '#/ui/components/Label';
import { SliderGroup } from '#/ui/components/SliderGroup';
import { Select, SelectItem } from '#/ui/components/Select';
import { Button } from '#/ui/components/Button';

export function LoanCalculator({
  setStep,
  loanDetails,
  setLoanDetails,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  loanDetails: LoanDetails;
  setLoanDetails: React.Dispatch<React.SetStateAction<LoanDetails>>;
}) {
  const loanTypeTitle = {
    'credit-builder': 'Credit Builder',
    standard: 'Standard Loan',
  }[loanDetails.loanType];

  const loanTypeDescriptionBold = {
    'credit-builder': 'Establish or improve your credit history.',
    standard: 'Benefit from lower interest rates and fees.',
  }[loanDetails.loanType];

  const loanTypeDescription = {
    'credit-builder':
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    standard:
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
  }[loanDetails.loanType];

  const sliderGroupValues = {
    'credit-builder': {
      loanAmount: {
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
    standard: {
      loanAmount: {
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
  }[loanDetails.loanType as 'credit-builder' | 'standard'];

  return (
    <section className="dark:border-brand-secondary flex max-w-3xl flex-col gap-10 rounded-lg bg-white px-6 py-8 dark:bg-black sm:border sm:border-gray-100 sm:px-8 sm:py-16 sm:shadow-sm">
      <h2 className="font-brand flex flex-col text-3xl tracking-tight text-gray-400 dark:text-gray-300 sm:block sm:text-4xl">
        <span className="font-semibold text-gray-600 dark:text-gray-100">
          Tailor Your Loan
        </span>{' '}
        to Fit Your Needs
      </h2>
      <div className="grid gap-8">
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
              { label: 'Credit Builder', value: 'credit-builder' },
              { label: 'Standard Loan', value: 'standard' },
            ]}
            id="loan-type"
            value={loanDetails.loanType}
            onChange={(value) =>
              setLoanDetails({
                ...loanDetails,
                loanType: value as 'credit-builder' | 'standard',
              })
            }
            ariaLabel="Loan Type"
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
          min={sliderGroupValues.loanAmount.min}
          max={sliderGroupValues.loanAmount.max}
          options={sliderGroupValues.loanAmount.options}
          value={loanDetails.loanAmount}
          onChange={(value) =>
            setLoanDetails({ ...loanDetails, loanAmount: value })
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
            value={loanDetails.loanTerms}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, loanTerms: value })
            }
          />
        </div>
        {/* Scheduled payment */}
        {loanDetails.loanTerms === 'monthly' && (
          <SliderGroup
            label="Scheduled Payment"
            min={sliderGroupValues.scheduledPayment.min}
            max={sliderGroupValues.scheduledPayment.max}
            options={sliderGroupValues.scheduledPayment.options}
            value={loanDetails.scheduledPayment}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, scheduledPayment: value })
            }
          />
        )}
        {/* Repayment Period */}
        {loanDetails.loanTerms === 'length' && (
          <SliderGroup
            label="Repayment Period"
            type="months"
            min={sliderGroupValues.repaymentPeriod.min}
            max={sliderGroupValues.repaymentPeriod.max}
            options={sliderGroupValues.repaymentPeriod.options}
            value={loanDetails.repaymentPeriod}
            onChange={(value) =>
              setLoanDetails({ ...loanDetails, repaymentPeriod: value })
            }
          />
        )}
        {loanDetails.loanType === 'standard' && (
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
              value={loanDetails.interestType}
              onValueChange={(value) =>
                setLoanDetails({ ...loanDetails, interestType: value })
              }
            >
              <SelectItem value="fixed">Fixed</SelectItem>
              <SelectItem value="variable">Variable</SelectItem>
            </Select>
          </div>
        )}
        <Button
          className="sm:hidden"
          variant="primary"
          onClick={() => setStep((step: number) => step + 1)}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
