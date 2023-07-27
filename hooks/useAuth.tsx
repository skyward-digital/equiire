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
