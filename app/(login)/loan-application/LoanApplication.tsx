'use client';
import { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

// This could potentially be moved elsewhere
export interface LoanDetails {
  type: 'CREDIT_BUILDER' | 'STANDARD';
  amount: 1000 | 2500 | 5000 | 10000 | 15000 | 25000;
  startDate: Date;
  repaymentPeriod: number;
  //scheduledPayment: string;
  //terms: string;
  //repaymentPeriod: string;
  //interestType: 'FIXED' | 'VARIABLE';
}

export const LOAN_VALUES = {
  1000: {
    creditCost: 100,
    apr: 19.189,
    monthlyPayment: 30,
  },
  2500: {
    creditCost: 150,
    apr: 19.189,
    monthlyPayment: 75,
  },
  5000: {
    creditCost: 200,
    apr: 19.189,
    monthlyPayment: 150,
  },
  10000: {
    creditCost: 300,
    apr: 14.345,
    monthlyPayment: 275,
  },
  15000: {
    creditCost: 400,
    apr: 11.264,
    monthlyPayment: 275,
  },
  25000: {
    creditCost: 500,
    apr: 10.265,
    monthlyPayment: 650,
  },
};

export function LoanApplication() {
  const [step, setStep] = useState(0);
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    type: 'CREDIT_BUILDER',
    amount: 10000,
    startDate: new Date(),
    repaymentPeriod: 48,
    //scheduledPayment: '500',
    //terms: 'monthly',
    //interestType: 'FIXED',
  });
  // This will be needed again when the user can choose Loan Terms
  // const { type, terms } = loanDetails;
  // // I am using useLayoutEffect here to stop there being a flicker on the slider when changing the RadioGroup
  // useLayoutEffect(() => {
  //   if (type === 'CREDIT_BUILDER') {
  //     setLoanDetails((loanDetails) => ({
  //       ...loanDetails,
  //       amount: '10000',
  //       scheduledPayment: '500',
  //       // wipes properties that are no longer visible to user
  //       repaymentPeriod: '',
  //       interestType: 'FIXED',
  //     }));
  //   } else if (type === 'STANDARD') {
  //     setLoanDetails((loanDetails) => ({
  //       ...loanDetails,
  //       amount: '50000',
  //       repaymentPeriod: '12',
  //       interestType: 'FIXED',
  //       // wipes properties that are no longer visible to user
  //       scheduledPayment: '',
  //     }));
  //   }
  // }, [type]);

  // useLayoutEffect(() => {
  //   if (terms === 'length') {
  //     if (type === 'CREDIT_BUILDER') {
  //       setLoanDetails((loanDetails) => ({
  //         ...loanDetails,
  //         repaymentPeriod: '24',
  //         // wipes properties no longer visible to user
  //         scheduledPayment: '',
  //       }));
  //     } else {
  //       setLoanDetails((loanDetails) => ({
  //         ...loanDetails,
  //         repaymentPeriod: '12',
  //         // wipes properties no longer visible to user
  //         scheduledPayment: '',
  //       }));
  //     }
  //   } else if (terms === 'monthly') {
  //     if (type === 'CREDIT_BUILDER') {
  //       setLoanDetails((loanDetails) => ({
  //         ...loanDetails,
  //         scheduledPayment: '500',
  //         // wipes properties no longer visible to user
  //         repaymentPeriod: '',
  //       }));
  //     } else {
  //       setLoanDetails((loanDetails) => ({
  //         ...loanDetails,
  //         scheduledPayment: '5000',
  //         // wipes properties no longer visible to user
  //         repaymentPeriod: '',
  //       }));
  //     }
  //   }
  // }, [terms, type]);

  return (
    <div className="mx-auto flex flex-col justify-center sm:flex-row lg:gap-10">
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
        className={clsx({ 'hidden lg:grid': step === 0, 'w-full': step === 1 })}
        step={step}
        setStep={setStep}
      />
    </div>
  );
}
