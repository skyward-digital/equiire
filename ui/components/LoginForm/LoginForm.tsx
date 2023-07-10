'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button, ButtonLink } from '#/ui/components/Button';

export function LoginForm({ className }: { className?: string }) {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`grid gap-8 ${className}`}
    >
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="youremail@example.com"
        register={register}
        required="Email is required"
        pattern={{
          value: /^\S+@\S+$/i,
          message: 'Invalid email address',
        }}
        error={errors.email}
        className="w-full"
      />
      <div className="relative">
        <Link
          className="font-sm dark:text-brand-primary hover:text-brand-primary hover:dark:text-brand-secondary absolute right-0 top-[3px] text-sm font-semibold text-gray-600 no-underline"
          href="/forgot-password"
        >
          Forgot Password?
        </Link>
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Your password"
          register={register}
          required="Password is required"
          error={errors.password}
          hint="Password must have at least 8 characters"
        />
      </div>
      <div className="mt-10 flex w-full flex-col gap-5">
        <Button style="primary" type="submit" arrow>
          Log In
        </Button>
        <ButtonLink href="/sign-up" style="link">
          Sign Up
        </ButtonLink>
      </div>
    </form>
  );
}
