import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session/';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function setSignRequest(id: string) {
  const { accessToken } = await getServerSession();

  const res = await fetch(
    `${process.env.API_URL}/loans/${id}/create-sign-request?access_token=${accessToken}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error('Failed to create sign request');

  const response = await res.json();

  return response.data.data.signatureDocumentUrl;
}
