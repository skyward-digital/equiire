import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import type { PaymentMethods } from './paymentMethods';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getStripePaymentMethods() {
  const { accessToken } = await getServerSession();

  const res = await fetch(
    `${process.env.API_URL}/payments/payment-methods?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  const paymentMethods = (await res.json()) as PaymentMethods;

  return paymentMethods;
}
