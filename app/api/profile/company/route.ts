import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { getServerSession } from '#/app/api/session';
import { User } from '#/app/api/profile/user';

export async function PATCH(request: Request) {
  const { accessToken } = await getServerSession();
  const { company } = await request.json();

  const res = await fetch(`${process.env.API_URL}/profile/company`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      company,
    }),
  });

  if (res.status === 401) redirect('/login');
  if (!res.ok) throw new Error("Failed to update user's company");

  const user = (await res.json()) as { data: User };

  return NextResponse.json({ data: user.data });
}
