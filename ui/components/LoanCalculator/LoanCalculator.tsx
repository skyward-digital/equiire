'use client';
import { useState, useLayoutEffect } from 'react';
import { RadioGroup } from '#/ui/components/RadioGroup';
import { Label } from '#/ui/components/Label';
import { SliderGroup } from '#/ui/components/SliderGroup';
import { Select, SelectItem } from '#/ui/components/Select';
import { Button } from '#/ui/components/Button';

export function LoanCalculator() {
  // This has potential to be refactored but these states will be moving outside of this component later in integration
  const [loanType, setLoanType] = useState('credit-builder');
  const [loanAmount, setLoanAmount] = useState('10000');
  const [loanTerms, setLoanTerms] = useState('monthly');
  const [scheduledPayment, setScheduledPayment] = useState('500');
  const [repaymentPeriod, setRepaymentPeriod] = useState('24');
  const [interestType, setInterestType] = useState('fixed');

  // I am using useLayoutEffect here to stop there being a flicker on the slider when changing the RadioGroup
  useLayoutEffect(() => {
    if (loanType === 'credit-builder') {
      setLoanAmount('10000');
      setRepaymentPeriod('24');
      setScheduledPayment('500');
    } else if (loanType === 'standard') {
      setLoanAmount('50000');
      setRepaymentPeriod('12');
      setScheduledPayment('5000');
    }
  }, [loanType]);

  const loanTypeTitle = {
    'credit-builder': 'Credit Builder',
    standard: 'Standard Loan',
  }[loanType];

  const loanTypeDescriptionBold = {
    'credit-builder': 'Establish or improve your credit history.',
    standard: 'Benefit from lower interest rates and fees.',
  }[loanType];

  const loanTypeDescription = {
    'credit-builder':
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    standard:
      'Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
  }[loanType];

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
  }[loanType as 'credit-builder' | 'standard'];

  return (
    <section className="dark:border-brand-secondary flex min-w-[340px] max-w-3xl flex-col gap-10 rounded-lg bg-white px-6 py-8 dark:bg-black sm:border sm:border-gray-100 sm:px-8 sm:py-16 sm:shadow-sm">
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
            value={loanType}
            onChange={setLoanType}
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
          value={loanAmount}
          onChange={setLoanAmount}
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
            value={loanTerms}
            onChange={setLoanTerms}
          />
        </div>
        {/* Scheduled payment */}
        {loanTerms === 'monthly' && (
          <SliderGroup
            label="Scheduled Payment"
            min={sliderGroupValues.scheduledPayment.min}
            max={sliderGroupValues.scheduledPayment.max}
            options={sliderGroupValues.scheduledPayment.options}
            value={scheduledPayment}
            onChange={setScheduledPayment}
          />
        )}
        {/* Repayment Period */}
        {loanTerms === 'length' && (
          <SliderGroup
            label="Repayment Period"
            type="months"
            min={sliderGroupValues.repaymentPeriod.min}
            max={sliderGroupValues.repaymentPeriod.max}
            options={sliderGroupValues.repaymentPeriod.options}
            value={repaymentPeriod}
            onChange={setRepaymentPeriod}
          />
        )}
        {loanType === 'standard' && (
          <div className="flex items-center justify-between ">
            <Label
              htmlFor="interest-type"
              className="text-xl font-semibold text-gray-600 dark:text-white"
            >
              Type of Interest
            </Label>
            <Select
              id="interest-type"
              className="max-w-xs"
              value={interestType}
              onValueChange={setInterestType}
            >
              <SelectItem value="fixed">Fixed</SelectItem>
              <SelectItem value="variable">Variable</SelectItem>
            </Select>
          </div>
        )}
        <Button className="sm:hidden" variant="primary">
          Next
        </Button>
      </div>
    </section>
  );
}
