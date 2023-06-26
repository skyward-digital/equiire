'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your server
    // to create a new user account.
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

      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="New Password"
        register={register}
        required="Password is required"
        error={errors.password}
      />

      <div>
        <button
          className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 no-underline hover:bg-gray-500 hover:text-white"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
