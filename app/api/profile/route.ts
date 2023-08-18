import { getServerSession } from '#/app/api/session';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { accessToken } = await getServerSession();

  if (!accessToken) return new Error('No access token provided');

  const res = await fetch(`${process.env.API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  if (res.status !== 200) {
    return new Error('Fetching profile failed');
  }

  const data = await res.json();

  return NextResponse.json({ data });
}
