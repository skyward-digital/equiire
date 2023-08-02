import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import type { User } from './user';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getUser() {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/profile?access_token=${accessToken}`,
  );

  if (!res.ok) notFound();

  const user = (await res.json()) as User;

  if (!user) notFound();

  return user;
}
