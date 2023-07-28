import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  // input validation
  if (!email) {
    return NextResponse.json({
      status: 400,
      json: { error: 'Email is required' },
    });
  }
  if (!password) {
    return NextResponse.json({
      status: 400,
      json: { error: 'Password is required' },
    });
  }

  const res = await fetch(`${process.env.API_URL}/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Login failed: ' + data.message);
  }
}
