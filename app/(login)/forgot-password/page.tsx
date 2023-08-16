'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginCard } from '#/ui/components/LoginCard';
import { ForgotPasswordForm } from '#/ui/components/ForgotPasswordForm';
import { OtpForm } from '#/ui/components/OtpForm';

export default function Page() {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Submitted state - displays validation screen with code which can have its own error state - success takes users to reset password form but this could also be skipped by a link in the email
  if (formSubmitted) {
    return (
      <LoginCard
        title="Password Reset"
        description="We have sent you an email. You can enter the code from the email below to reset your password."
        className="sm:mt-40"
        back={() => setFormSubmitted(false)}
      >
        <OtpForm
          onSuccess={(otp) => router.push(`/reset-password?key=${otp}`)}
        />
      </LoginCard>
    );
  }

  // Default state, displays form with email input
  return (
    <LoginCard
      title="Password Reset"
      description="To reset your password, please enter the email address associated with your account. We will send you an email with a link to reset your password."
      back="/login"
    >
      <ForgotPasswordForm onSuccess={() => setFormSubmitted(true)} />
    </LoginCard>
  );
}
