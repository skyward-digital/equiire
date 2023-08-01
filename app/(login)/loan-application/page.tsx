'use client';
import { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

export default function Page() {
  const [step, setStep] = useState(0);
  const [loanType, setLoanType] = useState('credit-builder');
  const [loanAmount, setLoanAmount] = useState('10000');
  const [loanTerms, setLoanTerms] = useState('monthly');
  const [repaymentPeriod, setRepaymentPeriod] = useState('0');
  const [scheduledPayment, setScheduledPayment] = useState('500');
  const [interestType, setInterestType] = useState('');
  const [loanStartDate, setLoanStartDate] = useState(new Date());

  // I am using useLayoutEffect here to stop there being a flicker on the slider when changing the RadioGroup
  useLayoutEffect(() => {
    if (loanType === 'credit-builder') {
      setLoanAmount('10000');
      setScheduledPayment('500');
      // wipes the properties that are no longer visible
      setRepaymentPeriod('');
      setInterestType('');
    } else if (loanType === 'standard') {
      setLoanAmount('50000');
      setRepaymentPeriod('12');
      setInterestType('fixed');
      // wipes the properties that are no longer visible
      setScheduledPayment('');
    }
  }, [loanType]);

  useLayoutEffect(() => {
    if (loanTerms === 'length') {
      if (loanType === 'credit-builder') {
        setRepaymentPeriod('24');
        setScheduledPayment('');
      } else {
        setRepaymentPeriod('12');
        setScheduledPayment('');
      }
    }
    if (loanTerms === 'monthly') {
      if (loanType === 'credit-builder') {
        setScheduledPayment('500');
        setRepaymentPeriod('');
      } else {
        setScheduledPayment('5000');
        setRepaymentPeriod('');
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
    console.log({
      loanType,
      loanAmount,
      loanTerms,
      repaymentPeriod,
      scheduledPayment,
      interestType,
      loanStartDate,
    });
  };

  return (
    <div className="mx-auto flex flex-col justify-center gap-10 sm:mt-20 sm:flex-row">
      {step === 0 && (
        <LoanCalculator
          setStep={setStep}
          loanType={loanType}
          loanAmount={loanAmount}
          loanTerms={loanTerms}
          repaymentPeriod={repaymentPeriod}
          scheduledPayment={scheduledPayment}
          interestType={interestType}
          setLoanType={setLoanType}
          setLoanAmount={setLoanAmount}
          setLoanTerms={setLoanTerms}
          setRepaymentPeriod={setRepaymentPeriod}
          setScheduledPayment={setScheduledPayment}
          setInterestType={setInterestType}
        />
      )}
      <LoanSummaryBox
        size={step === 0 ? 'sm' : 'lg'}
        type="credit-builder"
        className={clsx({ 'hidden sm:grid': step === 0, 'w-full': step === 1 })}
        setStep={setStep}
        handleNext={handleNext}
        loanType={loanType}
        loanAmount={parseInt(loanAmount)}
        loanTerms={loanTerms}
        repaymentPeriod={repaymentPeriod}
        scheduledPayment={parseInt(scheduledPayment)}
        loanStartDate={loanStartDate}
        setLoanStartDate={setLoanStartDate}
      />
    </div>
  );
}
