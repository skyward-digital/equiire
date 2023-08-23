// import { getServerSession } from '#/app/api/session';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // We can't rely on getServerSession here as this is used during the auth flow which means the serverSession might not be set yet
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const accessToken = searchParams.get('access_token');

  if (!accessToken) return new Error('No access token provided');

  const res = await fetch(`${process.env.API_URL}/profile`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'GET',
  });

  if (res.status !== 200) {
    return new Error('Fetching profile failed');
  }

  const data = await res.json();

  return NextResponse.json({ data });
}
