import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import type { Loans, Loan, LoanTransactions } from './loans';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
// import 'server-only';

export async function getLoans() {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/loans?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loans = (await res.json()) as Loans;

  if (loans?.docs.length === 0) notFound();

  return loans;
}

export async function getLoan({ id }: { id: string }) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/loans/${
      id ? `/${id}` : '_'
    }?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loan = (await res.json()) as { data: Loan };

  if (!loan) notFound();

  return loan.data;
}

export async function getLoanTransactions({ id }: { id: string }) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/loans/${
      id ? `/${id}` : '_'
    }/future-payments?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const transactions = (await res.json()) as LoanTransactions;

  if (!transactions) notFound();

  return transactions.data;
}

export async function getLoanDoc({ id }: { id: string }) {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/loans/${
      id ? `/${id}` : '_'
    }/download-signed-document?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loanDoc = await res.json();

  if (!loanDoc) notFound();

  return loanDoc.data;
}
