import { Loan } from '#/app/(login)/sign-up/page';
import { signIn, signOut } from 'next-auth/react';

export const signup = async (data: {
  email: string;
  password: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  company: string;
  name: string;
  postalCode: string;
  state: string;
  loan: Loan;
}) => {
  const res = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (res.ok) {
    console.log(res);
  } else {
    // Throw error if sign up fails
  }
};

export const login = async (data: { email: string; password: string }) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (res.ok) {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/overview',
    });
  } else {
    console.log('Missing username or password');
  }
};

export const logout = async () => {
  await fetch('/api/logout', {
    method: 'POST',
  });

  await signOut({ callbackUrl: '/login' });
};

export const forgotPassword = async (data: { email: string }) => {
  const res = await fetch('/api/forgot-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Email not found' };
};

export const resetPassword = async (data: {
  email: string;
  password: string;
  confirmationCode: string;
}) => {
  const res = await fetch('/api/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Password not reset' };
};
