import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';

export function ForgotPasswordForm({
  setFormSubmitted,
  className,
}: {
  setFormSubmitted: (value: boolean) => void;
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

  const onSubmit = (data: any) => {
    console.log(data);
    setFormSubmitted(true);
    // Typically, you would send a request to your server here
    // to initiate the password reset process.
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
