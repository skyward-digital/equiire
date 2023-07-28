'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { LoanCalculator } from '#/ui/components/LoanCalculator';
import { LoanSummaryBox } from '#/ui/components/LoanSummaryBox';

export default function Page() {
  const [step, setStep] = useState(0);
  return (
    <div className="mx-auto flex flex-col justify-center gap-10 sm:mt-20 sm:flex-row">
      {step === 0 && <LoanCalculator setStep={setStep} />}
      <LoanSummaryBox
        size={step === 0 ? 'sm' : 'lg'}
        value={10000}
        type="credit-builder"
        className={clsx({ 'hidden sm:grid': step === 0, 'w-full': step === 1 })}
        setStep={setStep}
      />
    </div>
  );
}
