'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { ForgotPasswordForm } from '#/ui/components/ForgotPasswordForm';
import { ResetPasswordForm } from '#/ui/components/ResetPasswordForm';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { BackButton } from '#/ui/components/BackButton';

const DESCRIPTION_TEXTS = {
  initial:
    'To reset your password, please enter the email address associated with your account. We will send you an email with a link to reset your password.',
  submitted:
    'We have sent you an email. Please follow the instructions to reset your password.',
  submitted_token: 'Your new password has now been set.',
};

export function ForgotPasswordCard({
  className,
  token,
}: {
  className?: string;
  token?: boolean;
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const descriptionText =
    formSubmitted && token
      ? DESCRIPTION_TEXTS.submitted_token
      : formSubmitted && !token
      ? DESCRIPTION_TEXTS.submitted
      : DESCRIPTION_TEXTS.initial;

  const Form = token ? ResetPasswordForm : ForgotPasswordForm;

  return (
    <section
      className={clsx(
        className,
        'mx-auto max-w-2xl rounded-lg bg-white px-7 pb-16 pt-10 shadow-sm dark:border dark:border-gray-600 dark:bg-black sm:pl-14 sm:pr-24',
      )}
    >
      <div className="flex flex-col items-start sm:flex-row sm:gap-3">
        <BackButton back="/login" />
        <div className="mx-auto">
          <h1 className="text-brand-secondary font-brand my-6 text-center text-3xl font-bold dark:text-gray-300">
            Password Reset
          </h1>
          <p
            className={clsx(
              'mb-8 text-base text-gray-600 dark:text-gray-300',
              formSubmitted && 'text-center',
            )}
          >
            {descriptionText}
          </p>
          {!formSubmitted ? (
            <Form className="mt-14" setFormSubmitted={setFormSubmitted} />
          ) : (
            <CheckCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
          )}
        </div>
      </div>
    </section>
  );
}
