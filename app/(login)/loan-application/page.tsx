'use client';
import { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

// This could potentially be moved elsewhere
export interface LoanDetails {
  loanType: 'credit-builder' | 'standard';
  loanAmount: string;
  loanTerms: string;
  repaymentPeriod: string;
  scheduledPayment: string;
  interestType: string;
  loanStartDate: Date;
}

export default function Page() {
  const [step, setStep] = useState(0);
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    loanType: 'credit-builder',
    loanAmount: '10000',
    loanTerms: 'monthly',
    repaymentPeriod: '0',
    scheduledPayment: '500',
    interestType: '',
    loanStartDate: new Date(),
  });

  const { loanType, loanTerms } = loanDetails;

  // I am using useLayoutEffect here to stop there being a flicker on the slider when changing the RadioGroup
  useLayoutEffect(() => {
    if (loanType === 'credit-builder') {
      setLoanDetails((loanDetails) => ({
        ...loanDetails,
        loanAmount: '10000',
        scheduledPayment: '500',
        // wipes the properties that are no longer visible to user
        repaymentPeriod: '',
        interestType: '',
      }));
    } else if (loanType === 'standard') {
      setLoanDetails((loanDetails) => ({
        ...loanDetails,
        loanAmount: '50000',
        repaymentPeriod: '12',
        interestType: 'fixed',
        // wipes properties that are no longer visible to user
        scheduledPayment: '',
      }));
    }
  }, [loanType]);

  useLayoutEffect(() => {
    if (loanTerms === 'length') {
      if (loanType === 'credit-builder') {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          repaymentPeriod: '24',
          scheduledPayment: '',
        }));
      } else {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          repaymentPeriod: '12',
          scheduledPayment: '',
        }));
      }
    } else if (loanTerms === 'monthly') {
      if (loanType === 'credit-builder') {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          scheduledPayment: '500',
          repaymentPeriod: '',
        }));
      } else {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          scheduledPayment: '5000',
          repaymentPeriod: '',
        }));
      }
    }
  }, [loanTerms, loanType]);

  const handleNext = () => {
    if (step !== 1) {
      setStep((step: number) => step + 1);
    } else {
      onSubmit();
    }
  };

  // This is where we will integrate with the API
  const onSubmit = () => {
    console.log(loanDetails);
  };

  return (
    <div className="mx-auto flex flex-col justify-center gap-10 sm:mt-20 sm:flex-row">
      {step === 0 && (
        <LoanCalculator
          setStep={setStep}
          loanDetails={loanDetails}
          setLoanDetails={setLoanDetails}
        />
      )}
      <LoanSummaryBox
        size={step === 0 ? 'sm' : 'lg'}
        loanDetails={loanDetails}
        setLoanDetails={setLoanDetails}
        className={clsx({ 'hidden sm:grid': step === 0, 'w-full': step === 1 })}
        setStep={setStep}
        handleNext={handleNext}
      />
    </div>
  );
}
