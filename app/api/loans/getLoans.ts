import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import type { Loans, Loan } from './loans';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getLoans() {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) throw new Error('Something went wrong!');

  const res = await fetch(
    `${process.env.API_URL}/loans?access_token=${accessToken}`,
  );

  if (res.status !== 200) throw new Error('Something went wrong!');

  const loans = (await res.json()) as Loans;

  if (loans?.docs.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return loans;
}

export async function getLoan({ id }: { id: string }) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) throw new Error('Something went wrong!');

  const res = await fetch(
    `${process.env.API_URL}/loans/${
      id ? `/${id}` : '_'
    }?access_token=${accessToken}`,
  );

  if (!res.ok) throw new Error('Something went wrong!');

  const loan = (await res.json()) as Loan;

  if (!loan) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return loan.data;
}
