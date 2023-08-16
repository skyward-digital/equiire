'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
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

export function SignUp({ user }: { user: any }) {
  const router = useRouter();
  const { update: updateSession } = useSession();
  const [step, setStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: user?.email ?? '',
    addressLine1: user?.address.addressLine1 ?? '',
    addressLine2: user?.address.addressLine2 ?? '',
    city: user?.address.city ?? '',
    company: user?.company ?? '',
    name: user?.name ?? '',
    postalCode: user?.address.postalCode ?? '',
    state: user?.address.state ?? '',
    phone: user?.phone ?? '',
  });

  const existingAccount = !!user?.email;

  const FORM_STEPS = [
    { title: 'Personal Information', component: PersonalInformationForm },
    { title: 'Additional Information', component: AdditionalDetailsForm },
    { title: 'Password', component: PasswordForm },
  ];

  // We don't want to show the password page for existing users
  const FORM_STEPS_EXISTING = [
    { title: 'Personal Information', component: PersonalInformationForm },
    { title: 'Additional Information', component: AdditionalDetailsForm },
  ];

  const { component: CurrentFormComponent, title } = existingAccount
    ? FORM_STEPS_EXISTING[step]
    : FORM_STEPS[step];

  const searchParams = useSearchParams();
  const loan = {
    type: searchParams?.get('type'),
    amount: searchParams?.get('amount'),
    length: searchParams?.get('length'),
    monthlyPayment: searchParams?.get('monthlyPayment'),
    startDate: searchParams?.get('startDate'),
  };

  if (formSubmitted) {
    // What the user will see after submitting the sign up form (OTP form)
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

  // Default state, displays sign up form with progress steps
  return (
    <LoginCard
      title="Complete your loan application"
      className="sm:mt-20"
      back={step !== 0 ? () => setStep(step - 1) : undefined}
      showTermsNotice
    >
      <ProgressSteps
        className="mb-10"
        totalSteps={
          existingAccount ? FORM_STEPS_EXISTING.length : FORM_STEPS.length
        }
        currentStep={step}
      />
      <h2 className="text-brand mb-10 text-center font-semibold">{title}</h2>
      <CurrentFormComponent
        formData={formData}
        loan={loan}
        setFormData={setFormData}
        setStep={setStep}
        setFormSubmitted={setFormSubmitted}
        existingAccount={existingAccount}
        updateSession={updateSession}
      />
    </LoginCard>
  );
}
