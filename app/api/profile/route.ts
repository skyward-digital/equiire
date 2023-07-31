import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const access_token = searchParams.get('access_token');

  if (!access_token) return new Error('No access token provided');

  const res = await fetch(
    `${process.env.API_URL}/profile?access_token=${access_token}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
  );

  if (res.status !== 200) {
    return new Error('Fetching profile failed');
  }

  const data = await res.json();

  return NextResponse.json({ data });
}
