import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  // input validation
  if (!email) {
    return NextResponse.json({
      status: 400,
      json: { error: 'Email is required' },
    });
  }

  const res = await fetch(`${process.env.API_URL}/forgot-password`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ username: email }),
  });

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Forgot Password failed: ' + data.message);
  }
}
