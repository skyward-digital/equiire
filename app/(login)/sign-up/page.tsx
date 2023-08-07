'use client';
import { SignupForm } from '#/ui/components/SignupForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginCard } from '#/ui/components/LoginCard';
import { OtpForm } from '#/ui/components/OtpForm';

export interface Loan {
  type: 'CREDIT_BUILDER' | 'STANDARD';
  amount: string;
  length: string;
  monthlyPayment: string;
  interestType: 'FIXED' | 'VARIABLE';
  apr: string;
  totalRepayable: string;
  creditCost: string;
  startDate: string;
  firstPayment: string;
  endDate: string;
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
}

export default function Page({ searchParams }: { searchParams: Loan }) {
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
    <SignupForm
      step={step}
      setStep={setStep}
      formData={formData}
      loan={searchParams}
      setFormData={setFormData}
      setFormSubmitted={setFormSubmitted}
    />
  );
}
