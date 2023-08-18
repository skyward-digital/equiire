import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import type { Loans } from './loans';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getLoans() {
  const { accessToken } = await getServerSession();

  if (!accessToken) notFound();

  const res = await fetch(`${process.env.API_URL}/loans`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loans = (await res.json()) as Loans;

  //if (loans?.docs.length === 0) notFound();

  return loans;
}
