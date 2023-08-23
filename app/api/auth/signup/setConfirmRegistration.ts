// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function setConfirmRegistration({
  email,
  verification,
}: {
  email: string;
  verification: string;
}) {
  const res = await fetch(`${process.env.API_URL}/confirm-registration`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      verification,
    }),
  });

  // We can add proper error handling later
  if (!res.ok) throw new Error('Failed to confirm email');

  const response = await res.json();

  return response;
}
