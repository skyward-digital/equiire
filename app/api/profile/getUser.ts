import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import type { User } from './user';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getUser() {
  const { accessToken } = await getServerSession();

  if (!accessToken) notFound();

  const res = await fetch(`${process.env.API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const user = (await res.json()) as User;

  if (!user) notFound();

  return user;
}
