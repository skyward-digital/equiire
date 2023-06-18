'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Input';

export function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Typically, you would send a request to your server here
    // to initiate the password reset process.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="test@test.com"
        register={register}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
      />

      <div className="flex w-full items-center justify-between">
        <button
          className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
          type="submit"
        >
          Reset Password
        </button>
        <Link href="/login">Back to login</Link>
      </div>
    </form>
  );
}
