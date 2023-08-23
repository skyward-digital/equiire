import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { resetPassword } from '#/app/api/auth';

export function ResetPasswordForm({
  token,
  onSuccess,
  onError,
  className,
}: {
  token: string;
  onSuccess: () => void;
  onError: () => void;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async () => {
    const email = localStorage.getItem('email');

    if (!email || !token) {
      onError();
      return;
    }

    const res = await resetPassword({
      confirmationCode: token,
      email: email as string,
      password: getValues('password'),
    });

    if (res.success) {
      onSuccess();
    } else {
      onError();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(className, 'grid max-w-2xl gap-14')}
    >
      <Input
        id="password"
        type="password"
        label="New password"
        placeholder="Type in here"
        register={register}
        required="New password is required"
        error={errors.password}
        hint="Passwords must have at least 8 characters"
      />
      <Input
        id="confirm_password"
        type="password"
        label="Repeat new password"
        placeholder="Type in here"
        register={register}
        required="Repeat new password is required"
        error={errors.confirm_password}
        validate={(value: string) =>
          value === getValues('password') || 'Passwords do not match'
        }
      />
      <Button
        className="w-full max-w-sm justify-self-center"
        variant="primary"
        type="submit"
      >
        Send
      </Button>
    </form>
  );
}
