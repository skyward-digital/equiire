'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Input';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your server
    // using an async function and handle the response.
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
        className="w-full"
      />

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="New Password"
        register={register}
        required="Password is required"
        error={errors.password}
      />

      <div className="flex w-full justify-between">
        <button
          className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
          type="submit"
        >
          Login
        </button>
        <Link href="forgot-password">Forgot password</Link>
      </div>
    </form>
  );
}
