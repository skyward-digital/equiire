import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { forgotPassword } from '#/app/api/auth';

export function ForgotPasswordForm({
  onSuccess,
  className,
}: {
  onSuccess: () => void;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Handles disabling the submit button until the email field is completed
  const emailValue = watch('email');
  const emailCompleted = Boolean(emailValue);

  const onSubmit = async (data: any) => {
    localStorage.setItem('email', data.email);
    const confirmEmailSent = await forgotPassword(data);

    if (confirmEmailSent.success) {
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(className, 'grid max-w-2xl gap-10')}
    >
      <Input
        id="email"
        type="email"
        label="Your email"
        placeholder="youremail@example.com"
        register={register}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
      />
      <Button
        className="w-full max-w-sm justify-self-center"
        variant="primary"
        type="submit"
        disabled={!emailCompleted}
      >
        Send
      </Button>
    </form>
  );
}
