'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginCard } from '#/ui/components/LoginCard';
import { ResetPasswordForm } from '#/ui/components/ResetPasswordForm';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '#/ui/components/Button';

type FormSubmittedType = 'error' | 'success' | undefined;

export function ResetPassword() {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState<FormSubmittedType>();
  const [token, setToken] = useState('');

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const token = search.get('key');

    if (token) {
      setToken(token as string);
    } else {
      router.push('/forgot-password');
    }
  }, []);

  if (formSubmitted === 'success') {
    return (
      <LoginCard
        title="Password Reset"
        description="Your new password has now been set."
        back="/forgot-password"
      >
        <CheckCircleIcon className="mx-auto h-12 w-12 text-gray-400" />

        <div className="mt-3 text-center">
          <Button href="/login" className="mt-10">
            Return to Login
          </Button>
        </div>
      </LoginCard>
    );
  }

  if (formSubmitted === 'error') {
    return (
      <LoginCard
        title="Password Reset"
        description="Something went wrong. Please try again."
        back="/forgot-password"
      >
        <XCircleIcon className="mx-auto h-12 w-12 text-gray-400" />

        <div className="mt-3 text-center">
          <Button href="/forgot-password" className="mt-10">
            Try again
          </Button>
        </div>
      </LoginCard>
    );
  }

  return (
    <LoginCard
      title="Password Reset"
      description="Please enter your new password."
      className="mt-10 sm:mt-40"
      back="/forgot-password"
    >
      <ResetPasswordForm
        token={token}
        onSuccess={() => setFormSubmitted('success')}
        onError={() => setFormSubmitted('error')}
      />
    </LoginCard>
  );
}
