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
    console.log('Missing username or password')
  }
};

export const logout = async () => {
  const res = await fetch('/api/logout', {
    method: 'POST',
  });

  console.log(res);

  if (res.ok) {
    await signOut({ callbackUrl: '/login' });
  }
};
