import { signIn } from 'next-auth/react';

export const login = async (data: { email: string; password: string }) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (res.ok) {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/overview',
    });
    return { error: null };
  } else {
    const response = await res.json();
    return { error: response.error };
  }
};
