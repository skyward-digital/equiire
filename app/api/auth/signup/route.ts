import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name } = body;

  // input validation
  if (!email) {
    return NextResponse.json(
      {
        error: 'Email is required',
      },
      { status: 400 },
    );
  }
  if (!password) {
    return NextResponse.json(
      {
        error: 'Password is required',
      },
      { status: 400 },
    );
  }
  if (!name) {
    return NextResponse.json(
      {
        error: 'Name is required',
      },
      { status: 400 },
    );
  }

  const res = await fetch(`${process.env.API_URL}/signup`, {
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
    return NextResponse.json(
      {
        error: data?.message || 'Something went wrong',
      },
      { status: res.status },
    );
  }
}
