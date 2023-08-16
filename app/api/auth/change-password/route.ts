import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';

export async function POST(request: Request) {
  const { accessToken } = await getServerSession();
  const { currentPassword, newPassword } = await request.json();

  const res = await fetch(
    `${process.env.API_URL}/change-password?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        previousPassword: currentPassword,
        proposedPassword: newPassword,
      }),
    },
  );

  console.log({ res });

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error("Failed to update user's password");

  const json = await res.json();

  return NextResponse.json({ data: json });
}
