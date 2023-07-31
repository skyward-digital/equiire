'use client';
import { useState } from 'react';
import { ProgressSteps } from '#/ui/components/ProgressSteps';
import { SignupCard } from '#/ui/components/SignupCard';
import { PersonalInformationForm } from './PersonalInformationForm';
import { AdditionalDetailsForm } from './AdditionalDetailsForm';
import { PasswordForm } from './PasswordForm';

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export function SignupForm() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({});
  const { component: CurrentFormComponent, title } = FORM_STEPS[step];

  return (
    <SignupCard className="sm:mt-20" back={() => setStep(step - 1)} step={step}>
      <ProgressSteps
        className="mb-10"
        totalSteps={FORM_STEPS.length}
        currentStep={step}
      />
      <h2 className="text-brand mb-10 text-center font-semibold">{title}</h2>
      <CurrentFormComponent
        formData={formData}
        setFormData={setFormData}
        setStep={setStep}
      />
    </SignupCard>
  );
}
