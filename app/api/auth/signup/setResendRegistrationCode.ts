// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export async function setResendRegistrationCode({
  resendEmail,
}: {
  resendEmail: string;
}) {
  const res = await fetch(`${process.env.API_URL}/resend-registration-code`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email: resendEmail,
    }),
  });

  // We can add proper error handling later
  if (!res.ok) throw new Error('Failed to resend email');

  const response = await res.json();

  return response;
}
