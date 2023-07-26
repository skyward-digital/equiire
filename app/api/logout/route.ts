import { getServerSession } from 'next-auth';
import { authOptions } from '#/lib/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return new Error('No Session');

  const res = await fetch(
    `${process.env.API_URL}/logout?refresh_token=${session.user.refreshToken}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Logout failed: ' + data.message);
  }
}
