import { notFound, redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function getSignedLoanDoc({ loanId }: { loanId: string }) {
  const { accessToken } = await getServerSession();

  const res = await fetch(
    `${process.env.API_URL}/loans/${loanId}/download-signed-document`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) {
    // Handles in case loan document isn't signed yet
    try {
      const response = await res.json();

      if (response.status == 'fail') {
        return { success: false, message: response.message };
      }
    } catch (e) {
      // Handles other errors
      console.log(e);
      notFound();
    }
  }
  return { success: true };
}
