'use client';
import { useState, useLayoutEffect, useEffect } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

// This could potentially be moved elsewhere
export interface LoanDetails {
  type: 'CREDIT_BUILDER' | 'STANDARD';
  amount: 1000 | 2500 | 5000 | 10000 | 15000 | 25000;
  fee: number;
  length: number;
  monthlyPayment: number;
  apr: number;
  totalRepayable: number;
  creditCost: number;
  startDate: Date;
  interestType: 'FIXED' | 'VARIABLE';
}

export function LoanApplication() {
  const [step, setStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<
    1000 | 2500 | 5000 | 10000 | 15000 | 25000
  >(10000);
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().setDate(new Date().getDate() + 1)), // tomorrow
  ); // tomorrow;

  const [loanDetails, setLoanDetails] = useState<LoanDetails>();

  const getLoanDetails = async ({
    amount,
    // length,
    startDate,
  }: {
    amount: 1000 | 2500 | 5000 | 10000 | 15000 | 25000;
    // length: 48;
    startDate: Date;
  }) => {
    const loanDetails = await fetch('/api/loans/calculateLoanDetails', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        length: 48,
      }),
    });

    const data = await loanDetails.json();

    setLoanDetails({
      ...data.data,
      startDate,
    });
  };

  useEffect(() => {
    getLoanDetails({
      amount: selectedAmount,
      startDate,
    });
  }, [selectedAmount, startDate]);

  return (
    <div className="mx-auto flex flex-col justify-center sm:flex-row lg:gap-10">
      {loanDetails && (
        <>
          {step === 0 && (
            <LoanCalculator
              setStep={setStep}
              loanDetails={loanDetails}
              setSelectedAmount={setSelectedAmount}
            />
          )}
          <LoanSummaryBox
            size={step === 0 ? 'sm' : 'lg'}
            loanDetails={loanDetails}
            setStartDate={setStartDate}
            step={step}
            setStep={setStep}
            className={clsx({
              'hidden lg:grid': step === 0,
              'w-full': step === 1,
            })}
          />
        </>
      )}
    </div>
  );
}
