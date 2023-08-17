'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { LoginCard } from '#/ui/components/LoginCard';
import { OtpForm } from '#/ui/components/OtpForm';
import {
  PersonalInformationForm,
  AdditionalDetailsForm,
  PasswordForm,
} from '#/ui/components/SignupForm';
import { ProgressSteps } from '#/ui/components/ProgressSteps';

export interface Loan {
  type?: string | null;
  amount?: string | null;
  length?: string | null;
  monthlyPayment?: string | null;
  startDate?: string | null;
}

export interface FormData {
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  company: string;
  name: string;
  postalCode: string;
  state: string;
  phone: string;
}

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInformationForm },
  { title: 'Additional Information', component: AdditionalDetailsForm },
  { title: 'Password', component: PasswordForm },
];

export default function Page() {
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
    phone: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const { component: CurrentFormComponent, title } = FORM_STEPS[step];

  const searchParams = useSearchParams();
  const loan = {
    type: searchParams?.get('type'),
    amount: searchParams?.get('amount'),
    length: searchParams?.get('length'),
    monthlyPayment: searchParams?.get('monthlyPayment'),
    startDate: searchParams?.get('startDate'),
  };

  // What the user will see after submitting the sign up form (OTP form)
  if (formSubmitted) {
    return (
      <LoginCard
        title="Confirm your email address"
        description="We have sent you an email. You can enter the code from the email below to confirm your email address."
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

  // Default state, displays sign up form with progress steps
  return (
    <LoginCard
      title="Complete your loan application"
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
