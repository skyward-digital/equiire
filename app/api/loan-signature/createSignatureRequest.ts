import { notFound, redirect } from 'next/navigation';

export async function createSignatureRequest(id: string) {
  const res = await fetch(`/api/loan-signature`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ id }),
  });
  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  return res;
}
