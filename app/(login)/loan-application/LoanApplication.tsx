'use client';
import { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

// This could potentially be moved elsewhere
export interface LoanDetails {
  type: 'CREDIT_BUILDER' | 'STANDARD';
  amount: string;
  terms: string;
  repaymentPeriod: string;
  scheduledPayment: string;
  interestType: 'FIXED' | 'VARIABLE';
  startDate: Date;
}

export function LoanApplication() {
  const [step, setStep] = useState(0);
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    type: 'CREDIT_BUILDER',
    amount: '10000',
    terms: 'monthly',
    repaymentPeriod: '0',
    scheduledPayment: '500',
    interestType: 'FIXED',
    startDate: new Date(),
  });
  const { type, terms } = loanDetails;

  // I am using useLayoutEffect here to stop there being a flicker on the slider when changing the RadioGroup
  useLayoutEffect(() => {
    if (type === 'CREDIT_BUILDER') {
      setLoanDetails((loanDetails) => ({
        ...loanDetails,
        amount: '10000',
        scheduledPayment: '500',
        // wipes properties that are no longer visible to user
        repaymentPeriod: '',
        interestType: 'FIXED',
      }));
    } else if (type === 'STANDARD') {
      setLoanDetails((loanDetails) => ({
        ...loanDetails,
        amount: '50000',
        repaymentPeriod: '12',
        interestType: 'FIXED',
        // wipes properties that are no longer visible to user
        scheduledPayment: '',
      }));
    }
  }, [type]);

  useLayoutEffect(() => {
    if (terms === 'length') {
      if (type === 'CREDIT_BUILDER') {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          repaymentPeriod: '24',
          // wipes properties no longer visible to user
          scheduledPayment: '',
        }));
      } else {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          repaymentPeriod: '12',
          // wipes properties no longer visible to user
          scheduledPayment: '',
        }));
      }
    } else if (terms === 'monthly') {
      if (type === 'CREDIT_BUILDER') {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          scheduledPayment: '500',
          // wipes properties no longer visible to user
          repaymentPeriod: '',
        }));
      } else {
        setLoanDetails((loanDetails) => ({
          ...loanDetails,
          scheduledPayment: '5000',
          // wipes properties no longer visible to user
          repaymentPeriod: '',
        }));
      }
    }
  }, [terms, type]);

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
