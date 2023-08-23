import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { authOptions, AuthSession } from '#/lib/auth';
import type { Loan } from './loan';

export async function getLoan({ id }: { id: string }) {
  const { accessToken } = await getServerSession();

  if (!accessToken) notFound();

  const res = await fetch(`${process.env.API_URL}/loans/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loan = (await res.json()) as { data: Loan };

  if (!loan) notFound();

  return loan.data;
}
