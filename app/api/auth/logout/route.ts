import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  const session = (await getServerSession(authOptions)) as AuthSession;
  if (!session?.user) return new Error('No Session');

  const { accessToken, refreshToken } = session.tokens;

  const res = await fetch(
    `${process.env.API_URL}/logout?access_token=${accessToken}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    },
  );

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Logout failed: ' + data.message);
  }
}
