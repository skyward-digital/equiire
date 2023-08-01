import { signIn, signOut } from 'next-auth/react';

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
    // Throw error username/password incorrect
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
  confirmationCode: number;
}) => {
  const res = await fetch('/api/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Password not reset' };
};
