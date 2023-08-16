import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { User } from '#/app/api/profile/user';

export async function PATCH(request: Request) {
  const { accessToken } = await getServerSession();
  const { name } = await request.json();

  const res = await fetch(
    `${process.env.API_URL}/profile/name?access_token=${accessToken}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    },
  );

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error("Failed to update user's name");

  const user = (await res.json()) as { data: User };

  return NextResponse.json({ data: user.data });
}
