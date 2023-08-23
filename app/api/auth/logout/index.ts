import { signOut } from 'next-auth/react';

export const logout = async () => {
  await fetch('/api/auth/logout', {
    method: 'POST',
  });

  await signOut({ callbackUrl: '/login' });
};
