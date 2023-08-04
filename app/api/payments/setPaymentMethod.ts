import { notFound, redirect } from 'next/navigation';
import { getBaseUrl } from '#/lib/getBaseUrl';
import { getSession } from '#/app/api/session/getSession';
import type { PaymentMethodSession } from './paymentMethodSession';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function setStripePaymentMethod({
  returnUrl,
}: {
  returnUrl?: string;
}) {
  const { accessToken } = await getSession();

  const res = await fetch(
    `${process.env.API_URL}/payments/payment-method-session?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        returnUrl: `${getBaseUrl()}${returnUrl}?payment-updated=1`,
      }),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const paymentMethodSession = (await res.json()) as PaymentMethodSession;

  if (paymentMethodSession.created === 0) notFound();

  return paymentMethodSession;
}
