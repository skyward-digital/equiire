'use client';
import { useState } from 'react';
import { ProgressSteps } from '#/ui/components/ProgressSteps';
import { LoginCard } from '#/ui/components/LoginCard';
import { PersonalInformationForm } from './PersonalInformationForm';
import { AdditionalDetailsForm } from './AdditionalDetailsForm';
import { PasswordForm } from './PasswordForm';
import { Loan } from '#/app/(login)/sign-up/page';
import { OtpForm } from '#/ui/components/OtpForm';
import { useRouter } from 'next/navigation';

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export interface FormData {
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  company: string;
  name: string;
  postalCode: string;
  state: string;
}

export function SignupForm({ loan }: { loan: Loan }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    company: '',
    name: '',
    postalCode: '',
    state: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { component: CurrentFormComponent, title } = FORM_STEPS[step];
  const router = useRouter();

  // What the user will see after submitting the sign up form (OTP form)
  if (formSubmitted) {
    return (
      <LoginCard
        title="Confirm your email address"
        description="We have sent you an email. You can enter the code from the email below to confirm your email address."
        className="sm:mt-20"
        back={() => {
          setStep(0);
          setFormSubmitted(false);
        }}
      >
        <OtpForm
          onSuccess={(otp) =>
            router.push(`/confirm-email?email=${formData.email}&code=${otp}`)
          }
        />
      </LoginCard>
    );
  }

  return (
    <LoginCard
      title="Complete your loan application"
      className="sm:mt-20"
      back={step !== 0 ? () => setStep(step - 1) : undefined}
      showTermsNotice
    >
      <ProgressSteps
        className="mb-10"
        totalSteps={FORM_STEPS.length}
        currentStep={step}
      />
      <h2 className="text-brand mb-10 text-center font-semibold">{title}</h2>
      <CurrentFormComponent
        formData={formData}
        loan={loan}
        setFormData={setFormData}
        setStep={setStep}
        setFormSubmitted={setFormSubmitted}
      />
    </LoginCard>
  );
}
