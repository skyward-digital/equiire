import { getServerSession } from 'next-auth';
import { authOptions, AuthSession } from '#/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, confirmationCode } = body;

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
  if (!confirmationCode) {
    return NextResponse.json({
      status: 400,
      json: { error: 'Confirmation code is required' },
    });
  }

  const res = await fetch(`${process.env.API_URL}/reset-password`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: email,
      password: password,
      confirmationCode: confirmationCode,
    }),
  });

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Reset Password failed: ' + data.message);
  }
}
