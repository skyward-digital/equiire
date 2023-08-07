import { notFound, redirect } from 'next/navigation';
import { getSession } from '#/app/api/session/getSession';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getSignedLoanDoc({ loanId }: { loanId: string }) {
  const { accessToken } = await getSession();

  const res = await fetch(
    `${process.env.API_URL}/loans/${loanId}/download-signed-document?access_token=${accessToken}`,
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) notFound();

  return { success: true };
}
