import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import type { Loan } from './loans';

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
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken } = session.tokens;

  if (!accessToken) notFound();

  const res = await fetch(
    `${process.env.API_URL}/loans/${
      id ? `/${id}` : '_'
    }?access_token=${accessToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loan = (await res.json()) as { data: Loan };

  if (!loan) notFound();

  return loan.data;
}
