import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import type { Loan } from './loan';

type UpdateLoanProps = {
  id: string;
  data: {
    amount: number;
    length: number;
    monthlyPayment: number;
    startDate: string;
  };
};

export async function updateLoan({ id, data }: UpdateLoanProps) {
  const { accessToken } = await getServerSession();

  if (!accessToken) notFound();

  const res = await fetch(`${process.env.API_URL}/loans/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loan = (await res.json()) as { data: Loan };

  if (!loan) notFound();

  return loan.data;
}
