import { notFound, redirect } from 'next/navigation';
import { getBaseUrl } from '#/lib/getBaseUrl';
import { getServerSession } from '#/app/api/session';
import type { PaymentMethodSession } from './paymentMethodSession';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function setStripePaymentPortal({
  returnUrl,
}: {
  returnUrl?: string;
}) {
  const { accessToken } = await getServerSession();

  const res = await fetch(`${process.env.API_URL}/payments/portal-session?`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      returnUrl: `${getBaseUrl()}${returnUrl}?payment-updated=1`,
    }),
  });

  if (res.status === 401) redirect('/login');
  //if (!res.ok) notFound();
  const paymentMethodSession = (await res.json()) as PaymentMethodSession;

  //if (paymentMethodSession.created === 0) notFound();

  return paymentMethodSession;
}
