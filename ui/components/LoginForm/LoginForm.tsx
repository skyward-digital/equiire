'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Input } from '#/ui/components/Form/Input';
import { Button } from '#/ui/components/Button';
import { login } from '#/hooks/useAuth';
import { useState } from 'react';

export function LoginForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState('');

  const onSubmit = async (data: any) => {
    setError('');
    const { error } = await login(data);
    if (error) {
      setError(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(className, 'grid max-w-2xl gap-8')}
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
          className="font-sm dark:text-brand hover:text-brand hover:dark:text-brand-secondary focus:outline-brand-100 absolute right-0 top-[3px] text-sm font-semibold text-gray-600 no-underline"
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
        {error && <p className="text-error -mt-8 text-sm">{error}</p>}
        <Button variant="primary" type="submit" arrow>
          Log In
        </Button>
        <Button href="/sign-up" variant="link">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
