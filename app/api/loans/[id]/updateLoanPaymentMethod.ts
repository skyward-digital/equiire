import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session/';
import type { Loan } from './loan';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function updateLoanPaymentMethod({
  loanId,
  paymentMethodId,
}: {
  loanId: string;
  paymentMethodId: string;
}) {
  const { accessToken } = await getServerSession();

  const res = await fetch(
    `${process.env.API_URL}/loans/${loanId}/update-payment-method`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod: paymentMethodId,
      }),
    },
  );
  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to update payment method');

  const loan = (await res.json()) as { data: Loan };

  return loan.data;
}
