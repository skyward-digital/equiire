'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyIcon } from '@heroicons/react/24/outline';
import { Input } from '#/ui/components/Form';
import { SettingsCard } from '#/ui/components/SettingsCard';

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState('idle');

  const password: string = watch('password');
  const confirmPassword: string = watch('confirmPassword');

  const onSubmit = async (data: any) => {
    // local api as we need to update on the client
    const res = await fetch('/api/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({
        currentPassword: data.currentPassword,
        newPassword: data.confirmPassword,
      }),
    });

    if (res.status !== 200) {
      setStatus('error');
    } else {
      setExpanded(false);
    }
  };

  return (
    <SettingsCard
      title="Password"
      detail="******"
      placeholder="******"
      Icon={KeyIcon}
      onSubmit={handleSubmit(onSubmit)}
      errors={
        errors.password || errors.confirmPassword || errors.currentPassword
      }
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="New Password"
        register={register}
        required="Password is required"
        error={errors.password}
      />

      <Input
        id="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="New Password"
        register={register}
        required="Password confirmation is required"
        validate={(value: string) =>
          value === password || 'The passwords do not match'
        }
        error={errors.confirmPassword}
      />

      {password && password === confirmPassword ? (
        <Input
          id="currentPassword"
          type="password"
          label="Current Password"
          placeholder="Confirm your identity"
          register={register}
          required="You need to enter your current password to update your password"
          error={errors.currentPassword}
        />
      ) : null}

      {status === 'error' ? (
        <p className="mt-0 text-sm text-red-500">
          There was an error updating your password. Please ensure you have
          entered your old password correctly and try again.
        </p>
      ) : null}
    </SettingsCard>
  );
};
