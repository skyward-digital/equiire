import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';

export async function getSession() {
  const session = (await getServerSession(authOptions)) as AuthSession;
  const { accessToken, refreshToken } = session.tokens;

  if (!accessToken) notFound();

  return { user: session.user, accessToken, refreshToken };
}
