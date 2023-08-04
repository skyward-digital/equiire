import { notFound, redirect } from 'next/navigation';
import { getSession } from '#/app/api/session/getSession';
import type { Loan } from './loans';

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
  const { accessToken } = await getSession();

  const res = await fetch(
    `${process.env.API_URL}/loans/${loanId}/update-payment-method?access_token=${accessToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod: paymentMethodId,
      }),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const loan = (await res.json()) as Loan;

  console.log(loan);

  return loan;
}
