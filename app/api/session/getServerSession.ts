import { notFound } from 'next/navigation';
import { getServerSession as nextAuthGetServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';

export async function getServerSession() {
  const session = (await nextAuthGetServerSession(authOptions)) as AuthSession;
  const { accessToken, refreshToken } = session.tokens;

  if (!accessToken) notFound();

  return { user: session.user, accessToken, refreshToken };
}
